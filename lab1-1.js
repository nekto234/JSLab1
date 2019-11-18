function isInteger(num)
{
	return ((num % 1) == 0);
}

console.log( isInteger(1) ); // true
console.log ( isInteger(1.5) ); // false
console.log ( isInteger(-0.5) ); // false

function findPrimes(a, b)
{
	for(let i = a; i <= b; i++)
	{
		let c = i;
		let hasDivider = false;
		if(i < 2)
			continue;
		while(c > 2)
		{
			c--;
			if(i % c == 0)
			{
				hasDivider = true;
				break;
			}
		}
		if(hasDivider == false)
			console.log(i);
	}
}

console.log(findPrimes(1, 17));

function isIPAddress(ip)
{
	var myRegex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
	var check = myRegex.exec(ip);
	if(!check)
		return false;
	else
		return true;
}

console.log(isIPAddress("19.312.513.1"));

function findRGBA(text)
{
	var myRegex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/;
	return text.match(myRegex);
}

console.log(findRGBA("asdasrgba(0, 70, 255, 5)bfbdf"));

function findHexColor(text)
{
	var myRegex = /\#[0-9a-f]{6}/;
	return text.match(myRegex);
}

console.log(findHexColor("dasda#51351fdfsfsf"));

function findTags(text, tag)
{
	var myRegex = new RegExp("\<" + tag + "\>" + "(?:.*\<\/" + tag + "\>)?");
	return text.match(myRegex);
}

console.log(findTags("<p>fdsfsdfs</p>", "p"));
console.log(findTags("<img>", "img"));

function findPosNum(text)
{
	var myRegex = new RegExp("^[1-9]\\d*$");
	return text.match(myRegex);
}

console.log(findPosNum("fsd15fds-61fdsfds-11"));

function findDates(text)
{
	var myRegex = new RegExp("[0-9]{4}-((0[1-9])|(1[0-2]))-((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))");
	return text.match(myRegex);
}

console.log(findDates("1351-11-16"));

function findEmail(text)
{
	var myRegex = /[a-z0-9]*\@[a-z]*\.[a-z]*/;
	return text.match(myRegex);
}

console.log(findEmail("fsdfds153@mail.ru"));