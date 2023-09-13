import React from 'react';

//children

const Scroll = (props) =>{
    console.log(props);
    return (
        // in JSX wwe can add styles using {{}} ***you must camelCase for JSX***
        <div style={{overflowY:'scroll', border:'5px solid black', height:"1000px"}}>
            {props.children}; 
            {/* // will return ROBOLIST  */}
        </div>
    )
}


export default Scroll;