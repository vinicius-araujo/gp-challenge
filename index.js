import { sortList, concatList, removeDupl } from './src/main';

export function getLastUpdatedList(...args) {
  const groupList = concatList(...args);
  const uniqueList = removeDupl(groupList);
  return sortList(uniqueList);
}
