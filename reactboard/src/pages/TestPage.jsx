import { useState } from 'react';
import Trash from '../components/Closet/Trash';
import useToggle from '../hooks/useToggle';
import Category from '../components/Closet/Category';
import AddCategoryModal from '../components/Closet/modals/AddCateogryModal';

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
  const [list, setList] = useState(testData);
  const [isLarged, toggle] = useToggle(false);

  // 드래그 이벤트
  const handleDragStart = (e, categoryID, itemID) => {
    e.dataTransfer.setData('data', JSON.stringify({ categoryID, itemID })); // 드래그된 데이터 설정
  };

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

  // 카테고리 삭제 함수
  const handleDeleteCategory = deleteID => {
    if (!window.confirm('정말로 삭제할겨? 안에 내용도 다 삭제되는뎅')) return;

    // categoryID와 같은 id 가진 항목을 제거한 새로운 배열 생성
    const newData = list.filter(value => value.categoryID !== deleteID);

    // 상태 업데이트
    setList(newData);
  };

  return (
    <div className="container">
      <h4>테스트 페이지</h4>
      <button type="button" onClick={toggle}>
        {isLarged ? '작아져라 얍' : '커져라 얍'}
      </button>
      <div
        style={{ width: isLarged ? '80%' : '30%', backgroundColor: 'tomato' }}
      >
        <AddCategoryModal setList={setList} />
        <hr />
        {list.map(category => (
          <Category
            key={category.categoryID}
            category={category}
            setList={setList}
            onDeleteCategory={handleDeleteCategory}
            onDragStart={handleDragStart}
          />
        ))}
      </div>
      <Trash onDrop={handleDrop} />
    </div>
  );
};

export default TestPage;
