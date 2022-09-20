import React, {useState} from 'react';

const ProjectList = () => {
    const [projects] = useState([
        {
            name: 'adoptables',
            title: 'Adoptables',
            alt: 'Adoption site for pets',
            description: 'A site that allows users to find pets in their area that have recently been put up for adoption.',
            deployedUrl: 'https://nangtuong.github.io/Adoptables/',
            gitHubUrl: 'https://github.com/NangTuong/Adoptables'
        },
        {
            name: 'living-local',
            title: 'Living Local',
            alt: 'Forum to search local activities',
            description: 'For those looking for local insight on things to do or places to eat, check out this forum to see what people have posted in their area.',
            deployedUrl: 'https://living-locally.herokuapp.com/',
            gitHubUrl: 'https://github.com/coneboybebop/project-2-group-6'
        },
        {
            name: 'portfolio',
            title: 'My first Portfolio',
            alt: "Joe White's first portfolio project",
            description: 'My first showcase of projects in comparison to this most recent to display how much my skill has improved in such a short time of 6 months.',
            deployedUrl: 'https://joe-white09.github.io/joe-white-portfolio/',
            gitHubUrl: 'https://github.com/joe-white09/joe-white-portfolio'
        },
        {
            name: 'team-profile-generator',
            title: 'Team Profile Generator',
            description: 'A node application to create an html page through the command line to display a team with corresponding contact information.',
            alt: 'Node application to create a HTML page',
            deployedUrl: '',
            gitHubUrl: 'https://github.com/joe-white09/team-profile-generator'
        },
        {
            name: 'the-tech-blog',
            title: 'The Tech Blog',
            alt: 'Forum to post and comment on latest technology',
            description: 'Site that allows users to see new articles that others have shared, as well as log in to create posts and leave comments for other users.',
            deployedUrl: 'https://aqueous-woodland-50367.herokuapp.com/',
            gitHubUrl: 'https://github.com/joe-white09/the-tech-blog'
        },
        {
            name: 'weather-dashboard',
            title: 'Weather Dashboard',
            alt: 'Weather forecast application',
            description: 'Application that allows users to search by city name to obtain the current weather conditions as well as the 5-day forecast.',
            deployedUrl: 'https://joe-white09.github.io/weather-dashboard/',
            gitHubUrl: 'https://github.com/joe-white09/weather-dashboard'
        }
    ]);

    return (
        <div className='my-projects'>
        <ul>
            {projects.map((image, i) => (
                <li key={image.name}>
                        <img
                            src={require(`../../assets/projects/${image.name}.png`)}
                            alt={image.alt}
                            className="img-thumbnail mx-2"
                            
                        />
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                        {image.deployedUrl === '' ? (
                            <p>Project is not deployed online</p>
                        ) : (
                            <a href={image.deployedUrl} className="btn" target={"_blank"} rel="noreferrer">Check it out!</a>
                        )}
                        <a href={image.gitHubUrl} className="btn" target={"_blank"} rel="noreferrer">GitHub Repository</a>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default ProjectList;