import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MediaCard1 from '../components/MediaCard1';
import Footer from '../components/Footer';
import { featuredPosts } from '../data/data'
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from "react-router-dom";
const theme = createTheme();
export default function Blog1() {
    const location = useLocation();
    const isMyPage = location.pathname === "/my-page";
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                {!isMyPage && <Footer />}
                <main>
                    <Box
                        sx={{
                            pt: 24,
                            pb: 4,
                        }}
                    >
                        <Container maxWidth="lg" >
                            <Grid container spacing={4}
                            >
                                {featuredPosts.map((post) => (
                                    <MediaCard1 key={post.title} post={post} />
                                ))}
                            </Grid>

                        </Container>
                    </Box>

                </main>
                {/* <Footer /> */}
            </ThemeProvider>
        </>

    );
}