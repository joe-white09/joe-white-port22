import resumeFile from '../../assets/resume/JoeWhite_WebDeveloper_Resume.pdf';

const Resume = () => {
    return(
        <section>
            <h2>
                <Link to={resumeFile} target="_blank" download className='section'>Download my Resume! 
                <span role='img' arial-label='download'>⬇️</span></Link>
            </h2>
            <div>
                <h3 className='section'>My Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>CSS Frameworks</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                    </ul>
            </div>
        </section>
    )
};

export default Resume;