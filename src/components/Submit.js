import * as React from 'react';
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
import { Link } from 'react-router-dom';
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

export default function Submit() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='mdbg'>
                <Container component="main" maxWidth="xs"
                // className='bgfeed'
                >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
                            <TextField
                                className='TextField1'
                                placeholder='Email/Username '
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                placeholder='Password'
                                className='TextField1'
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <BasicSelect />
                            <textarea
                                className="TextField1 describe w-100"
                                name="describe"
                                label="Write you feedback..."
                                variant="outlined"
                                fullWidth
                                component={TextField}
                                type="describe"
                                placeholder="Write you feedback... "
                            />
                            <Link to="/">
                                <Button
                                    type="submit"
                                    fullWidth
                                    className='btnSignin btn'
                                    variant="contained"
                                    sx={{ mt: 3, mb: 5 }}
                                >
                                    <span>Submit</span>
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                </Container>
            </div>

        </ThemeProvider>
    );
}