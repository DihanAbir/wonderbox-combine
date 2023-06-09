const User = require("./UserModel");
const bcrypt = require('bcryptjs');
const { signInToken } = require("../../config/auth");
const Notification = require("../notification/NotificationModel");
const { saveHistory } = require("../../commons/services/saveHistory");

const registerUser = async (req, res) => {
    const {
        name,
        email,
        password,
        country,
        phone,
        role,
    } = req.body;

    try {
        const isAdded = await User.findOne({ email: email });
        if (isAdded) {
            return res.status(200).json({
                status: "error",
                message: { emailMessage: "Email Already in Use" },
                data: req.body.email
            });
        }
        else {
            const newUser = new User({
                name,
                email,
                country,
                phone,
                role,
                password: bcrypt.hashSync(password),
            });
            newUser.save()
                .then(async savedUser => {
                    const title = `New User Create - User name: ${name}`
                    const message = 'Congratulations! You have successfully created a new Account.'
                    await saveHistory(savedUser._id, title, message, "user", savedUser?._id)
                    const newNotification = new Notification({
                        activityId: savedUser._id,
                        title: "New Account Create Successfull!",
                        type: "new_user",
                        to: savedUser?._id
                    })
                    await newNotification.save()
                    const token = signInToken({ name, email, password: bcrypt.hashSync(password) });
                    res.send({
                        success: true,
                        token: token,
                        _id: newUser._id,
                        name: newUser.name,
                        email: newUser.email,
                        message: "Please Login Now!",
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        status: "error",
                        message: err.message
                    });
                });
        }

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "Data couldn't insert z",
            error: error.message,
        });
    }
};




// user login with email and Password
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send({
                status: "error",
                error: error.message,
            });
        }
        else {
            const findUser = await User.findOne({ email: email })
            console.log(findUser);
            if (!findUser) {
                return res.send({
                    status: "error",
                    message: { emailMessage: "There is no account on this email" }
                });
            }
            else {
                if (findUser?.verified === 'false') {
                    return res.send({
                        status: "error",
                        message: { emailMessage: "Email Not Verified" }
                    });
                }
                else {
                    console.log("verify trou");
                    if (bcrypt.compareSync(password, findUser.password)) {
                        const token = signInToken(findUser);
                        res.send({
                            token,
                            success: true,
                            _id: findUser._id,
                            name: findUser.name,
                            email: findUser.email,
                            address: findUser.address,
                            phone: findUser.phone,
                            image: findUser.image,
                        });
                    }
                    else {
                        return res.send({
                            status: "error",
                            message: { passwordMessage: "password is not correct" }
                        });
                    }

                }
            }

        }

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "Data couldn't insert",
            error: error.message,
        });
    }
};


const signupWithSocial = async (req, res) => {
    try {
        const findEmail = await User.findOne({ email: req.body.email })

        if (findEmail && findEmail?.createWith === "google") {
            const token = signInToken(findEmail);
            res.status(200).json({
                token,
                success: true,
                message: "Data insert successfully",
            });
        }
        else {
            const newUser = new User({
                email: req.body.email,
                name: req.body.name && req.body.name,
                image: req.body.image && req.body.image,
                createWith: req.body.createWith,
                verified: req.body.verified
            })
            newUser.save()
                .then(async savedUser => {
                    const title = `New User Create - User name: ${savedUser?.name}`
                    const message = 'Congratulations! You have successfully created a new Account.'
                    await saveHistory(savedUser._id, title, message, "user", savedUser?._id)
                    const newNotify = new Notification({
                        activityId: savedUser._id,
                        title: "New Account Create Successfull!",
                        type: "new_user",
                        to: savedUser?._id
                    })
                    await newNotify.save()
                    const token = signInToken(savedUser);
                    res.status(200).json({
                        token,
                        success: true,
                        message: "Data insert successfully",
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        status: "error",
                        message: err.message
                    });
                });
        }

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            status: "error",
            message: "Data couldn't insert z",
            error: error.message,
        });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ _id: -1 });
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(req.params.id);
        if (user) {
            user.name = req.body.name;
            user.email = req.body.email;
            user.address = req.body.address;
            user.phone = req.body.phone;
            user.image = req.body.image;
            await user.save()
                .then(async savedUser => {
                    const title = `User Informations Update  - User id: ${id.slice(0, 8)}`
                    const message = 'Congratulations! You have successfully updated your Account.'
                    await saveHistory(id, title, message, "user", id)

                    const token = signInToken(savedUser);
                    res.send({
                        token,
                        _id: savedUser._id,
                        name: savedUser.name,
                        email: savedUser.email,
                        address: savedUser.address,
                        phone: savedUser.phone,
                        image: savedUser.image,
                    });
                })

        }
    } catch (err) {
        res.status(404).send({
            message: "Your email is not valid!",
        });
    }
};

// get user info by token verified => email
const getUserInfo = async (req, res) => {
    console.log(req.user);
    try {
        const user = await User.findOne({ email: req?.user?.email })
        console.log(user);
        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};


// patch user info by user id
const patchUserInfoById = async (req, res) => {
    try {
        const id = req.params.id;
        const patchData = req.body;
        const user = await User.findById({ _id: id });

        if (user) {
            await User.updateOne(
                { _id: id },
                { $set: patchData },
                { runValidators: true }
            )
                .then(async savedUser => {
                    const title = `User Informations Update  - User id: ${id?.slice(0, 8)}`
                    const message = 'Congratulations! You have successfully updated your Account.'
                    await saveHistory(id, title, message, "user", id)
                    res.status(200).json({
                        update: true,
                        status: "success",
                        message: "Update successfully"
                    });
                })

        }

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "upadate couldn't success",
            error: error.message,
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { adminId } = req.params
        const isAdmin = await User.findById({ _id: adminId })
        if (isAdmin?.role === 'admin') {
            await User.deleteOne({ _id: req.params.userId })
                .then(async savedUser => {
                    const title = `User Delete - User name: ${savedUser?.name}`
                    const message = 'Account Deleted Successfull!.'
                    await saveHistory(req.params.userId, title, message, "user", isAdmin?._id)
                    res.status(200).send({
                        message: "User Delete Successfully!",
                    });
                })

        }

    } catch (error) {
        res.status(500).send({
            message: err.message,
        });
    }

};


module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    patchUserInfoById,
    getUserInfo,
    signupWithSocial
}