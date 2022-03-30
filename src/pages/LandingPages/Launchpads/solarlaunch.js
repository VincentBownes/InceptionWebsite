// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKProgress from "components/MKProgress";

// Images
import BG from "assets/images/solarlaunchBG.png"
import NFT from "assets/images/solardexNFT.jpg"
import logo from "assets/images/solardexLogo.png"
import apesBG from "assets/images/hungryApesLaunch.png"
import apesNFT from "assets/images/HungryApes.jpeg"
import inception from "assets/images/inceptionNewLogoWhiteSmall.png"
import twitter from "assets/images/twitter.png"
import instagram from "assets/images/instagram.png"
import discord from "assets/images/discord.png"
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function solarlaunch() {
    return(
        <>
            <MKBox
                minHeight="100vh"
                width="100%"
                sx={{
                backgroundImage: `url(${BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",
                placeItems: "center",
                }}
            >
                <MKBox
                    width="90%"
                    bgColor="grey-700"
                    height="80vh"
                    style={{backgroundColor:"rgba(74, 74, 74, .65)", borderStyle:"solid", borderColor:"#a68ead", borderWidth:"10px"}}
                    borderRadius="lg"
                    shadow="md"
                >
                    <div style={{ display: "flex", justifyContent: 'flex-end'}}>
                        <MKButton id="connectwallet" color="inceptionPurple" style={{margin:"2vh", height: "5vh", width: "auto", boxShadow: "1px 1px 8px 1px rgba(255,255,255,0.5)"}}>
                            <MKTypography color="white" >
                                Connect Wallet
                            </MKTypography>
                        </MKButton>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: 'center', }}>
                        <MKTypography style={{fontWeight:"900", fontSize:"2.5em",  color:"rgb(255, 255, 255)", fontFamily:"righteous",}}>Solar Dex</MKTypography>
                        <img src={logo} width="125px" height="100px"/>
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center'}}>
                        <img src={NFT} style={{height: "40vh", width: "auto", borderRadius: "7px", boxShadow: "5px 5px 40px 5px rgba(255,255,255,0.5)",}}>
                        </img>

                    </div>
                    <div style={{ display: "flex", justifyContent: 'center',}}>
                        <MKProgress  color="info" value={50} style={{marginTop:"30px", width:"50%"}}/>
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center', margin:"15px"}}>
                        <MKTypography color="white" fontWeight="bold" >
                            2500 out of 5000
                        </MKTypography>
                    </div>
                    <div style={{ display: "flex", position: "absolute", left: "47%", bottom: "14%", }}>
                        <MKButton id="mint" color="inceptionPurple" style={{height: "5vh", width: "auto", boxShadow: "1px 1px 8px 1px rgba(255,255,255,0.5)", }}>
                            <MKTypography color="white" >
                                Mint
                            </MKTypography>

                        </MKButton>
                    </div>
                    
                    
                    <MKBox display="flex" alignItems="center" marginTop="50px" style={{position: "absolute", left: "42%", bottom: "0px",}}>
                        <a href=''><img src={discord}/></a>
                        <a href=''><img src={twitter}/></a>
                        <a href=''><img src={instagram}/></a>
                        <a href=''><img src={inception}/></a>
                    </MKBox>

                </MKBox>
                
            </MKBox>
            
        
        </>

    );
}

export default solarlaunch;