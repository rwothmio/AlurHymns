//This function takes the id or number of a hymn and returns the hymn object

import hymns from "../hymnsData";

const getHymnById = (number) => {
  for (let i = 0; i < hymns.length; i++) {
    if (hymns[i].id === number) return hymns[i];
  }
};

export default getHymnById;
