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
            ],
        
        current: {title:'', body:''}    
    }

    //Valores del formulario

    currentPost(event){
        const current = {...this.state.current};
        
        if(event.target.name === "title"){
            current.title = event.target.value;
        }else{
            current.body = event.target.value;
        }

        this.setState({current:current});
    }
    
    //Update 
    submit(e){
        e.preventDefault()

        const state = {...this.state};

        if(state.current.title !== '' && state.current.body!==''){

            const post = {id:this.generateId(),title:state.current.title, body:state.current.body}         
            state.posts.push(post);

            this.setState({posts:state.posts});
            this.cleanInput();
        }
        
    }
    


    //Eliminar
    delete(index){
        const posts = [...this.state.posts];

        posts.splice(index, 1);

        this.setState({
            posts:posts
        });

    }


    cleanInput(){
        const current={id:0, title: '', body: ''}
        this.setState({current:current})
    }

    generateId(){
        const posts = [...this.state.posts];
        return posts[posts.length-1].id + 1;
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
                <Form change={this.currentPost.bind(this)} 
                      submit={this.submit.bind(this)}
                      title={this.state.current.title}
                      body={this.state.current.body}></Form>
                {posts}
                {console.log(this.state)}
            </Main>
        )
    }
}

export default Layout