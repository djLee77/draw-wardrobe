import { useEffect, useState } from 'react';
import Trash from '../components/Trash';
import addItem from '../utils/addItem';
import addCategory from '../utils/addCategory';

const testData = [
  {
    categoryID: 0,
    categoryName: '이잉',
    items: [
      {
        id: 0,
        name: '이병선',
      },
      {
        id: 1,
        name: '이대준',
      },
    ],
  },
  {
    categoryName: '치잉',
    categoryID: 1,
    items: [
      {
        id: 0,
        name: '이우현',
      },
      {
        id: 1,
        name: '김상규',
      },
    ],
  },
];

const TestPage = () => {
  const [list, setList] = useState([]);

  // 드래그 이벤트
  const handleDragStart = (e, categoryID, itemID) => {
    e.dataTransfer.setData('data', JSON.stringify({ categoryID, itemID })); // 드래그된 데이터 설정
  };

  // 드랍 이벤트
  const handleDrop = e => {
    e.preventDefault();
    const droppedIDs = JSON.parse(e.dataTransfer.getData('data')); // 드래그된 데이터 가져오기
    console.log('Dropped:', droppedIDs);

    if (window.confirm('정말로 삭제할겨?')) {
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

      console.log(newData);
      // 상태 업데이트
      setList(newData);
    }
  };

  const handleAddCategory = () => {
    const newCategoryName = window.prompt('카테고리 이름 입력');
    if (newCategoryName !== null) {
      addCategory(setList, newCategoryName);
    }
  };

  const handleAddItem = categoryID => {
    const name = window.prompt('이름 입력');
    addItem(setList, categoryID, name);
  };

  // 첫 마운트될때 list 상태 업뎃
  useEffect(() => {
    setList(testData);
    console.log(list);
  }, []);

  return (
    <div className="container">
      <h4>테스트 페이지</h4>
      <div>
        <button type="button" onClick={handleAddCategory}>
          카테고리 추가
        </button>
        <hr />
        {list.map(value => (
          <div key={value.categoryID}>
            <button
              type="button"
              onClick={() => handleAddItem(value.categoryID)}
            >
              추가
            </button>
            <span>{value.categoryName}</span>
            {value.items.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={e => handleDragStart(e, value.categoryID, item.id)}
              >
                {item.name}
              </div>
            ))}
            <hr />
          </div>
        ))}
      </div>
      <Trash onDrop={handleDrop} />
    </div>
  );
};

export default TestPage;
