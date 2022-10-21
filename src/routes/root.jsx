import { Outlet,NavLink } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>Ideas</div>
          <nav>
            <ul>
                <li>
                    <NavLink to={`camera`}>camera</NavLink>
                </li>
                <li>
                    <NavLink to={`graph`}>graph</NavLink>
                </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }