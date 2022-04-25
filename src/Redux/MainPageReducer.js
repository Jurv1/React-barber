let initialState = {
    texts: [
        { text: 'Стрижка' },
        { text: 'Бритьё' },
        { text: 'Стрижка детская' },
        { text: 'Стрижка под машинку' },
        { text: 'Стрижка собаки' },
        { text: 'Мытье головы' },
        { text: 'Мытье бороды' },
        { text: 'Стрижка рук' },
    ],
    amounts: [
        { amount: '2000' },
        { amount: '1500' },
        { amount: '1000' },
        { amount: '2000' },
        { amount: '1500' },
        { amount: '300' },
        { amount: '200' },
        { amount: '1000' },
    ],
    stations: [
        { station: 'Московская' },
        { station: 'Невский проспект' },
        { station: 'Парк Победы' },
        { station: 'Технологический институт' },
        { station: 'Ленинский проспект' },
    ],
    addresses: [
        { address: 'ЖК "Домашний"' },
        { address: 'ЖК "Уютный"' },
        { address: 'ЖК "Победный"' },
        { address: 'ЖК "Интститутский"' },
        { address: 'ЖК "Ленинский"' },
    ],
}
const mainPageReducer = (state = initialState, action) => {
    
    return state
}

export default mainPageReducer