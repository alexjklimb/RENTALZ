import React, {Component} from "react";
import io from "socket.io-client";
import ScrollToBottom from 'react-scroll-to-bottom';
import {Link} from 'react-router-dom';

class Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: '',
            messages: []
        };

        this.socket = io('localhost:3000');
        

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = (data) => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = (ev) => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    render(){
        return (
            <div>
            <div className="container">
            <header><span>RENTALZ</span><div><Link className="link" to="/">Logout</Link></div></header>
                                <div className="messagecont">
                                <ScrollToBottom className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div> {message.message}</div>
                                        )
                                    })}
                                </ScrollToBottom>
                                
                            
                            <div className="footer">
                                <br/>
                                <input  value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <button onClick={this.sendMessage}>Send</button>
                                </div>
            </div></div>
            </div>
        );
    }
}

export default Chat;