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
          />
        ))}
      </div>
      <Trash list={list} setList={setList} />
    </div>
  );
};

export default TestPage;
