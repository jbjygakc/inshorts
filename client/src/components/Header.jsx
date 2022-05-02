import React from 'react'
import {AppBar, Toolbar,styled  } from '@mui/material';
import {Menu} from '@mui/icons-material';

// to style components of material ui we use "styled" method 
const StyledHeader=styled(AppBar)`
background: #fff;
height: 70px;
`;

const MenuIcon= styled(Menu)`
color : black; 
`;

const Image = styled('img')({
  height: 55,
  margin: 'auto',
  paddingRight: 70
})
function Header() {
// using appbar for haeder of site from material ui 

  return (
    <div>
       <StyledHeader position='static'>
          <Toolbar>
          <MenuIcon />
          <Image 
            src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
            alt='logo'
          />
          </Toolbar>
       </StyledHeader> 
    </div>
  )
}

export default Header