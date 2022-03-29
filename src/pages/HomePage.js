// Mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKSocialButton from "components/MKSocialButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Routes
import routes from "routes";

// Images
import cloth from "assets/images/inceptioncloth.jpg"
import vid from "assets/images/animation.gif"
import black from "assets/images/black.png"
import justAlien from "assets/images/justAlien.gif";
import tank from "assets/images/inceptiontank.gif"
import logo from "assets/images/inceptionlogo.png"

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import footerRoutes from "footer.routes";

function HomePage() {
  return (
    <MKBox
      minHeight="100%"
      width="100%"
      back
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "flex-end",
      }}
      style={{
        backgroundColor: 'black',
      }}
    >
      <DefaultNavbar
        routes={routes}
        brand = ""
        center
      />
      <MKBox
        minHeight="10vh"
        width="100%"
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
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `url(${vid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "flex-end",
        }}
      >
      </MKBox>

      <Container>
        <Grid container spacing={3} sx={{ mt: 8 }} alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h2"></MKTypography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MKTypography variant="h2" color="inceptionPurpleGradient" textGradient mb={2}>FAQs</MKTypography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <MKTypography variant="h2"></MKTypography>
          </Grid>
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

      <Grid container spacing={3} sx={{ mt: 8 }} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ md: "none", lg:"flex" }}
            width="calc(100% - 4rem)"
            height="calc(100vh - 4rem)"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${justAlien})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKButton
              variant="gradient" color="inceptionPurpleGradient"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Launch With Us
              </MKTypography>
            </MKButton>
            <MKBox p={3}>
              <MKTypography variant="body2" color="black" mb={3}>
                To setup a meeting with the team regarding your NFT project, you must first be an owner of one our Aliens. 
              </MKTypography>
              <MKTypography variant="body2" color="black" mb={3}>
                Then, you may fill out this form, email us at helpmelaunch@gmail.com, or contact us through Twitter or Discord.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Project Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    
                      
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Token Address"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Discord"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Twitter"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Tell us about your project, your team, and how you would like us to assist you"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="inceptionPurpleGradient">
                    Send Message
                  </MKButton>
                  
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <SimpleFooter />
      </MKBox>
    </MKBox>
  );
}

export default HomePage;