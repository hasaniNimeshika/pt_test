import React, {Component} from 'react';
import './login.css';
import axios from 'axios';

class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost/omobio/api/read.php')
        .then(response =>{
            this.setState({
                posts: response.data
            })
        })
    }
    
    render(){
        const {posts} = this.state
        return (
          posts.map(post => <div>{post.name}</div>)
        )
    }
}
export default Login
