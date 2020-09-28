import React, {Component} from 'react';
import axios from 'axios';


import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';


class Blog extends Component{
    state = {
        posts: [],
        selectedId: null,
        error: false
    }
    componentDidMount () {
        axios.get('/posts/')
        .then(response => {
            this.setState({posts: response.data.slice(0,4)});
            const updatedPosts = this.state.posts.map(post =>{
                    return {
                        ...post,
                        'author': 'Max'
                    }});
            this.setState({posts: updatedPosts});
            //console.log(response);
        })
        .catch(error => {
           // console.log(error)
            this.setState({error: true})
        });
    }
    postSelectHandler = (id) => {
        this.setState({selectedId: id});
    }

    render(){
        let posts = <p>Something went wrong</p>;
        if (!this.state.error){
            posts = this.state.posts.map(post =>{
                return <Post title={post.title}
                        key={post.id} 
                        author={post.author} 
                        clicked={() =>this.postSelectHandler(post.id)} />;
            });
        }

        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>

            </div>

        );
    }
}

export default Blog;