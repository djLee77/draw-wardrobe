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
  const handleDragStart = (e, name) => {
    e.dataTransfer.setData('name', name); // 드래그된 데이터 설정
    console.log(name);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  // 드랍 이벤트
  const handleDrop = e => {
    e.preventDefault();
    const droppedText = e.dataTransfer.getData('name'); // 드래그된 데이터 가져오기
    console.log('Dropped:', droppedText);

    if (window.confirm('정말로 삭제할겨?')) {
      // 특정 name을 가진 항목을 제거한 새로운 배열 생성
      const newData = list.filter(item => item.name !== droppedText);

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
      <h4>테스트 페이지에양</h4>
      <div>
        {list.map(value => (
          <div
            key={value.id}
            draggable
            onDragStart={e => handleDragStart(e, value.name)}
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
