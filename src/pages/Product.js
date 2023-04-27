import React from 'react'
import ButtonAppBar from '../components/ButtonAppBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import Rectangle from '../assets/images/Rectangle 21.png'
import Rectangle1 from '../assets/images/Rectangle 22.png'
import Rectangle2 from '../assets/images/Rectangle 23.png'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from '../components/Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Catagries from './Catagries';
import Header from '../components/Header';
import MediaCard from '../components/MediaCard';
import square from "../assets/images/RectangleCard33.png";
import DrawerAppBar from '../components/DrawerAppBar';

const theme = createTheme();
export default function Product() {
    return (
        <>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <main>
                    <Box
                        sx={{
                            // bgcolor: 'background.paper',
                            pt: 30,
                            pb: 4,
                        }}
                    >
                        <Container maxWidth="lg" >
                            {/* <DemoCarousel /> */}
                            {/* <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Album layout
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                Something short and leading about the collection below—its contents,
                                the creator, etc. Make it short and sweet, but not too short so folks
                                don&apos;t simply skip over it entirely.
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button variant="contained">Main call to action</Button>
                                <Button variant="outlined">Secondary action</Button>
                            </Stack> */}
                        </Container>
                    </Box>

                </main>
                {/* <Footer /> */}
            </ThemeProvider>
        </>
    )
}
