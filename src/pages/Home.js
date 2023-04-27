import React from 'react'
import {
    Grid,
    Container,
    Box
} from "@material-ui/core";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import ImgMediaCard from '../components/ImgMediaCard';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import { mainFeaturedPost, sidebar, MediaCardPosts2 } from '../data/data'
const theme = createTheme();
function Home() {

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <Container maxWidth="lg">
                    <Header />
                    <main className='main'>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <Grid container spacing={4} className='m-auto pr' >
                            {MediaCardPosts2.map((post) => (
                                <ImgMediaCard
                                    image={post.image}
                                    title={post.title}
                                    description={post.description}
                                />
                            ))}
                        </Grid>
                        <Grid container spacing={5} sx={{ mt: 3 }}>
                            <Sidebar
                                title={sidebar.title}
                                description={sidebar.description}
                            />
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
                            <MainFeaturedPost post={mainFeaturedPost} />
                  
                                <Grid container spacing={0.3} className='m-auto pr'  >
                                    {MediaCardPosts2.map((post) => (
                                        <ImgMediaCard
                                            image={post.image}
                                            title={post.title}
                                            description={post.description}
                                        />
                                    ))}
                                </Grid>
                        
                            <Grid container spacing={5} sx={{ mt: 3 }}>
                                <Sidebar
                                    title={sidebar.title}
                                    description={sidebar.description}
                                />
                            </Grid>
                        </Container>
                    </Box>
                </main>
                {/* <Footer /> */}
            </ThemeProvider>
        </>
    )
}

export default Home