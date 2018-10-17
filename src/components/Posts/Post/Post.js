import React from 'react'

const Post = (props)=>{
    return(
        <div className="card mx-auto">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                    {props.body}
                </p>
                <button className="card-link btn btn-outline-danger" onClick={props.delete}>Delete</button>
                
            </div>
        </div>
    )
}

export default Post;