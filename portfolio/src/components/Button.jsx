 function Button({button}){
    const cl = "button" + (button.name === "Resume" ? " button-shadow" : "");
    const color = (button.name === "Resume" ? "white" : "black")
    return (
        <button style={{backgroundColor:button.color,color:color,fontWeight:600}} className={cl}>
            {button.name}
        </button>
    );
 }


 export default Button;