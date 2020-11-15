let initialState = {
    friends: [
        {id: "1", name: "Sasha"},
        {id: "2", name: "Petya"},
        {id: "3", name: "Katya"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;