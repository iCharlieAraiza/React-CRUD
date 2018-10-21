import React, {Component} from 'react';
import Form from '../Forms/Form'
import Main from '../../hoc/Main'
import Posts from '../Posts/Posts'

class Layout extends Component{
    
    //Estado principal
    state = {
        posts:[
            {id:1, title: "Titulo del artículo", body:"Lorem Ipsul read larte dwet willer roep tyoi sadf berronga"},
            {id:4, title: "Titulo articlo 2", body:"Poyel retyks ckc Ipsul read larte dwet willer roep tyoi sadf berronga"},
            ],
        
        current: {id: null, title:'', body:''},
        edit: false    
    }


    //-------------
    //Controladores
    //-------------


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
    //@parametr: index
    edit(index){
        //hacer una copia del array
        const post = {...this.state.posts[index]};

        //se agrega en current
        const current = {id:post.id, title: post.title, body:post.body}

        this.setState({
            current:current,
            edit:true,
        })
    }
    
    //Update 
    submit(e){
        e.preventDefault()

        const state = {...this.state};

        if(state.current.title !== '' && state.current.body!==''){
            
            const id = (state.current.id)? state.current.id: this.generateId(),
                  post = {id: id, title:state.current.title, body:state.current.body};
            
            //Crear un nuevo artículo
            if(!state.edit){
                state.posts.push(post);
            }
            //Editar articulo
            else{
                const index = state.posts.findIndex((el)=>{
                    return el.id === state.current.id;
                });

                state.posts[index] = post;
            }

            this.setState({posts:state.posts, edit: false});
            this.cleanInput();
        }
        
    }
    


    //Eliminar
    delete(index){
        const posts = [...this.state.posts];

        if(this.state.current.id === posts[index].id){
            this.cleanInput();
        }

        posts.splice(index, 1);

        this.setState({
            posts:posts
        });
        
    }


    //---------------------
    //Funciones adicionales 
    //---------------------

    cleanInput(){
        const current={id:null, title: '', body: ''}
        this.setState({current:current})
    }

    generateId(){
        const posts = [...this.state.posts];
        if(posts.length ===0){
            return 0;
        }else{
            return (posts[posts.length-1].id)? posts[posts.length-1].id + 1 : 0;
        }
    }


    //Elementos que se van a renderizar
    render(){

        const statePosts = [...this.state.posts]

        const posts = statePosts.map((post, index)=>{
            return (<Posts  title={post.title} 
                            body={post.body} 
                            delete={this.delete.bind(this, index)}
                            key={post.id} edit={this.edit.bind(this, index)}></Posts>)
        });

        return (
            <Main>
                <Form change={this.currentPost.bind(this)} 
                      submit={this.submit.bind(this)}
                      title={this.state.current.title}
                      body={this.state.current.body}></Form>
                
                <div className='row col-12'>
                    {posts}
                </div>
                
                {console.log(this.state)}
            </Main>
        )
    }
}

export default Layout