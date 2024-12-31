function Header({info}){
    return(
        <div className="header">
            <div className="line"></div>
            <div className="headers">
                <p className="invisible-text">{info.name}</p>
                <p className="sub-words">{info.subwords}</p>
                <p className="words">{info.word}</p>
            </div>
        </div>
    )
}


export default Header;