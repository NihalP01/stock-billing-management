import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controls } from "../controls/Controls";

const Homepage = () => {
  return (
    <Box>
      <Box width={"100%"}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography textAlign={"left"} fontWeight="bold" variant="h2">
              Get paid faster and grow your business
            </Typography>
            <Typography textAlign={"left"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
              nibh et justo vulputate consequat. Quisque facilisis mi ut
              convallis ornare. Etiam facilisis mattis quam, eget elementum ante
              tincidunt et. Aenean varius sollicitudin massa, eu feugiat ipsum
              varius a. Sed euismod dictum pellentesque.
            </Typography>
            <Controls.CustomButton text={"Start for free"} />
          </Grid>
          <Grid item xs={4}>
            <Typography>This is section 2</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Homepage;
