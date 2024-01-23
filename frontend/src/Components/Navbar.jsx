import React from 'react'                              //importing React 
import { Link } from 'react-router-dom'                //importing Link from react-router-dom

const Navbar = () => {                      //Navbar component
    return (
        <>
            <nav className="navbar navbar-expand-xl bg-success">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white fs-3 ms-3" >SALES APP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-1">
                            <Link to="/addsales" className="nav-link active text-white" aria-current="page" >ADD SALES</Link>
                            <Link to="/topsales" className="nav-link text-white" >TOP 5 SALES</Link>
                            <Link to="/totalrev" className="nav-link text-white" >TODAY'S TOTAL REVENUE</Link>
                            <Link to="/login" className="nav-link text-white" >LOGIN</Link>
                            <Link to="/register" className="nav-link text-white" >REGISTER</Link>
                            <Link to="*" className="nav-link disabled" aria-disabled="true">LOGOUT</Link>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar                        //exporting Navbar component