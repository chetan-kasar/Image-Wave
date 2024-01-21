import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AccessToken = (props) => {
    const[token, setToken] = useState("");
    const[msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleClick = ()=>{
        axios.post("http://localhost:5000/checkToken", {token}).then(
          response=>{
              if(response.data === 'Valid')
              {
                navigate('/generatePage');
                props.authUser();
              }
              else
              {
                setMsg("Please Enter Valid Token");
              }
          }
      ).catch((error)=>{
        console.log(error);
      })
    }

  return (
    <div>
        <div class="at-container">
            <p className='access-error'>{msg}</p>
            <h2>Enter Access Token</h2>
            <form id="tokenForm">
                <label for="accessToken">Access Token:</label>
                <input type="text" onChange={(e)=>{setToken(e.target.value)}} id="accessToken" name="accessToken" placeholder="Enter your access token" required/>

                <button type="button" onClick={handleClick}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AccessToken
