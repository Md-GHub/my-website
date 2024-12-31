import profile from "../assets/profile.jpg";
import Button from "./Button";
import { ReactTyped } from "react-typed";
function Home() {
    const resume = {
        color: "#FB4141",
        name: "Resume"
    }
    const hireme = {
        color: "white",
        name: "Hire me"
    }

    const text = [  "<b>Mohamed Harrish A</b>", 
                    "<b>a Software Developer</b>",
                    "<b>a Freelancer</b>",
                    "<b>a Web Designer</b>"]
    return (
        <div className="home">
            <div className="name">
                <p id="text-1">
                    Hi, I'm <br />
                    <ReactTyped
                        strings={text}
                        typeSpeed={80}
                        backSpeed={100}
                        loop
                    />
                </p>
                <p id="text-2">
                    a passionate software developer. Explore my work, projects, and
                    get to know more about my journey in tech.
                    Feel free to connect with me for collaborations or just to say hello!
                </p>
                <Button button={hireme} />
                <Button button={resume} />
            </div>

            <div className="profile">
                <div className="top-1"></div>
                <img src={profile} alt="" />
                <div className="top-2"></div>
            </div>
        </div>
    )
}

export default Home;