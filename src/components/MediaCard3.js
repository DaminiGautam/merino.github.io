import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
export default function MediaCard3(props) {
  const { post } = props;
  return (

    <>

      <Grid item xs={12} md={4}>
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
                className='imgbox w-100'
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
                className='bgCardBox'
              >
                <div className='boxOverlay2'>
                  <Typography variant="h5" className='title colorWhite'><span>{post.title}</span></Typography>
                  <Typography variant="body2"  className='body colorWhite w2body'> <span>{post.description}</span></Typography>
                </div>
              </Box>
            </Box>
          </Card>
        </CardActionArea>
      </Grid>

    </>

  );
}
