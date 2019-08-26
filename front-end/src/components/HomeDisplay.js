import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data";

const HomeDisplay = () => {
    //Axios junk here
    return (
        <div className="problemsContainer">
            <div className="innerProblemsDiv">
            <h3 className = "problemsBlurb">Investigate problems of the world, consider their solutions, and explore related problems and solutions</h3>
                {data.map(item => {
                    return (<div className="problemBubble" >
                        {item}
                    </div>);
                })};
            </div>
        </div>
    );
};

export default HomeDisplay; 