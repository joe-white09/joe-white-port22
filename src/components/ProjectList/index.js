import React, {useState} from 'react';

const ProjectList = () => {
    const [projects] = useState([
        {
            name: 'adoptables',
            title: 'Adoptables',
            alt: 'Adoption site for pets',
            deployedUrl: 'https://nangtuong.github.io/Adoptables/',
            gitHubUrl: 'https://github.com/NangTuong/Adoptables'
        },
        {
            name: 'living-local',
            title: 'Living Local',
            alt: 'Forum to search local activities',
            deployedUrl: 'https://living-locally.herokuapp.com/',
            gitHubUrl: 'https://github.com/coneboybebop/project-2-group-6'
        },
        {
            name: 'portfolio',
            title: 'My first Portfolio',
            alt: "Joe White's first portfolio project",
            deployedUrl: 'https://joe-white09.github.io/joe-white-portfolio/',
            gitHubUrl: 'https://github.com/joe-white09/joe-white-portfolio'
        },
        {
            name: 'team-profile-generator',
            title: 'Team Profile Generator',
            alt: 'Node application to create a HTML page',
            deployedUrl: '',
            gitHubUrl: 'https://github.com/joe-white09/team-profile-generator'
        },
        {
            name: 'the-tech-blog',
            title: 'The Tech Blog',
            alt: 'Forum to post and comment on latest technology',
            deployedUrl: 'https://aqueous-woodland-50367.herokuapp.com/',
            gitHubUrl: 'https://github.com/joe-white09/the-tech-blog'
        },
        {
            name: 'weather-dashboard',
            title: 'Weather Dashboard',
            alt: 'Weather forecast application',
            deployedUrl: 'https://joe-white09.github.io/weather-dashboard/',
            gitHubUrl: 'https://github.com/joe-white09/weather-dashboard'
        }
    ]);

    return (
        <ul>
            {projects.map((image, i) => (
                <li key={image.name}>
                    <h3>{image.title}</h3>
                        <img
                            src={require(`../../assets/projects/${image.name}.png`)}
                            alt={image.alt}
                            className="img-thumbnail mx-2"
                            
                        />
                        {image.deployedUrl === '' ? (
                            <p>Project is not deployed online</p>
                        ) : (
                            <a href={image.deployedUrl}>Check it out!</a>
                        )}
                        <a href={image.gitHubUrl}>GitHub Repository</a>
                </li>
            ))}
        </ul>
    );
};

export default ProjectList;