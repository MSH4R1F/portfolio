import React from 'react'
import './education.css'

const Education = () => {
    const [selectedSchool, setSelectedSchool] = React.useState("imperial");

    const handleSchoolClick = (schoolId) => {
        setSelectedSchool(schoolId);
    };

    return (
        <section id="education">
            <h5>My School history</h5>
            <h2>Education</h2>
            <div className="container education-container">
                <div className="left">
                    <div id="imperial" onClick={() => handleSchoolClick('imperial')} className={`school-history-left ${selectedSchool === 'imperial' ? 'selected' : ''}`}>
                        <div className="title">
                            Imperial College London
                        </div>
                    </div>
                    <div id="laet" onClick={() => handleSchoolClick('laet')} className={`school-history-left ${selectedSchool === 'laet' ? 'selected' : ''}`}><div className="title">
                        LAE Tottenham
                    </div></div>
                    <div id="amsi" onClick={() => handleSchoolClick('amsi')} className={`school-history-left ${selectedSchool === 'amsi' ? 'selected' : ''}`}><div className="title">
                        Arts and Media School, Islington
                    </div></div>
                </div>
                <div className="right">
                    {selectedSchool === 'imperial' &&
                        <div className="exp-block-wrapper imperial">
                            <div className="time-frame">
                                October 2022 - Present
                            </div>
                            <div className="details">
                                <p>I am in my first-year currently studying MEng Computing, the modules I have taken so far are
                                    Discrete Maths, Logic and Reasoning, Computing Practical (Haskell, Kotlin, Java, C), Introduction to Databases, Introduction to Computer Architecture, Introduction to Computer Systems, Calculus, Linear Algebra, Graphs & Algorithms. Some of my extracurriculars were:
                                </p>
                                <li>
                                    Front-End Developer for the STEM Muslims Website
                                </li>
                                <li>
                                    Participant at the ICHack 2023
                                </li>
                            </div>
                        </div>
                    }
                    {selectedSchool === 'laet' &&
                        <div className="exp-block-wrapper laet">
                            <div className="time-frame">
                                September 2020 - August 2022
                            </div>
                            <div className="details">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus suscipit doloribus nemo illum repellat velit cupiditate voluptatum quae! Quis ipsam suscipit excepturi sapiente id consequuntur aliquid sit doloremque modi?</p>
                            </div>
                        </div>
                    }
                    {selectedSchool === 'amsi' &&
                        <div className="exp-block-wrapper amsi">
                            <div className="time-frame">
                                September 2015 - August - 2020
                            </div>
                            <div className="details">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus suscipit doloribus nemo illum repellat velit cupiditate voluptatum quae! Quis ipsam suscipit excepturi sapiente id consequuntur aliquid sit doloremque modi?</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Education
