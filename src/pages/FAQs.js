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

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import MKTypography from "components/MKTypography";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import MKBox from "components/MKBox";
import SimpleFooter from "examples/Footers/SimpleFooter";



// Routes
import routes from "routes";


function FAQs() {
  return (
    <>
        <DefaultNavbar
          routes={routes}
          brand = ""
          center
          transparent
        />
       <MKBox
          minHeight="10vh"
          width="100%"
          back
        ></MKBox>
      <Container>
        <Grid container item sx={{ mt: 2 }} alignItems="center" direction="column">
          <MKTypography variant="h2" aligntext="center" color="inceptionPurpleGradient" textGradient mb={2}>FAQs</MKTypography>
        </Grid>
        
      </Container>
      <Container>
      <Grid container justifyContent="center" direction="row" spacing={4} mt={8}>
        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
          <MKBox
            width="100%"
            minHeight="50vh"
            color="white"
            bgColor="inceptionPurpleGradient"
            variant="gradient"
            borderRadius="lg"
            shadow="lg"
            opacity={1}
            p={2}
          >
            What is an NFT? 
            <MKTypography variant="body1" color="white" align="center" fontSize="medium">
            A non-fungible token (NFT) is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, 
            that can be sold and traded. Types of NFT data units may be associated with digital files such as photos, videos, 
            and audio. Because each token is uniquely identifiable, NFTs differ from blockchain cryptocurrencies, such as Bitcoin. 
            To put it in simplistic terms, think of an NFT as a unique, one of a kind trading card.  
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
          <MKBox
            width="100%"
            minHeight="50vh"
            color="white"
            bgColor="inceptionPurpleGradient"
            variant="gradient"
            borderRadius="lg"
            shadow="lg"
            opacity={1}
            p={2}
          >
            What can I do with an NFT? 
            <MKTypography variant="body1" color="white" align="center" fontSize="medium">
            With NFT’s the sky's the limit. An NFT can be used to bridge the gap between real world value and virtual world value. 
            By owning an NFT you can stake it, earning a range of value back in the form of virtual currency from just holding your investment. 
            This virtual currency can be used for purchases such as Raffle Entries, Mystery Boxes, NFT evolutions and so much more.
            Think of your NFT like WIlly Wonka’s Golden Ticket. With this NFT you can provide real life value in the form of entrance 
            to exclusive VIP style events, Brand Trips, Goodie Bags, the works!
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid container item alignItems="center" direction="column" xs={12} sm={12} md={6} lg={3} xl={3}>
          <MKBox
            width="100%"
            minHeight="50vh"
            color="white"
            bgColor="inceptionPurpleGradient"
            variant="gradient"
            borderRadius="lg"
            shadow="lg"
            opacity={1}
            p={2}
          >
            Can you sell a NFT? 
            <MKTypography variant="body1" color="white" align="center" fontSize="medium">
            Yes! You can sell these one of a kind trading cards on a marketplace like Magic Eden. Providing you with 
            real USD value in both the short term and the long term.
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Container>
    <MKBox pt={6} px={1} mt={6}>
      <SimpleFooter />
    </MKBox>

    </>
  );
}

export default FAQs;
