import React, { useContext } from "react";
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
import { authContent } from "../../App";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { currentUser } = useContext( authContent ) 
  const navigate = useNavigate()
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
        <Avatar src="https://free-materials.com/adm/wp-content/uploads/2017/08/adpDSC_6917-750x499.jpg" />
        <p className="profileName">{ currentUser?.name }</p>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              className="row"
              onClick={() => {
                navigate(value.link)
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

