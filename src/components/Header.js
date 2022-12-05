import { useSelector } from "react-redux";
import { Container, Tab, TabContainer, Tabs } from "react-bootstrap";
import Contacts from "./Contacts";
import { useState } from "react";
import Chat from "./Chat";
import ChatList from "../components/ChatList";

const Header = () => {
    const id = useSelector(state => state.user.id)
    const [key, setKey] = useState("Contacts");
    const [chatPage, setChatpage] = useState(false);
    const [chatPerson, setChatPerson] = useState(null);
    return (
        <Container>
            Id : {id}
            {(chatPage) ?
                <div>
                    <Chat person={chatPerson} />
                </div>
                :
                <TabContainer>
                    <Tabs
                        id="tabs"
                        defaultActiveKey={"Contacts"}
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        justify
                    >
                        <Tab eventKey="Chat" title="Chat">
                            <ChatList />
                        </Tab>
                        <Tab eventKey="Contacts" title="Contacts">
                            <Contacts openChat={setChatpage} chatPerson={setChatPerson} />
                        </Tab>
                        <Tab eventKey="Call" title="Call">
                        </Tab>
                    </Tabs>
                </TabContainer>
            }
        </Container>
    )
}

export default Header