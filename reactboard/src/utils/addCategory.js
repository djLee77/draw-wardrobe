// addCategory.js
const addCategory = (setList, categoryName) => {
  setList(prevList => {
    const newCategory = {
      categoryID: Math.random(),
      categoryName,
      items: [],
    };
    return [...prevList, newCategory];
  });
};

export default addCategory;
