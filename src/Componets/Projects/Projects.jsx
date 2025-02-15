import React from 'react'
import styles from './ProjectsStyles.module.css'
//Import for projects
import Viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipssper from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'

import ProjectCard from '../../common/ProjectCard'

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>

                <ProjectCard src={Viberr} link="https://github.com/JoseTruko/Jose-Ramirez-Portfolio"
                h3="Viberr"
                p="Sreaming App"/>

                <ProjectCard src={freshBurger} link="https://github.com/JoseTruko/Jose-Ramirez-Portfolio"
                h3="Fresh Burger"
                p="Hamburger Restaurand"/>

                <ProjectCard src={hipssper} link="https://github.com/JoseTruko/Jose-Ramirez-Portfolio"
                h3="Hissper"
                p="Glasses Shop"/>

                <ProjectCard src={fitLift} link="https://github.com/JoseTruko/Jose-Ramirez-Portfolio"
                h3="FitLift"
                p="Fitness App"/>

            </div>
        </section>
    );
}

export default Projects