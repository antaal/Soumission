import React from 'react';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';

import Footer from './Footer';
import SideBar from './SideBar'
import styled from 'styled-components'
import routes from '../../routes/routes';
import { Routes, Route, Navigate} from 'react-router-dom';

const MasterLayout = () => {
  return (
    <div>
            <SideBar />
           
            <main className="container">
                <Routes>
                  {routes.map((route,index)=>{
                    return(
                      route.element && (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props)=>(
                          <route.element {...props} />
                        )}
                          />
                      )
                    )
                  })}
                  <Navigate from="admin" to="admin/dashboard" />
                </Routes>
            </main>
    
           <Footer />
          </div>
   
      )
    }
    


export default MasterLayout