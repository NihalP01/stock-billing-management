import { Box, Chip, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { gstData } from "../../data/gstData";
import { tableColumns } from "../../data/tabelsColumns";
import FormLayout from "../common/FormLayout";
import { Controls } from "../controls/Controls";
import Popup from "../controls/Popup";

const PurchaseEntryForm = () => {
  const [invoiveNo, setInvoiveNo] = useState("");
  const [invoiceDate, setInvoiveDate] = useState("");
  const [vendor, setVendor] = useState("");
  const [type, setType] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [gst, setGst] = useState("");
  const [total, setTotal] = useState("");
  const [open, setOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const [addedPurchase, setAddedPurchase] = useState(() => {
    const savedData = localStorage.getItem("added_purchase");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  const [addedItems, setAddedItems] = useState([]);

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const handlePopupClose = (e) => {
    e.preventDefault();
    setPopupOpen(false);
  };

  // useEffect(() => {
  //   localStorage.setItem("added_items", JSON.stringify(addedItems));
  // }, [addedItems]);

  useEffect(() => {
    setTotal(rate * quantity + (rate * quantity * gst) / 100);
  }, [quantity, rate, gst]);

  const handleAdd = () => {
    const item = {
      product,
      quantity,
      rate,
      gst,
      total,
    };
    setAddedItems([...addedItems, item]);
    setOpen(false);
    setProduct("");
    setQuantity("");
    setRate("");
    setGst("");
    setTotal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const purchase = {
      invoiveNo,
      invoiceDate,
      vendor,
      type,
      addedItems,
    };
    setAddedPurchase([...addedPurchase, purchase]);
    setInvoiveNo("");
    setInvoiveDate("");
    setVendor("");
    setType("");
    setPopupOpen(true);
    setAddedItems([]);
  };

  useEffect(() => {
    localStorage.setItem("added_purchase", JSON.stringify(addedPurchase));
  }, [addedPurchase]);

  console.log(addedPurchase);

  return (
    <FormLayout>
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
                value={invoiveNo}
                type="number"
                onChange={(e) => setInvoiveNo(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.CustomField
                label="Invoice date"
                type="date"
                size="small"
                value={invoiceDate}
                onChange={(e) => setInvoiveDate(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Controls.CustomSelect
                label={"Vendor"}
                options={[
                  { id: 1, title: "Vendor A", value: "Vendor A" },
                  { id: 2, title: "Vendor B", value: "Vendor B" },
                  { id: 3, title: "Vendor C", value: "Vendor C" },
                ]}
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <Controls.CustomSelect
                label={"Purchase type"}
                options={[
                  { id: 1, title: "Cash", value: 1 },
                  { id: 2, title: "Credit", value: 2 },
                ]}
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={4}>
        <Grid item xs={6}>
          <Typography variant="h5" fontWeight={"bold"} textAlign={"left"}>
            Add purchased items
          </Typography>
        </Grid>
        <Grid item>
          <Controls.CustomButton
            text={"Add item"}
            onClick={() => setOpen(true)}
          />
        </Grid>
        <Grid item xs={4} display="flex">
          <Popup
            title="Item description"
            btnText={"Add item"}
            open={open}
            handleClose={handleClose}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controls.CustomSelect
                  label="Product"
                  options={[
                    { id: 1, title: "Product 1", value: "Product 1" },
                    { id: 2, title: "Product 2", value: "Product 2" },
                  ]}
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Controls.CustomField
                  label="Quantity"
                  size="small"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Controls.CustomField
                  label="Rate"
                  size="small"
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
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
                      label={item.title}
                      variant={"contained"}
                      size={"medium"}
                      onClick={() => setGst(item.value)}
                      color={item.value === gst ? "primary" : "default"}
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Controls.CustomField
                  label="Total"
                  disabled
                  size="small"
                  value={total}
                />
              </Grid>
            </Grid>
            <Box
              mt={2}
              p={2}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <Box
                width={"220px"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Controls.CustomButton
                  text={"Add"}
                  onClick={handleAdd}
                  disabled={!product || !quantity || !rate || !gst}
                />
                <Controls.CustomButton
                  text={"Cancel"}
                  color="error"
                  onClick={handleClose}
                />
              </Box>
            </Box>
          </Popup>
        </Grid>
        {addedItems && addedItems.length > 0 && (
          <Box>
            <Controls.CustomTable
              addedItems={addedItems}
              columns={tableColumns}
            />
          </Box>
        )}

        <Box
          width={"100%"}
          mt={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Controls.CustomButton
            text={"Submit"}
            onClick={handleSubmit}
            disabled={
              addedItems.length === 0 ||
              !invoiveNo ||
              !invoiceDate ||
              !vendor ||
              !type
            }
          />
        </Box>
        <Controls.CustomDialog
          title="Done"
          content="Item added successfully"
          open={popupOpen}
          handleClose={handlePopupClose}
        />
      </Grid>
    </FormLayout>
  );
};

export default PurchaseEntryForm;
