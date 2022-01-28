import {
  AttachMoney,
  BarChart,
  ChatBubbleOutlineOutlined,
  DynamicFeed,
  Inventory2,
  LineStyle,
  Mail,
  Person,
  ReportOutlined,
  Timeline,
  TrendingUp,
  WorkOutlineOutlined,
} from "@mui/icons-material";

const sidebarMenuData = [
  {
    title: "Dashboard",
    list: [
      { icon: <LineStyle className="mr-2 text-xl" />, name: "Home", link: "/" },
      {
        icon: <Timeline className="mr-2 text-xl" />,
        name: "Analytics",
        link: "/",
      },
      {
        icon: <TrendingUp className="mr-2 text-xl" />,
        name: "Sales",
        link: "/",
      },
    ],
  },
  {
    title: "Quick Menu",
    list: [
      {
        icon: <Person className="mr-2 text-xl" />,
        name: "Users",
        link: "/users",
      },
      {
        icon: <Inventory2 className="mr-2 text-xl" />,
        name: "Products",
        link: "/products",
      },
      {
        icon: <AttachMoney className="mr-2 text-xl" />,
        name: "Transactions",
        link: "/",
      },
      {
        icon: <BarChart className="mr-2 text-xl" />,
        name: "Reports",
        link: "/",
      },
    ],
  },
  {
    title: "Notifications",
    list: [
      { icon: <Mail className="mr-2 text-xl" />, name: "Mail", link: "/" },
      {
        icon: <DynamicFeed className="mr-2 text-xl" />,
        name: "Feedback",
        link: "/",
      },
      {
        icon: <ChatBubbleOutlineOutlined className="mr-2 text-xl" />,
        name: "Messages",
        link: "/",
      },
    ],
  },
  {
    title: "Staff",
    list: [
      {
        icon: <WorkOutlineOutlined className="mr-2 text-xl" />,
        name: "Manage",
        link: "/",
      },
      {
        icon: <Timeline className="mr-2 text-xl" />,
        name: "Analytic",
        link: "/",
      },
      {
        icon: <ReportOutlined className="mr-2 text-xl" />,
        name: "Report",
        link: "/",
      },
    ],
  },
];
export default sidebarMenuData;
