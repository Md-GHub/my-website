function Servicecard() {
    const services = [
        {
            title: "Web Development",
            values: [
                "Frontend (React, Angular)",
                "Backend (Spring Boot, Node.js)",
                "API Integration"
            ]
        },
        {
            title: "UI/UX Design",
            values: [
                "Wireframing",
                "Prototyping",
                "User Flow Design"
            ]
        },
        {
            title: "Mobile Development",
            values: [
                "Android (Java, Kotlin)",
                "iOS (Swift, Flutter)",
                "Cross-platform (React Native)"
            ]
        }
    ];

    return (
        <div className="Servicecard-container">
            {services.map((service, index) => (
                <div key={index} className="Servicecard">
                    <h2>{service.title}</h2>
                    <ul>
                        {service.values.map((value, idx) => (
                            <li key={idx}>{value}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Servicecard;
