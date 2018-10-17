import React from 'react';

const Main  = (props)=>{
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )   
}

export default Main; 