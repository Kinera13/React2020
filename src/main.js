import React from  "react";
import poster from "./poster.jpg";


export function Main() {
    return (
        <div className="col-md-9">
        <div id="text-logo"><h4 className="text-right" ><em>Чтобы что-то получить, надо встать и пойти. Как добиться своего, если не пытаться?</em></h4></div>
        <div className="text-center">
            <img src={poster} alt="poster" className="img-fluid" />
        </div>
        <div id="one" className="text-left"><h4><em>Разумеется, имеет значение не сам талант, а то, как его используют</em></h4></div>
    </div>
    );
}