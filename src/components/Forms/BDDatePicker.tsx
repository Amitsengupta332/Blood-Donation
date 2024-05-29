"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IDatePicker {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const BDDatePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: IDatePicker) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value, ...field } }) => {
        const dateValue = value ? dayjs(value) : null;
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={label}
              onChange={(date) => onChange(date ? dayjs(date) : null)}
              {...field}
              value={dateValue}
              slotProps={{
                textField: {
                  required: required,
                  fullWidth: fullWidth,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: "outlined",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default BDDatePicker;
