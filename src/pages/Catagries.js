import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Footer from '../components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MediaCard3 from '../components/MediaCard3';
import img1 from '../assets/images/RectCard.png'
import img2 from '../assets/images/RectCard1.png'
import img3 from '../assets/images/RectCard2.png'
import { featuredPosts2 } from '../data/data'
import Box from '@mui/material/Box';
const theme = createTheme();
export default function Catagries() {
    return (
        <>


            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <Container maxWidth="lg">
                    <Header />
                    <main className='main'>
                        <Grid container spacing={4} >
                            {featuredPosts2.map((post) => (
                                <MediaCard3 key={post.title} post={post} />
                            ))}
                        </Grid>
                    </main>
                </Container> */}
                  <Header />
                <main>
                    <Box
                        sx={{
                            // bgcolor: 'background.paper',
                            pt: 24,
                            pb: 4,
                        }}
                    >
                        <Container maxWidth="lg" >
                            <Grid container spacing={4} >
                                {featuredPosts2.map((post) => (
                                    <MediaCard3 key={post.title} post={post} />
                                ))}
                            </Grid>
                        </Container>
                    </Box>

                </main>
                {/* <Footer /> */}
            </ThemeProvider>
        </>
    )
}
