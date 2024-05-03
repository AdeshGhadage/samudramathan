import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetail from "../components/EventDetail";

function Event(){
    return(
        <>
        <div class="container-xxl bg-white p-0">
        <div class="container-xxl position-relative p-0" id="home">
          <Navbar />
        </div>
        <EventDetail />
        <Footer />
        
      </div>
        </>
    );
}

export default Event;