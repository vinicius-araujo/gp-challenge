import { getLastUpdatedList } from '../index';

const expect = require('expect.js');

describe('Testing Index ', () => {
  let firstObj;
  let secondObj;
  let thirdObj;
  let fourthObj;
  let list = [];
  let secondList = [];

  beforeEach(() => {
    firstObj = { id: 1, lastModified: new Date('2005-12-17T03:24:00') };
    secondObj = { id: 2, lastModified: new Date('1995-12-17T13:25:00') };
    thirdObj = { id: 3, lastModified: new Date('1999-12-17T03:24:00') };
    fourthObj = { id: 4, lastModified: new Date('2017-11-25T07:24:00') };

    list = [firstObj, secondObj, thirdObj, fourthObj];

    secondList = [
      { id: 5, lastModified: new Date('1857-12-17T03:24:00') },
      { id: 6, lastModified: new Date('2018-01-05T03:24:00') },
      { id: 7, lastModified: new Date('2018-01-05T04:24:00') },
      thirdObj,
      firstObj,
    ];
  });

  it('Should concat, remove duplicate itens and then sort by "lastModified"', () => {
    const sortedList = getLastUpdatedList(list, secondList);

    expect(sortedList).to.eql([
      { id: 5, lastModified: new Date('1857-12-17T03:24:00') },
      secondObj, thirdObj, firstObj, fourthObj,
      { id: 6, lastModified: new Date('2018-01-05T03:24:00') },
      { id: 7, lastModified: new Date('2018-01-05T04:24:00') }]);
  });
});
