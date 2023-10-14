import React, { useContext, useState } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import ImageModal from "../components/ImageModal";

const SingleRoom = () => {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);

  const [showFullScreenImage, setShowFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  if (!room) {
    return (
      <div className="error">
        <h3> no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [main, ...defaultImages] = images;

  // Function to open the full-screen image.
  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
    setShowFullScreenImage(true);
  };

  // Function to close the full-screen image.
  const closeFullScreenImage = () => {
    setShowFullScreenImage(false);
    setFullScreenImage("");
  };

  return (
    <><h3 style={{ padding: '10px', paddingTop: '20px' }}>See <span style={{ color: '#af9a7d' }}>Room:</span></h3>
      {/* <StyledHero img={images[0] || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero> */}
      {/* <img src={images[0]} style={{ height: '60%' }}></img> */}
      {showFullScreenImage && (
        <ImageModal imageUrl={fullScreenImage} onClose={closeFullScreenImage} />
      )}
      <section className="single-room">
        <div className="single-room-images ">
          {defaultImages.map((item, index) => (
            <img key={index} src={item} alt={name} onClick={() => openFullScreenImage(item)} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
