import React, {Component} from 'react';
import Form from '../Forms/Form'
import Main from '../../hoc/Main'
import Posts from '../Posts/Posts'

class Layout extends Component{
    
    //El estado del componente

    //Elementos que se van a renderizar
    render(){
        return (
            <Main>
                <Form></Form>
                <Posts></Posts>
            </Main>
        )
    }
}

export default Layout;