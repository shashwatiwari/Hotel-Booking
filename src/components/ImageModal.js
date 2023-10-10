import React from "react";

const ImageModal = ({ imageUrl, onClose }) => {
    const modalStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        flexDirection: "column", // Adjust to column layout
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
    };

    const imageStyle = {
        maxWidth: "100%", // Adjust the width as needed
        maxHeight: "90vh", // Adjust the height as needed
        marginBottom: "10px", // Add margin below the image
    };

    const buttonStyle = {
        background: "none",
        border: "none",
        color: "white",
        cursor: "pointer",
    };

    return (
        <div style={modalStyle} onClick={onClose}>
            <button style={buttonStyle}>Click to go back</button>
            <img src={imageUrl} alt="Full-Screen" style={imageStyle} />
        </div>
    );
};

export default ImageModal;
