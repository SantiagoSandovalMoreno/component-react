const IAddOneItem = (list, index, el) => [
    ...list.slice(0, index),
    el,
    ...list.slice(index + 1),
  ];
  
export const ICollectionSwapping = (list, indexOne, indexTwo) => {
    const tmp = { ...list[indexOne] };
    const arrTmp = IAddOneItem(list, indexOne, { ...list[indexTwo] });
    return IAddOneItem(arrTmp, indexTwo, tmp);
};