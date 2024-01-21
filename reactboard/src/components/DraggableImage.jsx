import React, { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const DraggableImage = ({ imageSrc, x, y, onDragEnd }) => {
  const [image] = useImage(imageSrc);
  const imageRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    // Transformer를 현재 이미지에 적용
    if (trRef.current && imageRef.current) {
      trRef.current.nodes([imageRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, []);

  return (
    <>
      <Image
        ref={imageRef}
        image={image}
        x={x}
        y={y}
        draggable
        onDragEnd={onDragEnd}
      />
      <Transformer ref={trRef} />
    </>
  );
};

export default DraggableImage;
