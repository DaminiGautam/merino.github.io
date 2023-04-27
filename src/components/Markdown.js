import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Markdown(props) {
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
            className='boxPd'
        >
            <Typography variant="h6" gutterBottom className='textRed'>
            <span>{title}</span>
            </Typography>
            <p className='body text-justify' >
               <span> {description}</span>

            </p>
        </Grid>
    );
}

Markdown.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

export default Markdown;