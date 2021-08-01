import React, {Component} from 'react';
import './login.css';
import axios from 'axios';

class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost/omobio/api/read_single.php?id=1')
        .then(response =>{
            this.setState({
                posts: response.data
            })
            console.log(response.data);
        })
    }
    
    render(){
        const {posts} = this.state
        return (
          <div>{posts.name}</div>
        )
    }
}

export default Search
