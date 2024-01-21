import React, { useEffect, useState } from "react";
import "./profilePage.css";
import userData from "./user.json";

const ProfilePage = () => {
  //   const [userData, setUserData] = useState("");
  //   const id = localStorage.getItem("id");

  //   useEffect(() => {
  //     fetch(`https://dummyjson.com/users/1`)
  //       .then((res) => res.json())
  //       .then((data) => setUserData(data))
  //       .catch((err) => console.log(err));
  //     // console.log("userData ->", userData);
  //   }, []);

  function navHomePage() {}

  return (
    <div className="page">
      {/* <h1>Profile Page</h1> */}
      <div className="profile-container">
        <img src={userData[0].image} alt="avatar" />
        <div className="profile-info">
          <h2>
            {userData[0].firstName} {userData[0].lastName}
          </h2>
          <div>
            <div>
              <span>{userData[0].address.address}</span>
              <span>{userData[0].address.city}</span>
              <span>{userData[0].address.state}</span>
            </div>
            <div>
              <span>{userData[0].email}</span>
              <span>{userData[0].phone}</span>
            </div>
          </div>
        </div>
      </div>
      <button onClick={navHomePage}>Logout</button>
    </div>
  );
};

export default ProfilePage;
