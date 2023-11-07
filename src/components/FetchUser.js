import React, {useEffect, useState} from "react";
import axios from "axios";

const FetchUser = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        handle();
    }, [])

    function handle() {
        axios.get("https://reqres.in/api/users")
        .then(response =>{
            // console.log(response);
            setUserData(response.data.data);
            console.log(userData);
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="fetchUser">
            <div>
                 <p> Blue Whales </p>
                <button className="btn" onClick={handle}> Get User List </button>
            </div>
            <div className="userList">
                <div className="heading">
                    <p> First Name </p>
                    <p> Last Name </p>
                    <p> Email </p>
                    <p> Avatar </p>
                </div>
                
                {
                    userData.length > 0 && userData.map(item => (
                        <div className="user-details">
                            <p> {item.first_name} </p>
                            <p> {item.last_name} </p>
                            <p> {item.email} </p>
                            <img src={item.avatar} alt="Person Image" />
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default FetchUser;
