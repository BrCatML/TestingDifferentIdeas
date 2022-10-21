/*
Меню
Тут не надо ниче менять. Новые страницы добавляй в "../router".
*/

import { Outlet,NavLink } from "react-router-dom"
import { MenuList } from "../router"

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>by Katherine Br.</h1>
        <div><h2>Ideas</h2></div>
        <nav>
          <ul>
            {MenuList.map((value,index) => (
              <li key={index}>
                <NavLink to={value.path}>{value.name}</NavLink>
              </li>                
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}