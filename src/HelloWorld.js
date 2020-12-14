import React from "react";
import ReactPlayer from "react-player";


const HelloWorld = ({ tech }) => {
    return (
        <div className="col-md-9">
            <br/>
            <div className="text-center" className="embed-responsive embed-responsive-16by9">
            <span className="hello-world__tech">{tech}
                <ReactPlayer url="https://www.youtube.com/watch?v=SphTGtDlhHw"  controls={true} />
            </span>
        </div>
            <br/>
        </div>
    );
};

export default HelloWorld;