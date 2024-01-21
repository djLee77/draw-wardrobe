import { Image } from 'react-konva';
import useImage from 'use-image';

const DraggableImage = ({ imageSrc, x, y, onDragEnd }) => {
  const [image] = useImage(imageSrc);

  return <Image image={image} x={x} y={y} draggable onDragEnd={onDragEnd} />;
};

export default DraggableImage;
