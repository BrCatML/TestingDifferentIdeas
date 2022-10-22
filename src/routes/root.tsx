/*
Меню
Новые страницы добавляй в "../router",а не здесь.
*/

import { Outlet,NavLink, Link, useLocation } from "react-router-dom"
import { MenuList } from "../router"
import Layout from "antd/es/layout"
import Menu from 'antd/es/menu'
import type { MenuProps } from 'antd';
import React, { useEffect, useState } from "react";
//@ts-ignore
import Logo from "../static/logo_100.png"

export default function Root() {
  const [current, setCurrent] = useState('');
  const [menuItems, setMenuItems] = useState<MenuProps['items']>([]);
  const location = useLocation()

  useEffect(() => {
    const itemss: MenuProps['items'] = MenuList.map((value,index) => ({
        label: <NavLink to={value.path}>{value.name}</NavLink>,
        key: value.path,
        icon: value.icon,
      })
      )
    setMenuItems(itemss)
  },[])

  useEffect(() => {
    const pathParts = location.pathname.split("/")
    if (pathParts.length < 2) return
    setCurrent(pathParts[1])
  },[location])

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  }

  return (
    <>
      <Layout>
        <Layout.Header style={{display: 'flex'}}> 
        <Link to={"/"}  className="site-header">
          <img src={Logo} alt="bktr" />
          <span>BKTR</span>
        </Link>
        <Menu onClick={onClick} theme={"dark"} selectedKeys={[current]} mode="horizontal" items={menuItems} />
      </Layout.Header>
      <Layout>
        <Outlet />
      </Layout>
      </Layout>
    </>
  );
}