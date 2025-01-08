
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiLogout } from "react-icons/hi";
import logo from '../../Assets/navbar/logo.png'
export function Panel() {
    return (
      
        <Sidebar aria-label="Sidebar with logo branding example">
            <Sidebar.Logo href="/UserPanel" img={logo} imgAlt="Flowbite logo">
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup >
                    <Sidebar.Item href="#" icon={HiChartPie} className="text-2xl">
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox} className="text-2xl">
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser} className="text-2xl">
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag} className="text-2xl">
                        Products
                    </Sidebar.Item>

                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiLogout} className="text-2xl text-red-700">
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
