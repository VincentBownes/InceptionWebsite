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
import alien from "assets/images/alienHead.png"
import black from "assets/images/black.png"
//import vid from "assests/animation.mp4"

function AboutUs() {
  return (
    <MKBox
      minHeight="100%"
      width="100%"
      back
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `url(${black})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "flex-end",
      }}
    >
      <DefaultNavbar
        routes={routes}
        brand = ""
        center
      />
      
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          
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
            <MKBox
              minHeight="65vh"
              width="55vh"
              back
              sx={{
                backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                    `url(${alien})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",
                placeItems: "flex-end",
              }}
            >
              <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                textAlign: "center",
                
              })}
              >
                Bringing the World NFTs
              </MKTypography>
            </MKBox>
            <MKBox
              minHeight="100vh"
              width="100%"
              back
              sx={{
                backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                    `url(${black})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",
                placeItems: "flex-end",
              }}
            >
              </MKBox>
            
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: -12,
              mb: 4,
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <Team />
          </Card>
        </Grid>      
      </Grid>
      
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter />
      </MKBox>

    </MKBox>
  );
}

export default AboutUs;
