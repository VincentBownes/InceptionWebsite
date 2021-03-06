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
import cloth from "assets/images/cloth.jpg"
import discordIcon from "assets/images/shapes/discord.png"
import EmailIcon from '@mui/icons-material/Email';

function AboutUs() {
  return (
    <div sx={{
          backgroundImage: `url(${cloth})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          placeItems: "center",
        }}
        style={{width:"100%", height:"100%"}}
        >
      
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
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${cloth})`,
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
              Meet our dedicated team
            </MKTypography>
            
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                  <img src={discordIcon} height="30vh"></img>
                </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <EmailIcon />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.state, 0.6),
              rgba(gradients.dark.main, 0.6)
              
            )}, url(${cloth})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
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

      </MKBox>
      
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter />
      </MKBox>

    </div>
  );
}

export default AboutUs;