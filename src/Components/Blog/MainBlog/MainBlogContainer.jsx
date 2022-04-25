import React from 'react'
import { connect } from 'react-redux'
import { updateNewPostText } from '../../../Redux/PostPageReducer'
import MainBlog from './MainBlog'




let mapStateToProps = (state) => {
    return {
        mainPage: {
            postStruc: state.postPageReducer.postStruc,
            newPostTextBody: state.postPageReducer.newPostTextBody,
            textBody: 'Здесь Вы можете узнать последние новости, поделиться своим мнением',
            placeholder: 'Оставить Ваш отзыв в Блоге'
        }
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: updateNewPostTextCreator
//     }
// }

const MainBlogContainer = connect(mapStateToProps, {updateNewPostText})(MainBlog);

export default MainBlogContainer