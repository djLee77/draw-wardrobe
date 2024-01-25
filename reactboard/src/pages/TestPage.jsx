import { useState } from 'react';
import Trash from '../components/closet/Trash';
import useToggle from '../hooks/useToggle';
import Category from '../components/closet/Category';
import AddCategoryModal from '../components/closet/modals/AddCateogryModal';

const testData = [
  {
    categoryID: 0,
    categoryName: '이잉',
    items: [
      {
        id: 0,
        name: '이병선',
        img: 'https://cdn.discordapp.com/attachments/589130484081098790/1199924538373324800/1.jpg?ex=65c44fcf&is=65b1dacf&hm=fe1326129a808723b57c3f2ee9f866a1e5ab079d29665417839b6af4d05759b0&',
      },
      {
        id: 1,
        name: '이대준',
        img: 'https://cdn.discordapp.com/attachments/589130484081098790/1199924538373324800/1.jpg?ex=65c44fcf&is=65b1dacf&hm=fe1326129a808723b57c3f2ee9f866a1e5ab079d29665417839b6af4d05759b0&',
      },
    ],
  },
];

const TestPage = () => {
  const [list, setList] = useState(testData);
  const [isLarged, toggle] = useToggle(false);
  const boxStyle = {
    width: isLarged ? '80%' : '30%',
    backgroundColor: 'tomato',
  };

  return (
    <div>
      <h4>테스트 페이지</h4>
      <div style={boxStyle}>
        <button type="button" onClick={toggle}>
          {isLarged ? '작아져라 얍' : '커져라 얍'}
        </button>
        <AddCategoryModal setList={setList} />
        <hr />
        {list.map(category => (
          <Category
            key={category.categoryID}
            category={category}
            setList={setList}
          />
        ))}
        <Trash list={list} setList={setList} />
      </div>
    </div>
  );
};

export default TestPage;
