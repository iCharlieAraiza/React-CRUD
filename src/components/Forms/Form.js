import React from 'react';
import Aux from '../../hoc/Aux'

const Form = (props)=>{

    const style ={
        textarea: {height:'250px'}
    }

    return (
        <Aux>
            <form className="col-12">
                <div className="form-group col-md-6 mx-auto">
                    <input type="text" placeholder="Nombre completo" className="form-control"></input>
                </div>
                <div className="form-group col-md-6 mx-auto">
                    <textarea type="text" placeholder="Nombre completo" className="form-control" style={style.textarea}></textarea>
                </div>
                <div className="form-group col-md-6 mx-auto">
                    <button className="btn btn-primary col-12">Update</button>
                </div>
            </form>
        </Aux>
        
    )
}

export default Form;