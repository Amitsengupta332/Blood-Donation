/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import StatusEditModal from "./components/StatusEditModal";

const donationRequest = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [requestId, setRequestId] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<string>("");
  const [donateDate, setDonateDate] = useState<string>("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={700} variant="h6">
          Blood Request.
        </Typography>
      </Box>

      <StatusEditModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        requestStatus={requestStatus}
        requestId={requestId}
        donateDate={donateDate}
      />
    </Box>
  );
};

export default donationRequest;
