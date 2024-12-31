import Header from "./Header";
import Servicecard from "./Servicecard";


function Service() {
    const value = {
        name: "Services",
        subwords: "How can i help your project",
        word: "What i do"
    }
    return (
        <div>
            <Header info={value} />
            <div>
                <Servicecard/>
            </div>
        </div>
    )
}

export default Service;