 
import AccountMenu from "@/components/Dashboard/AccountMenu/AccountMenu";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/navigation";

 

const AuthButton = () => {

    const userInfo = getUserInfo();
    const router = useRouter();
  
    const handleLogout = () => {
      removeUser();
      router.refresh();
    };

    return (
        <>
          {userInfo?.email ? (
            <AccountMenu color="red"  />
          ) : (
            <Button
              component={Link}
              href="/login"
              sx={{
                backgroundColor: "red",
                color: "white",
                "&:hover": {
                  backgroundColor: red[300],
                },
              }}
            >
              Login
            </Button>
          )}
        </>
      );
};

export default AuthButton;