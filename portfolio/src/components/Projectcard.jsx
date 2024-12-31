import project1 from "../assets/project1.png";

function Projectcard() {
    const project = [
        {
            image: project1,
            name: "Ecommerce",
            description: "Backend ecommerce API built using Spring Boot",
            url: ""
        },
        {
            image: project1,
            name: "EMS",
            description: "Full-stack employee management system using Spring Boot and React",
            url: ""
        },
        {
            image: project1,
            name: "Github activity monitoring system",
            description: "VSC extention to automate tracking process of the daily work",
            url: ""
        },
        {
            image: project1,
            name: "Weather app",
            description: "react weather appgwdvsgwegfwegvsdvszdvsdvsdgwregsdvgsdgsdgsdg",
            url: ""
        }
    ];

    return (
        <div className="Projectcard-container">
            {project.map((pro, index) => (
                <div key={index} className="Projectcard">
                    <img src={pro.image} alt={pro.name} />
                    <h3>{pro.name}</h3>
                    <p>{pro.description}</p>
                    <div className="projectcard-button">
                        <button id="button1">View</button>
                        <button id="button2">code</button>
                    </div>
                </div>
                
            ))}
        </div>
    );
}

export default Projectcard;
