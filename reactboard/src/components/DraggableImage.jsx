import React, { useRef, useEffect } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const DraggableImage = ({
  imageSrc,
  x,
  y,
  scaleX,
  scaleY,
  isSelected,
  onSelect,
  onChange,
  onDragEnd,
}) => {
  const [image] = useImage(imageSrc);
  const imageRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected && trRef.current && imageRef.current) {
      trRef.current.nodes([imageRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        ref={imageRef}
        image={image}
        x={x}
        y={y}
        scaleX={scaleX}
        scaleY={scaleY}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={onDragEnd}
        onTransformEnd={() => {
          const node = imageRef.current;
          onChange({
            x: node.x(),
            y: node.y(),
            scaleX: node.scaleX(),
            scaleY: node.scaleY(),
          });
          node.scaleX(1);
          node.scaleY(1);
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </>
  );
};

export default DraggableImage;
