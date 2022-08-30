import React from "react";

import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, ListItemButton } from "@mui/material";

import Header from "../component/Index/Header";
import Sidebar from "../component/SideBar/SideBar";
import { useNavigate } from "react-router";

const Application = () => {
  const navigate = useNavigate()

  return (
    <div style={styles.application}>
      <Sidebar />
      <div>
        <Header />
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate(`/application/form`)}>
              <ListItemAvatar>
                <Avatar alt="Kai Hosoya" src="https://pbs.twimg.com/profile_images/1377636687098961926/dcpiiiIz_400x400.jpg" />
              </ListItemAvatar>
              <ListItemText
              primary="細谷 海"
              primaryTypographyProps={{
                  color: 'primary',
                  fontWeight: 'medium',
                  variant: 'body2',
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemButton onClick={() => navigate(`/application/form`)}>
              <ListItemAvatar>
                <Avatar alt="Sasaki" src="https://pbs.twimg.com/profile_images/1378000790351081473/LJSxORIL_400x400.jpg" />
              </ListItemAvatar>
              <ListItemText
              primary="佐々木 柊真"
              primaryTypographyProps={{
                  color: 'primary',
                  fontWeight: 'medium',
                  variant: 'body2',
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemButton onClick={() => navigate(`/application/form`)}>
              <ListItemAvatar>
                <Avatar alt="Taguchi" src="https://pbs.twimg.com/profile_images/1495289062613458945/JpYKq5ZC_400x400.jpg"/>
              </ListItemAvatar>
              <ListItemText
              primary="田口 美星"
              primaryTypographyProps={{
                  color: 'primary',
                  fontWeight: 'medium',
                  variant: 'body2',
                }}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </div>
    </div>
  )
}

export default Application;

const styles = {
  application: {
    display: "flex"
  },
}