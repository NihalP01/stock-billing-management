import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controls } from "../controls/Controls";
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)({
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
  position: "absolute",
  justifyContent: "center",
});

const Homepage = () => {
  document.body.style =
    "background: linear-gradient(90deg, rgb(249, 249, 249) 0%, rgb(242, 228, 255) 33%, rgb(255 240 240) 66%, rgb(255, 255, 255) 100%);";

  const handleClick = () => {
    window.location.href = "/stock";
  } 

  return (
    <Box>
      <Box width={"100%"}>
        <StyledGrid container spacing={6}>
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
            <Controls.CustomButton
              text={"Start for free"}
              style={{
                marginTop: "2rem",
                width: "10rem",
                fontSize: "1rem",
                padding: "0.5rem",
              }}
              onClick={handleClick}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/bg.png`}
              width={"500px"}
            />
          </Grid>
        </StyledGrid>
      </Box>
    </Box>
  );
};

export default Homepage;
