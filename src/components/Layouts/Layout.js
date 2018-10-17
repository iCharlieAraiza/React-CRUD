import React, {Component} from 'react';
import Form from '../Forms/Form'
import Main from '../../hoc/Main'
import Posts from '../Posts/Posts'

class Layout extends Component{
    
    //El estado del componente
    state = {
        posts:[
            {id:1, title: "Titulo del artículo", body:"Lorem Ipsul read larte dwet willer roep tyoi sadf berronga"},
            {id:4, title: "Titulo articlo 2", body:"Poyel retyks ckc Ipsul read larte dwet willer roep tyoi sadf berronga"},
            ]
    }

    //Eliminar
    delete(index){
        const posts = [...this.state.posts];

        posts.splice(index, 1);

        this.setState({
            posts:posts
        });

    }

    //Elementos que se van a renderizar
    render(){

        const statePosts = [...this.state.posts]

        const posts = statePosts.map((post, index)=>{
            return (<Posts  title={post.title} 
                            body={post.body} 
                            delete={this.delete.bind(this, index)}
                            key={post.id}></Posts>)
        });

        return (
            <Main>
                <Form></Form>
                {posts}
            </Main>
        )
    }
}

export default Layout;