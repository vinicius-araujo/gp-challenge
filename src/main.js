export function concatList(...args) {
  return args.reduce((pre, val) => [...pre, ...val]);
}

export function sortList(list, prop = 'lastModified') {
  return list.sort((a, b) => a[prop] - b[prop]);
}

export function removeDupl(list) {
  const resultList = [...new Set(list)];

  return resultList;
}
