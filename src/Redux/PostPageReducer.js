const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let initialState = {
    postStruc: [
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames. Felis eget velit aliquet sagittis. Ultrices gravida dictum fusce ut placerat. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Adipiscing at in tellus integer. Et leo duis ut diam quam nulla porttitor. Eu tincidunt tortor aliquam nulla facilisi. Nisl nisi scelerisque eu ultrices vitae. Feugiat pretium nibh ipsum consequat nisl vel. Nullam eget felis eget nunc lobortis mattis aliquam. Auctor neque vitae tempus quam. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tincidunt lobortis feugiat vivamus at. Neque ornare aenean euismod elementum. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Hendrerit dolor magna eget est. In eu mi bibendum neque egestas congue quisque. Ultricies integer quis auctor elit sed vulputate mi sit amet. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Enim sed faucibus turpis in eu mi bibendum. Fringilla est ullamcorper eget nulla facilisi. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit.Vel quam elementum pulvinar etiam non. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Cras ornare arcu dui vivamus arcu felis bibendum. At urna condimentum mattis pellentesque. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Magna sit amet purus gravida. Quam quisque id diam vel quam. Gravida rutrum quisque non tellus orci ac. Gravida cum sociis natoque penatibus et magnis dis parturient. Neque gravida in fermentum et sollicitudin ac orci. Vel facilisis volutpat est velit egestas dui.', author: 'Иван' },
        { id: 2, message: 'Очень понравился Ваш салон, буду приходить только сюда', author: 'Василий' },
        { id: 3, message: 'Очень понравился Ваш салон, буду приходить только сюда', author: 'Кирилл' },
        { id: 4, message: 'Очень понравился Ваш салон, буду приходить только сюда', author: 'Александр' },
    ],
    newPostTextBody: 'Хороший салон',
}

const postPageReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = {
                ...state,
                newPostTextBody: action.body,
            }         
            return stateCopy
        }
        case (ADD_POST): {
            
            let body = state.newPostTextBody
            stateCopy = { 
                ...state, 
                postStruc: [...state.postStruc, { id: 5, message: body, author: 'Аноним' }],
                newPostTextBody: '', 
            }
            return stateCopy
        }

        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (body) => ({ type: UPDATE_NEW_POST_TEXT, body: body })
export default postPageReducer;