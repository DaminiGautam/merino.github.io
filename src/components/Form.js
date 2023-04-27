import React from "react";
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { validator } from "./Validator";
import useForm from "./useForm";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import BtnAppBar from "./BtnAppBar";
import UserForm1 from "./UserForm1";
import HeaderNav from './HeaderNav';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import MediaCard from '../components/MediaCard';

import Footer from '../components/Footer';
import { Grid } from "@mui/material";
import AddressForm from "./AddressForm";
import Checkout from "./Checkout";
import SignIn from "./SignIn";







const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  papper: {
    padding: "20px",
    boxShadow: "none",
  },
  input: {
    background: "#FFFFFF",
    boxShadow: "0px 3px 10px rgb(58 58 58 / 25%)",
    borderRadius: "15px",
  },
}));

export default function Form(props) {

  const { showFooter } = props;

  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/home');
  };

  const initState = {
    email: "",
    password: "",
    phone: "",
  };

  const submit = () => {
    console.log(" Submited");
  };

  const { handleChange, handleSubmit, handleBlur, state, errors, countryCode } =
    useForm({
      initState,
      callback: submit,
      validator,
    });

  let isValidForm =
    Object.values(errors).filter((error) => typeof error !== "undefined")
      .length === 0;

  const { margin, papper, input } = useStyles();


  return (
    <>






      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <HeaderNav />
     
          <main className='w-100 bg'>
            <Checkout />
          </main>
        </Container>
        
      </ThemeProvider>






      {/* <div className="bg">
        <HeaderNav />
        <UserForm1 />
      </div> */}
    </>
  );
}
