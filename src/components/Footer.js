import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import { useLocation } from "react-router-dom";
function HomeIcon(props) {

    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function HideOnScroll(props) {


    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

function Footer(props) {
    const { showFooter } = props;
    return (
        <>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Box sx={{ bgcolor: 'background.paper', p: 4 }} component="footer"
                        >
                            <nav className="navbar">
                                <NavLink
                                    exact
                                    activeClassName="navbar__link--active"
                                    className="navbar__link"
                                    to="/blog1"
                                >
                                    <div className='m1f'>
                                        <HomeIcon />
                                    </div>
                                </NavLink>
                                <NavLink
                                    activeClassName="navbar__link--active"
                                    className="navbar__link"
                                    to="/catagries"
                                >
                                    <div className='m1f'>
                                        <ViewInArIcon />
                                    </div>
                                </NavLink>
                                <NavLink
                                    activeClassName="navbar__link--active"
                                    className="navbar__link"
                                    to="/feedback"
                                >
                                    <div className='m1f'>
                                        <ChatBubbleTwoToneIcon />
                                    </div>
                                </NavLink>
                            </nav>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    )
}


export default Footer;




