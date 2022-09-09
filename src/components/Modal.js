import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Modal({ onClose, currentPhoto, toNext, toPrevious, photos }) {
  return (
    <div className='modalBackdrop'>
      {/* <span
        className='rounded closeBtn material-symbols-outlined'
        onClick={onClose}
      >
        close
      </span> */}
      <div className='modalContainer'>
        <Carousel selectedItem={currentPhoto}>
          {photos.map((src) => (
            <img
              src={require(`../assets/jpg/photos/${src}.jpeg`)}
              alt='current photos'
              key={src}
            />
          ))}
        </Carousel>
      </div>
    </div>
    // <div className='modalBackdrop'>
    //   <span
    //     className='rounded closeBtn material-symbols-outlined'
    //     onClick={onClose}
    //   >
    //     close
    //   </span>
    //   <div className='modalContainer'>
    //     <img
    //       src={require(`../assets/jpg/photos/${currentPhoto}.jpeg`)}
    //       alt='current category'
    //     />
    //     <span
    //       className='rounded forward material-symbols-outlined'
    //       onClick={toNext}
    //     >
    //       arrow_forward_ios
    //     </span>
    //     <span
    //       className='rounded back material-symbols-outlined'
    //       onClick={toPrevious}
    //     >
    //       arrow_back_ios
    //     </span>
    //   </div>
    // </div>
  );
}

export default Modal;
