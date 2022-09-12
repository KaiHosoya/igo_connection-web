import React, { useContext } from "react";

import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, ListItemButton } from "@mui/material";

import Header from "../component/Index/Header";
import Sidebar from "../component/SideBar/SideBar";
import { useNavigate, Navigate } from "react-router";
import { authContent } from "../App";

const Application = () => {
  const navigate = useNavigate()
  const { currentUser } = useContext( authContent )

  return (
    <div>
      { currentUser ? (
        <div style={styles.application}>
        <Sidebar />
        <div>
        <Header title="指導者一覧"/>
          <List>
            <ListItem>
              <ListItemButton onClick={() => navigate(`/application/form`, {state: {name: "細谷 海"}})}>
                <ListItemAvatar>
                  <Avatar alt="Kai Hosoya" src="https://lh3.googleusercontent.com/wMl4j3hFxn171C6mY7nyCsbzb6yQiYZMB3euhfvjW7KK9wrcR1eqBnJYMxSM42CiMLxAu_EM6goYjFcZxuXXe8C1PUgIKF_OWPRS=w600" />
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
              <ListItemButton onClick={() => navigate(`/application/form`, {state: {name: "佐々木 柊真"}})}>
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
              <ListItemButton onClick={() => navigate(`/application/form`, {state: {name: "田口 美星"}})}>
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
  
            <ListItem>
              <ListItemButton onClick={() => navigate(`/application/form`, {state: {name: "友里恵"}})}>
                <ListItemAvatar>
                  <Avatar alt="友里恵" src="https://lh3.googleusercontent.com/a-/AFdZucpBjewzrRWlUw8kBiUGUeiTTda_HXgYyr0Qygtl=s64-p-k-rw-no"/>
                </ListItemAvatar>
                <ListItemText
                primary="友里恵"
                primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
  
            {/* <ListItem>
              <ListItemButton onClick={() => navigate(`/application/form`, {state: {name: "芝野 龍之介"}})}>
                <ListItemAvatar>
                  <Avatar alt="Ryunosuke Shibano" src="https://pbs.twimg.com/profile_images/966372033201229824/UBHgoU41_400x400.jpg"/>
                </ListItemAvatar>
                <ListItemText
                primary="芝野 龍之介"
                primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" /> */}
          </List>
        </div>
      </div>
      ) : (
        <Navigate to={`/`} />
      )}
    </div>
  )
}

export default Application;

const styles = {
  application: {
    display: "flex"
  },
}