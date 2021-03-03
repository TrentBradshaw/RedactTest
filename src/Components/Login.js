import React, { useState } from 'react';
const axios = require('axios');

function Login({handleSetToken, handleUserSignIn}) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    
    function handleSubmit(){
        setSubmitted(true);
        console.log(submitted)
        const url = 'https://discord.com/api/v8/auth/login';
        const payload = 
        {
            "login":login,
            "password":password,
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
            if (response.status === 200) {
                console.log('success')
                console.log(response.data.token);
                handleUserSignIn(true, response.data.token)
            }
            else {
                // throw error and go to catch block
                throw new Error("Error");
            }
        })
    }
    return (
        <div style={{display:'flex', flexDirection:'column', backgroundColor:'#36393f', marginTop:'10%',
         borderRadius: '3px', height:'500px',
         textAlign:'start',
         paddingLeft: '5%',
    paddingTop: '5%'
         }}>
            <div >
                <p className='bigText'>Almost ready to Redact</p>
                <p className='medText'>Please sign into discord</p>
                <div id='loginForm'style={{display:'flex', flexDirection:'column',marginTop: '35px'}}>
                    <label className='smlText'>DISCORD EMAIL</label>
                    <input className='loginInput' value = {login} type='text' onChange={(e) => setLogin(e.target.value)}></input>
                    <label className='smlText' >PASSWORD</label>
                    <input className='loginInput' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            </div>
            <button id='loginButton' type='submit' onClick={handleSubmit}>SIGN IN</button>
        </div>
        
    )
}

export default Login
