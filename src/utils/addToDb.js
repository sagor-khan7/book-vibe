function getStoredReadList() {
  const readList = localStorage.getItem("readList");
  return readList ? JSON.parse(readList) : [];
  //   const storedListStr = localStorage.getItem("readList");
  //   if (storedListStr) {
  //     const storedList = JSON.parse(storedListStr);
  //     return storedList;
  //   } else {
  //     return [];
  //   }
}

function addToReadList(id) {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    alert("This book is already in your read list.");
  } else {
    storedList.push(id);
    localStorage.setItem("readList", JSON.stringify(storedList));
  }
}

function getStoredWishList() {
  const wishList = localStorage.getItem("wishList");
  return wishList ? JSON.parse(wishList) : [];
}

function addToWishList(id) {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    alert("This book is already in your wish list.");
  } else {
    storedList.push(id);
    localStorage.setItem("wishList", JSON.stringify(storedList));
  }
}

export { getStoredReadList, addToReadList, getStoredWishList, addToWishList };
