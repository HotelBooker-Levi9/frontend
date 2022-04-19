import { Link } from "react-router-dom";


export default function Footer() {

    return (
        <footer className="text-center text-white" style={{position: "absolute", left: 0, right: 0, bottom:0, backgroundColor: "lightgray", height: "40px"}}>
            <div className="text-center text-dark p-3" >
                <Link className="text-dark" to="https://hotelBooker.com/">HotelBooker.com</Link>
            </div>
        </footer>
    );

}