import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import registrationImage from "../../img/registrationImage.png";
import { ClientModel } from "../../model/ClientModel";
import { useStore } from "../../store/store";

export default observer(function Register() {

    const {clientStore} = useStore();
    const {registerClient} = clientStore;


    const [clientValues, setClientValues] = useState({
        id: 0,
        username: '',
        name: '',
        surname: '',
        email: '',
        password: '',
    }); 

    function handleSubmit(event: any) {
        event?.preventDefault();

        let newClient = new ClientModel();
        newClient.id = "2";
        newClient.username = clientValues.username;
        newClient.name = clientValues.name;
        newClient.surname = clientValues.surname;
        newClient.email = clientValues.email;
        newClient.password = clientValues.password;
        newClient.isDeleted = false;
        newClient.cartId = "1";
        newClient.isBlocked = false;

        console.log(newClient);

        registerClient(newClient);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setClientValues({...clientValues, [name]: value})
    }

    return (
        <>
            <section className="vh-100" style={{backgroundColor: "#eee"}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black">
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                                
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="text" id="usernameId" className="form-control" value={clientValues.username} name='username' onChange={handleInputChange}/>
                                    <label className="form-label" htmlFor="form3Example1c">Username</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="text" id="nameId" className="form-control" value={clientValues.name} name='name' onChange={handleInputChange} />
                                    <label className="form-label" htmlFor="form3Example1c">Name</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="text" id="surnameId" className="form-control" value={clientValues.surname} name='surname' onChange={handleInputChange}/>
                                    <label className="form-label" htmlFor="form3Example1c">Surame</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="email" id="emailId" className="form-control" value={clientValues.email} name='email' onChange={handleInputChange}/>
                                    <label className="form-label" htmlFor="form3Example3c">Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="passwordId" className="form-control" value={clientValues.password} name='password' onChange={handleInputChange}/>
                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="submit" className="btn btn-primary btn-lg" onSubmit={handleSubmit}>Register</button>
                                </div>

                            </form>

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src={registrationImage} className="img-fluid" alt="Sample image" style={{width: "70%", height: "70%"}}/>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    );
})