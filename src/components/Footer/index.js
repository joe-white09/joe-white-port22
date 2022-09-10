import LinkedInIcon from '../../assets/icons/linkedin-icon.png';
import GitHubIcon from '../../assets/icons/github-icon.png';
import StackOverflowIcon from '../../assets/icons/stack-overflow-icon.png';

function Footer() {
    return(
        <footer>
            <h2 className='section'>Check out my profiles on: </h2>
                <div className='footer'>
                    <a href="https://stackoverflow.com/users/18590952/joe-white09" target={"_blank"} rel="noreferrer">
                        <img src={StackOverflowIcon} alt="StackOverflow Icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/joe-white-a54923235/" target={"_blank"} rel="noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn Icon"/>
                    </a>
                    <a href="https://github.com/joe-white09" target={"_blank"} rel="noreferrer">
                        <img src={GitHubIcon} alt="Github Icon"/>
                    </a>
                </div>
            
        </footer>
    );
};

export default Footer;