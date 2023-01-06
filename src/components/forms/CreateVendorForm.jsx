import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormLayout from "../common/FormLayout";
import { Controls } from "../controls/Controls";
import { states } from "../../data/states";

const CreateVendorForm = () => {
  const [vendorName, setVendorName] = useState("");
  const [state, setState] = useState("");
  const [vendorAddress, setVendorAddress] = useState("");
  const [pin, setPin] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [vendorData, setVendorData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    const data = {
      vendorName,
      state,
      vendorAddress,
      pin,
      gstNumber,
    };
    setVendorData([...vendorData, data]);
    setVendorName("");
    setState("");
    setVendorAddress("");
    setPin("");
    setGstNumber("");
    setOpen(true);
  };

  useEffect(() => {
    localStorage.setItem("added_vendor", JSON.stringify(vendorData));
  }, [vendorData]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5" fontWeight={"bold"} textAlign={"left"}>
            Add a new vendor
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controls.CustomField
                label="Vendor name"
                size="small"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.CustomField
                label="Vendor address"
                size="small"
                multiline={true}
                rows={3}
                value={vendorAddress}
                onChange={(e) => setVendorAddress(e.target.value)}
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
              <Controls.CustomField
                label="PIN"
                type={"number"}
                limit={6}
                size="small"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.CustomField
                label="GST Number"
                inputProps={{ style: { textTransform: "uppercase" } }}
                size="small"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
              />
            </Grid>
            <Box
              width={"100%"}
              mt={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Controls.CustomButton
                text={"Submit"}
                onClick={handleSubmit}
                disabled={
                  !vendorName ||
                  !vendorAddress ||
                  !pin ||
                  !gstNumber ||
                  !state ||
                  !gstNumber
                }
              />
            </Box>
          </Grid>
        </Grid>
        <Controls.CustomDialog
          title="Done"
          content="Vendor added successfully"
          open={open}
          handleClose={handleClose}
        />
      </Grid>
    </FormLayout>
  );
};

export default CreateVendorForm;
