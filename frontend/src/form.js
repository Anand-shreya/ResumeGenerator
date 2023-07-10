import { useState } from "react";

//importing template images
import temp1 from "./tempImg/temp1.png";
import temp2 from "./tempImg/temp2.png";
import temp3 from "./tempImg/temp3.png";

// importing React Components
import EducationCard from "./EducationCard";            // Dynamic Education section
import SkillsCard from "./SkillCard";                   // Dynamic Skill section
import ExperienceCard from "./ExperienceCard";          // Dynamic Experience section
import AchievementsCard from "./AchievementsCard";      // Dynamic Achievements section

import UploadData from "./uploaddata";                  // Upload Data entered in form by user
import UploadTemp from "./uploadtemp";                  // Upload Custom Template
import Download from "./download";                      // Download Generated Resume


function Form() {

    const [Detail, setDetail] = useState({ temp_type: "1" });       // State to Handle user input
    const [Temp, setTemp] = useState({ temp_type: "1" });           // State to handle template type
    const [isDetailEntered, setIsDetailEntered] = useState(false);  // To keep Track, Data Entered or Not
    

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


    const handleUploadCallback = (childData) => {
        setIsDetailEntered(true);
        console.log(isDetailEntered);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/formData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Detail, null, 2),
            redirect: "follow",
        }).then((res) => {
            setIsDetailEntered(true);
            alert("Successfully submited");
        });
    };

    const handleGenerate = (e) => {
        e.preventDefault();

        //if Details not entered return
        if (!isDetailEntered) return;

        fetch("http://localhost:8000/resume", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Temp),
            redirect: "follow",
        }).then((res) => {
            console.log(res);
            alert("Resume Generated successfully")
        });
    };



    return (
        <div className="main_container">
            <div className="detail">
                <h2>Upload data in JSON format</h2>
                <UploadData parentCallback={handleUploadCallback}></UploadData>
                <h2>OR</h2>
                <form
                    action=""
                    onSubmit={handleSubmit} >
                    <div className="form">
                        <h3>Personal Information</h3>
                        <label htmlFor="Name">First Name:</label>
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

                        <label htmlFor="LastName">Last Name:</label>
                        <input
                            type="text"
                            id="LastName"
                            name="LastName"
                            placeholder="Last Name"
                            onChange={(e) => {
                                // console.log(e.target.value);
                                setDetail((Detail) => ({ ...Detail, LastName: e.target.value }));
                                // console.log(Detail);
                            }}
                            required
                        />

                        <label htmlFor="EmailAddress">Email:</label>
                        <input
                            type="email"
                            id="EmailAddress"
                            name="EmailAddress"
                            placeholder="Email"
                            onChange={(e) => {
                                setDetail((Detail) => ({
                                    ...Detail,
                                    EmailAddress: e.target.value,
                                }));
                            }}
                            required
                        />

                        <label htmlFor="PhoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="PhoneNumber"
                            name="PhoneNumber"
                            placeholder="Phone"
                            onChange={(e) => {
                                setDetail((Detail) => ({ ...Detail, PhoneNumber: e.target.value }));
                            }}
                            required
                        />

                        <label htmlFor="LinkedIn">LinkedIn ID:</label>
                        <input
                            type="text"
                            id="LinkedIn"
                            name="LinkedIn"
                            placeholder="LinkedIn"
                            onChange={(e) => {
                                setDetail((Detail) => ({ ...Detail, LinkedIn: '<a href=\"https://www.linkedin.com\">' + e.target.value + '</a>' }));
                            }}
                            required
                        />

                        <h3>Job</h3>
                        <label htmlFor="JobTitle">Job Title:</label>
                        <input
                            type="text"
                            id="JobTitle"
                            name="JobTitle"
                            placeholder="Job title"
                            onChange={(e) => {
                                setDetail((Detail) => ({ ...Detail, JobTitle: e.target.value }));
                            }}
                            required
                        />

                        <label htmlFor="Summary">Career Objective:</label>
                        <textarea
                            id="summary"
                            name="Summary"
                            placeholder="Summary"
                            onChange={(e) => {
                                setDetail((Detail) => ({ ...Detail, Summary: e.target.value }));
                            }}
                            required
                        ></textarea>

                        <h3>Skills</h3>
                        <SkillsCard parentCallback={handleSkillCallback}></SkillsCard>
                        <h3>Education Details</h3>
                        <EducationCard parentCallback={handleEducationCallback}></EducationCard>
                        <h3>Experience Details</h3>
                        <ExperienceCard
                            parentCallback={handleExperienceCallback}
                        ></ExperienceCard>
                        <h3>Achievements</h3>
                        <AchievementsCard
                            parentCallback={handleAchievementCallback}
                        ></AchievementsCard>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>

            <div className="temp">
                <form className="Details" onSubmit={handleGenerate}>
                <h2>Select Template</h2>
                    <div className="templates">
                        <div className="template">
                            <h3>Template 1</h3>
                            <img className="template_img" src={temp1} alt="Template_1" id="tmep" />
                            <input className="radio_btn" type="radio" value="1" name="temp" onChange={(e) => {
                                setTemp({ temp_type: e.target.value });
                            }}></input>
                        </div>
                        <div className="template">
                            <h3>Template 2</h3>
                            <img className="template_img" src={temp2} alt="Template_2" id="tmep" />
                            <input className="radio_btn" type="radio" value="2" name="temp" onChange={(e) => {
                                setTemp({ temp_type: e.target.value });
                                console.log(Temp);
                            }}></input>
                        </div>
                        <div className="template">
                            <h3>Template 3</h3>
                            <img className="template_img" src={temp3} alt="Template_3" id="tmep" />
                            <input className="radio_btn" type="radio" value="3" name="temp" onChange={(e) => {
                                setTemp({ temp_type: e.target.value });
                                console.log(Temp);
                            }}></input>
                        </div>
                        <div className="template">
                            <h3>Upload Custom template</h3>
                            <UploadTemp></UploadTemp>
                            <input className="radio_btn" type="radio" value="4" name="temp" onChange={(e) => {
                                setTemp({ temp_type: e.target.value });
                                console.log(Temp);
                            }}></input>
                        </div>
                    </div>
                    <input type="submit" value="Generate Resume"></input>
                </form>
                <Download></Download>
            </div>
        </div>
    );
}

export default Form;
