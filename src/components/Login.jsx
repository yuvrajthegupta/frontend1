import { useEffect, useRef, useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { networkoperations } from "./services/api-client";
import { SearchPage } from "../pages/SearchPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export const Login = () => {
  const [message, setMessage] = useState("");
  const emailref = useRef(null);
  const pwdref = useRef(null);
  const dologin = async () => {
    const userinfo = {
      email: emailref.current.value,
      password: pwdref.current.value,
    };
    try {
      const response = await networkoperations.post(process.env.REACT_APP_CODE_URL,
        userinfo
      );
      setMessage(response.data.message);
      console.log(response.data.message);
    } catch (err) {
      console.log("error ", err);
    }
  };

  return (
    <Container>
      <h1 className="Heading"> <LibraryMusicIcon fontSize="Large"/>MUSIC STORE</h1>
      <center id = "loginbtn">
      <TextField
        inputRef={emailref}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
    <br/>
      <TextField
        inputRef={pwdref}
        id="outlined-basic"
        type="password"
        label="password"
        variant="outlined"
      />
      
<br/>
      <Button id = "loginbtn" onClick={dologin} variant="contained">
        login
      </Button>
      <h1>{message}</h1>
      </center>
    </Container>
  );
};
