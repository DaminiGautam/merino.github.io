import React from 'react'
import ButtonAppBar from '../components/ButtonAppBar'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import Rectangle231 from '../assets/images/Rectangle 231.png'
import Rectangle271 from '../assets/images/Rectangle 271.png'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import layer1 from '../assets/images/Group 41.png'
import { CardActionArea } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const theme = createTheme();

export default function Categories2() {

    return (
        <>
            <ButtonAppBar />
            <React.Fragment>
                <CssBaseline />
                <Box sx={{ height: '25vh' }} />
                <Box sx={{ flexGrow: 1 }}>

                    <Container >
                        <div className='paperContainer'>
                            <Box sx={{ height: '25vh' }} />
                            <Box sx={{ flexGrow: 1 }} className='m-33'>
                                <Grid container spacing={{ xs: 3, md: 2 }} columns={{ xs: 12, sm: 9, md: 12, lg: 12 }} className='p-2' >
                                    <Grid item xs={6} sm={3} md={2.4}>
                                        <Card sx={{ maxWidth: 345 }} className='card-m1'>
                                            <CardMedia
                                                sx={{
                                                    height: 55, width: 55,
                                                    margin: "auto"
                                                }}
                                                image={layer1}
                                                title="green iguana"
                                            />
                                            <CardContent className='text-center'>
                                                <Typography gutterBottom variant="h5" component="div" id='f444' className='text-white'>
                                                    HYGIENIC
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" id='f444p'>
                                                    The surface is homogenous, non-porous and anti-bacterial, which helps in creating and maintaining hygiene
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2.4}>
                                        <Card sx={{ maxWidth: 345 }} className='card-m1'>
                                            <CardMedia
                                                sx={{
                                                    height: 55, width: 55,
                                                    margin: "auto"
                                                }}
                                                image={layer1}
                                                title="green iguana"
                                            />
                                            <CardContent className='text-center'>
                                                <Typography gutterBottom variant="h5" component="div" id='f444'>
                                                    MULTI RESISTANT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" id='f444p'>
                                                    Prevents build up of germs, bacteria and any other harmful elements.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2.4}>
                                        <Card sx={{ maxWidth: 345 }} className='card-m1'>
                                            <CardMedia
                                                sx={{
                                                    height: 55, width: 55,
                                                    margin: "auto"
                                                }}
                                                image={layer1}
                                                title="green iguana"
                                            />
                                            <CardContent className='text-center'>
                                                <Typography gutterBottom variant="h5" component="div" id='f444'>
                                                    HIGHLY DECORATIVE
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" id='f444p'>
                                                    Allows for recreating and matching any decor material, without any size or thickness laminations.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2.4}>
                                        <Card sx={{ maxWidth: 345 }} className='card-m1'>
                                            <CardMedia
                                                sx={{
                                                    height: 55, width: 55,
                                                    margin: "auto"
                                                }}
                                                image={layer1}
                                                title="green iguana"
                                            />
                                            <CardContent className='text-center'>
                                                <Typography gutterBottom variant="h5" component="div" id='f444'>
                                                    SCRATCH RESISTANT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" id='f444p'>
                                                    The scratch resistant decor of the product lasts for years without fading or loss of gloss maintaining color fastness.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6} sm={3} md={2.4}>
                                        <Card sx={{ maxWidth: 345 }} className='card-m1'>
                                            <CardMedia
                                                sx={{
                                                    height: 55, width: 55,
                                                    margin: "auto"
                                                }}
                                                image={layer1}
                                                title="green iguana"
                                            />
                                            <CardContent className='text-center'>
                                                <Typography gutterBottom variant="h5" component="div" id='f444'>
                                                    IMPACT RESISTANT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" id='f444p'>
                                                    These laminates are impact resistant as per EN 438 standards.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Grid >
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div className="content">
                                            <section className="profile">
                                                <div className="main-content">
                                                    <h1>LAMINATES</h1>
                                                    <p>Laminate design inspirations are not just based on visuals but also have a deep connection with how you feel.
                                                        Merino Laminates presents designs and textures that capture the imagination of designers across the world.</p>

                                                </div>
                                            </section>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid >
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div className="content1">
                                            <section className="profile">
                                                <div className="main-content">
                                                    <h1>PRODUCT CATEGORY</h1>
                                                </div>
                                            </section>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className='sectionc'>
                                    <div className='container'>
                                        <Grid container spacing={{ xs: 3, md: 3 }}>
                                            <Grid item xs={12} md={4}>
                                                <CardActionArea component="a" href="#">
                                                    <Card sx={{ display: 'flex' }}>
                                                        <img src={Rectangle231} className='w-100 mt-2' />
                                                    </Card>
                                                </CardActionArea>
                                            </Grid>

                                            <Grid item xs={12} md={8}>
                                                <CardActionArea component="a" href="#">

                                                    <Card sx={{ display: 'flex' }}>
                                                        <CardContent sx={{ flex: 1 }}>
                                                            <Typography component="h2" variant="h5" id='content1' >
                                                                MERINOLAM
                                                            </Typography>
                                                            <Typography variant="subtitle1" color="text.secondary" className='paragraph' >
                                                                Merino High-Pressure laminates are made of specially decorative papers and absorbent kraft
                                                                paper impregnated with melamine and phenolic resins. These are then pressed and
                                                                hardened under heat and high pressure.
                                                            </Typography>

                                                        </CardContent>
                                                    </Card>
                                                </CardActionArea>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={{ xs: 3, md: 3 }}>
                                            <Grid item xs={12} md={4}>
                                                <CardActionArea component="a" href="#">
                                                    <Card sx={{ display: 'flex' }}>
                                                        <img src={Rectangle271} className='w-100 mt-2' />
                                                    </Card>
                                                </CardActionArea>
                                            </Grid>

                                            <Grid item xs={12} md={8}>
                                                <CardActionArea component="a" href="#">
                                                    <Card sx={{ display: 'flex' }}>
                                                        <CardContent sx={{ flex: 1 }}>
                                                            <Typography component="h2" variant="h5" id='content1' >
                                                                MERINOLAM POSTFORMING
                                                            </Typography>
                                                            <Typography variant="subtitle1" color="text.secondary" className='paragraph' >
                                                                ostforming grade laminates are intended to be used on vertical and horizontal interior surfaces where
                                                                the laminate is required to roll in a simple radius over the edges of a
                                                                substrate. The result - no seams around corners and a smooth, evenly laminated, attractive surface.
                                                            </Typography>

                                                        </CardContent>
                                                    </Card>
                                                </CardActionArea>
                                            </Grid>
                                        </Grid>

                                    </div>
                                </div>
                            </Box>
                        </div>
                    </Container>
                </Box>
            </React.Fragment>
        </>
    )
}
