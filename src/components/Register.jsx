import { TextField , Button, Container } from '@mui/material'
import { useRef } from 'react'
import { useState } from 'react';
import { networkoperations } from './services/api-client.js';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
export const Register = () =>{
    const [Message,setMessage] = useState('');
    const emailref = useRef(null);
    const nameref = useRef(null);
    const pwdref = useRef(null);
    const phoneref = useRef(null);
    const doregister = async () =>{
      
        const userinfo = {
            
            'email' : emailref.current.value,
            'name' : nameref.current.value,
            'phone' : phoneref.current.value,
            'password' : pwdref.current.value,
        }
        try{
        const response = await networkoperations.post(process.env.REACT_APP_CODE_REGISTER,userinfo);
        console.log('response',response);
        setMessage(response.data.message)
        console.log("userinfo",userinfo);
        }
        catch(err)
        {
            console.log('error occured',err);
        }
    }

   return (
   
       <Container>
        <p>{Message}</p>
        <h1 className="Heading"> <LibraryMusicIcon fontSize="Large"/>MUSIC STORE</h1>
        <center>
        <TextField inputRef={emailref} id="outlined-basic" label="Email" variant="outlined" />
        <br/>
        <TextField inputRef={nameref} id="outlined-basic" label="name" variant="outlined" />
        <br/>
        <TextField inputRef={pwdref} id="outlined-basic" type ='password' label="password" variant="outlined" />
        <br/>
        <TextField inputRef={phoneref} id="outlined-basic" label="phone" variant="outlined" />
        <br/>
        <Button onClick ={doregister} variant="contained">register</Button>
        <br/>
        </center>
       </Container>
      
   )
}