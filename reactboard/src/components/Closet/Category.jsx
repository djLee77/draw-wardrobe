import React from 'react';
import PropTypes from 'prop-types'; // prop-types 추가
import AddItemModal from './modals/AddItemModal';
import Item from './Item';

const Category = ({ category, setList }) => {
  // 카테고리 삭제 함수
  const handleDeleteCategory = deleteID => {
    if (!window.confirm('정말로 삭제할겨? 안에 내용도 다 삭제되는뎅')) return;

    // categoryID와 같은 id 가진 항목을 제거한 배열로 업데이트
    setList(prevList =>
      prevList.filter(value => value.categoryID !== deleteID),
    );
  };

  const itemContainer = {
    display: 'flex',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    padding: '16px',
  };
  return (
    <div key={category.categoryID}>
      <AddItemModal categoryID={category.categoryID} setList={setList} />
      <span>{category.categoryName}</span>
      <button
        type="button"
        onClick={() => handleDeleteCategory(category.categoryID)}
      >
        카테고리 삭제
      </button>
      <div style={itemContainer}>
        {category.items.map(item => (
          <Item key={item.id} categoryID={category.categoryID} item={item} />
        ))}
      </div>
      <hr />
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    categoryID: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  setList: PropTypes.func.isRequired,
};

export default Category;
