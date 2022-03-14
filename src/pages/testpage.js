// Mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";



// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";


// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

// Routes
import routes from "routes";

// Images
import pink from "assets/images/pinkInception.jpg";
import cloth from "assets/images/inceptioncloth.jpg"
import tank from "assets/images/inceptiontank.gif"
import logo from "assets/images/inceptionlogo.png"

function Testpage() {
  return (
      <>
      <DefaultNavbar
        routes={routes}
        icon = "/assets/images/apple-icon.png"
        brand = ""
        center
        sticky
      />

      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${cloth})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        
      <Container>
      <Grid
        container
        item
        xs={6}
        lg={6}
        justifyContent="left"
        sx={{ textAlign: "left", position: "relative", bottom: "250px"}}
      >
        <MKTypography variant="h2">Coming soon</MKTypography>
        <MKTypography variant="h2" color="inceptionLightPurple" mb={2}>
          1,679,477+ New NFTs
        </MKTypography>
      </Grid>

      
      </Container>

      </MKBox>

    <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${tank})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
      </MKBox>
      
      <Container>
          <Grid container spacing={3} justifyContent="center" mx="auto">
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
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>







      </>

  
  
  
  );


}

export default Testpage;