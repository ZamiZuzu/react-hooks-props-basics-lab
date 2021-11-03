function Links({github, linkedin}){
    // console.log(props)
    // console.log(github);
    return(
    <>
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
     </>
    )
}


export default Links;