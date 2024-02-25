import React, { useState } from "react";
import { styled, Box } from "@mui/material";
import dogGif from "../../assets/images/DogPaw.gif";

import Login from "./Login";
import Signup from "./Signup";
import { Dialog } from "@mui/material";

// const Container = styled(Box)`
//  height : 100vh;
//  width : 100vw;
//  display : flex;
//  justify-content: center;
//  align-items : center;
//  background-size : cover;
// `
const FormContainer = styled(Box)`
  height: 600px;
  width: 900px;
  display: grid;
  position: relative;
  background-color: #fbfaff;
  //   border-radius : 20px;
  -webkit-box-shadow: 8px 8px 20px -3px rgba(4, 4, 4, 1);
  -moz-box-shadow: 8px 8px 20px -3px rgba(4, 4, 4, 1);
  box-shadow: 8px 8px 20px -3px rgba(4, 4, 4, 1);
  grid-template-areas:
    "left right"
    "left right";
`;

const LeftContainer = styled(Box)`
  grid-area: left;
  overflow: hidden;
  //   border-radius : 0px 0px 0px 20px;
  //   margin-left : 30px;
`;
const Header = styled(Box)`
  grid-area: logo;
  height: 90px;
`;
const HeaderImage = styled("img")({
  marginLeft: "35%",
  height: 120,
  position: "absolute",
});

const LoginImage = styled("img")`
  display: block;
  // margin-left: auto;
  margin-right: auto;
  //   height : 400px;
  //   width : 300px;
  object-fit: cover;
`;

function Register({ open, setOpen, login }) {
  const [loginaccount, toggleAccount] = useState(login);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(true);
  };

  const toggle = () => {
    toggleAccount(!loginaccount);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        {/* <Container> */}
        <FormContainer >
          <LeftContainer className="bg-white">
            <LoginImage src={dogGif} alt="illustration" className="w-full m-5 mt-10 p-5" />
          </LeftContainer>
          <div style={{ height: 600, display: "flex" , background:"white"}}>
            {loginaccount ? (
              <Login toggle={toggle} handleClose={handleClose} />
            ) : (
              <Signup toggle={toggle} handleClose={handleClose} />
            )}
          </div>
        </FormContainer>
        {/* </Container> */}
      </Dialog>
    </div>
  );
}

export default Register;
