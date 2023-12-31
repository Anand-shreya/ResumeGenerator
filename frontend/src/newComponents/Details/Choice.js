// Choice page; upload JSON or Enter Manually

import UploadData from "../../DataHandler/uploaddata";
import Head from "../head";
import "./Details.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Or = styled.div`
  width: 102px;
  height: 102px;
  flex-shrink: 0;
  background-color: #146c94;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f6f1f1;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 101.023%;
  z-index: 1;
`;

function Choice() {

  return (
    <div className="choice_main">
      <Head num="1" step="Upload data" w="430px" h="73px"></Head>
      <div className="choice_input">

        <div className="choice_form">
          <UploadData
            className="choice_json"
          ></UploadData>
        </div>

        <Or>Or</Or>

        <NavLink className="choice_form" to="/dataform">
          Update Manually
        </NavLink>

      </div>
    </div>
  );
}
export default Choice;
