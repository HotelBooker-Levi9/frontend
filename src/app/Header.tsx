import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import hotelLogo from "../img/hotelLogo.png";
import profileLogo from "../img/profileLogo.png"

interface Props {
    isAuthorized: boolean;
}

export default function Header() {


    return (
        <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="navbar-brand" src={hotelLogo} style={{marginLeft: "8px"}}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">HotelBooker</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/top10destinations">Top 10 destinations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hotels">Arrangements</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li style={{float: "right", paddingRight: "10px", right: "0"}}>
                            <Dropdown style={{backgroundColor: "gray"}}>
                                <Dropdown.Toggle style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}} variant="success" id="dropdown-basic">
                                    <img src={profileLogo} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>    
                                    {(localStorage.getItem("role") !== "ROLE_ADMIN" && localStorage.getItem("role") !== "ROLE_CLIENT") ? <Dropdown.Item href="/login">Log in</Dropdown.Item> : null}
                                    {(localStorage.getItem("role") !== "ROLE_ADMIN" && localStorage.getItem("role") !== "ROLE_CLIENT") ? <Dropdown.Item href="/register">Register</Dropdown.Item> : null}
                                    {(localStorage.getItem("role") === "ROLE_CLIENT" || localStorage.getItem("role") === "ROLE_ADMIN") ? <Dropdown.Item href="/my-account">My account</Dropdown.Item> : null}
                                    {(localStorage.getItem("role") === "ROLE_ADMIN" || localStorage.getItem("role") === "ROLE_CLIENT") ? <Dropdown.Item href="/my-cart">My cart</Dropdown.Item> : null}
                                    {(localStorage.getItem("role") === "ROLE_ADMIN" || localStorage.getItem("role") === "ROLE_CLIENT") ? <Dropdown.Item href="/reservations">My reservations</Dropdown.Item> : null}
                                    {(localStorage.getItem("role") === "ROLE_ADMIN") ? <Dropdown.Item href="/createHotel">Create new hotel</Dropdown.Item> : null}
                                    <Dropdown.Divider />
                                    {(localStorage.getItem("role") === "ROLE_ADMIN" || localStorage.getItem("role") === "ROLE_CLIENT") ? <Dropdown.Item href="/" style={{backgroundColor: "rgb(255,69,0)"}}>Logout</Dropdown.Item> : null}
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                </nav>
        </>
    );
}