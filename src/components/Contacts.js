import { useDispatch, useSelector } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md"
import { AiOutlineUserAdd } from "react-icons/ai"
import { deleteContact, updateContact } from "../services/UserSlice";
import { useEffect, useState } from "react";


const Contacts = ({ openChat, chatPerson }) => {
    const contacts = useSelector(state => state.user.contacts)
    const dispatch = useDispatch();



    const handleChatSelected = (person) => {
        openChat(true)
        chatPerson(person)
    }

    const editContact = (person) => {
        dispatch(updateContact(person))
    }

    const removeContact = (person) => {
        dispatch(deleteContact(person));
        // const newContacts = contacts.filter(itm => itm.name !== person)
        // setContacts(newContacts)
    }

    return (
        <section className="shadow">
            <section className="d-flex m-1 p-1 border-bottom">
                <div className="my-2 mx-3" >Total Contacts : {contacts.length || 0}</div>
                <button className="my-2 mx-3" >Add New <AiOutlineUserAdd /> </button>
            </section>
            <div className="m-2 px-3">
                {
                    contacts?.map((person, index) => {
                        return (
                            <div className="d-flex shadow cursor-pointer" key={index}>
                                <span className="w-25" >{index + 1}</span>
                                <span className="w-75" onClick={() => { handleChatSelected(person.name) }}>{person.name}</span>
                                <div className="w-25">
                                    <MdEdit className=""
                                        cursor={"pointer"} color="silver"
                                        onClick={() => { editContact(person.name) }}
                                    />

                                    <MdDelete className="mx-3"
                                        cursor={"pointer"} color="darkBlue"
                                        onClick={() => { removeContact(person.name) }}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default Contacts