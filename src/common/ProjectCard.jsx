import React from 'react'

function ProjectCard({ img, link, titulo, descripcion }) {
    return (
        <a href={link} 
            target='_blank'>
            <img className='hover' src={img} alt={`${titulo} logo`} />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </a>
    )
}

export default ProjectCard
