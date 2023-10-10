import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import RoomProvider from "../context";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <RoomProvider>
        <FeaturedRooms />
        <FeaturedRooms />
      </RoomProvider>
      {/* <RoomProvider>
        <FeaturedRooms />
      </RoomProvider> */}
    </>
  );
};

export default home;
