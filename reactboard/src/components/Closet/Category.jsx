import React from 'react';
import PropTypes from 'prop-types'; // prop-types 추가
import AddItemModal from './modals/AddItemModal';

const Category = ({ category, setList, onDeleteCategory, onDragStart }) => {
  const styles = {
    itemContainer: {
      display: 'flex',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      padding: '16px',
    },
    item: {
      backgroundColor: 'gray',
      margin: '12px',
    },
  };
  return (
    <div key={category.categoryID}>
      <AddItemModal categoryID={category.categoryID} setList={setList} />
      <span>{category.categoryName}</span>
      <button
        type="button"
        onClick={() => onDeleteCategory(category.categoryID)}
      >
        카테고리 삭제
      </button>
      <div style={styles.itemContainer}>
        {category.items.map(item => (
          <div
            style={styles.item}
            key={item.id}
            draggable
            onDragStart={e => onDragStart(e, category.categoryID, item.id)}
          >
            {item.name}
          </div>
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
      }),
    ).isRequired,
  }).isRequired,
  setList: PropTypes.func.isRequired,
  onDeleteCategory: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default Category;
