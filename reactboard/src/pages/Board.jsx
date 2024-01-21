import React, { useState } from 'react';
import { Stage, Layer } from 'react-konva';
import DraggableImage from '../components/DraggableImage'; // 경로에 맞게 조정하세요
import styles from './Board.module.css'; // 경로에 맞게 조정하세요

const Board = () => {
  const [imagesOnCanvas, setImagesOnCanvas] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handleDragStart = (event, url) => {
    event.dataTransfer.setData('imageSrc', url);
  };

  const handleDropOnCanvas = event => {
    event.preventDefault();
    const imageSrc = event.dataTransfer.getData('imageSrc');
    const { offsetX, offsetY } = event.nativeEvent;
    setImagesOnCanvas([
      ...imagesOnCanvas,
      { imageSrc, x: offsetX, y: offsetY, scaleX: 1, scaleY: 1 },
    ]);
  };

  const updateImagePosition = (index, newAttrs) => {
    const updatedImages = imagesOnCanvas.map((img, i) => {
      return i === index ? { ...img, ...newAttrs } : img;
    });
    setImagesOnCanvas(updatedImages);
  };

  const handleMouseDown = e => {
    // 클릭된 대상이 Stage(배경)인 경우 선택 해제
    if (e.target === e.target.getStage()) {
      setSelectedId(null);
    }
  };

  const imageUrls = [
    'https://image.msscdn.net/images/goods_img/20230912/3551101/3551101_16970790961650_320.jpg',
    'https://image.msscdn.net/images/goods_img/20220810/2711163/2711163_1_320.jpg',
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.Board}
        onDrop={handleDropOnCanvas}
        onDragOver={e => e.preventDefault()}
      >
        <Stage width={700} height={500} onMouseDown={handleMouseDown}>
          <Layer>
            {imagesOnCanvas.map((img, i) => (
              <DraggableImage
                key={i}
                imageSrc={img.imageSrc}
                x={img.x}
                y={img.y}
                scaleX={img.scaleX}
                scaleY={img.scaleY}
                isSelected={selectedId === i}
                onSelect={() => setSelectedId(i)}
                onChange={newAttrs => {
                  updateImagePosition(i, newAttrs);
                }}
                onDragEnd={e => {
                  updateImagePosition(i, {
                    ...img,
                    x: e.target.x(),
                    y: e.target.y(),
                  });
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
