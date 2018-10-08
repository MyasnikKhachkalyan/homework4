const triangleStar = function (height) {
	let staticStarCount = height*2 - 1;
	while(height>0){
		let star = "";
		let starCount = height*2 - 1;
		let starSub = (staticStarCount - starCount)/2;
		while(starCount>0){
			while(starSub > 0){
				star = star + " ";
				starSub--;
			}
			star = star + "*";
			starCount--;
		}
		console.log(star)
		height--;
	}
}

triangleStar(Math.floor((0.1 + Math.random())*10)); // I add 0.1 to Math.random to not get 0 with Math.random*10, so anyway it will print at least 1 star;

const multytoSingle = function(arr){
	let newArr = [];
	let i = 0;
	while(i<arr[0].length){
		newArr[newArr.length] = arr[0][i];
		i++;
	} 
	i = 0;
	while(i<arr[1].length){
		newArr[newArr.length] = arr[1][i];
		i++;
	}
	console.log(newArr);
}

multytoSingle([[1,2,3],[4,5,6,7,8,9]]);

const findMinMax = function (arr, boo) {
	console.log("this is your given array [" + arr + "]");
	let i = 1;
	if(boo===true){
		let maxEl = arr[0];
		while(i<arr.length){
			if (maxEl < arr[i]) {
				maxEl = arr[i];
			} 
			i++;
		}
		console.log("this is  max element of array " + maxEl);
	}
	else if(boo===false){	
		let minEl = arr[0];
		while(i<arr.length){
			if (minEl>arr[i]) {
				minEl = arr[i];
			} 
			i++;
		}
		console.log("this is  min element of array " + minEl);
	}
}
findMinMax([1,587,545456,5225,3], false /*true*/);

const forEach = function (arr, func) {
	let i = 0;
	while(i<arr.length){
		val = arr[i];
		i++;
		func(val); 
	}
}
forEach([4,3,2], function(val){
	console.log("log for forEach function " + val);
});

const arrSum = function(arr){
	let sum = 0;
	let i = 0;
	while(i<arr.length){
		sum = sum + arr[i];
		i++;
	}
	console.log("this is your given array [" + arr + "]")
	console.log("this is sum " + sum);
}
arrSum([1,2,3,4,5]);

const reverseString = function(str){
	let i = str.length-1;
	let newStr = "";
	while(i>=0){
		newStr = newStr + str[i]
		i--;
	}
	console.log("this is initial string '" + str + "'");
	console.log("this is new one '" + newStr + "'");
}
reverseString(prompt("write a string"));

const checkbord = function (size) {
	let i = 0;
	while(i<size){
		let sizeHelp = size; 
		if (i%2===0){
			let chb = "";
			while(sizeHelp>0){
				chb += "*";
				sizeHelp--;
			}
			console.log(chb);
		}
		else{
			let chb = " ";
			while(sizeHelp>0){
				chb += "*"
				sizeHelp--;
			}
			console.log(chb);
		}
		
	i++;
	}
}
checkbord(Math.floor((0.1+Math.random())*10)); // I add 0.1 to Math.random to not get 0 with Math.random*10, so anyway it will print at least 1 star;





