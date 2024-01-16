import PropTypes from 'prop-types'; // prop-types 불러오기

const Trash = ({ onDrop }) => {
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
      onDrop={onDrop}
    >
      삭제 영역
    </div>
  );
};

Trash.propTypes = {
  onDrop: PropTypes.func.isRequired, // onDrop prop의 타입을 함수로 지정하고 필수 여부를 설정
};

export default Trash;
