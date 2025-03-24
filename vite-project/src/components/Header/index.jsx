import React from "react";
import './style.css'
import logo from '../../assets/img/logo.png'
import { FaSearch } from "react-icons/fa";
export default function Header(){
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                
                <div className="right_header">
                <div className="menu">
                    <ul className="main_menu">
                        <li className="item_mainmenu"><a className="a" href="">Home</a></li>
                        <li className="item_mainmenu cha">
                            <a className="a" href="">Templates</a>
                            <ul className="con">
                                <li>
                                    <ul className="list_con">
                                        <li className="item_con"><a href="">Business</a></li>
                                        <li className="item_con"><a href="">Landing Page</a></li>
                                        <li className="item_con"><a href="">Portfolio</a></li>
                                        <li className="item_con"><a href="">Restaurant</a></li>
                                        <li className="item_con"><a href="">Medical</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="list_con">
                                        <li className="item_con"><a href="">Education</a></li>
                                        <li className="item_con"><a href="">Corporate</a></li>
                                        <li className="item_con"><a href="">Personal</a></li>
                                        <li className="item_con"><a href="">Bootstrap 5</a></li>
                                        <li className="item_con"><a href="">Construction</a></li>
                                    </ul> 
                                </li>
                                <li><ul className="list_con">
                                        <li className="item_con"><a href="">Admin</a></li>
                                        <li className="item_con"><a href="">eCommerce</a></li>
                                        <li className="item_con"><a href="">Resume / CV</a></li>
                                        <li className="item_con"><a href="">Bootstrap 4</a></li>
                                        <li className="item_con"><a href="">Transportation</a></li>
                                    </ul></li>
                                <li><ul className="list_con">
                                        <li className="item_con"><a href="">Coming Soon</a></li>
                                        <li className="item_con"><a href="">Agency</a></li>
                                        <li className="item_con"><a href="">Real Estate</a></li>
                                        <li className="item_con"><a href="">Website Templates</a></li>
                                        <li className="item_con"><a href="">Blog & Magazine</a></li>
                                    </ul></li>
                                <li><ul className="list_con">
                                        <li className="item_con"><a href="">One Page</a></li>
                                        <li className="item_con"><a href="">Photography</a></li>
                                        <li className="item_con"><a href="">Health</a></li>
                                        <li className="item_con"><a href="">Free Website Templates</a></li>
                                    </ul></li>
                            </ul>
                        </li>
                        <li className="item_mainmenu"><a className="a" href="">Bootstrap Builder</a></li>
                        <li className="item_mainmenu"><a className="a" href="">License</a></li>
                        <li className="item_mainmenu"><a className="a" href="">Contact</a></li>
                        <li className="item_mainmenu"><a className="a" href="">Members</a></li>
                    </ul>
                </div>
                <div className="search">
                    <input type="text" className="sreach_box"/>
                    <FaSearch />
                </div>
                </div>
            </div>
        </div>
    );
}