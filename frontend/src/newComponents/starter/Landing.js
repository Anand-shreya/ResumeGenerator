//Landing Page
import styled  from "styled-components";
import Head from "../head";
import { NavLink } from 'react-router-dom'
import "./landing.css";

const Txt = styled.div`
color: #146C94;
font-family: Inter;
font-size: 50px;
font-style: normal;
font-weight: 700;
line-height: 101.023%;
`
function Landing(){
    return(
        <div className="landing_main">
            <Txt>Create your resume in </Txt>
            <Txt>two simple steps.</Txt>
            <div className="landing_step">
                <Head num="1" step="Upload data" w="349px" h="212px"></Head>
                <Head num="2" step="Select template" w="349px" h="212px"></Head>
            </div>
            <NavLink className="start_btn" to='/dataChoice' >Let’s begin</NavLink>
        </div>
    )
}
export default Landing;