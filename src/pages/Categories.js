import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import MediaCard9 from '../components/MediaCard9';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import { featuredPosts3 } from '../data/data'

const theme = createTheme();
export default function Categories() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                {/* <Container maxWidth="lg"> */}
                <main>
                    <Box
                        sx={{
                            // bgcolor: 'background.paper',
                            pt: 15,
                            pb: 4,
                        }}
                    >
                        <Container maxWidth="lg" >
                            <Grid container spacing={4} >

                                {featuredPosts3.map((post) => (
                                    <MediaCard9 key={post.title} post={post} />
                                ))}
                            </Grid>

                        </Container>
                    </Box>

                </main>
                {/* <main className='main'>
                        <Grid container spacing={4} >

                            {featuredPosts3.map((post) => (
                                <MediaCard9 key={post.title} post={post} />
                            ))}
                        </Grid>
                    </main> */}
                {/* </Container> */}
                {/* <Footer /> */}
            </ThemeProvider>

        </>
    )
}
