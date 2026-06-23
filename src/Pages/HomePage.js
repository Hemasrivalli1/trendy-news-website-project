import React from 'react';
import { useNavigate } from 'react-router-dom'
function HomePage(){
    const navigate = useNavigate();
    return (
        <main className="heroWrap">
            <div className="container py-5">
                <div className="row align-items-center g-5 py-4">
                    <div className="col-lg-9 mx-auto text-center">
                        <span className="heroBadge">React,Routing,Bootstrap</span>
                        <h1 className="heroTitle">Build a live news application that
                             feels modern and interactive.</h1>
                        <p className="heroText">
                            This projects tell us React state,effects,
                            routing,conditional rendering,and Bootstrap 
                            layout using real API
                        </p>
                        <div className="d-flex gap-3 flex-wrap justify-content-center">
                            <button className="btn btn-lg primaryAction" onClick={()=>
                                navigate('./news')}>Open News Feed</button>

                            <button className="btn btn-lg btn-outline-light" onClick={()=>
                                navigate('/about')}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default HomePage;