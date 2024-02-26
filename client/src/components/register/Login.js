import React, { useState,useContext } from 'react'
import { TextField, Box, styled, FormControl, FilledInput, InputLabel, InputAdornment, IconButton, Button, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { DataContext } from "../../context/DataProvider";
import Cookies from 'js-cookie'
import { authenticateLogin } from '../../service/api';

const Container = styled(Box)`
  display: flex;
  width : 400px;
  justify-content: center;
  align-items : center;
  flex-direction : column;
  gap : 1rem;
  grid-area : right;
  margin-left : 30px;
  margin-top : 50px;
`

const SignUpButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#9667E0",
  width: 300,
  height: 45,
  ":hover": {
    backgroundColor: "secondary"
  }
})

const SignInText = styled(Typography)({
  color: "secondary",
  fontSize: 14,
  " > span": {
    cursor: "pointer",
    textDecorationLine: "underline",
  },
  " > span:hover": {
    color: "#040404",
  }
})

const PasswordInput = styled(FormControl)({
  width: 300
})

const StyledTextField = styled(TextField)({
  width: 300
});

function Login({ toggle, handleClose }) {

  const [showPassword, setShowPassword] = useState(false);
  const { setToken, setEmail } = useContext(DataContext);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const onSignUpClick = () => {
    toggle();
  }
  const handleInputChange = (e )=> {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData)
  }

  const loginClick = async(e) => {
    e.preventDefault();
    let res = await authenticateLogin(loginData);
    console.log(res)
    const email = loginData.email;
    const auth_token = res.data.auth_token
    if (res.status === 200) {
      const userData = {
        email,
        auth_token
      };
      Cookies.set('auth_token', JSON.stringify(userData), { expires: 1 });
      setEmail(email);
      setToken(auth_token)
    }
    // console.log
      handleClose();
    }

    return (
      <Container>
        <StyledTextField color='secondary' variant='filled' type='email' label='Username' name="username" onChange={(e) => handleInputChange(e)}
          value={loginData.username} />
        <PasswordInput color='secondary' variant='filled' >
          <InputLabel>Password</InputLabel>
          <FilledInput 
          name="password" onChange={(e) => handleInputChange(e)}
          value={loginData.password}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </PasswordInput>
        {/* <Typography variant='caption'>Forget Password?</Typography> */}
        <SignUpButton onClick={(e) => loginClick(e)} color='secondary' variant="contained">Login</SignUpButton>
        <SignInText>New Here? <span onClick={onSignUpClick}>Create a new account</span></SignInText>
      </Container>
    )
  }

  export default Login