import sidebarMenuData from "./sidebarMenu/SidebarMenuData";
import SidebarMenu from "./sidebarMenu/SidebarMenu";
function Sidebar() {
  return (
    <div
      id="sidebar"
      className="basis-1/6  bg-white  sticky top-0 shadow-2xl shadow-indigo-500/50"
    >
      <div id="sidebarWrapper" className="p-[20px] text-gray-500">
        {sidebarMenuData.map((sideMenu) => (
          <SidebarMenu data={sideMenu} key={sideMenu.title} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
