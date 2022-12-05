import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdSend } from "react-icons/md";
import moment from 'moment';
import { saveHistory } from '../services/UserSlice';

const Chat = ({ person }) => {
    const dispatch = useDispatch();
    const chatData = useSelector(state => state.user.chatData) || "Start Typing"
    const [msg, setMsg] = useState(null);
    const [chatHistory, setChatHistory] = useState(chatData);

    useEffect(() => {
        if (chatHistory !== null) {
            const elem = document.querySelector("#chatHistory")
            elem.scrollTop = elem.scrollHeight
            dispatch(saveHistory(chatHistory));
        }
    }, [chatHistory, dispatch])

    const sendMessage = () => {
        if (msg && msg.trim() !== "") {
            let txtMsg = { message: msg.trim(), from: "ashish@gmail.com", to: person, time: moment().format("MMM DD YYYY hh:mm:ss") }
            setChatHistory([...chatHistory, { ...txtMsg }])
            setMsg("")
        }
    }
    return (
        <div>
            <section>
                <span>{person}</span>
            </section>
            <section className='shadow' id="chatHistory" style={{ height: "600px", overflow: "auto" }}>
                {
                    chatHistory?.map((msg) => {
                        console.log(msg)
                        return (
                            <div className='text-end m-1 p-1'>
                                <text className='' >{msg.message}</text>
                                <p>
                                    <small className='text-muted font'>
                                        {msg.time}
                                    </small>
                                </p>
                            </div>
                        )
                    })
                }
            </section>
            <section className='d-flex align-items-center'>
                <textarea className='w-100'
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                />
                <MdSend className='m-3' size={30}
                    color="blue"
                    onClick={() => { sendMessage() }} />
            </section>
        </div>
    )
}

export default Chat
