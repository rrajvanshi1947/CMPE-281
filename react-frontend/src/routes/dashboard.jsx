// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import LoginForm from "../layouts/LoginPage/LoginForm.js"
import AddSensor from "../views/Icons/addSensor"
import AddNode from "../views/Icons/addNode"
import AddCluster from "../views/TableList/addCluster"
import SensorData from "../views/SensorData/sensorData"

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    userType: "User Admin Manager"
  },
  {
    path: "#",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile,
    userType: "User Admin Manager"
  },
  {
    path: "/node",
    sidebarName: "View Sensor Data",
    navbarName: "View Sensor Data",
    icon: BubbleChart,
    component: SensorData,
    userType: "User Admin Manager"
  },
  {
    path: "/addCluster",
    sidebarName: "Cluster Management",
    navbarName: "Cluster Management",
    icon: BubbleChart,
    component: TableList,
    userType: "Admin Manager"
  },
  {
    path: "/addNode",
    sidebarName: "Node Management",
    navbarName: "Node Management",
    icon: "wb_cloudy",
    component: AddNode,
    userType: "Admin Manager"
  },
    {
        path: "/addSensor",
        sidebarName: "Sensor Management",
        navbarName: "Sensor Management",
        icon: "wb_incandescent",
        component: AddSensor
    },
  {
    path: "/icons",
    sidebarName: "Sensor Simulation",
    navbarName: "Sensor Simulation",
    icon: "wb_incandescent",
    component: Icons,
    userType: "Admin Manager"
  },
  {
    path: "#",
    sidebarName: "View Reports",
    navbarName: "View Reports",
    icon: LibraryBooks,
    component: Maps,
    userType: "User Admin Manager"
  },
  {
    path: "#",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    userType: "Admin Manager"
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "LOGOUT",
    navbarName: "LOGOUT",
    icon: "power_settings_new",
    component: UpgradeToPro,
    userType: "User Admin Manager"
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
