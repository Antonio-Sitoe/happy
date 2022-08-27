import Image from "next/image";
import React from "react";
import { BannerImage, GaleryMultImages } from './style';

const options = [
  "image 1-1.png",
  "image 1-2.png",
  "image4.png",
  "image1.png",
  "image3.png",
  "image2.png",
];

const Galery = () => {
  const [photoActual, setPhotoActual] = React.useState({
    src: "image4.png",
    alt: "Foto atual",
  });

  function handleChangePhotoActual(imgSrc: string) {
    setPhotoActual({ ...photoActual, src: imgSrc });
  }
  return (
    <>
      <BannerImage>
        <Image
          className="Banner"
          src={`/${photoActual.src}`}
          alt={photoActual.alt}
          width={800}
          height={400}
        />
      </BannerImage>
      <GaleryMultImages>
        {options.map((img, index) => {
          return (
            <Image
              onClick={() => handleChangePhotoActual(img)}
              className="images"
              key={index}
              src={`/${img}`}
              alt={""}
              width={100}
              height={100}
            />
          );
        })}
      </GaleryMultImages>
    </>
  );
};

export default Galery;
