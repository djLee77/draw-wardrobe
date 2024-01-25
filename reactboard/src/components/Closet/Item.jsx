import PropTypes from 'prop-types'; // prop-types 추가

const Item = ({ categoryID, item }) => {
  // 드래그 이벤트
  const handleDragStart = (e, itemID) => {
    e.dataTransfer.setData('data', JSON.stringify({ categoryID, itemID })); // 드래그된 데이터 설정
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '12px',
  };

  return (
    <div
      style={itemStyle}
      draggable
      onDragStart={e => handleDragStart(e, item.id)}
    >
      <img src={item.img} alt="이미지" width={150} />
      {item.name}
    </div>
  );
};

Item.propTypes = {
  categoryID: PropTypes.number.isRequired,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Item;
