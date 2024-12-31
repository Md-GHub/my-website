import Header from "./Header";
import Projectcard from "./Projectcard";


function Project(){
    const value = {
        name: "Project",
        subwords: "Some of the most recent project",
        word: "My featured project"
    }
    return (
        <div>
            <Header info={value}/>
            <Projectcard/>
        </div>
    )
}

export default Project;