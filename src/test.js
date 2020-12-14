import React from  "react";
import poster from "./poster.jpg";

export function Test() {
    return (
        <div className="col-md-9">
            <div className="text-center">
                <img src={poster} alt="poster" className="img-fluid" />
            </div>
        </div>

    );
}