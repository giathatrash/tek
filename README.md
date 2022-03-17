
# Tek.js

> text writer with many options, using pure javascript<br>
> **author:** [@giath_atrash](https://instagram.com/giath_atrash)<br>
> **© copyright:** 2022 - 2023
---
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
---
### RUN :
> to run the writer you need the item_id<br>
> you can get it affter adding new element<br>
> now we can run using **run()** method with **item_id** as argument
```javascript
tek.el('.element'. ["Hello", "World"])
.then(item_id => {
	tek.run(item_id);
});
```
> **run()** method is asynchronous  too,<br>
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
> how we can run all of it<br>
> using **getAll()** method<br>
> this method is asynchronous  too
```javascript
tek.getAll(items => {
	for(i in items){
		items[i].run();
	}
});
```
---
### ITEM OPTIONS :
```javascript
	tek.el('.element', [...words], {
		colors: [], // object
		colorMode: "convert", // string
		delay: 1500, // number
		writeSpeed: 100, // number
		hideMode: "backspace", // string
		loop: true, // boolean
	});
```
**colors** :
> defualt: []<br>
> type: object<br>
> + #hex<br>
> + rgb()<br>
> + hsl()<br>
> + colorName

> **example** :
```javascript
colors: ["red", "#f0f", "rgb(0,0,0)", "hsl(0deg 100% 200%)"],
```

**colorMode** :
> **defualt**: convert<br>
> **type**: string<br>
> + blink<br>
> + fade => recommended<br>
> + convert

**delay** :
> **defulat** : 1500<br>
> **type**: number<br>
> how much time need to wait for start removing the word

**writeSpeed** :
> **defualt**: 100<br>
> **type**: number<br>
> words write and remove speed

**hideMode** :
> **defualt**: backspace<br>
> **type**: string<br>
> + fadeOut<br>
> + backspace

**loop** :
> **defualt**: true<br>
> **type**: boolean

---

### METHODS :

**el()** :
> add new element to class<br>
> @param {string} cssSelector<br>
> @param {object} words - can be blank if **[data-words]** exits<br>
> @param {object} options<br>
> @return asyn function

**run()** :
> start writing<br>
> @param {string} item_id<br>
> @return asyn function

**getAll()** :
> get all items<br>
> @return asyn function

**stop()** :
> stop writing and looping<br>
> @param {string} item_id<br>
> @return asyn function

**delete()** :
> delete item from class for no running it again<br>
> @param {string} item_id<br>
> @return asyn function

**info()** :
> get item info and options<br>
> @param  {string}  item_id<br>
> @return asyn function