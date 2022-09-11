import React from "react";
// import SidebarIcon from "./SidebarIcon";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from '@mui/icons-material/ListAlt';
import CasinoIcon from '@mui/icons-material/Casino';
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import AddCardIcon from "@mui/icons-material/AddCard";
// import BackupIcon from "@mui/icons-material/Backup";
// import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import "./SideBar.css"

const Sidebar = () => {
  const SidebarData = [
    {
      title: "ホーム",
      icon: <HomeIcon />,
      link: "/home",
    },
    {
      title: "棋譜一覧",
      icon: <ListAltIcon />,
      link: "/index",
    },
    {
      title: "添削依頼",
      icon: <CasinoIcon />,
      link: "/application",
    },
    // {
    //   title: "友達追加",
    //   icon: <PersonAddIcon />,
    //   link: "/friends",
    // },
    // {
    //   title: "お支払い設定",
    //   icon: <AddCardIcon />,
    //   link: "/payment",
    // },
    // {
    //   title: "アップロード",
    //   icon: <BackupIcon />,
    //   link: "/upload",
    // },
    // {
    //   title: "詳細設定",
    //   icon: <SettingsIcon />,
    //   link: "/setting",
    // },
  ];

  return (
    <div className="Sidebar">
      <div className="profile">
        {/* アイコン画像とメアド */}
        <Avatar src="https://lh3.googleusercontent.com/wMl4j3hFxn171C6mY7nyCsbzb6yQiYZMB3euhfvjW7KK9wrcR1eqBnJYMxSM42CiMLxAu_EM6goYjFcZxuXXe8C1PUgIKF_OWPRS=w600" />
        <p className="profileName">KaiHosoya</p>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


export default Sidebar;

