
import { Navigate } from "react-router-dom"
// Material Kit 2 React components
import MKBox from "components/MKBox";


function Whitepaper() {
return(
    
    <>
    <MKBox>
    <a href path={window.open(process.env.PUBLIC_URL + '/Whitepaper.pdf')}></a>
    </MKBox>
    <Navigate to="/" />
    </>
    
)
}
export default Whitepaper