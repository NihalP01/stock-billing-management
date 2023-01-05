import { Box, Chip, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormLayout from "../common/FormLayout";
import { Controls } from "../controls/Controls";
import { gstData } from "../../data/gstData";

const CreateProductForm = () => {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productGst, setProductGst] = useState("");
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("product_data");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("product_data", JSON.stringify(data));
  }, [data]);

  const handleSubmit = () => {
    const productData = {
      name: productName,
      category: productCategory,
      gst: productGst,
    };
    setData([...data, productData]);
    setOpen(true);
  };

  return (
    <FormLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5" fontWeight={"bold"} textAlign={"left"}>
            Add a new product
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controls.CustomField
                variant={"outlined"}
                size={"small"}
                label={"Product Name"}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.CustomField
                variant={"outlined"}
                size={"small"}
                label={"Category"}
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
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
                    label={item.title}
                    variant={"contained"}
                    size={"medium"}
                    onClick={() => setProductGst(item.value)}
                    color={item.value === productGst ? "primary" : "default"}
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
            <Controls.CustomButton
              text={"Submit"}
              onClick={handleSubmit}
              disabled={
                !productName || !productCategory || productGst.length === 0
              }
            />
          </Box>
          <Controls.CustomDialog
            title="Done"
            content="Product added successfully"
            open={open}
            handleClose={handleClose}
          />
        </Grid>
      </Grid>
    </FormLayout>
  );
};

export default CreateProductForm;
