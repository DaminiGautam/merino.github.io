import React from 'react'
import square from "../assets/images/Rectangle 1.png";
import DrawerAppBar from '../components/DrawerAppBar';
import ButtonAppBar from '../components/ButtonAppBar'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function About() {
    return (
        <>
            <ButtonAppBar />
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ height: '25vh' }} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Card>
                                    <CardMedia
                                        className="w-100 h-1001"
                                        image={square}
                                    />
                                    <Typography gutterBottom variant="h5" component="div" className='text-h1'>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='text-p'>

                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} className="p-1">
                                <DrawerAppBar />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>


        </>
    )
}
