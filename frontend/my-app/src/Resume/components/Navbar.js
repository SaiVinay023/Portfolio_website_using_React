import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, width: '100%', backgroundColor: '#1976d2', boxShadow: 3 }}>
      <Toolbar>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      {/* Logo or Title here */}
    </Typography>

    {/* Navigation Buttons Group */}
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About Me</Button>
      <Button color="inherit" component={Link} to="/education">Education</Button>
      <Button color="inherit" component={Link} to="/skills">Skills</Button>
      <Button color="inherit" component={Link} to="/projects">Projects</Button>
      {/* <Button color="inherit" component={Link} to="/resume">Resume/CV</Button> */}
      <Button color="inherit" component={Link} to="/hobbies">Hobbies</Button>
      {/* <Button color="inherit" component={Link} to="/achievements">Achievements</Button> */}
      <Button color="inherit" component={Link} to="/experiences">Experiences</Button>
      <Button color="inherit" component={Link} to="/contact">Contact Me</Button>
    </Box>
  </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
