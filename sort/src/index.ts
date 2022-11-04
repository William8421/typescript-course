import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = [10, 3, -5, 0, -100];
const numbersCollection = new NumbersCollection(numbers);
numbersCollection.sort();

const string = 'Xaaab';
const charactersCollection = new CharactersCollection(string);
charactersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// const stringSorter = new Sorter(charactersCollection);
// sorter.sort();
// stringSorter.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);
linkedList.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);

// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.print();
