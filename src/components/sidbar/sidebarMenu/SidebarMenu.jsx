import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
function SidebarMenu({ data }) {
  return (
    <div id="sidebarMenu" className="mb-2.5">
      <h3 id="sidebarTitle" className="text-sm text-gray-600">
        {data.title}
      </h3>
      <ul id="sidebarList" className="list-none p-1">
        {data.list.map((item) => (
          <li
            key={item.name}
            id="sidebarListItem"
            className="p-1 cursor-pointer flex items-center rounded-md hover:bg-indigo-100  active:text-gray-800  hover:text-gray-800 hover:shadow-2xl hover:shadow-indigo-500/50"
          >
            <Link
              to={item.link}
              className="no-underline text-gray-500 hover:text-gray-800"
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
