import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function Progressbar(props){
    return(
        <div className="progressBar">
            <ProgressBar
                completed={props.elapsedTime}
                height={4}
                width={"120px"}
                borderRadius={"0"}
                bgColor={"black"}
                isLabelVisible={false}
                animateOnRender={true}
            />
            <ProgressBar
                completed={0}
                height={4}
                width={"40px"}
                borderRadius={"0"}
                bgColor={"black"}
                isLabelVisible={false}
                animateOnRender={true}
            />
            <ProgressBar
                completed={0}
                height={4}
                width={"120px"}
                borderRadius={"0"}
                bgColor={"black"}
                isLabelVisible={false}
                animateOnRender={true}
            />
            <ProgressBar
                completed={0}
                height={4}
                width={"40px"}
                borderRadius={"0"}
                bgColor={"black"}
                isLabelVisible={false}
                animateOnRender={true}
            />
            <ProgressBar
                completed={0}
                height={4}
                width={"120px"}
                borderRadius={"0"}
                bgColor={"black"}
                isLabelVisible={false}
                animateOnRender={true}
            />
            <ProgressBar
                completed={0}
                height={4}
                width={"40px"}
                borderRadius={"0"}
                bgColor={"black"}
                isLabelVisible={false}
                animateOnRender={true}
            />
            <ProgressBar
                completed={0}
                height={4}
                width={"120px"}
                borderRadius={"0"}
                bgColor={"black"}
                isLabelVisible={false}
                animateOnRender={true}
            />
            <ion-icon name="flag-outline"></ion-icon>

        </div>
    )
}

export default Progressbar
