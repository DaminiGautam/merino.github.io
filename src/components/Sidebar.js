import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rectangle231 from '../assets/images/Rectangle 231.png'
import Rectangle271 from '../assets/images/Rectangle 271.png'
import Markdown from '../components/Markdown';
import Container from '@mui/material/Container';
function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Paper elevation={0} sx={{ pt: 2, pb: 2 }}>
        <Typography variant="h6" gutterBottom className='bgColor'>
          <span>{title}</span>
        </Typography>
        <Typography className='body wauto' ><span>{description}</span></Typography>
      </Paper>
      <Paper elevation={0} sx={{ pt: 2, pb: 2 }}>
        <Typography variant="h6" gutterBottom className='bgColor'>
          <span>PRODUCT CATEGORY</span>
        </Typography>
        <Container maxWidth="lg" >
          <Grid container sx={{ mt: 5.13 }}>
            <Grid sm={12} xs={12} md={3} lg={3} xl={3}>
              <p className='m5'>
                <img src={Rectangle231} className='d-block m-auto' />
              </p>
            </Grid>
            <Grid sm={12} xs={12} md={9} lg={9} xl={9}>
              <Markdown title="LAMINATES"
                description=" Merino High-Pressure laminates are made of specially decorative papers and absorbent
              kraft paper impregnated with melamine and phenolic resins.
              These are then pressed and hardened under heat and high pressure." />
            </Grid>
            <Grid sm={12} xs={12} md={3} lg={3} xl={3}>
              <p className='m5'>
                <img src={Rectangle271} className='d-block m-auto' />
              </p>
            </Grid>
            <Grid sm={12} xs={12} md={9} lg={9} xl={9}>
              <Markdown title="MERINOLAM POSTFORMING " description="Postforming grade laminates are intended to be used on
             vertical and horizontal interior surfaces where the laminate is required to roll in a simple radius over the
              edges of a substrate. The result -no seams around corners and a smooth, evenly laminated, attractive surface." />
            </Grid>

            <Grid sm={12} xs={12} md={3} lg={3} xl={3}>
              <p className='m5'>
                <img src={Rectangle231} className='d-block m-auto' />
              </p>
            </Grid>
            <Grid sm={12} xs={12} md={9} lg={9} xl={9}>
              <Markdown title="LAMINATES"
                description=" Merino High-Pressure laminates are made of specially decorative papers and absorbent
              kraft paper impregnated with melamine and phenolic resins.
              These are then pressed and hardened under heat and high pressure." />
            </Grid>
            <Grid sm={12} xs={12} md={3} lg={3} xl={3}>
              <p className='m5'>
                <img src={Rectangle271} className='d-block m-auto' />
              </p>
            </Grid>
            <Grid sm={12} xs={12} md={9} lg={9} xl={9}>
              <Markdown title="MERINOLAM POSTFORMING " description="Postforming grade laminates are intended to be used on
             vertical and horizontal interior surfaces where the laminate is required to roll in a simple radius over the
              edges of a substrate. The result -no seams around corners and a smooth, evenly laminated, attractive surface." />
            </Grid>
          </Grid>
        </Container>

      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;