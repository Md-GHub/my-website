

function Navbar(){
    return (
        <div className="navbar-container">
            <div>
                <h1 style={{fontFamily: "Island Moments"}}>MD</h1>
            </div>
            <div className="collaps">
                <ul className="nav-bar">
                    <li><a href="#" className="nav-item">Home</a></li>
                    <li><a href="#" className="nav-item">About</a></li>
                    <li><a href="#" className="nav-item">Project</a></li>
                    <li><a href="#" className="nav-item">Service</a></li>
                    <li><a href="#" className="nav-item">Workflow</a></li>
                    <li><a href="#" className="nav-item">Contact</a></li>
                </ul>
            </div>
            <div className="icon"></div>
        </div>
    )
}

export default Navbar;