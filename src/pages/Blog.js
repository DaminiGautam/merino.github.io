import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MediaCard from '../components/MediaCard';
import Footer from '../components/Footer';


const theme = createTheme();

export default function Blog() {

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                {/* <Container maxWidth="lg">

                    <main className='main'>
                        <MediaCard />
                    </main>
                </Container> */}
                <main>
                    <Box
                        sx={{
                            // bgcolor: 'background.paper',
                            pt: 24,
                            pb: 4,
                        }}
                    >
                        <Container maxWidth="lg" >
                            <MediaCard />
                        </Container>
                    </Box>

                </main>
                {/* <Footer /> */}
            </ThemeProvider>
        </>
    );
}