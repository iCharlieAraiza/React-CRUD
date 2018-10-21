import React from 'react';
import Post from './Post/Post';

const Posts = (props)=>{
    return(
        <div className="col-md-6 my-2 px-2">
            <Post {...props}></Post>
        </div>
    )
}
export default Posts; 