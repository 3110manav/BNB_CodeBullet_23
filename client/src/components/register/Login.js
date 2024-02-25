import React, { useState } from 'react'
import {TextField, Box, styled, FormControl, FilledInput, InputLabel, InputAdornment, IconButton, Button, Typography} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'

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
    textTransform : "none",
    backgroundColor : "#9667E0",
    width:300,
    height:45,
    ":hover" :{
      backgroundColor : "secondary"
    }
  })

const SignInText = styled(Typography)({
    color : "secondary",
    fontSize : 14,
    " > span" :{
      cursor : "pointer",
      textDecorationLine : "underline",
    },
    " > span:hover"  :{
      color : "#040404",
  }
  })
  
  const PasswordInput = styled(FormControl)({
    width:300
  })
  
  const StyledTextField = styled(TextField)({
    width : 300
  });

function Login({ toggle, handleClose }) {

    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const onSignUpClick = () => {
        toggle();
    }

    const loginClick = (e) => {
        e.preventDefault();
        handleClose();
    }

  return (
    <Container>
       <StyledTextField color='secondary' variant='filled' type='email' label='Username' />
        <PasswordInput color='secondary' variant='filled'>
            <InputLabel>Password</InputLabel>
            <FilledInput
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