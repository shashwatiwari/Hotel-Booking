import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";

export default function FeaturedRooms() {
  const context = useContext(RoomContext);
  const { loading, featuredRooms: rooms } = context;

  const roomComponents = rooms.map(room => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomComponents}
      </div>
    </section>
  );
}
