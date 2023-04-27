import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Main(props) {
    const { posts, title, description } = props;

    return (
        <Grid
            item
            xs={12}
            md={12}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6" gutterBottom id='title4'>
                {title}
            </Typography>
            <p className='subtitle'>
                {description}

            </p>
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

export default Main;