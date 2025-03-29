import React from 'react'
import styles from './ProjectsStyles.module.css'
//Import for projects
import cabañas from '../../assets/CabañasWeb.png';
import ticosta from '../../assets/TicostaWeb.png';
import lumina from '../../assets/LuminaApp.png';
import alegria from '../../assets/AlegriaWeb.png';

import jornadas from '../../assets/jornadas.jpg';
import game from '../../assets/GameSpace.png';
import ticostaDesign from '../../assets/TicostaWeb.png';
import Mypreset from '../../assets/MyPreset.png';

import ProjectCard from '../../common/ProjectCard'

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Proyectos</h1>
            <div className={styles.projectsContainer}>

                <ProjectCard src={cabañas} link="https://xn--cabaasdonramiro-1qb.com/"
                h3="Cabañas Don Ramiro"
                p="Web para hotel / wordpress"/>

                <ProjectCard src={ticosta} link="https://ticostatravels.com/"
                h3="Ticosta Travels"
                p="Web para turismo / wordpress"/>

                <ProjectCard src={lumina} link="https://github.com/JoseTruko/LuminaResort.git"
                h3="Lumina Resort"
                p="App hotelera / Laravel"/>

                <ProjectCard src={alegria} link="https://github.com/JoseTruko/RecipeDepot.git"
                h3="Alegría al cocinar"
                p="Web de recetas / Vue.js"/>

            </div>
            <hr />
            <div className={styles.projectsContainer}>

                <ProjectCard src={jornadas} link=""
                h3="Jornadas de Investigación"
                p="Identidad gráfica UCR / Adobe Suite"/>

                <ProjectCard src={game} link="https://www.figma.com/design/jLsRtvPAJJCjm25YBuJBOO/VideoGames-of-2023?node-id=0-1"
                h3="Game Space"
                p="Diseño web / Figma"/>

                <ProjectCard src={Mypreset} link="https://www.figma.com/file/AJGyjVX9Ntuob1uZPS7rXv/My-Preset-App?type=design&node-id=0%3A1&mode=design&t=btlDa77EsF590UQi-1"
                h3="My preset"
                p="Diseño de app / Figma"/>

            </div>
        </section>
    );
}

export default Projects