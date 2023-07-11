//Resume download page

import Download from "../../DataHandler/download";
import styled from "styled-components";
import "./download.css";

const Txt = styled.div`
  color: #146c94;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 101.023%;
`;

function DownloadPage() {
  return (
    <div className="downloadPage_main">
      <Txt>Your resume has been generated</Txt>
      <Txt>successfully.</Txt>
      <Download></Download>                                   //Download Button
    </div>
  );
}
export default DownloadPage;
