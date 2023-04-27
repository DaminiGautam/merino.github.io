import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Mainheader(props) {
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
            <Typography variant="h6" gutterBottom id='title6'>
                {title}
            </Typography>
        </Grid>
    );
}

Mainheader.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

export default Mainheader;