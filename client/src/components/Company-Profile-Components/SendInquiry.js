import React, { useContext, useEffect, useState } from 'react';
import bulb from '../../assets/icons/bulb.png'
import attach from '../../assets/icons/attach.png'
import message from '../../assets/icons/message.png'
import downArrow from '../../assets/icons/down-arrow.png'
import search from '../../assets/icons/search.png'
import close from '../../assets/icons/close.png'
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { useNavigate } from 'react-router-dom';

const questions = [
    "What is the best price you can offer?", "What is the shipping cost?", "What is the shipping cost?"
]

const SendInquiry = ({ product }) => {
    const { user } = useContext(AuthContext)
    const [showMessage, setShowMessage] = useState(false)
    const [store, setStore] = useState(null);

    const [requirements, setRequirements] = useState("")
    const [question1, setQuestion1] = useState("")
    const [question2, setQuestion2] = useState("")
    const [question3, setQuestion3] = useState("")

    const [attachmentFile, setAttachmentFile] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/api/store/${product?.storeId}`)
            .then(res => res.json())
            .then(data => setStore(data))
    }, [product?.storeId])

    const sendMessage = (chatId) => {
        const newMessage = {
            text: requirements,
            storeId: store?._id,
            chatId: chatId,
            senderId: user?._id,
            members: [user?._id, store?._id],
            productId: product?._id,
            questions: [question1, question2, question3].filter(Boolean),
            // attachment: attachmentFile
        }

        console.log(newMessage);

        fetch(`http://localhost:5000/api/storemessage`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    // navigate("/my-account/messages")
                }
            })
    }

    const handleSendInquiry = () => {
        const members = {
            senderId: user?._id,
            receiverId: store?._id
        }
        fetch(`http://localhost:5000/api/storechat`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(members)
        })
            .then(res => res.json())
            .then(data => {
                if (data?._id) {
                    sendMessage(data?._id)
                }
            })
    }

    return (
        <section id='send-inquiry' className='my-16 min-h-full relative'>
            <h1 className='text-black font-semibold text-xl text-left my-4'>Send Inquiry </h1>
            <div className='flex items-center gap-3 mt-4'>
                <p className='text-xl font-semibold text-black text-left'>To  :</p>
                <button className='flex items-center justify-center min-w-[32px] h-8 rounded-full bg-blue-600 object-cover text-white text-[18px]'>
                    {
                        store?.logo ? <img className="object-cover w-10 h-10 rounded-full"
                            src={store?.logo} alt="username" />
                            :
                            <span>{store?.name?.slice(0, 1)} </span>
                    }
                </button>
                <p className='md:text-xl font-semibold text-black text-left'>{store?.name}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <h1 className='text-xl font-semibold text-black text-left'>Detailed Requirements:</h1>
                <div className='w-5 h-5 rounded-full border p-1 flex justify-center items-center'><span className='text-black font-bold'>!</span></div>
            </div>

            <p className='text-gray-500 text-left my-4'>Enter product details such as color, size, materials etc. and other specification requirements to receive an accurate quote:</p>


            <textarea onChange={(e) => setRequirements(e.target.value)} className='border resize-none border-[#0029FF4D] focus:outline-primary rounded-md h-72 w-full p-6' name="message" placeholder='Please type in.......'></textarea>




            <div className='flex items-center gap-4 mt-4'>
                <img className='w-4' src={bulb} alt="" />
                <p className='text-gray-500 text-left'>Check out this question from other buyers. Click to insert the questions in the box above. </p>
            </div>


            <div className='flex flex-col justify-center md:justify-start md:flex-row md:items-center gap-5 mt-6'>

                <button onClick={() => setQuestion1(question1 ? "" : questions[0])}
                    className={`w-full md:w-96 h-12 flex justify-center items-center rounded-[50px]
                    ${question1 === questions[0] ? "bg-primary text-white" : "bg-gray-200 text-black"}`}>
                    <span className=''>What is the best price you can offer?</span>
                </button>
                <button onClick={() => setQuestion2(question2 ? "" : questions[1])}
                    className={`w-full md:w-96 h-12 flex justify-center items-center rounded-[50px]
                    ${question2 === questions[1] ? "bg-primary text-white" : "bg-gray-200 text-black"}`}>
                    <span className=''>What is the shipping cost?</span>
                </button>
                <button onClick={() => setQuestion3(question3 ? "" : questions[2])}
                    className={`w-full md:w-96 h-12 flex justify-center items-center rounded-[50px]
                    ${question3 === questions[2] ? "bg-primary text-white" : "bg-gray-200 text-black"}`}>
                    <span className=''>What is the shipping cost?</span>
                </button>
            </div>



            <div className='relative w-56 h-12 flex justify-center cursor-pointer items-center gap-3 border border-primary rounded-md mt-4'>
                <img className='w-5' src={attach} alt="" />
                <h1 className='text-primary'>Add Attachments</h1>
                <input onChange={(e) => setAttachmentFile(e.target.files[0])} className='opacity-0 absolute w-full h-full cursor-pointer' type="file" name="file" id="" />
            </div>

            <div className='flex items-center gap-3 mt-6'>
                <input type="checkbox" name="" id="" />
                <span className='text-sm text-left text-gray-500'>Recommend matching suppliers if this supplier  doesn’t contact me on message center within 24 hours.</span>
            </div>
            <button className='flex items-center gap-3 mt-6'>
                <input type="checkbox" name="" id="" />
                <span className='text-sm text-left text-gray-500'>I agree to share my <strong className='text-gray-900'>Business Card</strong> to the supplier</span>
            </button>

            <button onClick={() => handleSendInquiry()} className='w-56 h-12 bg-primary flex justify-center items-center rounded-md mx-auto my-14' type="submit">
                <span className='text-white text-md font-semibold'>Send inquiry now</span>
            </button>


            <div className='fixed bottom-0 right-0 w-full md:w-fit h-fit bg-white'>
                <div className={`flex justify-between items-center w-full md:w-96 h-16 bg-white shadow border border-gray-100 px-4 ${showMessage && 'shadow-xl shadow-b'}`}>
                    <div className='flex items-center gap-5'>
                        <img className='w-6' src={message} alt="" />
                        <h1 className='text-primary font-semibold text-xl'>Messenger</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            showMessage && <div>
                                <img className='w-6 cursor-pointer' src={search} alt="" />
                            </div>
                        }
                        <div>
                            {
                                showMessage ? <img onClick={() => setShowMessage(false)} className='w-4 cursor-pointer' src={close} alt="" />
                                    :
                                    <img onClick={() => setShowMessage(true)} className='w-4 cursor-pointer' src={downArrow} alt="" />
                            }
                        </div>
                    </div>
                </div>
                {
                    showMessage && <div className='h-[400px] w-full'>

                    </div>
                }
            </div>
        </section>
    );
};

export default SendInquiry;