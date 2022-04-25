import React from 'react'
import { updateNewPostTextCreator } from '../../../Redux/PostPageReducer'
import Title from '../../MainPage/Title/Title'
import Text from '../../Text/Text'
import ButtonContainer from '../Button/ButtonContainer'
import Post from '../Post/Post'


const MainBlog = (props) => {
    let postElements = props.mainPage.postStruc.map(p => <Post className='mane__post' author={p.author} message={p.message} key = {p.id} />)
    let onNewPostChange = (e) =>{
        let body = e.target.value
        props.updateNewPostText(body)
    }
    return (
        <div>
            <div className="container">

                <Title name='Наш персональный блог' />
                <Text className='blog__text' textBody= {props.mainPage.textBody}/>
                <div className="to__post"><a href="#butt" className="to__post__link">Создать пост</a></div>
                {postElements}
                <textarea value={props.mainPage.newPostTextBody} onChange={onNewPostChange} className='textarea' name="post" placeholder={props.placeholder}></textarea>
                <a name='butt'></a>
                <ButtonContainer button__name='Добавить пост' state={props.state} store = {props.store}/>
            </div>

        </div>
    )
}

export default MainBlog