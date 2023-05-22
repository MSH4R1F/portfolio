import React from 'react'
import './experience.css'
import { BsGraphUp, BsPatchCheckFill } from 'react-icons/bs'
import {FaJava, FaPython, FaReact} from 'react-icons/fa'
import { SiFlask, SiHackthebox, SiJavascript, SiKotlin, SiMatrix } from 'react-icons/si'
import { TbLetterC, TbMathFunction } from 'react-icons/tb'
import { AiOutlineConsoleSql } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id = "experience">
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>
        <div className="container experience_container">
            <div className="experience_technologies">
                <h3>Technologies</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <FaJava className = 'experience-icons'/>
                        <div>
                            <h4>Java</h4>
                            <small className = 'text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <FaPython className = 'experience-icons'/>
                        <div>
                            <h4>Python</h4>
                            <small className = 'text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <SiKotlin className = 'experience-icons'/>
                        <div>
                            <h4>Kotlin</h4>
                            <small className = 'text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <TbLetterC className = 'experience-icons'/>
                        <div>
                            <h4>C</h4>
                            <small className = 'text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <SiJavascript className = 'experience-icons'/>
                        <div>
                            <h4>HTML/CSS/JavaScript</h4>
                            <small className = 'text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <FaReact className = 'experience-icons'/>
                        <div>
                            <h4>React</h4>
                            <small className = 'text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <AiOutlineConsoleSql className = 'experience-icons'/>
                        <div>
                            <h4>SQL</h4>
                            <small className = 'text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <SiFlask className = 'experience-icons'/>
                        <div>
                            <h4>Flask</h4>
                            <small className = 'text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className="experience_others">
                <h3>Other Interests</h3>
                <div className="experience_content">
                    <article className="experience_details">
                            <BsGraphUp className = 'experience-icons'/>
                            <div>
                                <h4>Calculus</h4>
                                <small className = 'text-light'><a href = "https://www.imperial.ac.uk/computing/current-students/courses/40016/">Course I've taken</a></small>
                            </div>
                    </article>
                    <article className="experience_details">
                        <SiMatrix className = 'experience-icons'/>
                        <div>
                            <h4>Linear Algebra</h4>
                            <small className = 'text-light'><a href = "https://www.imperial.ac.uk/computing/current-students/courses/40017/">Course I've taken</a></small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <SiHackthebox className = 'experience-icons'/>
                        <div>
                            <h4>CyberSecurity</h4>
                            <small className = 'text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <TbMathFunction className = 'experience-icons'/>
                        <div>
                            <h4>Discrete Mathematics</h4>
                            <small className = 'text-light'><a href = "https://www.imperial.ac.uk/computing/current-students/courses/40018/">Course I've taken</a></small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience