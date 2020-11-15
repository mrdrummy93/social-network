import profileReducer from "./Profile-Reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: "1", name: "Sasha"},
                {id: "2", name: "Petya"},
                {id: "3", name: "Katya"}
            ],
            messages: [
                {id: "1", message: "KOKOKOKOKOKO"},
                {id: "2", message: "loh"},
                {id: "3", message: "pipipipip"}
            ],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                {id: 1, message: "HI, how are you?", likes: 15},
                {id: 2, message: "It's my first post!", likes: 20}
            ],
            newPostText: "samuraiJS"
        },
        sidebar: {
            friends: [
                {id: "1", name: "Sasha"},
                {id: "2", name: "Petya"},
                {id: "3", name: "Katya"}
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;