import { useState } from 'react';
import PropTypes from 'prop-types'; // prop-types 불러오기
import { Layer, Stage } from 'react-konva';
import DraggableImage from '../DraggableImage';

const Content = ({ content }) => {
  const [imagesOnCanvas, setImagesOnCanvas] = useState(content);
  const [selectedId, setSelectedId] = useState(null);

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

  return (
    <div>
      <p>자유롭게 옷을 움직여보세요!</p>
      <div>
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
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
