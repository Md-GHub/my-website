import Header from "./Header";
import Process from "./Process";


function Workflow(){
    const value = {
        name: "Workflow",
        subwords: "How i work",
        word: "My work process"
    }
    return(
        <div className="workflow-container">
            <Header info={value}/>
            <Process/>
        </div>
    )
}


export default Workflow;