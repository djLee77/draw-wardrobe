import React, { useState } from 'react';
import { Stage, Layer } from 'react-konva';
import DraggableImage from '../components/DraggableImage';
import styles from './Board.module.css';

const Board = () => {
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

  const updateImagePosition = (index, newAttrs) => {
    const updatedImages = imagesOnCanvas.map((img, i) => {
      if (i === index) {
        return { ...img, ...newAttrs };
      }
      return img;
    });
    setImagesOnCanvas(updatedImages);
    console.log(imagesOnCanvas);
  };

  const imageUrls = [
    'https://image.msscdn.net/images/goods_img/20230912/3551101/3551101_16970790961650_320.jpg',
    'https://image.msscdn.net/images/goods_img/20220810/2711163/2711163_1_320.jpg',
  ]; // 예시 이미지 URL들

  return (
    <div className={styles.container}>
      <div
        className={styles.Board}
        onDrop={handleDropOnCanvas}
        onDragOver={e => e.preventDefault()}
      >
        <Stage width={700} height={500}>
          <Layer>
            {imagesOnCanvas.map((img, i) => (
              <DraggableImage
                key={i}
                imageSrc={img.imageSrc}
                x={img.x}
                y={img.y}
                onChange={newAttrs => {
                  const imgs = imagesOnCanvas.slice();
                  imgs[i] = newAttrs;
                  setImagesOnCanvas(imgs);
                }}
                onDragEnd={e => {
                  updateImagePosition(i, e.target.x(), e.target.y());
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>

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
    </div>
  );
};

export default Board;
