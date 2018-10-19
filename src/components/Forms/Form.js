import React from 'react';
import Aux from '../../hoc/Container'

const Form = (props)=>{

    const style ={
        textarea: {height:'250px'}
    }

    return (
        <Aux>
            <form className="col-12">
                <div className="form-group col-md-6 mx-auto">
                    <input type="text" name="title" placeholder="Name" className="form-control" onChange={props.change} value={props.title}></input>
                </div>
                <div className="form-group col-md-6 mx-auto">
                    <textarea type="text" name="body" placeholder="Text" className="form-control" style={style.textarea} onChange={props.change} value={props.body}></textarea>
                </div>
                <div className="form-group col-md-6 mx-auto">
                    <button className="btn btn-primary col-12" onClick={props.submit}>Update</button>
                </div>
            </form>
        </Aux>
        
    )
}

export default Form;