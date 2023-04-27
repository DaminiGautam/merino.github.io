import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import home from "../assets/images/icon _home_.png";
import icon from "../assets/images/Group 11.png";
import square from "../assets/images/icon _message square_.png";
import { useNavigate } from 'react-router-dom';
const buttons = [
  <Button key="one"
    className='bordernone'

  ><img src={home} /></Button>,
  <Button key="two" className='bordernone'><img src={icon} /></Button>,
  <Button key="three" className='bordernone'><img src={square} /></Button>,
];

export default function GroupSizesColors() {
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);


  }
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/about');
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="large" aria-label="large button group"
          className='bgcolor'

          onClick={navigateToContacts}>
          {buttons}
        </ButtonGroup>
      </Box>
    </>

  );
}