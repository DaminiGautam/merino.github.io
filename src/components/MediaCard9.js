import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { CardContent } from '@mui/material';

export default function MediaCard9(props) {
  const { post } = props;
  return (

    <>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <CardActionArea component="a" href={post.link}>
          <Card sx={{ maxWidth: 345 }} className='card-product'>
            <CardMedia
              sx={{ height: 345 }}
              image={post.image}
              title="green iguana"
              className='cssMuiCardMediaimg'
            />
            <CardContent className='textcenter'>
              <Typography gutterBottom variant="h5" component="div" className='title colorblack'>
                <span> {post.title}</span>
              </Typography>
              <Typography variant="body2" color="text.secondary" className='description cblack'>
                <span>{post.description}</span>
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>

  );
}
