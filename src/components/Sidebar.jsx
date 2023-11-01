import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ProfileIcon from '@mui/icons-material/Person4';
import SettingsIcon from '@mui/icons-material/Settings';
import FriendsIcon from '@mui/icons-material/Diversity3';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = () => {
  return (
    <Box 
      flex={1}
      sx={{ display: { xs: "none", sm: "block"}}}
      >
        <List>
           <ListItem>
              <ListItemButton component="a" href="#page">
                  <ListItemIcon>
                      <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home Page" />
              </ListItemButton>
           </ListItem>

           <ListItem>
               <ListItemButton component="a" href="#pages">
                  <ListItemIcon>
                     <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pages"/>
               </ListItemButton>
           </ListItem>

           <ListItem>
               <ListItemButton component="a" href="#groups">
                  <ListItemIcon>
                     <Diversity2Icon />
                  </ListItemIcon>
                  <ListItemText primary="Groups"/>
               </ListItemButton>
           </ListItem>

           <ListItem>
               <ListItemButton component="a" href="#marketplace">
                  <ListItemIcon>
                     <StorefrontIcon />
                  </ListItemIcon>
                  <ListItemText primary="Marketplace"/>
               </ListItemButton>
           </ListItem>

           <ListItem>
               <ListItemButton component="a" href="#friends">
                  <ListItemIcon>
                     <FriendsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Freinds"/>
               </ListItemButton>
           </ListItem>

           <ListItem>
               <ListItemButton component="a" href="#setting">
                  <ListItemIcon>
                     <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Setting"/>
               </ListItemButton>
           </ListItem>

           <ListItem>
               <ListItemButton component="a" href="#profile">
                  <ListItemIcon>
                     <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile"/>
               </ListItemButton>
           </ListItem>

           <ListItem>
               <ListItemButton component="a" href="#moon-night">
                  <ListItemIcon>
                     <ModeNightIcon />
                  </ListItemIcon>
                  <Switch />
               </ListItemButton>
           </ListItem>
        </List>
      </Box>
  )
}

export default Sidebar