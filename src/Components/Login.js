import React, { useEffect } from 'react';
const axios = require('axios');

function Login() {
    const url = 'https://discord.com/api/v8/auth/login' 
    
    
    useEffect(() => {
        const payload = 
        {
            "login":"offworldsynth@gmail.com",
            "password":"testpw12345",
            "undelete":false,
            "captcha_key":null,
            "login_source":null,
            "gift_code_sku_id":null
        }
        axios({
            method: 'post',
            url: url,
            data: payload
        }).then(function (response){
            console.log(response.data)
        })
        
    }, [])
    return (
        <div style={{display:'flex', flexDirection:'column', backgroundColor:'red'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <label>DISCORD EMAIL</label>
                <input type='text'></input>
                <label>PASSWORD</label>
                <input type='password'></input>
            </div>
            <button type='submit' onClick={handleSubmit}>SIGN IN</button>
        </div>
        
    )
}
function handleSubmit(){

}
export default Login
