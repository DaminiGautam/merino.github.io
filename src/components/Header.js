import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import icon8 from "../assets/images/Group 8.png";
import logo from "../assets/images/Logo.png";
import icon9 from "../assets/images/Group 9.png";
import { Link } from 'react-router-dom';
function Header(props) {
    const { sections, title } = props;
    const [showFooter, setShowFooter] = useState(true);
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [loginfrom, setLoginfrom] = useState(false);
    // let { id } = useParams();
    const data = {
        isAuth,
        setIsAuth,
    };

    const hideFooterOnHomePage = () => {
        if (window.location.pathname === '/') {
            setShowFooter(false);
        } else {
            setShowFooter(true);
        }
    }
    useEffect(() => {
        hideFooterOnHomePage();
    }, []);
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} id='header'>
                <Link to="/blog1">
                    <Button size="small" >
                        <IconButton>
                            <img src={icon8} />
                        </IconButton>
                    </Button>
                </Link>
                
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    <IconButton>
                        <img src={logo}
                        ></img>
                    </IconButton>
                </Typography>

                <Link to="/from">
                    <IconButton>
                        <img src={icon9} />
                    </IconButton>
                </Link>
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;