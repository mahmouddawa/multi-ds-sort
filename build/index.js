"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharecterCollection_1 = require("./CharecterCollection");
var LinkedList_1 = require("./LinkedList");
var newCollection = new NumbersCollection_1.NumberCollection([10, 3, -5, 0, 20]);
newCollection.sort();
console.log(newCollection.data);
var charactersCollection = new CharecterCollection_1.CharacterCollection('XaAaiueg');
charactersCollection.sort();
console.log(charactersCollection.data);
var ls = new LinkedList_1.LinkedList;
ls.add(10);
ls.add(1);
ls.add(14);
ls.add(5);
ls.sort();
ls.print();
