import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicSelect from './BasicSelect';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// import {Link} from 'react-router-dom';
// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const theme = createTheme();

export default function SignIn() {

    const navigate = useNavigate();

    // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    function store() {

        var email = document.getElementById('email');
        var password = document.getElementById('password');
        var Select = document.getElementById('Select');
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if (email.value.length == 0) {
            alert('Please fill in email');

        } else if (password.value.length == 0) {
            alert('Please fill in password');

        } else if (email.value.length == 0 && password.value.length == 0) {
            alert('Please fill in email and password');

        } else if (password.value.length > 8) {
            alert('Max of 8');

        } else if (!password.value.match(numbers)) {
            alert('please add 1 number');

        } else if (!password.value.match(upperCaseLetters)) {
            alert('please add 1 uppercase letter');

        } else if (!password.value.match(lowerCaseLetters)) {
            alert('please add 1 lovercase letter');

        } else {
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
            localStorage.setItem('Select', Select.value);
            alert('Your account has been created');
            navigate("/blog1");
        }
        // setauthenticated(true)
        // localStorage.setItem("authenticated", true);

    }

    //checking
    // function check() {
    //     var storedName = localStorage.getItem('email');
    //     var storedPassword = localStorage.getItem('password');

    //     var userName = document.getElementById('userName');
    //     var userPassword = document.getElementById('userPassword');
    //     var userRemember = document.getElementById("forgot");

    //     if (userName.value == storedName && userPassword.value == storedPassword) {
    //         alert('You are logged in.');
    //     } else {
    //         alert('Error on login');
    //     }

    // }
    // const schema = yup.object({
    //     name: yup.string().required("Please enter name"),
    //     email: yup.string().email("Please enter valid email").required("Please enter email"),
    //     website: yup.string().url("Please enter valid url").required("Please enter url"),
    //     language: yup.number().nullable().required("Please select language"),
    //   });


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={store} noValidate sx={{ mt: 1 }}>
                        <TextField
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className='TextField1 mbs1'
                            placeholder='Email/Username '
                            margin="normal"
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            type="email"
                            required
                        />
                        <TextField
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            className='TextField1 mbs1'
                            margin="normal"
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            required
                        />
                        {/* <BasicSelect /> */}
                        {/* <Select
                            className='select-input'
                            placeholder="Select Language"
                            isClearable
                            options={languageList}
                            value={langValue ? languageList.find(x => x.value === langValue) : langValue}
                            onChange={option => langOnChange(option ? option.value : option)}
                            {...restLangField}
                        />
                        {errors.language && <p>{errors.language.message}</p>} */}

                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                className='TextField1 mbs3'
                                // placeholder="Select Product"
                                id='Select'
                                value={age}
                                onChange={handleChange}
                                // onChange={onOptionChangeHandler}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>Select Product</em>
                                </MenuItem>
                                <MenuItem value={10}>Interior</MenuItem>
                                <MenuItem value={20}>Exterior</MenuItem>
                                <MenuItem value={30}>Commercial</MenuItem>

                            </Select>
                        </FormControl>
                        <Grid container className='text-right'>
                            <Grid item xs >
                                <Link href="#" variant="body2" className='text-white fs1' id='forgotpassword'>
                                    <span>Forgot password?</span>
                                </Link>
                            </Grid>
                        </Grid>
                        {/* <Link to="/blog"> */}
                        <Button
                            id='btnSign'
                            type="submit"
                            fullWidth
                            className='btnSignin btn mbb1'
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            <span>Sign In</span>
                        </Button>
                        {/* </Link> */}
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </ThemeProvider >
    );
}