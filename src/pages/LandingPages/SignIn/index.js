/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";
import team5 from "assets/images/Red.gif";
import tank from "assets/images/inceptiontank.gif";

//Cards
import RotatingCard from "examples/Cards/RotatingCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

function SignInBasic() {


  return (
    <>
      <DefaultNavbar
        routes={routes}
        center
      />
      <div style={{height:"100px", width:"100%"}}>

      </div>

      
      
      <MKBox 
        height="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `url(${tank})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "flex-end",
        }}
        
        >
          
        
          <Card style={{width:"500px", height:"35%", marginBottom:"50%", marginTop:"50%", marginRight:"10%", justifyContent:"center"}}>
            <MKButton color="inceptionPurple" style={{width:"250px", marginRight:"5%"}}>
              Connect Wallet
            </MKButton>
            
          </Card>
      </MKBox>
      <Container>
          <MKTypography>Upcoming Launches</MKTypography>
          <Grid container item xs={11} spacing={3} alignItems="left" >
            <Grid item xs={12} lg={4} >
              <BackgroundBlogCard
              image={team5}
              title="Inception Aliens"
              description="May 7th, 2022 5pm EST"
              action={{
                type: "external",
                route: "https://launchpad.inceptionaio.com",
                label: "Launch Pad",
              }}
            />
            </Grid>
            
            </Grid>
        </Container>
      
    </>
  );
}

export default SignInBasic;
