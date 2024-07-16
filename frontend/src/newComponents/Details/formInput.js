//Form to enter detail manually
import SkillsCard from "./SkillCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import AchievementsCard from "./AchievementsCard";
import styled from "styled-components";
import Head from "../head";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tag = styled.div`
  width: 317px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 23px;
  background: #19a7ce;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 101.023%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  width: 548px;
  height: content-fit;
  flex-shrink: 0;
  border-radius: 35px;
  background: #f6f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 47px 67px;
`;

function FormInput() {

  const [Detail, setDetail] = useState({});                 // State to Handle user input
  const navigate = useNavigate();

  const handleSkillCallback = async (childData) => {
    setDetail((Detail) => ({ ...Detail, Skills: childData }));
  };

  const handleEducationCallback = (childData) => {
    setDetail((Detail) => ({ ...Detail, Education: childData }));
  };

  const handleExperienceCallback = (childData) => {
    setDetail((Detail) => ({ ...Detail, Experience: childData }));
  };

  const handleAchievementCallback = (childData) => {
    setDetail((Detail) => ({ ...Detail, Achievements: childData }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch("http://localhost:8000/formData", {
      // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = 'https://resumegenerator-952f.onrender.com/formData';
      fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Detail, null, 2),
    }).then((res) => {
        console.log(res)
      alert("Successfully submited");
      navigate("/temp");
    });
  };

  return (
    <div className="fi_main">
        <div className="fi_head">
            <Head num="1" step="Upload data" w="430px" h="73px"></Head>
        </div>
      <form className="fi_form" onSubmit={handleSubmit}>
        <div className="fi_form_each">                                                 {/* //Personal Information section*/}
          <Tag>a. Personal Information</Tag>
          <Box>
            <div className="name">
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="First Name"
                onChange={(e) => {
                  // console.log(e.target.value);
                  setDetail((Detail) => ({ ...Detail, Name: e.target.value }));
                  // console.log(Detail);
                }}
                required
              />

              <input
                type="text"
                id="LastName"
                name="LastName"
                placeholder="Last Name"
                onChange={(e) => {
                  // console.log(e.target.value);
                  setDetail((Detail) => ({
                    ...Detail,
                    LastName: e.target.value,
                  }));
                  // console.log(Detail);
                }}
                required
              />
            </div>
            <input
              type="email"
              id="EmailAddress"
              name="EmailAddress"
              placeholder="Email ID"
              onChange={(e) => {
                setDetail((Detail) => ({
                  ...Detail,
                  EmailAddress: e.target.value,
                }));
              }}
              required
            />

            <input
              type="tel"
              id="PhoneNumber"
              name="PhoneNumber"
              placeholder="Phone"
              onChange={(e) => {
                setDetail((Detail) => ({
                  ...Detail,
                  PhoneNumber: e.target.value,
                }));
              }}
              required
            />

            <input
              type="text"
              id="LinkedIn"
              name="LinkedIn"
              placeholder="LinkedIn ID"
              onChange={(e) => {
                setDetail((Detail) => ({
                  ...Detail,
                  LinkedIn:
                    '<a href="https://www.linkedin.com">' +
                    e.target.value +
                    "</a>",
                }));
              }}
              required
            />
          </Box>
        </div>

        <div className="fi_form_each">                                         {/* //Job section*/}
          <Tag>b. Job</Tag>
          <Box>
            <input
              type="text"
              id="JobTitle"
              name="JobTitle"
              placeholder="Job title"
              onChange={(e) => {
                setDetail((Detail) => ({
                  ...Detail,
                  JobTitle: e.target.value,
                }));
              }}
              required
            />

            <textarea
              id="summary"
              name="Summary"
              placeholder="Career Objective"
              onChange={(e) => {
                setDetail((Detail) => ({ ...Detail, Summary: e.target.value }));
              }}
              required
            ></textarea>
          </Box>
        </div>

        <div className="fi_form_each">                                                  {/*//Skill section*/}
          <Tag>c. Skills</Tag>
          <Box>
            <SkillsCard
              className="card"
              parentCallback={handleSkillCallback}
            ></SkillsCard>
          </Box>
        </div>

        <div className="fi_form_each">                                                  {/* //Education Section*/}
          <Tag>d. Education</Tag>
          <Box>
            <EducationCard
              parentCallback={handleEducationCallback}
            ></EducationCard>
          </Box>
        </div>

        <div className="fi_form_each">                                                 {/* //Experince section*/}
          <Tag>e. Experience</Tag>
          <Box>
            <ExperienceCard
              parentCallback={handleExperienceCallback}
            ></ExperienceCard>
          </Box>
        </div>

        <div className="fi_form_each">                                                  {/* //Achievement*/}
          <Tag>f. Achievements</Tag>
          <Box>
            <AchievementsCard
              parentCallback={handleAchievementCallback}
            ></AchievementsCard>
          </Box>
        </div>

        <input
          type="submit"
          className="fi_next_btn"
          value="Choose Template"
        ></input>
      </form>
    </div>
  );
}
export default FormInput;
