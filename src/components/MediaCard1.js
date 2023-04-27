import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
export default function MediaCard1(props) {
  const { post } = props;
  return (

    <>

      <Grid item xs={12} sm={12} md={6}>
        <CardActionArea component="a" href={post.link}>
          <Card
            sx={{ maxHeight: 588 }}
            className='MuiCard'
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                sx={{
                  height: 588
                }}
                image={post.image}
                alt={post.imageLabel}
                className='imgbox w-100 animate fadeInDown two'
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  color: 'white',
                  padding: '10px',
                }}
                className='bgCardBox animate fadeInUp one m-auto'
              >
                <div className='boxOverlay1'>
                  <Typography variant="h5" className='title'><span>{post.title}</span></Typography>
                  <Typography variant="body2" className='body w1body'><span>{post.description}</span></Typography>
                </div>
              </Box>
            </Box>
          </Card>
        </CardActionArea>
      </Grid>



    </>

  );
}
