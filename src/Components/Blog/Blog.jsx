import React from 'react'
import MainBlog from './MainBlog/MainBlog'
import MainBlogContainer from './MainBlog/MainBlogContainer'



const Blog = (props) => {
    
    return (
        <div>
            <main className="page2">
                <div class="main_block">
                    
                    <MainBlogContainer store = {props.store}  />
                </div>
            </main>
        </div>
    )
}

// post = {props.post}
export default Blog