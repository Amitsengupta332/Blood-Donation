// "use client";
// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuIcon from "@mui/icons-material/Menu";
// import Box from "@mui/material/Box";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import { Container } from "@mui/material";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@/assets/logo/blood labs.svg";
// import { useGetSingleUserQuery } from "@/redux/api/authApi";
// import { useGetMyBloodDonationRequestsQuery } from "@/redux/api/requestApi";
// import { useRouter } from "next/navigation";
// import useUserInfo from "@/hooks/useUserInfo";
// import { logoutUser } from "@/services/actions/logoutUser";
// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const userInfo = useUserInfo();
//   const router = useRouter();

//   const handleLogOut = () => {
//     logoutUser(router);
//   };

//   // const { data, isLoading } = useGetSingleUserQuery({});
//   // console.log(data);

//   // const { data, isLoading } = useGetMyBloodDonationRequestsQuery({});
//   // console.log(data);

//   const handleMenu = (event: any) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Container>
//       <Box position="static">
//         <Toolbar disableGutters>
//           <Typography component="div" sx={{ flexGrow: 1 }}>
//             <Box
//               component={Link}
//               href={"/"}
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyItems: "center",
//                 gap: "7px",
//               }}>
//               <Image src={logo} alt="logo" height={100} width={100} />
//               <Typography fontSize={"26px"} fontWeight={600}>
//                 Blood Labs
//               </Typography>
//             </Box>
//           </Typography>
//           {isMobile ? (
//             <Box>
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={handleMenu}>
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}>
//                 <MenuItem href={"/"}>Home</MenuItem>
//                 <MenuItem href={"/aboutUs"}>About Us</MenuItem>
//                 <MenuItem href={"/"}>My Profile</MenuItem>
//               </Menu>
//             </Box>
//           ) : (
//             <Box
//               sx={{ display: "flex", gap: "20px", alignItems: "center" }}
//               fontSize={"18px"}
//               fontWeight={500}>
//               <Link href={"/"} color="inherit">
//                 Home
//               </Link>
//               <Link href={"/aboutUs"} color="inherit">
//                 About Us
//               </Link>
//               <Link href={"/"} color="inherit">
//                 My Profile
//               </Link>
//               <Button component={Link} href="/login" sx={{ ml: "30px" }}>
//                 Login
//               </Button>
//             </Box>
//           )}
//         </Toolbar>
//       </Box>
//     </Container>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/blood labs.svg";
import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { authKey } from "@/contants/authkey";
import { deleteCookies } from "@/services/actions/deleteCookies";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const userInfo = useUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem(authKey);
    deleteCookies([authKey, "refreshToken"]);
    router.push("/");
    router.refresh();
  };

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Box position="static">
        <Toolbar disableGutters>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Box
              component={Link}
              href={"/"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                gap: "7px",
              }}>
              <Image src={logo} alt="logo" height={100} width={100} />
              <Typography fontSize={"26px"} fontWeight={600}>
                Blood Labs
              </Typography>
            </Box>
          </Typography>
          {isMobile ? (
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}>
                <MenuItem component={Link} href={"/"}>
                  Home
                </MenuItem>
                <MenuItem component={Link} href={"/aboutUs"}>
                  About Us
                </MenuItem>
                <MenuItem component={Link} href={"/Donors"}>
                  About Us
                </MenuItem>

                <AuthButton />
                {/* {userInfo ? (
                  <>
                    <MenuItem component={Link} href={"/myProfile"}>
                      My Profile
                    </MenuItem>
                    <MenuItem component={Link} href={"/dashboard"}>
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={handleLogOut} sx={{ boxShadow: 0 }}>
                      Logout
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem component={Link} href={"/login"}>
                    Login
                  </MenuItem>
                )} */}
              </Menu>
            </Box>
          ) : (
            <Box
              sx={{ display: "flex", gap: "20px", alignItems: "center" }}
              fontSize={"18px"}
              fontWeight={500}>
              <Link href={"/"} color="inherit">
                Home
              </Link>
              <Link href={"/aboutUs"} color="inherit">
                About Us
              </Link>
              <Link href={"/Donors"} color="inherit">
                
                All Donors
              </Link>
              <AuthButton />
              {/* {userInfo ? (
                <>
                  <Link href={"/myProfile"} color="inherit">
                    My Profile
                  </Link>
                  <Link href={"/dashboard"} color="inherit">
                    Dashboard
                  </Link>
                  <Button onClick={handleLogOut} sx={{ ml: "30px" }}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button component={Link} href="/login" sx={{ ml: "30px" }}>
                  Login
                </Button>
              )} */}
            </Box>
          )}
        </Toolbar>
      </Box>
    </Container>
  );
};

export default Navbar;
