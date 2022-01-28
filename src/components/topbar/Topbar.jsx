import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Avatar } from "@mui/material";

function Topbar() {
  return (
    <div
      id="topbar"
      className="h-[50px] sticky top-0  z-[999] bg-white shadow-lg shadow-indigo-500/50"
    >
      <div
        id="topbarWrapper"
        className="h-[100%] px-[20px] flex justify-between items-center"
      >
        <div id="topLeft" className="">
          <span id="logo" className="font-bold text-2xl text-blue-900">
            Admin
          </span>
        </div>
        <div id="topRight" className="flex">
          <div
            id="topbarIconsContainer"
            className="flex justify-center items-center"
          >
            <Badge
              badgeContent={4}
              color="primary"
              className="mr-2 cursor-pointer"
            >
              <NotificationsNone />
            </Badge>
            <Badge color="primary" className="mr-2 cursor-pointer">
              <Language />
            </Badge>
            <Badge color="primary" className="mr-2 cursor-pointer">
              <Settings />
            </Badge>
            <Avatar
              alt="Manish"
              src="https://mui.com/static/images/avatar/1.jpg"
              className="w-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
