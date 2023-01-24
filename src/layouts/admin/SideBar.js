import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>

                {/* <h1>SideBar</h1> */}
                <div className="col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar" id="sidebar">
      <h1 className="bi bi-bootstrap text-primary d-flex my-4 justify-content-center"></h1>
      <div className="list-group rounded-0">
        <a href="#" className="list-group-item list-group-item-action active border-0 d-flex align-items-center">
          <span className="bi bi-border-all"></span>
          <span className="ml-2">Dashboard</span>
        </a>
        <Link to='/admin/formOffre' className="list-group-item list-group-item-action border-0 align-items-center">
          <span className="bi bi-box"></span>
          <span className="ml-2">Offres</span>
        </Link>

        <Link to='/admin/Secteur' className="list-group-item list-group-item-action border-0 align-items-center">
          <span className="bi bi-box"></span>
          <span className="ml-2">Secteurs</span>
        </Link>

       
        
       
      </div>
    </div>
    
    </div>
  )
}

export default SideBar;