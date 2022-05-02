import React from 'react'
import './App.css';
import Header from "./components/Header.jsx"
import InfoHeader from './components/InfoHeader';
import { Box,styled } from "@mui/material"
import Articles from './components/Articles';

// Box is replacement for Div by material ui in its components 
// Typography is replacements for P tag  by material ui in its components  


const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '110px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));

function App() {
  return (
    <Box >
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>

    </Box>
  );
}

export default App;
