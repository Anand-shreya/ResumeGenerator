//Template page
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./temp.css";


//Importing images 
import temp1 from "./tempImg/temp1.png";
import temp2 from "./tempImg/temp2.png";
import temp3 from "./tempImg/temp3.png";


import Head from "../head";
import UploadTemp from "../../DataHandler/uploadtemp";

const TempStyle = styled.div`
  width: 223.86px;
  height: 315.991px;
  border-radius: 33.5px;
  background: #146c94;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 19px;
`;
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
  position: relative;
  top: 100px;
`;
const Txt = styled.button`
  border: 0px;
  background-color: #146c94;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 101.023%;
  &:active {
    background: #fff;
  }
`;

function Temp_page() {
  const [TempType, setTempType] = useState({ temp_type: "1" });                         // State to handle template type
  const navigate = useNavigate();

  const handleGenerate = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(TempType),
      redirect: "follow",
    }).then((res) => {
      console.log(res);
      alert("Resume Generated successfully");
      navigate("/download");
    });
  };

  return (
    <form className="temp_page_main">
      <Head num="2" step="Choose Template" w="430px" h="73px"></Head>
      <div className="temp_page_tempCon ">
        <TempStyle
          value="1"
          onClick={(e) => {
            setTempType({ temp_type: "1" });
            console.log(TempType);
          }}
        >
          <img className="temp_page_img" src={temp1} alt="" />
          <Txt>Template 1</Txt>
        </TempStyle>

        <TempStyle
          value="2"
          onClick={(e) => {
            setTempType({ temp_type: "2" });
            console.log(TempType);
          }}
        >
          <img className="temp_page_img" src={temp2} alt="" />
          <Txt>Template 2</Txt>
        </TempStyle>

        <TempStyle
          value="3"
          onClick={(e) => {
            setTempType({ temp_type: "3" });
            console.log(TempType);
          }}
        >
          <img className="temp_page_img" src={temp3} alt="" />
          <Txt>Template 3</Txt>
        </TempStyle>

        <Or>OR</Or>

        <TempStyle
          onClick={(e) => {
            setTempType({ temp_type: "4" });
            console.log(TempType);
          }}
        >
          <UploadTemp></UploadTemp>                             //To upload custom Template
          <Txt>Custom Template</Txt>
        </TempStyle>
      </div>
      <button
        className="generate_btn"
        type="submit"
        onClick={handleGenerate}
      >
        Generate Resume
      </button>
    </form>
  );
}
export default Temp_page;
