
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
function FeaturedPost(props) {
  const { post } = props;

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Link to='/about'>
              <Card className='card1 animate fadeInUp one m-auto' >
                <CardMedia
                  className='bgcard1 WH'
                />
                <CardContent className='overlay animate fadeInDown two' >
                  <Typography gutterBottom variant="h5" component="div" className='text-h1'>
                    About Merino Group
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='text-p'>
                    There are many variations of passages
                  </Typography>
                </CardContent>

              </Card>
            </Link>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Link to='/product'>
              <Card className='card1 animate fadeInUp one m-auto' >
                <CardMedia
                  className='bgcard2 WH'
                />
                <CardContent className='overlay animate fadeInDown two' >
                  <Typography gutterBottom variant="h5" component="div" className='text-h1'>
                    About Merino Group
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='text-p'>
                    There are many variations of passages
                  </Typography>
                </CardContent>

              </Card>
            </Link>
          </CardActionArea>
        </Grid>
      </Grid>


    </>

  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
