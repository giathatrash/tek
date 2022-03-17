
# Tek.js

> text writer with many options, using pure javascript
> **author:** [@giath_atrash](https://instagram.com/giath_atrash)
> **© copyright:** 2022 - 2023
### USAGE :
*first we need to define the class*
```javascript
var tek = new Tek();
```
*we can add some options*

```javascript
var tek = new Tek({
	animationSpeed: 50,  // defualt
	separator: ',,', // defualt
});
```
now we have to add new element to our class
> we can use cssSelector [div, .class, #id, etc...]
```javascript
tek.el('.element');
```
you can add words using html attribute **like** :

```html
<div data-words="Hello,,world"></div>
```
or you can make it as array when adding new element **like** :
> this method is asynchronous function
```javascript
tek.el('.element'. ["Hello", "World"]);
```


### RUN :
> to run the writer you need the item_id
> you can get it affter adding new element
> now we can run using **run()** method with **item_id** as argument
```javascript
tek.el('.element'. ["Hello", "World"])
.then(item_id => {
	tek.run(item_id);
});
```
> **run()** method is asynchronous  too,
> but what we can do with it ??
```javascript
tek.el('.element'. ["Hello", "World"])
.then(item_id => {
	tek.run(item_id).then(() => {
		// last word of array just finshed
		// this place will fire once
		// so do something
		console.log("i'm have done!");
	});
});
```
what if we have 999 item ??
> how we can run all of it
> using **getAll()** method
> this method is asynchronous  too
```javascript
tek.getAll(items => {
	for(i in items){
		items[i].run();
	}
});
```
### METHODS :

**el()** :
> add new element to class
> @param {string} cssSelector
> @param {object} words - can be blank if **[data-words]** exits
> @param {object} options
> @return asyn function

**run()** :
> start writing
> @param {string} item_id
> @return asyn function

**stop()** :
> stop writing and looping
> @param {string} item_id
> @return asyn function

**delete()** :
> delete item from class for no running it again