import PropTypes from 'prop-types'; // prop-types 불러오기

const Trash = ({ list, setList }) => {
  // 드랍 이벤트
  const handleDrop = e => {
    e.preventDefault();
    const droppedIDs = JSON.parse(e.dataTransfer.getData('data')); // 드래그된 데이터 가져오기
    console.log('Dropped:', droppedIDs);

    if (!window.confirm('정말로 삭제할겨?')) return;

    // droppedItem 같은 id 가진 항목을 제거한 새로운 배열 생성
    const newData = list.map(category => {
      if (category.categoryID === droppedIDs.categoryID) {
        return {
          ...category,
          items: category.items.filter(item => item.id !== droppedIDs.itemID),
        };
      }
      return category;
    });

    // 상태 업데이트
    setList(newData);
  };

  // 기본 동작을 방지하고 드롭을 허용합니다.
  const handleDragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        border: '2px dashed #ccc',
        padding: '20px',
        margin: '20px',
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      삭제 영역
    </div>
  );
};

Trash.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      categoryID: PropTypes.number.isRequired,
      categoryName: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  setList: PropTypes.func.isRequired, // onDrop prop의 타입을 함수로 지정하고 필수 여부를 설정
};

export default Trash;
