import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "../components/Burger";
import { useState } from "react";


export default function NavBar() {
    const router = useRouter();
    const [active, setActive] = useState(false);
    return (
        <>
        <Burger active={active} onClick={() => setActive(!active)} />
        <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
            <div className="container">
                <div className="navbar-translate">
                    <Link href="/">
                        <a className={router.pathname === "/" ? "h5 active" : null}>Village Demands</a>
                    </Link>
                    
                    <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar top-bar"></span>
                        <span className="navbar-toggler-bar middle-bar"></span>
                        <span className="navbar-toggler-bar bottom-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="img/blurred-image-1.jpg">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/posts">
                                <a className={router.pathname.startsWith("/posts") ? "nav-link active" : "nav-link"}>Sample</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="#">
                                <a className={"nav-link dropdown-toggle"} id={"navbarDropdownMenuLink1"} data-toggle={"dropdown"}>
                                    Our Story
                                </a>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">
                                <Link href="#">
                                    <a className={"dropdown-item"}>Our History</a>
                                </Link>
                                <Link href="#">
                                    <a className={"dropdown-item"}>Mission and Vision</a>
                                </Link>
                                <Link href="#">
                                    <a className={"dropdown-item"}>Our Village</a>
                                </Link>
                                <Link href="#">
                                    <a className={"dropdown-item"}>Leaders</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="#">
                                <a className={"nav-link dropdown-toggle"} id={"navbarDropdownMenuLink2"} data-toggle={"dropdown"}>
                                    Connection
                                </a>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">
                                <Link href="/posts">
                                    <a className={router.pathname.startsWith("/posts") ? "dropdown-item active" : "dropdown-item"}>News</a>
                                </Link>
                                <Link href="#">
                                    <a className={"dropdown-item"}>Calendar</a>
                                </Link>
                                <Link href="#">
                                    <a className={"dropdown-item"}>Events</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link href="#">
                                <a className={"nav-link dropdown-toggle"} id={"navbarDropdownMenuLink1"} data-toggle={"dropdown"}>
                                    Equity Institute &amp; Services
                                </a>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">
                                <Link href="#">
                                    <a className={"dropdown-item"}>Professional Development Resources</a>
                                </Link>
                                <Link href="#">
                                    <a className={"dropdown-item"}>Speakers</a>
                                </Link>
                                <Link href="#">
                                    <a className={"dropdown-item"}>Networking and Mentorship</a>
                                </Link>
                                <Link href="#">
                                    <a className={"dropdown-item"}>Technical Assistance</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link btn btn-warning">Donate</a>
                            </Link>
                            
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );  
};