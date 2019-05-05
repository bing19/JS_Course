import React, { Component } from 'react';
import Post from './Post';


class PostList extends Component{

    render() {
        return (
            <div className="post-list container">
                {this.props.posts.map(post => {
                    return <Post title={post.title} body={post.body} id={post.id} key={post.id}/>;
                })}
            </div>

        )
    }
}


export default PostList