import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { gstData } from "../../data/gstData";
import FormLayout from "../common/FormLayout";
import { Controls } from "../controls/Controls";
import Popup from "../controls/Popup";

const PurchaseEntryForm = () => {
  const handleSubmit = () => {
    console.log("log");
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
            <Popup title="Item description" btnText={"Add item"}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Controls.CustomSelect
                    label="Product"
                    options={[
                      { id: 1, title: "Product 1", value: 1 },
                      { id: 2, title: "Product 2", value: 2 },
                    ]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controls.CustomField
                    label="Quantity"
                    size="small"
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controls.CustomField
                    label="Rate"
                    size="small"
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" textAlign={"left"} gutterBottom>
                    GST
                  </Typography>
                  <Box>
                    {gstData.map((item) => (
                      <Chip
                        key={item.id}
                        style={{
                          padding: "0.8rem",
                          margin: "0.2rem",
                          cursor: "pointer",
                        }}
                        label={item.value}
                        variant={"outlined"}
                        size={"medium"}
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Controls.CustomField label="Total" size="small" />
                </Grid>
              </Grid>
            </Popup>
          </Grid>
        </Grid>
      </form>
    </FormLayout>
  );
};

export default PurchaseEntryForm;
