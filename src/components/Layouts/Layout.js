import React, {Component} from 'react';
import Form from '../Forms/Form'
import Main from '../../hoc/Main'

class Layout extends Component{
    
    //El estado del componente

    //Elementos que se van a renderizar
    render(){
        return (
            <Main>
                <Form></Form>
            </Main>
        )
    }
}

export default Layout;