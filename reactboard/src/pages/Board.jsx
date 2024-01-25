import React, { useState } from 'react';
import { Stage, Layer } from 'react-konva';
import DraggableImage from '../components/DraggableImage';
import styles from './Board.module.css';
import Closet from '../components/closet/Closet';

const Board = () => {
  const [imagesOnCanvas, setImagesOnCanvas] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handleDropOnCanvas = event => {
    event.preventDefault();
    const imageSrc = JSON.parse(event.dataTransfer.getData('data')).img;
    console.log(imageSrc);
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

  const bringToFront = index => {
    setImagesOnCanvas(images => {
      const selected = images[index];
      return [...images.filter((_, i) => i !== index), selected];
    });
  };

  const save = () => {
    localStorage.setItem('imagesOnCanvas', JSON.stringify(imagesOnCanvas));
    console.log(localStorage.getItem('imagesOnCanvas'));
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={save}>
        저장
      </button>

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
                onSelect={() => {
                  bringToFront(i);
                  setSelectedId(i);
                }}
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

      <Closet />
    </div>
  );
};

export default Board;
