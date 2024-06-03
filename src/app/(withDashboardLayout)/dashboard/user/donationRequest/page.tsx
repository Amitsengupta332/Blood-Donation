// "use client";
// import { Box, Typography } from "@mui/material";

// import { useGetMyBloodDonationRequestsQuery } from "@/redux/api/requestApi";

// const donationRequest = () => {
//   const { data, isLoading } = useGetMyBloodDonationRequestsQuery({});
//   console.log(data);
//   return (
//     <Box sx={{ mt: 2 }}>
//       <Box sx={{ mb: 2 }}>
//         <Typography fontWeight={700} variant="h6">
//           Blood Request.
//         </Typography>
//       </Box>

//       {/* <StatusEditModal
//         open={isModalOpen}
//         setOpen={setIsModalOpen}
//         requestStatus={requestStatus}
//         requestId={requestId}
//         donateDate={donateDate}
//       /> */}
//     </Box>
//   );
// };

// export default donationRequest;

"use client";
import { useGetMyBloodDonationRequestsQuery } from "@/redux/api/requestApi";
import { formatBloodType } from "@/utils/formatBloodType";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import StatusEditModal from "./components/StatusEditModal";

const MyDonationRequest = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [requestId, setRequestId] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<string>("");
  const [donateDate, setDonateDate] = useState<string>("");
  const { data, isLoading } = useGetMyBloodDonationRequestsQuery({});
  // console.log(data);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Requester Name",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}>
            <Typography>{formatBloodType(row.requester.name)}</Typography>
          </Box>
        );
      },
    },
    { field: "phoneNumber", headerName: "Requester Number", width: 150 },
    { field: "hospitalName", headerName: "Hospital Name", width: 150 },
    { field: "hospitalAddress", headerName: "Hospital Address", width: 150 },
    { field: "dateOfDonation", headerName: "Donation Date", width: 150 },
    {
      field: "requestStatus",
      headerName: "Status",
      width: 120,
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
                <Typography sx={{ color: "red" }}>PENDING</Typography>
              )}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Edit Status",
      width: 100,

      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              color="primary"
              aria-label=""
              sx={{ ml: 1 }}
              onClick={() => {
                setIsModalOpen(true);
                setRequestId(row?.id);
                setRequestStatus(row?.requestStatus);
                setDonateDate(row?.dateOfDonation);
              }}>
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={700} variant="h6">
          Blood Donate Request.
        </Typography>
      </Box>

      <StatusEditModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        requestId={requestId}
        requestStatus={requestStatus}
        donateDate={donateDate}
      />

      {!isLoading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}>
          <Box>
            <DataGrid
              sx={{
                width: "100%",
              }}
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 8 },
                },
              }}
              pageSizeOptions={[5, 10]}
              autoHeight
            />
          </Box>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Container>
  );
};

export default MyDonationRequest;
