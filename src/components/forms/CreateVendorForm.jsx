import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import FormLayout from "../common/FormLayout";
import { Controls } from "../controls/Controls";
import { states } from "../../data/states";

const CreateVendorForm = () => {
  const [state, setState] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controls.CustomField label="Vendor name" size="small" />
          </Grid>
          <Grid item xs={12}>
            <Controls.CustomField
              label="Vendor address"
              size="small"
              multiline={true}
              rows={3}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.CustomSelect
              label={"State"}
              value={state}
              onChange={(e) => setState(e.target.value)}
              options={states}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.CustomField label="PIN" type={"number"} size="small" />
          </Grid>
          <Grid item xs={12}>
            <Controls.CustomField
              label="GST Number"
              inputProps={{ style: { textTransform: "uppercase" } }}
              size="small"
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
      </form>
    </FormLayout>
  );
};

export default CreateVendorForm;
