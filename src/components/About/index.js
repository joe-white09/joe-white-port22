import profileImage from "../../assets/profile/profile.png"

function About() {
    return(
        <section>
            <h1>About Me</h1>
            <img src={profileImage}  id="profilePic" style= {{ width: "100%" }} alt="Profile Picture"></img>
            <div>
                <p>
                    My name is Joe White. I began learning to code in April, 2022. Enrolled in Vanderbilt University Coding Bootcamp,
                    my skills have grown tremendously in such a short amount of time. For the last 12 years, I have been working in 
                    physically laborsome postions, but have always been fascinated by the technologic aspects of them. Seeing how every 
                    piece of technology runs off some form of code, the decision to change career paths seemed long overdue. I have a 
                    wonderful work ethic, and show great dedication to my focus.
                </p>
            </div>
        </section>
    );
}

export default About;