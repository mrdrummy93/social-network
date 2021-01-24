const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


let initialState = {
    dialogs: [
        {id: "1", name: "Sasha"},
        {id: "2", name: "Petya"},
        {id: "3", name: "Katya"}
    ],
    messages: [
        {id: "1", message: "KOKOKOKOKOKO"},
        {id: "2", message: "loh"},
        {id: "3", message: "pipipipip"}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
            ...state,
            newMessageBody: action.body
        }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: "4", message: body}]
            }
        default:
            return state;
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;