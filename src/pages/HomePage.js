// Mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Routes
import routes from "routes";

// Images
import pink from "assets/images/pinkInception.jpg";
import cloth from "assets/images/inceptioncloth.jpg"
import tank from "assets/images/inceptiontank.gif"
import logo from "assets/images/inceptionlogo.png"

function HomePage() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        brand = ""
        center
      />

      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${cloth})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "flex-end",
        }}
      >
      <Container>
        <Grid
          container
          item
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <MKTypography variant="h2">Coming soon </MKTypography>
          <MKTypography variant="h2" color="inceptionPurpleGradient" textGradient mb={2}>
            1,679,477+ New NFTs
          </MKTypography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <MKBox
            component="img"
            width="100%"
            src={logo}
            sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}
          />
        </Grid>
      </Container>
      </MKBox>

    <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${tank})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end"
        }}
      >
      <Container>
        <Grid
          container
          item 
          placeItems="center"
          sx={{ textAlign: "center"}}
        >
          <MKTypography variant="h2" color="light">Welcome! to the Inception website. Important things can go here! text</MKTypography>
        </Grid>
      </Container>
      </MKBox>
      
      <Container>
          <Grid container spacing={3} sx={{ mt: 8 }}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="dark"
                title="NFTs"
                description="My first thought was, he lied in every word, That hoary cripple, with malicious eye Askance to watch the workings of his lie"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="dark"
                title="Moar NFTs"
                description="On mine, and mouth scarce able to afford Suppression of the glee, that pursed and scored"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="dark"
                title="All the NFTs"
                description=" Its edge, at one more victim gained thereby. What else should he be set for, with his staff? "
              />
            </Grid>
          </Grid>
        </Container>

        <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          xl={4}
          xxl={4}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Road map</MKTypography>
          <MKTypography variant="h2" color="inceptionPurpleGradient" textGradient mb={2}>
            Our plan going forward
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            We are going to make lots of NFTs and this is where we are going to tell you about them.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="light"
              name="Phase 1"
              date="3 weeks"
              review="We are going to do this stuff in phase 1"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="dark"
              name="Phase 2"
              date="4 weeks"
              review="We are going to do this stuff for phase 2 by the 4 week mark."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="light"
              name="Phase 3"
              date="2 months"
              review="This is stuff we will do in phase 3 by the 2 month mark"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
      </>
  );
}

export default HomePage;