import React, {Component} from 'react';
import './NewPost.css';

class NewPost extends Component{
    state = {
        title: '',
        content: '',
        author: 'Max'
    }
    render(){
        return(
            <div className="NewPost">
                <h1> Add a  Post</h1>
                <lable>Title</lable>
                <input type="text" value={this.state.title} onChange={(event)=> this.setState
                    ({title: this.target.value})} />
                <label>Content</label>
                <input type="text" value={this.state.content} onChange={(event) => this.setState
                    ({conetent: this.target.value})} />

                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState(
                    {author: this.target.value})}>
                        <option value="Max" >Max</option>
                        <option value="Manu" >Manu</option>
                    </select>
                    <button>Add Post</button>
            </div>

        );
    }

}
export default NewPost;