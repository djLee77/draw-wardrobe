// addItem.js
const addItem = (setList, categoryID, name, img) => {
  const newItem = {
    id: Math.random(),
    name,
    img,
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
