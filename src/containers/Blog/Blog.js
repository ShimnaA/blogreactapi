import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import axios from 'axios';
import Posts from './Posts/Posts';
import './Blog.css';
import NewPost from './NewPost/NewPost';


class Blog extends Component{
    render(){
        return(
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;