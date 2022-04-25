import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../../Redux/PostPageReducer'
import '../MainBlog/MainBlog'
import Button from './Button'




let mapStateToProps = (state) => {
    return {button__name: 'Добавить пост', text: state.postPageReducer.newPostTextBody}
}

// let mapDispatchToProps = (dispatch) => {
//     return{
//     sendPost: () => dispatch(addPostCreator())
    
// }
// }

const ButtonContainer = connect(mapStateToProps, {addPost})(Button)

export default ButtonContainer