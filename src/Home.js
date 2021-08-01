import React, {useState} from 'react';
import './home.css';
import axios from 'axios';

function Home() {
    const[resstate, setRestate] = useState([]);

    const[state, setState] = useState({
     
        username: '',
        password: '',
       
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        }) 
     
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost/omobio/api/log.php',state)
        .then(response => {
           
            setRestate(
                response.data.message
            )
            console.log(resstate);
        })

        
      
       
       
    }

    return (
        <div className = "loxbox">

        <form className="dash-content__form" method="POST" onSubmit={handleSubmit}>
         
        <div className="dash-content__input">
            <lable className="dash-content__lable">User name: </lable>
            <input type ="text" class="form__input" name="username" value={state.username} onChange={handleChange} required />
        </div>

        <div className="dash-content__input">
            <lable className="dash-content__lable">Password:{resstate} </lable>
            <lable className="dash-content__lable">Password: </lable>
            <input type ="text" class="form__input" name="password" value={state.password} onChange={handleChange} required />
        </div>

        <div>
            <button type ='submit'>Submit</button>
        </div>
        

        </form>
            
        </div>
    )
}

export default Home
