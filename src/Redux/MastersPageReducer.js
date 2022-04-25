const SET_MASTERS = 'SET-MASTERS'
let initialState = {
    masters: [
        {id:1, name: 'Alexandr', profilePhotoURL: 'https://sun9-48.userapi.com/s/v1/ig2/yIEWunFOZmsBDyrCwB3Ep0x_pdlsjBp4WGhJq44Fp4Y5uP-LXbEqZHzpKdHD-TLhON4-mn4WMCshfmsO4kGR041U.jpg?size=902x1080&quality=96&type=album', location: {city: 'Санкт-Петербург', station: 'Московская'}},
        {id:2, name: 'Grigory', profilePhotoURL: 'https://sun9-34.userapi.com/s/v1/if2/61a_fyoremPUHdO7SNk_gnEH5Xv5o__-U5YL2ktmrVEsk7H38XZLNux8k2PsAM03NDudgBzvoVqypZxdCpO0qcgq.jpg?size=1080x1243&quality=96&type=album', location: {city: 'Санкт-Петербург', station: 'Невский проспект'}},
        {id:3, name: 'Vitalya', profilePhotoURL: 'https://sun9-70.userapi.com/s/v1/if2/Z_QvTAA-Xj-K6CvB03-bL0N3_JSBmmIg9MpMbCpBWoE6iVA1Gd6p-OENcZp8YfVv_5WMm5KCzMsuuiQzJQxNvkxI.jpg?size=720x960&quality=96&type=album', location: {city: 'Санкт-Петербург', station: 'Парк Победы'}},
        {id:4, name: 'Danil', profilePhotoURL: 'https://sun9-62.userapi.com/s/v1/if1/pBt74N4ZrKZNNXA_xAfyQQbjBaG2XdBGqHBLqOMIuMsmCoTkkoUuSIFF4HHYGMp2jESdRbo1.jpg?size=530x1080&quality=96&type=album', location: {city: 'Санкт-Петербург', station: 'Технологический институт'}}
    ],
}
const mastersPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MASTERS:
            return {...state, masters: [...state.masters, action.masters]}
        default: return state
    }   
    
}

export const setMastersAC = (masters) => ({type: SET_MASTERS, masters})
export default mastersPageReducer