
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import { Box, Grid } from '@mui/material';
import DrawerAppBar from "./DrawerAppBar";
import square from "../assets/images/RectangleCard33.png";
export default function About(props) {
  const { post } = props;
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="/blog">
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
                  image={square}
                  className='imgbox w-100'
                />
              </Box>
            </Card>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} md={6}>
          <DrawerAppBar />
        </Grid>
      </Grid>
    </>
  )
}
