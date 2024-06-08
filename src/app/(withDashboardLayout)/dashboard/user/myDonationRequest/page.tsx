"use client";
import { useGetRequestsMadeByMeQuery } from "@/redux/api/requestApi";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { formatBloodType } from "@/utils/formatBloodType";

const ReceivedRequest = () => {
  const { data, isLoading } = useGetRequestsMadeByMeQuery({});
  const [allRequest, setAllRequest] = useState<any>([]);
  console.log(data);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL", width: 30 },
    {
      field: "requester.name",
      headerName: "RequesterName",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}>
            <Typography>{row.requester.name}</Typography>
          </Box>
        );
      },
    },
    // {
    //   field: "contactInfo",
    //   headerName: "Contact Info",
    //   width: 200,
    //   renderCell: ({ row }) => {
    //     return (
    //       <Box
    //         sx={{
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //         }}>
    //         <Box>
    //           {row?.requestStatus === "APPROVED" ? (
    //             <Typography sx={{ color: "green" }}>{row.email}</Typography>
    //           ) : (
    //             <Typography sx={{ color: "orange" }}>Not Available</Typography>
    //           )}
    //         </Box>
    //       </Box>
    //     );
    //   },
    // },
    { field: "hospitalName", headerName: "Hospital Name", flex: 1 },
    { field: "hospitalAddress", headerName: "Hospital Address", flex: 1 },
    { field: "reason", headerName: "Reason", flex: 1 },
    {
      field: "requestStatus",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}>
            <Box>
              {row?.requestStatus === "APPROVED" ? (
                <Typography sx={{ color: "green" }}>APPROVED</Typography>
              ) : (
                <Typography sx={{ color: "orange" }}>PENDING</Typography>
              )}
            </Box>
          </Box>
        );
      },
    },

    // {
    //   field: "button",
    //   headerName: "Details",
    //   flex: 1,
    //   // headerAlign: "center",
    //   align: "center",
    //   renderCell: ({ row }) => {
    //     return (
    //       <Box
    //         sx={{
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //         }}>
    //         <Link
    //           href={`/dashboard/user/donation-request-for-blood/details/${row.id}`}>
    //           <Button variant="text" size="small" sx={{ p: 0 }}>
    //             Details
    //           </Button>
    //         </Link>
    //       </Box>
    //     );
    //   },
    // },

    // {
    //   field: "action",
    //   headerName: "Action",
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    //   renderCell: ({ row }) => {
    //     return (
    //       <Box>
    //         <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
    //           <IconButton color="secondary" aria-label="" sx={{ ml: 1 }}>
    //             <EditIcon />
    //           </IconButton>
    //         </Link>
    //       </Box>
    //     );
    //   },
    // },
  ];
  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={700} variant="h6">
          Received Request
        </Typography>
      </Box>

      {!isLoading ? (
        <Box>
          <DataGrid
            rows={data}
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
    </Container>
  );
};

export default ReceivedRequest;
