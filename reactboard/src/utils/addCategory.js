// addCategory.js
const addCategory = (setList, categoryName) => {
  setList(prevList => {
    const newCategory = {
      categoryID: prevList.length,
      categoryName,
      items: [],
    };
    return [...prevList, newCategory];
  });
};

export default addCategory;
