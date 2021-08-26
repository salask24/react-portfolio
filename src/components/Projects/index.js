import React from 'react'
import { ProjectsContainter, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP  } from './ProjectsElements'
import Icon1 from ('../../images/travel-tunes.png')
import Icon2 from ('../../images/watchlist.png')
import Icon3 from ('../../images/travelshare.png')


const Projects = () => {
    return (
        <ProjectsContainter>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Travel Tunes</ProjectsH2>
                    <ProjectsP>Front end group project that uses a CSS framework and two server-side APIs. </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Watchlist</ProjectsH2>
                    <ProjectsP>Full-stack group project which consisted of using Node.js and Express.js to create a RESTful API. Also, used Handlebars.js for a templating engine and utilized MySQL and Sequelize ORM for the database. </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Travel Share</ProjectsH2>
                    <ProjectsP>Full-stack group project creating a MERN stack single-page application using React for front end, GraphQL with Node.js + Express.js for the server, andn MongoDB and Mongoose ODM for database. </ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainter>
    )
}

export default Projects
