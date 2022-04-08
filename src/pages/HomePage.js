// Mui components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from '@mui/material/CardMedia';

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
import Icon from "@mui/material/Icon";



// Routes
import routes from "routes";

// Images
import vid from "assets/images/animation.gif"
import mp4 from "assets/images/animation.mp4"
import black from "assets/images/black.png"
import justAlien from "assets/images/justAlien.gif";
import HungryApes from "assets/images/HungryApes.jpeg";
import solardex from "assets/images/solardex.jpeg";
import hangoverbears from "assets/images/hangoverbears.jpg";

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';


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
              width="100%"                
              sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}
            >
              <video autoPlay loop muted>
                <source src={mp4} type="video/mp4"></source>
                </video>
            </MKBox>
      </MKBox>
      

    <Container>
      <Grid item container justifyContent="center" mt={8}>
        <MKBox>
          <MKTypography variant="h1" fontWeight="bold" color="inceptionPurple" align="center">
            Primary Services
          </MKTypography>
          <MKTypography variant="body1" color="white" align="center">
            Community First, Personalized Services, Exceptional Quality
          </MKTypography>
        </MKBox>
      </Grid>
    </Container>


    <Container>
      <Grid container justifyContent="center" direction="row" spacing={4} mt={8}>
        
        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
        <MKBox 
            
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <SupervisorAccountIcon fontSize="large" sx={{ color: "#cf78fb"}}></SupervisorAccountIcon>
          </MKBox>
          <MKBox>
            <MKTypography variant="h4" fontWeight="bold" color="inceptionPurple" align="center">Discord Management</MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="body1" color="white" align="center" fontSize="medium" >We supply a team of experienced moderators to help manage, grow, and support your discord community.</MKTypography>
          </MKBox>
        </Grid>

        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
        <MKBox 
            
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <BeenhereIcon fontSize="large" sx={{ color: "#cf78fb"}}></BeenhereIcon>
          </MKBox>
          <MKBox>
            <MKTypography variant="h4" fontWeight="bold" color="inceptionPurple" align="center">Strategy Consulting</MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="body1" color="white" align="center" fontSize="medium" >Roadmap creation, whitepaper development, and business consulting with a long term mindset</MKTypography>
          </MKBox>
        </Grid>

        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
        <MKBox 
            
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <GroupsIcon fontSize="large" sx={{ color: "#cf78fb"}}></GroupsIcon>
          </MKBox>
          <MKBox>
            <MKTypography variant="h4" fontWeight="bold" color="inceptionPurple" align="center">Marketing Growth</MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="body1" color="white" align="center" fontSize="medium" >Attracting people to your community using our Social Media expertise</MKTypography>
          </MKBox>
        </Grid>

        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
          <MKBox 
              
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <CodeIcon fontSize="large" sx={{ color: "#cf78fb"}}></CodeIcon>
            </MKBox>
            <MKBox>
              <MKTypography variant="h4" fontWeight="bold" color="inceptionPurple" align="center">Utility Development</MKTypography>
            </MKBox>
            <MKBox>
              <MKTypography variant="body1" color="white" align="center" fontSize="medium">We have the team, you have the idea, lets get to work</MKTypography>
            </MKBox>
        </Grid>

      </Grid>



      <Grid container justifyContent="center" direction="row" spacing={4} mt={8}>

        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
          <MKBox 
              
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
            <ColorLensIcon fontSize="large" sx={{ color: "#cf78fb"}}></ColorLensIcon>
          </MKBox>
          <MKBox>
            <MKTypography variant="h4" fontWeight="bold" color="inceptionPurple" align="center">Art Contracting</MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="body1" color="white" align="center" fontSize="medium" >We have an extensive catelog of trusted artist in the 2d and 3d space for your NFTs and other needs.</MKTypography>
          </MKBox>
        </Grid>
        
        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
        <MKBox 
            
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <RocketLaunchIcon fontSize="large" sx={{ color: "#cf78fb"}}></RocketLaunchIcon>
          </MKBox>
          <MKBox>
            <MKTypography variant="h4" fontWeight="bold" color="inceptionPurple" align="center">Launchpad</MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="body1" color="white" align="center" fontSize="medium" >Personalized launchpad created for your NFT mint. Includes possible SPL-Token and Credit Card integration, bot protection, and much more. </MKTypography>
          </MKBox>
        </Grid>

        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
        <MKBox 
            
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <LocalAtmIcon fontSize="large" sx={{ color: "#cf78fb"}}></LocalAtmIcon>
          </MKBox>
          <MKBox>
            <MKTypography variant="h4" fontWeight="bold" color="inceptionPurple" align="center">Staking</MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="body1" color="white" align="center" fontSize="medium" >A staking site developed just for your project. Many different settings to be able to personalize and develop in order to give your community exactly what they are asking for.</MKTypography>
          </MKBox>
        </Grid>

        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
        <MKBox 
            
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <AccountBalanceIcon fontSize="large" sx={{ color: "#cf78fb"}}></AccountBalanceIcon>
          </MKBox>
          <MKBox>
            <MKTypography variant="h4" fontWeight="bold" color="inceptionPurple" align="center">Escrow Services</MKTypography>
          </MKBox>
          <MKBox>
            <MKTypography variant="body1" color="white" align="center" fontSize="medium" >Mint proceeds for projects that launch with us will be sent to an escrow account. Professionally created contracts will be used for payouts which will be time or milestone based. </MKTypography>
          </MKBox>
        </Grid>

        

      </Grid>

    </Container>

    <Container>
    <Grid container item sx={{ mt: 16 }} alignItems="center" direction="column">
        <MKTypography variant="h2" color="light" textGradient mb={2}>Our Current Clients</MKTypography>
      </Grid>
      <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto",  mt: 8 }}>
        <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
          <RotatingCard>
            <RotatingCardFront
              image={solardex}
              title="Solar Dex"
              description="The First U.S. Based Solana Dex"
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
              description="The first NFT/Tequilla hybrid company"
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
              description="A P2E game based company with its intentions on giving back to the world by feeding the hungry"
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
              twitter="https://twitter.com/HungryApesNFT"
            />
          </RotatingCard>
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