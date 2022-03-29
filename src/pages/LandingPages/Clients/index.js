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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import CustomerCard from "components/CustomerCard";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import HungryApes from "assets/images/HungryApes.jpeg";
import solardex from "assets/images/solardex.jpeg";
import hangoverbears from "assets/images/hangoverbears.jpg";


// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {
  return (
    <>
      <div style={{
        backgroundColor: 'black',
        position:'fixed',
        width:'100%',
        height:'100%',

      }}>
        <DefaultNavbar
          routes={routes}
          brand = ""
          center
        />
        <MKBox
          minHeight="10vh"
          width="100%"
          back
        ></MKBox>
        <Container>
          <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
            <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
              <RotatingCard>
                <RotatingCardFront
                  image={solardex}
                  title={
                    <>
                      Solar Dex
                    </>
                  }
                  description="Quick Description"
                />
                <RotatingCardBack
                  image={solardex}
                  title="Launch Date"
                  description="April 28th, 5:00PM EST"
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                  instagram="https://instagram.com"
                  twitter="https://twitter.com"
                />
              </RotatingCard>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
              <RotatingCard>
                <RotatingCardFront
                  image={hangoverbears}
                  title={
                    <>
                      Hangover Bears
                    </>
                  }
                  description="Quick Description"
                />
                <RotatingCardBack
                  image={hangoverbears}
                  title="Launch Date"
                  description="Early June"
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                  instagram="https://instagram.com"
                  twitter="https://twitter.com"
                />
              </RotatingCard>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
              <RotatingCard>
                <RotatingCardFront
                  image={HungryApes}
                  title={
                    <>
                      Hungry Apes
                    </>
                  }
                  description="Quick Description"
                />
                <RotatingCardBack
                  image={HungryApes}
                  title="Launch Date"
                  description="Late May"
                  action={{
                    type: "internal",
                    route: "/sections/page-sections/page-headers",
                    label: "start with header",
                  }}
                  instagram="https://instagram.com"
                  twitter="https://twitter.com"
                />
              </RotatingCard>
            </Grid>
          </Grid>
        </Container>
      </div>
      
    </>
  );
}

export default ContactUs;
