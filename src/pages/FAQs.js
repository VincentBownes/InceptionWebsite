/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import MKTypography from "components/MKTypography";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import MKBox from "components/MKBox";


// Routes
import routes from "routes";


function FAQs() {
  return (
    <>
        <DefaultNavbar
          routes={routes}
          brand = ""
          center
          transparent
        />
       <MKBox
          minHeight="10vh"
          width="100%"
          back
        ></MKBox>
      <Container>
        <Grid container item sx={{ mt: 2 }} alignItems="center" direction="column">
          <MKTypography variant="h2" alignText="center" color="inceptionPurpleGradient" textGradient mb={2}>FAQs</MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }} alignItems="center">
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="gradient"
              color="dark"
              title="Why Should I Use An Agency"
              description="Answer 1"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="gradient"
              color="dark"
              title="What Is An Escrow"
              description="This is an example answer for what is an escrow. We talk about what an escrow is right here"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="gradient"
              color="dark"
              title="Another Question"
              description="Just fucking read the white paper "
            />
          </Grid>
        </Grid>
      </Container>

    </>
  );
}

export default FAQs;
