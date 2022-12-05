import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../util/Constants"
import axios from "axios";
import { Notify } from "../util/Notify"
const initialState = {
    id: null,
    contacts: [],
    chatData: [
    ]
}
const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: ({
        setUserData: (state, action) => {
            state.id = action.payload.id
            state.contacts = action.payload.contacts
        },
        setContacts: (state, action) => {
            state.contacts = [...action.payload]
        },
        setChatData: (state, action) => {
            state.chatData = [...action.payload]
        }
    })
})

export const authUser = (id, password) => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`)
        const status = response.status || undefined
        const data = await response.data || undefined
        if (status === 200) {
            if (password === data.password) {
                localStorage.setItem("userStatus", true)
                localStorage.setItem("userId", data.id)
                dispatch(setUserData(data))
                return data.id
            }
            return "Id or Password Wrong"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteContact = (person) => async (dispatch, getState) => {
    try {
        const currState = getState();
        const currId = currState.user.id;
        const prevContacts = currState.user.contacts;
        let newContacts = prevContacts.filter((itm) => itm.name !== person)
        newContacts = { contacts: [...newContacts] }
        await axios.patch(`${BASE_URL}/${currId}/`, newContacts);
        dispatch(setContacts(newContacts.contacts))
    } catch (error) {
        return error.message
    }
}

export const updateContact = () => async (dispatch) => {
    try {

    } catch (error) {

    }
}

export const saveHistory = (chatDetail) => async (dispatch, getState) => {
    try {
        const currState = getState();
        const currId = currState.user.id;
        const newChat = { chatHistory: [...chatDetail] }
        await axios.patch(`${BASE_URL}/${currId}/`, newChat);
        dispatch(setChatData(newChat.chatHistory))
    } catch (error) {
        return error.message
    }
}

export const { setUserData, setContacts, setChatData } = UserSlice.actions
export default UserSlice.reducer