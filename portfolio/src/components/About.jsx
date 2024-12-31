import Button from "./Button";
import Header from "./Header";

function About() {
    const value = {
        name: "About me",
        subwords: "Some words about me",
        word: "Know me more"
    }
    const resume = {
        color: "#FB4141",
        name: "Resume"
    }
    return (
        <div className="about">
            <Header info={value} />
            <div className="title-content">
                <p className="title">I'm Mohamed Harrish A</p>
                <p className="content">
                    a software developer driven by curiosity and a passion for crafting impactful digital solutions.
                    My journey into tech started with a fascination for how things work behind the scenes,
                    and over time, that curiosity evolved into a deep interest in backend development.
                    I specialize in Java and Spring Boot, with experience building scalable REST APIs, microservices,
                    and secure web applications. I also work with Node.js, handling real-time systems and dynamic applications.
                    Beyond coding, I focus on designing system architectures that prioritize performance, reliability, and user experience.
                    My projects span from creating file upload systems integrated with cloud storage to developing real-time chat applications and blog platforms with role-based access.
                    Each project has taught me the importance of problem-solving, adaptability, and continuous learning.
                    In addition to my technical expertise, I value clear communication, collaboration, and mentorship. I believe that learning is a two-way street –
                     I enjoy sharing knowledge while gaining insights from others. Whether it’s brainstorming new project ideas or debugging complex code, I find joy in every step of the development process.
                    When I'm not at my desk, you'll find me exploring new tech trends, contributing to open-source projects, or working on my portfolio to showcase the latest skills I've developed.
                    I’m always open to exciting collaborations and new challenges. Let’s connect and build something amazing together!
                </p>
            </div>
            <div style={{ padding: "0px 20px" }}>
                <Button button={resume} />
            </div>
        </div>
    )
}

export default About;