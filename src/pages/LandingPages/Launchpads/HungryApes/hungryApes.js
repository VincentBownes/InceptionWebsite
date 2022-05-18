// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKProgress from "components/MKProgress";

// Images
import logo from "assets/images/hungryApesLogo.png"
import BG from "assets/images/hungryApesLaunch.mp4"
import NFT from "assets/images/HungryApes.jpeg"
import inception from "assets/images/inceptionNewLogoWhiteSmall.png"
import twitter from "assets/images/twitter.png"
import instagram from "assets/images/instagram.png"
import discord from "assets/images/discord.png"
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

//import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function HungryApes() {
    return(
        <>
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
                <MKButton id="connectwallet" color="bananaYellow" style={{color: "#ffe135", position:"absolute", top:"8%", right:"5%", margin:"2vh", height: "5vh", width: "auto", boxShadow: "1px 1px 8px 1px rgba(255,255,255,0.5)", zIndex:3}}>
                    <MKTypography color="black" fontWeight="bold">Connect Wallet</MKTypography>
                </MKButton>
                <MKBox
                    width="90%"
                    bgColor="grey-700"
                    height="85vh"
                    style={{backgroundColor:"rgba(74, 74, 74, .65)", borderStyle:"solid", borderColor:"#a68ead", borderWidth:"10px", zIndex:2, display:"flex", justifyContent:"center"}}
                    borderRadius="lg"
                    shadow="md"
                >
                    <div className="column" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignSelf:"center"}}>
                        <img src={logo} width="auto" height="150vh" style={{marginTop:"5%", alignSelf:"center",}}/>
                        <img src={NFT} position="relative" style={{marginTop:"10%", alignSelf:"center", height: "40vh", width: "40vh", borderRadius: "7px", boxShadow: "5px 5px 40px 5px rgba(255,255,255,0.5)",}}></img>
                        <MKProgress  color="info" value={50} style={{alignSelf:"center", marginTop:"10%", width:"90%"}}/>
                        <MKTypography color="white" fontWeight="bold" style={{alignSelf:"center", marginTop:"5%",}}>2500 out of 5000</MKTypography>
                        <MKButton id="mint" color="bananaYellow" style={{alignSelf:"center", marginTop:"5%", height: "5vh", width: "auto", boxShadow: "1px 1px 8px 1px rgba(255,255,255,0.5)", }}>
                            <MKTypography color="black" fontWeight="bold">
                                Mint
                            </MKTypography>

                        </MKButton>
                    </div>
                    
                    

                </MKBox>
                <MKBox display="flex" alignItems="center" marginTop="50px" style={{position: "absolute", left: "42%", bottom: "0%", zIndex:3}}>
                    <a href=''><img src={discord}/></a>
                    <a href=''><img src={twitter}/></a>
                    <a href=''><img src={instagram}/></a>
                    <a href=''><img src={inception}/></a>
                </MKBox>
                <video autoPlay loop muted width="100%" height="auto" style={{zIndex:1, minHeight:"100%", minWidth:"1024px", position:"fixed", top:0, left:0}}>
                    <source src={BG} type="video/mp4"></source>
                </video>
            </MKBox>
            
        
        </>

    );
}

export default HungryApes;