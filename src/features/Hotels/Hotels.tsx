import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { HotelModel } from "../../model/HotelModel";
import { useStore } from "../../store/store";
import Pagination from "../Pagination/Pagination";
import Reservation from "../Reservations/Reservation";
import EditHotel from "./EditHotel";
import Hotel from "./Hotel";
import Search from "./Search";





export default observer(function Hotels() {

    const {hotelStore} = useStore();
    const {loadHotels, hotelList, citiesList, loadCities, getPostPerPage, getNumberOfHotels, numberOfHotels} = hotelStore;

    const [showEdit, setShowEdit] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState<HotelModel>();

    const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(1); 
    const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = [... hotelList.slice(indexOfFirstPost, indexOfLastPost)];
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if(hotelList.length === 0 && citiesList.length === 0) {
            loadHotels();
            loadCities();
            setTotalPages(numberOfHotels/5)
        }
        getNumberOfHotels()

    }, [loadHotels, hotelList, numberOfHotels, toggle, getPostPerPage])
    
    const openEdit = () => {
		setShowEdit(true);
	}

	const closeEdit = () => {
		setShowEdit(false);
	}

    const setHotel = (hotel: HotelModel) => {
        setSelectedHotel(hotel);
    }

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    function setCurrentHotels() {
        getPostPerPage(indexOfFirstPost, indexOfLastPost)
    }

    function changeToggle() {
        setToggle(!toggle);
        setCurrentPage(1);
    }

    return (
        <div style={{ textAlign: "center", margin: "auto"}}>
            <Search changeToggle={changeToggle}></Search>
            { showEdit ?
                <EditHotel closeEdit={closeEdit}></EditHotel>
            : null}
            <table className="table" style={{ borderRadius: "25px"}}>
                <thead className="thead-dark">
                        <tr style={{backgroundColor: "rgb(170, 188, 193)"}}>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price per day</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">City</th>
                            <th scope="col">Destination</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(hotelList.length > 0) ? currentPosts.map((hotel, i) => {
                            return <Hotel showEdit={showEdit} openEdit={openEdit}  hotel={hotel} hotelId={hotel.id} key={i} />
                        }) : null}
                    </tbody>
            </table>
            <Pagination postsPerPage={postsPerPage}
                                    totalPosts={numberOfHotels}
                                    paginate={paginate}/>
        </div>
    );
})

