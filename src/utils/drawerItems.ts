import { DrawerItem, UserRole } from "@/types";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { USER_ROLE } from "@/contants/role";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manageUsers`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "My Requests",
          path: `${role}/donationRequest`,
          icon: PersonSearchIcon,
        },
        {
          title: "Received Requests",
          path: `${role}/myDonationRequest`,
          icon: BloodtypeIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
