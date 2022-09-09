import React, { useState, useCallback } from 'react';
import Modal from './Modal';
import { useSwipeable } from 'react-swipeable';

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [gallery] = useState([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
  ]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  // const nextImage = useCallback((currentImage) => {
  //   if (currentImage !== 11) {
  //     setCurrentImage(currentImage + 1);
  //   } else {
  //     setCurrentImage(0);
  //   }
  // }, []);

  // const previousImage = useCallback((currentImage) => {
  //   if (currentImage !== 0) {
  //     setCurrentImage(currentImage - 1);
  //   } else {
  //     setCurrentImage(11);
  //   }
  // }, []);

  const handlers = useSwipeable({
    // onSwipedRight: () => previousImage(currentImage),
    // onSwipedLeft: () => nextImage(currentImage),
    onSwipedDown: () => closeImageViewer(),
    onSwipedUp: () => closeImageViewer(),
  });

  return (
    <div className='m-b-10 py-20 mt-80' {...handlers}>
      <p className='gallery'>사 진 첩</p>
      <div className='mt-40'>
        {gallery.map((src, index) => (
          <div key={index} className='w-3 inline mx-5 space-center'>
            <img
              width={100}
              src={require(`../assets/jpg/photos/${index}.jpeg`)}
              onClick={() => openImageViewer(index)}
              key={src}
              alt={src}
            />
          </div>
        ))}
        {isViewerOpen && (
          <Modal
            currentPhoto={currentImage}
            onClose={closeImageViewer}
            // toNext={() => nextImage(currentImage)}
            // toPrevious={() => previousImage(currentImage)}
            photos={gallery}
          />
        )}
      </div>
    </div>
  );
}

export default Gallery;
