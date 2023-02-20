import React, { useEffect, useState } from "react";

const ImageList = ({ images, brand, text }) => {
  const [brandLogo, setBrandLogo] = useState("");

  useEffect(() => {
    setBrandLogo(
      "https://www.pngfind.com/pngs/m/243-2437878_circle-grey-solid-grey-colour-circle-png-transparent.png"
    );
    switch (brand) {
      case "Apple":
        setBrandLogo(
          "https://alchemyimmersive.com/wp-content/uploads/sites/4/2020/04/apple-logo-transparent.png"
        );
        break;
      case "Huawei":
        setBrandLogo(
          "https://www.freepnglogos.com/uploads/huawei-logo-png/huawei-logo-png-hd-0.png"
        );
        break;
      case "Microsoft":
        setBrandLogo(
          "https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png"
        );
        break;
      case "Samsung":
        setBrandLogo(
          " https://www.freepnglogos.com/uploads/original-samsung-logo-10.png "
        );
        break;
      default:
        setBrandLogo(
          "https://www.pngfind.com/pngs/m/243-2437878_circle-grey-solid-grey-colour-circle-png-transparent.png"
        );
    }
  }, [brand]);

  return (
    <>
      {images.map((image) => {
        return (
          <div style={{ position: "relative", display: "inline-block" }}>
            {text && (
              <span
                style={{
                  position: "absolute",
                  color: "white",
                  top: "30%",
                  left: "30%",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              >
                {text}
              </span>
            )}
            <img
              src={image || "/publer.png"}
              alt="base image"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />

            {brand && (
              <img
                src={brandLogo}
                alt="brand image"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default ImageList;
