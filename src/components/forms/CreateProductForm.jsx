import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import FormLayout from "../common/FormLayout";
import { Controls } from "../controls/Controls";
import { gstData } from "../../data/gstData";

const CreateProductForm = () => {
  return (
    <FormLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5" fontWeight={'bold'} textAlign={'left'}>Add a new product</Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controls.CustomField
                variant={"outlined"}
                size={"small"}
                label={"Product Name"}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.CustomField
                variant={"outlined"}
                size={"small"}
                label={"Category"}
              />
            </Grid>

            <Grid item>
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
    </FormLayout>
  );
};

export default CreateProductForm;
