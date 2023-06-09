import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextAPI/AuthProvider";

const data = [
    {
        label: "Wallet",
        value: "wallet"
    },
    {
        label: "Package",
        value: "package"
    },
];

const AddCard = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [tab, setTab] = useState("Wallet")
    const navigate = useNavigate()
    const onSubmit = (data) => {

        data["storeId"] = "6462723333057f3bb6fea4aa"
        data["storeName"] = "Robi Shop"
        data["parentSlug"] = data?.parent
        data["childrenSlug"] = data?.children
        data["titleSlug"] = data?.title
        data["features"] = [data.features]
        data["type"] = tab

        // console.log(data);


        fetch(`http://localhost:5000/api/product/add`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                navigate("/store/products")
            })

    }
    return (
        <Card color="transparent" shadow={false} className="mx-auto w-[600px]">
            <Typography variant="h4" color="blue-gray">
                Create Card
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Robi Shop
            </Typography>


            <Tabs value="html">
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} onClick={() => setTab(value)} >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
            </Tabs>
            <form onSubmit={handleSubmit(onSubmit)}
                className="w-full mt-6" >
                <div className="mb-4 flex flex-col gap-6">
                    <Input {...register("title", { required: true })}
                        className="w-full" name="title" label="title" />

                    <Input {...register("image", { required: true })}
                        className="w-full" name="image" label="image" />

                    <Input {...register("price", { required: true })}
                        className="w-full" name="price" label="price" />

                    {
                        tab === "Wallet" && <Input {...register("discount", { required: true })}
                            className="w-full" name="discount" label="discount" />
                    }

                    <Input {...register("features", { required: true })}
                        className="w-full" name="features" label="features" />

                    <Input {...register("parent", { required: true })}
                        className="w-full" name="parent" label="parent" />

                    <Input {...register("children", { required: true })}
                        className="w-full" name="children" label="children" />

                    <Input {...register("description", { required: true })}
                        className="w-full" name="description" label="description" />

                </div>


                <Button className="mt-6" type="submit" fullWidth>
                    Submit
                </Button>

            </form>
        </Card>
    );
}
export default AddCard;