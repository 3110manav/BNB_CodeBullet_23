import React, { useState , useContext } from 'react'
import { TextField, Box, styled, FormControl, FilledInput, InputLabel, InputAdornment, IconButton, Button, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { authenticateSignup } from '../../service/api'
import { DataContext } from "../../context/DataProvider";
import Cookies from 'js-cookie'

const Container = styled(Box)`
  display: flex;
  width : 400px;
  justify-content: center;
  align-items : center;
  flex-direction : column;
  gap : 1rem;
  grid-area : right;
  margin-left : 30px;
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

function Signup({ toggle, handleClose }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setToken, setEmail } = useContext(DataContext);
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const onSignUpClick = () => {
    toggle()
  }
  const handleInputChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    console.log(signUpData)
  };

  const signupClick = async (e) => {
    e.preventDefault();
    const res = await authenticateSignup(signUpData);
    console.log(res);
    const email = signUpData.email;
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
    handleClose();
  }

  return (
    <Container>
      <StyledTextField color='secondary' variant='filled' label='Username' name="username" onChange={(e) => handleInputChange(e)}
        value={signUpData.username} />
      <StyledTextField color='secondary' variant='filled' type='email' label='Email Address' name='email' onChange={(e) => handleInputChange(e)}
        value={signUpData.email} />
      <PasswordInput color='secondary' variant='filled' name="password" onChange={(e) => handleInputChange(e)}
        value={signUpData.password}>
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
      <PasswordInput color='secondary' variant="filled">
        <InputLabel>Confirm Password</InputLabel>
        <FilledInput
          type={showConfirmPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowConfirmPassword}
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </PasswordInput>
      <SignUpButton onClick={(e) => signupClick(e)} color='secondary' variant="contained">Sign Up</SignUpButton>
      <SignInText>Already have an account? <span onClick={onSignUpClick}>Sign In</span></SignInText>
    </Container>
  )
}

export default Signup