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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter"

// About Us page sections
import Team from "pages/AboutUs/Team";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import tank from "assets/images/inceptiontank.gif"
import white from "assets/images/White.gif"

function RevenueSharing() {
  return (
    <> 
      <DefaultNavbar
        routes={routes}
        brand = ""
        center
        transparent
      />
      
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${tank})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["5xl"],
                },
              })}
            >
              Revenue Sharing
            </MKTypography>
            
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Here is a description of revenue sharing things. Lots of text goes here about revenue sharing things.
            </MKTypography>
            
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        width="100%"
        back 
        color="dark"
      >
          <Container>
              <Grid container>
                  <Grid container item direction="column" xs={12} sm={12}>
                      <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <MKBox width="100%" component="img" src={white}></MKBox>
                      </Grid>
                      <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <MKTypography>sample text text text</MKTypography>
                      </Grid>
                  </Grid>
              </Grid>
          </Container>
      

      </MKBox>
      
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter />
      </MKBox>

    </>
  );
}

export default RevenueSharing;