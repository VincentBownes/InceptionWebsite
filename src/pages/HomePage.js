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
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";



// Routes
import routes from "routes";

// Images
import vid from "assets/images/animation.gif"
import black from "assets/images/black.png"
import justAlien from "assets/images/justAlien.gif";
import HungryApes from "assets/images/HungryApes.jpeg";
import solardex from "assets/images/solardex.jpeg";
import hangoverbears from "assets/images/hangoverbears.jpg";

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
        transparent
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `url(${black})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
          <MKBox
              component="img"
              width="100%"
              src={vid}
              sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}
            >
            </MKBox>
      </MKBox>
      

      <Container>
      <Grid container item sx={{ mt: 16 }} alignItems="center" direction="column">
          <MKTypography variant="h2" color="light" textGradient mb={2}>Meet some of our current clients</MKTypography>
        </Grid>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto",  mt: 8 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={solardex}
                title="Solar Dex"
                description="Quick Description"
                color="inceptionPurpleGradient"
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
                title="Hangover Bears"
                description="Quick Description"
                color="inceptionPurpleGradient"
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
                title="Hungry Apes"
                description="Quick Description"
                color="inceptionPurpleGradient"
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


    <Container>
    <Grid container sx={{ mt: 8 }} alignItems="center">
      <Grid item xs={12} sm={12} md={5} lg={6} xl={8}>
        <MKBox
          component="img"
          width="100%"
          src={justAlien}
          sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}
        >
        </MKBox>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        lg={6}
        xl={4}
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
    </Container>

    <MKBox pt={6} px={1} mt={6}>
      <SimpleFooter />
    </MKBox>
  </MKBox>
  );
}

export default HomePage;