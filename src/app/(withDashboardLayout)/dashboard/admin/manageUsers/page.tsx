"use client";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { formatBloodType } from "@/utils/formatBloodType";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

const ManageUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [updateUserId, setUpdateUserId] = useState("");
  const { data, isLoading } = useGetAllDonorsQuery({});
  console.log(data?.donors);

  const donors = data?.donors;
 

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", width: 220 },
    // {
    //   field: "bloodType",
    //   headerName: "Blood Group",
    //   flex: 1,
    //   renderCell: ({ row }: any) => {
    //     return (
    //       <Box
    //         sx={{
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //         }}>
    //         <Typography>{bloodTypeFormat(row.bloodType)}</Typography>
    //       </Box>
    //     );
    //   },
    // },
    { field: "availability", headerName: "Availability", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "activeStatus", headerName: "Status", flex: 1 },
    // {
    //   field: "button",
    //   headerName: "Action",
    //   flex: 1,
    //   align: "center",
    //   renderCell: ({ row }: any) => {
    //     return (
    //       <Box
    //         sx={{
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //         }}>
    //         <Button
    //           onClick={() => {
    //             setIsModalOpen(true);
    //             setUpdateUserId(row?.id);
    //           }}
    //           variant="contained"
    //           size="small"
    //           sx={{ p: "5px 10px" }}>
    //           Edit User
    //         </Button>
    //       </Box>
    //     );
    //   },
    // },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={700} variant="h6">
          Manage Users
        </Typography>
      </Box>

      {/* <userModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        userId={updateUserId}
      /> */}

      {!isLoading ? (
        <Box>
          <DataGrid
            rows={donors?.data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 8 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default ManageUsers;
