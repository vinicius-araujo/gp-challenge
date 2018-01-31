# Code Challenge - GP

Code challenge.

## Dependencies

This project uses some ES6 features and we use [BabelJs](https://babeljs.io/) in order to get things working well.

## Tests

This project uses [Mocha](https://mochajs.org/) and [ExpectJS](https://github.com/Automattic/expect.js) to execute tests.

```
npm run test:tdd
```

## Methods

> Follow the methods that the project provides.

### concatList(..args)

> Return an unique Array.

**Example**

```js
const firstList = [1, 2, 3];
const secondList = [1, 2, 'three'];
const uniqueList = concatList(firstList, secondList);

//uniqueList => [1, 2, 3, 1, 2, 'three']
```

### removeDupl(list)

> Remove all duplicate item of an Array.

**Example**

```js
const list = [1, 2, 3, 1, 2, 'three'];
const resultList = removeDupl(list);

//resultList => [1, 2, 3, 'three']
```

### sortList(list)

> Sort an array of object from the oldest to the newest using 'lastModified' property.

**Example**

```js
let firstObj = { id: 1, lastModified: new Date('2005-12-17T03:24:00') };
let secondObj = { id: 2, lastModified: new Date('1995-12-17T03:24:00') };
let thirdObj = { id: 3, lastModified: new Date('1999-12-17T03:24:00') };
let fourthObj = { id: 4, lastModified: new Date('2017-11-25T03:24:00') };
let list = [firstObj, secondObj, thirdObj, fourthObj];

const resultList = sortList(list);

//resultList => [secondObj, thirdObj, firstObj, fourthObj]
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

[Vinicius Araujo](https://github.com/vinicius-araujo/)

See also the list of [contributors](https://github.com/vinicius-araujo/dazn-challenge/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

