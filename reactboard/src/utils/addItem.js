// addItem.js
const addItem = (setList, categoryID, name) => {
  const newItem = {
    id: Math.random(),
    name,
  };

  setList(prevList => {
    const updatedList = prevList.map(category => {
      if (category.categoryID === categoryID) {
        return {
          ...category,
          items: [...category.items, newItem],
        };
      }
      return category;
    });

    return updatedList;
  });
};

export default addItem;
