import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

function Search(){
    const [posts, setPosts]= useState([]);
    
function load(){
    axios.get(`/api/posts`)
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
}
    useEffect(()=>{
        axios.get(`/api/posts`)
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
        load()
    }, []);




    const mappedPosts = posts.map(post => (<div className="vehicles"><div className="vehicle">
    {posts.length>0? 
    <div className="area">
        {post.type}
        <div className="imgcont"><img src={post.img_url}></img></div>
        <span>Make: {post.make}<br></br>
        Model: {post.model}</span>
        <span>Year: {post.year}<br></br>
        Price: {post.price}</span>
        <p>Description: {post.description}</p>
        <Link to="/Chat">Contact Owner</Link>
    </div>
    : null}
</div>
</div>))
    return(
        <div className="box">
            <header><span>RENTALZ</span><div><Link className="link" to="/">Logout</Link></div></header>
            <div>{mappedPosts}</div>
        </div>
    )
}
export default Search;