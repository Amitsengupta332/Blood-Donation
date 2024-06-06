import BDDatePicker from "@/components/Forms/BDDatePicker";
import BDForm from "@/components/Forms/BDForm";
import BDSelectField from "@/components/Forms/BDSelectField";
import { BloodGroups, DonorType, districts } from "@/types";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import { FieldValues } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFormValues {
  bloodType?: string;
  donateOption?: string;
  dateOfBloodDonation?: Date | null;
}
interface SearchDonorProps {
  search: SearchFormValues;
  setSearch: (values: SearchFormValues) => void;
}

const SearchDonor = ({ search, setSearch }: SearchDonorProps) => {
  const handleSearch = async (values: FieldValues) => {
    console.log(values);

    let searchObj = {};

    if (values?.donorType == "Eligible") {
      console.log("clicked");
      searchObj = {
        bloodType: values?.bloodType,
        location: values?.district,
        availability: true,
      };
    } else {
      searchObj = {
        bloodType: values?.bloodType,
        location: values?.district,
      };
    }

    console.log(searchObj);

    setSearch(searchObj);
  };
  return (
    <Container>
      <Box>
        <BDForm onSubmit={handleSearch}>
          <Stack
            direction={{ md: "row", sm: "column", xs: "column" }}
            gap={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Grid container spacing={2} my={1}>
              <Grid item xs={12} sm={12} md={4}>
                <BDSelectField
                  items={BloodGroups}
                  name="bloodType"
                  label="Blood Group"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <BDSelectField
                  items={districts}
                  name="district"
                  label="District"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <BDDatePicker
                  name="dateOfBloodDonation"
                  label="Date of Blood Donation"
                />
              </Grid>
            </Grid>
            <Button
              sx={{
                mt: { xs: 0, sm: 0, md: 2 }, // Responsive margin-top
                width: { xs: "100%", sm: "100%", md: "auto" }, // Responsive width
              }}
              fullWidth={true}
              type="submit">
              <SearchIcon />
              Search
            </Button>
          </Stack>
        </BDForm>
      </Box>
    </Container>
  );
};

export default SearchDonor;
