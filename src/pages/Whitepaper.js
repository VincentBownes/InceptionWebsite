// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// Images
import cloth from "assets/images/inceptioncloth.jpg"


function Whitepaper() {
return(
    
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
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${cloth})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
    <a href path={window.open(process.env.PUBLIC_URL + '/Whitepaper.pdf')}></a>
    </MKBox>
    </>
    
)
}
export default Whitepaper