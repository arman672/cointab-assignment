import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Home = () => {

    const { state } = useLocation();

    let navigate = useNavigate()
    function handleClick(){
        navigate("/", {state: "NA"})
        alert("logged out successfully")  
    }

    return (
        <div className="container">
            <div className="row">
                <div className='mt-4'>
                    <div className="card text-center">
                        <div className="d-flex justify-content-center card-header">
                            <h5>{state} </h5>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <button type="button" onClick={handleClick} class="btn btn-primary">Logout</button>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Home