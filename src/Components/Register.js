import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Register(props){
    const [type, setType] = useState(''),
    [imgUrl, setImgUrl] = useState(''),
    [make, setMake] = useState(''),
    [model, setModel] = useState(''),
    [year, setYear] = useState(''),
    [price, setPrice] = useState(''),
    [description, setDescription] = useState(''),
    [posts, setPosts]= useState([]),
    [num, setNum]= useState(0);

function logout(){
        axios.get('/auth/logout')
        .then(res => {
        }).catch(err => console.log(err))
    } 
 function   createPost() {
        axios.post(`/api/posts`, {type, imgUrl, make, model, year, price, description})
        .then(load())
        setType('')
        setImgUrl('')
        setMake("")
        setModel('')
        setYear('')
        setPrice('')
        setDescription('')
    }
    function load(){
        axios.get(`/api/post`)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err));
    }
    useEffect(()=>{
            axios.get(`/api/post`)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err));
            load()
        }, []);
console.log(posts)
function plus(){
    if(num<posts.length-1){
    setNum(num+1)
    load()}
}
function minus(){
    if(num>0){
    setNum(num-1)
    load()}
}
function deletePost(id){
    axios.delete(`api/posts/${id}`)
    .then(res => {
        load()
    })
}











    const post= posts[num];
    return(
        <div className="box">
            <header className="header"><span>RENTALZ</span><div><Link className="link" to="/" onClick={logout}>Logout <br></br>First Last</Link></div></header>
        <div className="formcont">
            <div className="forms"><span>My Vehicle</span>
            <div><span>Type (car,boat,etc..)<br></br><input value={type} onChange={e => setType(e.target.value) }></input></span><span>Image Url<br></br><input title="input" value={imgUrl} onChange={e => setImgUrl(e.target.value) }></input></span><span>Make<br></br><input value={make} onChange={e => setMake(e.target.value) }></input></span></div>
            <div><span>Model<br></br><input value={model} onChange={e => setModel(e.target.value) }></input></span><span>Year<br></br><input value={year} onChange={e => setYear(e.target.value) }></input></span><span>Price<br></br><input value={price} onChange={e => setPrice(e.target.value) }></input></span></div>
            <div><span>Description<br></br><textarea value={description} onChange={e => setDescription(e.target.value) }></textarea></span></div>
            <div className="spacer"><button onClick={createPost}>Register Vehicle</button></div>
            </div>
        </div>
        <div className="vehicles">
            <button onClick={minus}></button>
            <div className="vehicle">
                {posts.length>0? 
                <div className="area">
                    <h1>{post.type}</h1>
                    <div className="imgcont"><img src={post.img_url}></img></div>
                    <span>Make: {post.make}<br></br>
                     Model: {post.model}</span>
                    <span>Year: {post.year}<br></br>
                    Price: {post.price}</span>
                    <p>Description: {post.description}</p>
                    <button onClick={()=>deletePost(post.id)}>Delete</button>
                </div>
                : null}
            </div>
            <button onClick={plus}></button>
        </div>
        <Link className="chatlink" to="/Chat">Chat with Customers</Link>
        </div>
    )
}
export default Register;