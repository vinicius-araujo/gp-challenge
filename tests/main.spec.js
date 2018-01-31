import { sortList, concatList, removeDupl } from '../main';

const expect = require('expect.js');

describe('Testing Main ', () => {
  describe('Smoke main functions', () => {
    it('Should exist a unify method called "concatList"', () => {
      expect(concatList).to.be.a('function');
    });

    it('Should exist a remove duplicated method called "removeDupl"', () => {
      expect(removeDupl).to.be.a('function');
    });

    it('Should exist a sort method called "concatList"', () => {
      expect(sortList).to.be.a('function');
    });
  });

  describe('Function concatList (join all Arrays into one)', () => {
    it('Should return an array when given 2 arrays', () => {
      const firstList = [1, 2, 3];
      const secondList = [1, 2, 'three'];
      const uniqueList = concatList(firstList, secondList);

      expect(uniqueList).to.eql([1, 2, 3, 1, 2, 'three']);
    });

    it('Should return an array when given more than 2 arrays', () => {
      const firstList = [1, 2, 3];
      const secondList = [1, 2, 'three'];
      const thirdList = ['one', 5];
      const uniqueList = concatList(firstList, secondList, thirdList);

      expect(uniqueList).to.eql([1, 2, 3, 1, 2, 'three', 'one', 5]);
    });
  });

  describe('Function removeDupl (removing all duplicate Item)', () => {
    it('Should remove any duplicate item given an array', () => {
      const list = [1, 2, 3, 1, 2, 'three'];

      const resultList = removeDupl(list);

      expect(resultList).to.eql([1, 2, 3, 'three']);
    });

    it('Should remove any duplicate item when given an array with Obj', () => {
      const firstObj = { id: 1, lastModified: new Date('1995-12-17T03:24:00') };
      const secondObj = { id: 2, lastModified: new Date('1995-12-17T03:24:00') };

      const list = [1, firstObj, secondObj, 'three', firstObj];

      const resultList = removeDupl(list);

      expect(resultList).to.eql([1, firstObj, secondObj, 'three']);
    });
  });

  describe('Function sortList (sort an array of objects by property)', () => {
    let firstObj;
    let secondObj;
    let thirdObj;
    let fourthObj;
    let list = [];

    beforeEach(() => {
      firstObj = { id: 1, lastModified: new Date('2005-12-17T03:24:00') };
      secondObj = { id: 2, lastModified: new Date('1995-12-17T03:24:00') };
      thirdObj = { id: 3, lastModified: new Date('1999-12-17T03:24:00') };
      fourthObj = { id: 4, lastModified: new Date('2017-11-25T03:24:00') };
      list = [firstObj, secondObj, thirdObj, fourthObj];
    });

    it('Should sort an array by "lastModified" property', () => {
      const resultList = sortList(list);
      expect(resultList).to.eql([secondObj, thirdObj, firstObj, fourthObj]);
    });

    it('Should sort an array by "id" property', () => {
      const resultList = sortList(list, 'id');
      expect(resultList).to.eql([firstObj, secondObj, thirdObj, fourthObj]);
    });
  });
});
