import React from 'react';
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";

const CustomNavbar = ({ toggleSidebar }) => {
    return (
        <nav class="navbar navbar-dark navbar-expand bg-white justify-content-between text-grey shadow-sm">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item text-center">
                        <a href="#" class="nav-link" data-toggle="modal" data-target="#"><span class="fa fa-map"></span><span class="d-none d-sm-inline d-xl-block px-1 text-grey">Map</span></a>
                    </li>
                    <li class="nav-item dropdown text-center dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownUser1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <TfiMenuAlt className='text-grey' /><span class="d-none d-sm-inline px-1 text-grey">Dropdown</span> </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow text-grey" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item text-grey" href="#">Sign out</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav">
                    <li class=" nav-item text-center" id="signup-btn">
                        <a href="#" className="nav-link text-grey d-flex align-items-center" data-toggle="modal" data-target="#">
                            <FaUser className='text-grey' />
                            <span class="d-none d-sm-inline d-xl-block px-1 text-grey">Sign Up</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default CustomNavbar;
