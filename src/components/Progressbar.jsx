import React, { useEffect, useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";


function Progressbar(props){
    // console.log(props.currCompleted,props.maxCompleted);
    return(
        <div className="progressBar"> 
            <ProgressBar
                completed={props.currCompleted}
                height={4}
                maxCompleted={props.maxCompleted}
                className="wrapper"
                borderRadius={"0"}
                bgColor="#171717"
                isLabelVisible={false}
                animateOnRender={true}
            />
            <ion-icon name="flag-outline"></ion-icon>
        </div>
    )
}

export default Progressbar
