import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FormLayout from "../common/FormLayout";
import { Controls } from "../controls/Controls";

const PurchaseEntryForm = () => {
  const handleSubmit = () => {
    console.log("jhg");
  };
  return (
    <FormLayout>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5" fontWeight={"bold"} textAlign={"left"}>
              Add a new purchase
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controls.CustomField
                  label="Invoice number"
                  size="small"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <Controls.CustomField
                  label="Invoice date"
                  type="date"
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <Controls.CustomSelect
                  label={"Vendor"}
                  options={[{ id: 1, title: "A", value: 1 }]}
                />
              </Grid>

              <Grid item xs={6}>
                <Controls.CustomSelect
                  label={"Purchase type"}
                  options={[
                    { id: 1, title: "Cash", value: 1 },
                    { id: 2, title: "Credit", value: 2 },
                  ]}
                />
              </Grid>

              <Box
                width={"100%"}
                mt={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Controls.CustomButton text={"Submit"} />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={4}>
          <Grid item xs={6}>
            <Typography variant="h5" fontWeight={"bold"} textAlign={"left"}>
              Add purchased items
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex">
            <Controls.CustomButton color='success' text="Add item" />
          </Grid>
        </Grid>
      </form>
    </FormLayout>
  );
};

export default PurchaseEntryForm;
