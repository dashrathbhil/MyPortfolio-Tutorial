import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

function ReactJsMenu() {
  return (
    <>
      <div className="container-xxl no-gutter ">
        <div className="d-flex ">
         <div>

          <Sidebar />
         </div>
      
          <div className="flex-grow-1 ps-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactJsMenu;
