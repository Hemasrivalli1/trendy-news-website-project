import React from "react";
import { Link } from "react-router-dom";
function NotFoundPage(){
    return (
     <main className="pageSection py-5">
        <div className="container py-5 text-center">
            <div className="glassCard p-5 rouded-4">
                <h1 className="display-4 fw-bold mb-3">404</h1>
                <h2 className="sectionTitle mb-3">Page Not Found</h2>
           
           <p className="sectionText mb-4">
            This is Exist your path is wrong 
             correct and check once browser. 
           </p>
           <Link to="/" className="btn primaryActionbtn-lg">Go Home</Link>
            </div>
        </div>
     </main>
    )
}
export default NotFoundPage;