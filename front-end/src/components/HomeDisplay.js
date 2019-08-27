
// import data from '../data'
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

const HomeDisplay = () => {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        Axios.get(`https://the-world-problems-index.herokuapp.com/api/problems`)
            .then(res => {
                console.log(res.data);
                const probList = res.data;
                setProblems(probList);
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }, []);




    return (
        <div className='home-container'>
            <div className='home-content'>
                <h2 className='home-headline'>
                    Investigate problems of the world, consider their solutions, and
                    explore related problems and solutions
        </h2>
                {problems.map((item) => {
                    return (
                        <Link to={`problems/${item.title}`}>
                            <button key={item.id} className='problem-bubble'>{item.title}</button>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}
export default HomeDisplay;

// const mapStateToProps = (state) => {
//     return {
//       fetchingProblems: state.problemsReducer.fetchingProblems, 
//       problemsList: state.problemsReducer.problemsList
//     }
//   };
//   export default connect(
//     mapStateToProps,
//     { fetchProblems }
//   )(HomeDisplay);


