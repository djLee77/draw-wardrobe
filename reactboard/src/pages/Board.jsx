import React, { useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

const DraggableImage = ({ imageSrc, x, y, onDragEnd }) => {
  const [image] = useImage(imageSrc);

  return <Image image={image} x={x} y={y} draggable onDragEnd={onDragEnd} />;
};

const App = () => {
  const [imagesOnCanvas, setImagesOnCanvas] = useState([]);

  const handleDragStart = (event, url) => {
    event.dataTransfer.setData('imageSrc', url);
  };

  const handleDropOnCanvas = event => {
    event.preventDefault();
    const imageSrc = event.dataTransfer.getData('imageSrc');
    const { offsetX, offsetY } = event.nativeEvent;
    setImagesOnCanvas([
      ...imagesOnCanvas,
      { imageSrc, x: offsetX, y: offsetY },
    ]);
  };

  const updateImagePosition = (index, x, y) => {
    const updatedImages = imagesOnCanvas.map((img, i) => {
      return i === index ? { ...img, x, y } : img;
    });
    setImagesOnCanvas(updatedImages);
    console.log(imagesOnCanvas);
  };

  const imageUrls = [
    'https://image.msscdn.net/images/goods_img/20230912/3551101/3551101_16970790961650_320.jpg',
    'https://image.msscdn.net/images/goods_img/20220810/2711163/2711163_1_320.jpg',
  ]; // 예시 이미지 URL들

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        {imageUrls.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${i}`}
            draggable
            onDragStart={e => handleDragStart(e, src)}
            style={{ width: '100px', marginRight: '10px' }}
          />
        ))}
      </div>

      <div
        onDrop={handleDropOnCanvas}
        onDragOver={e => e.preventDefault()}
        style={{ width: '100%', height: '400px', border: '1px solid black' }}
      >
        <Stage width={window.innerWidth} height={400}>
          <Layer>
            {imagesOnCanvas.map((img, i) => (
              <DraggableImage
                key={i}
                imageSrc={img.imageSrc}
                x={img.x}
                y={img.y}
                onDragEnd={e => {
                  updateImagePosition(i, e.target.x(), e.target.y());
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default App;
