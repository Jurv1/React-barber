let initialState = {
    times: [
        { id: 1, time: "9:00", free: false},
        { id: 2, time: "9:45", free: false },
        { id: 3, time: "10:00", free: true },
        { id: 4, time: "10:45", free: false },
        { id: 5, time: "11:00", free: true },
        { id: 6, time: "11:45", free: false },
        { id: 7, time: "12:00", free: true },
        { id: 8, time: "12:45", free: false },
        { id: 9, time: "13:00", free: true },
        { id: 10, time: "13:45", free: false },
    ],
    name: "Записаться",
}
const onlinePageReducer = (state = initialState, action) => {

    return state
}

export default onlinePageReducer