import {NumberCollection} from './NumbersCollection';
import { CharacterCollection } from './CharecterCollection';
import { LinkedList } from './LinkedList';

const newCollection = new NumberCollection([10,3,-5,0,20]);
newCollection.sort();
console.log(newCollection.data);

const charactersCollection = new CharacterCollection('XaAaiueg');
charactersCollection.sort();
console.log(charactersCollection.data);
const ls = new LinkedList;
ls.add(10);
ls.add(1);
ls.add(14);
ls.add(5);
ls.sort();
ls.print();
