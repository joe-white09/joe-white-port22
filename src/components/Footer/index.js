import LinkedInIcon from '../../assets/icons/linkedin-icon.png';
import GitHubIcon from '../../assets/icons/github-icon.png';

function Footer() {
    return(
        <footer>
            <ul>
            {/* <li>Phone: <a href="tel:17314414211">
                <img src="./assets/images/phone-icon.png" alt="Phone Icon"/>
                <br/>1-731-441-4211</a></li> */}
            <li>Linkedin: <a href="https://www.linkedin.com/in/joe-white-a54923235/">
                <img src={LinkedInIcon} alt="LinkedIn Icon"/>
                <br/> Checkout My Profile</a></li>
            <li>Github: <a href="https://github.com/joe-white09">
                <img src={GitHubIcon} alt="Github Icon"/>
                <br/>Checkout My Profile</a></li>          
            </ul>
        </footer>
    );
};

export default Footer;