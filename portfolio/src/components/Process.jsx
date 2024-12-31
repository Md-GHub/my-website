function Process() {
    const process = ["1.Idea", "2.Sketch", "3.Design", "4.Develop", "5.Testing", "6.Deploy"];

    return (
        <div className="process-container">
            {process.map((p, i) => (
                <div className="circle" key={i}>
                    <p>{p}</p>
                </div>
            ))}
        </div>
    );
}

export default Process;
