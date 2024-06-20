import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsXLg } from "react-icons/bs";

const DetailWindow = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();
  const location = useLocation();
  let modal = location.state?.show;

  const changeshow = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!modal) {
      navigate("/");
    }
  });

  if (modal) {
    return (
      <div className="modal active-modal">
        <div className="overlay"></div>
        <div className={`${modal ? "modal-content" : "active-modal"} `}>
          <p> Hii Mr. : {data?.name} </p>
          <p>Your login Id is : {data?.email}</p>
          <p>Your Age is : {data?.age} </p>
          {data?.guestname && <p>Today your guest is {data?.guestname} </p>}

          <button className="close-modal" onClick={changeshow}>
            <BsXLg />
          </button>
        </div>
      </div>
    );
  } else return <h1>Hello no data </h1>;
};

export default DetailWindow;
