import React from "react";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <div className="home">
            <div className="img">
                <a href="/" >
                    <img src="/img/logo_footer.png" alt="" />
                </a>
            </div>
            <div className="links">
                <Link to="/productos" className="categ-nav">
                    <p >Productos</p>
                </Link>
                <Link to="/users" className="categ-nav">
                    <p >Usuarios</p>
                </Link>
                <Link to="http://localhost:8000/" className="categ-nav">
                    <p >Sportify</p>
                </Link>
            </div>
        </div>
    )
}