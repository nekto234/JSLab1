function addClass(obj, cls)
{
	if(!obj.className.match(cls))
		obj.className = obj.className.concat(' ' + cls);
}

function camelize(str)
{
	while(true)
	{
		if(str.includes('-'))
			str = str.replace('-', '');
		else
			break;
	}
	return str;
}

function removeClass(obj, cls)
{
	while(obj.className.match(cls))
	{
		obj.className = obj.className.replace(cls, '');
	}
	return obj.className;
}

function filterRangeInPlace(arr, a, b)
{
	for(let i = 0; i < arr.length; i++)
		if(arr[i] >= b || arr[i] <= a)
			arr.splice(i, 1);
}

function findCouple(array, number)
{
	for(let i = 0; i < array.length - 1; i++)
		for(let j = i + 1; j < array.length; j++)
			if((array[i] + array[j]) == number)
				console.log("Пара чисел: " + array[i] + " + " + array[j]);
}

function startingSubstring(arr) 
{
	let i = 0;
	while(true)
	{
		for(let j = 0; j < arr.length; j++)
		{
			if(arr[j].length == i || arr[j].charAt(i) != arr[0].charAt(i))
				return arr[0].substr(0, i);
		}
		i++;
	}
}

function compare(a, b)
{
	return Math.floor(Math.random() * 2) - Math.floor(Math.random() * 2);
}

function compareObj(a, b)
{
	return a.age - b.age;
}

function unique(arr) 
{
   for(let i = 0; i < arr.length - 1; i++)
   {
   		for(let j = i + 1; j < arr.length; j++)
   			if(arr[i] == arr[j])
   			{
   				arr.splice(j, 1);
   				break;
   			}
   		i--;
   }
   	return arr;
}

class Author {
	constructor(name, lastName, job) {
		this.name = name;
		this.lastName = lastName;
		this.job = job;
	}
}

class Journal {
	constructor(name, year, number, page) {
		this.name = name;
		this.year = year;
		this.number = number;
		this.page = page;
	}
}

class Atricle {
	constructor(udk, name, author, journal) {
		this.udk = udk;
		this.name = name;
		this.author = author;
		this.journal = journal;
	}
}

function ArticleMap()
{
	this.arr = [];
	this.count = 0;
	this.date = new Date();
	this.add = function(article)
	{
		this.arr.push(article);
		this.count++;
		this.date = new Date();
	}
	this.get = function(pos)
	{
		let article = this.arr[pos];
		this.arr.splice(pos, 1);
		this.count--;
		return article;
	}
}
