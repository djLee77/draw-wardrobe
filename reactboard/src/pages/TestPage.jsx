import { useEffect, useState } from 'react';

const testData = [
  {
    id: 0,
    name: '이병선',
  },
  {
    id: 1,
    name: '이대준',
  },
];

const TestPage = () => {
  const [list, setList] = useState([]);

  // 드래그 이벤트
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id); // 드래그된 데이터 설정
    console.log(id);
  };

  // 기본 동작을 방지하고 드롭을 허용합니다.
  const handleDragOver = e => {
    e.preventDefault();
  };

  // 드랍 이벤트
  const handleDrop = e => {
    e.preventDefault();
    const droppedItem = Number(e.dataTransfer.getData('id')); // 드래그된 데이터 가져오기
    console.log('Dropped:', droppedItem);

    if (window.confirm('정말로 삭제할겨?')) {
      // droppedItem 같은 id 가진 항목을 제거한 새로운 배열 생성
      const newData = list.filter(item => item.id !== droppedItem);

      // 상태 업데이트
      setList(newData);
    }
  };

  // 첫 마운트될때 list 상태 업뎃
  useEffect(() => {
    setList(testData);
  }, []);

  return (
    <div className="container">
      <h4>테스트 페이지</h4>
      <div>
        {list.map(value => (
          <div
            key={value.id}
            draggable
            onDragStart={e => handleDragStart(e, value.id)}
          >
            {value.name}
          </div>
        ))}
      </div>
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
    </div>
  );
};
export default TestPage;
