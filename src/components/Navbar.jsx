import styled from '@emotion/styled'
import { 
         AppBar,
         Avatar,
         Badge,
         InputBase,
         Toolbar,
         Typography 
        } from '@mui/material'
import React, { useState } from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import MailIcon from '@mui/icons-material/Mail';
import { NotificationAdd } from '@mui/icons-material';
import NavbarMenu from './NavbarMenu';

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled("Box")(({ theme }) => ({
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "flex"
    }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
        <StyledToolbar>
             <Typography 
                 variant="h6"
                 sx={{ display: { xs: "none", sm: "block" }}}
                 >
                  Green Spa
             </Typography>
             <SpaIcon
                sx={{ display: { xs: "block", sm: "none" }}}
             />
             <Search>
                <InputBase placeholder="Search..."/>
             </Search>
             <Icons>
                  <Badge badgeContent={4} color="error">
                      <MailIcon color="action"/>
                  </Badge>
                  <Badge badgeContent={3} color="error">
                       <NotificationAdd color="action"/>
                  </Badge>
                  <Avatar
                       alt="Remy Sharp"
                       src="/images/avatar/1.jpg"
                       sx={{ width: 30, height: 30 }}
                       onClick={(e) => setOpen(!open)}
                   />
             </Icons>
             <UserBox>
                   <Avatar
                       alt="Remy Sharp"
                       src="/images/avatar/1.jpg"
                       sx={{ width: 30, height: 30 }}
                       onClick={(e) => setOpen(!open)}
                   />
                   <Typography variant="span">John</Typography>
             </UserBox>
        </StyledToolbar>
        <NavbarMenu 
             open={open}
             setOpen={setOpen}
        />
    </AppBar>
  )
}

export default Navbar