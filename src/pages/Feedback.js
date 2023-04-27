
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import { makeStyles } from "@material-ui/core/styles"
import { useNavigate } from 'react-router-dom';
import { validator } from "../components/Validator";
import useForm from "../components/useForm";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserForm from '../components/UserForm';
import Header from '../components/Header';
import SignIn from '../components/SignIn';
import Submit from '../components/Submit';

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

const theme = createTheme();
export default function Feedback() {
    const navigate = useNavigate();
    const navigateToContacts = () => {
        navigate('/home');
    };

    const initState = {
        name: "",
        email: "",
        password: "",
        aresa: "",
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
    console.log(errors);
    return (<>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                {/* <main className='main'>
                    <UserForm />
                </main> */}
                <Submit />
                {/* <UserForm/> */}
            </Container>
            <Footer />
        </ThemeProvider>

    </>)
}