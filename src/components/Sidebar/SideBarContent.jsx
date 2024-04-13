import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import SimpleBar from "simplebar-react"

const SideBarContent = ({props}) => {
    const ref = useRef();
  return (
    <React.Fragment>
      
    <SimpleBar style={{ maxHeight: "100%" }} ref={ref} className="sidebar-menu-scroll">
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">{"Menu"} </li>
          <li>
            <Link to="/#" className="waves-effect">
              <i className="uil-home-alt"></i>
              <span className="badge rounded-pill bg-primary float-end">
                01
              </span>
              <span>{"Dashboard"}</span>
            </Link>
          </li>

          <li className="menu-title">{"Apps"}</li>

          <li>
            <Link to="/calendar" className=" waves-effect">
              <i className="uil-calender"></i>
              <span>{"Calendar"}</span>
            </Link>
          </li>

          <li>
            <Link to="/chat" className="waves-effect">
              <i className="uil-comments-alt"></i>
              <span className="badge rounded-pill bg-warning float-end">
                {"New"}
              </span>
              <span>{"Chat"}</span>
            </Link>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="uil-store"></i>
              <span>{"Ecommerce"}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/ecommerce-products">{"Products"}</Link>
              </li>
              <li>
                <Link to="/ecommerce-product-detail">
                  {"Product Detail"}
                </Link>
              </li>
              <li>
                <Link to="/ecommerce-orders">{"Orders"}</Link>
              </li>
              <li>
                <Link to="/ecommerce-customers">{"Customers"}</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="uil-envelope"></i>
              <span>{"Email"}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/email-inbox">{"Inbox"}</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="uil-invoice"></i>
              <span>{"Invoices"}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/invoices-list">{"Invoice List"}</Link>
              </li>
              <li>
                <Link to="/invoices-detail">{"Invoice Detail"}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="uil-book-alt"></i>
              <span>{"Contacts"}</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/contacts-grid">{"User Grid"}</Link>
              </li>
              <li>
                <Link to="/contacts-list">{"User List"}</Link>
              </li>
              <li>
                <Link to="/contacts-profile">{"Profile"}</Link>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </SimpleBar>
  </React.Fragment>
  )
}

export default SideBarContent