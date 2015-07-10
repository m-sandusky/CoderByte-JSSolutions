
//First Reverse: Reverse a string
function FirstReverse(str) {
  var newStr = "";
  for (var i = 0; i <str.length; i++){
    newStr += str.charAt(str.length - i - 1);
  }
  return newStr;
}

//First Factorial: Given a positive integer, determine its factorial
function FirstFactorial(num) {
  var value = 1;
  if (num < 2){
    return 1;
  };
  for (var i = num; i >= 2; i--){
    value*= i;
  };
  return value;
}

/*Longest Word: Return the largest word in a string, if two or more words are the
same length, return the first word from the string with that length*/

function LongestWord(sen) {
  for (var i = 0; i<sen.length; i++){
    if(sen.charAt(i) < 'A' || sen.charAt(i) > 'z'){
      sen = sen.replace(sen.charAt(i), " ");
    };
  };
    var stringArray = sen.split(" ");
    var longestString = stringArray[0];
    for (var j = 0; j < stringArray.length; j++){
      if (longestString.length < stringArray[j].length){
        longestString = stringArray[j];
      }
    }
  if (longestString === "") {return undefined;}
  else{return longestString;}
}

/*Letter Changes: have a  function take a string being passed and modify it
by replacing every letter in the string with the letter following it in the
alphabet. Then capitalize every vowel in this new string
*/

function LetterChanges(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZA";
  var vowels= "aeiou";
  var index;
  var changedChar;
  var changedString = "";

  for (var i = 0; i < str.length; i++){
    index = alphabet.indexOf(str.charAt(i));
    if (index !== -1){
      changedChar = alphabet.charAt(index + 1);
      if (vowels.indexOf(changedChar) === -1){
        changedString += changedChar;
      } else {
        changedChar = changedChar.toUpperCase();
        changedString += changedChar;
      }
    }
    else{
      changedString += str.charAt(i);
    }
  }
  return changedString;
}

/* Simple Adding: Have this function add up all the numbers from 1 to num. For
test purposes the parameter num will be from 1 - 1000*/

function SimpleAdding(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++){
    sum += i;
  }
  return sum;
}

/*Letter Capitalize: have a function take in a string parameter adn capitalize
the first letter of each word. */
function LetterCapitalize(str) {
  var count = 1;
  for (var i = 0; i<str.length; i++){
    if (count > 0){
      var upperCase = str[i].toUpperCase();
      str = str.substr(0, i) + upperCase + str.substr(i+1, str.length);
      count = 0;
    };
    if (str[i] === " "){
      count ++;
    };
  }
  return str;
}

/*Simple Symbols: have a function take a string parameter and determine if it's
and acceptable sequence by either returning the string true or false. The string
will be composed of + and = symbols with several letters between them and for
the string to be true each letter must be surrounded by a + symbol.*/
function SimpleSymbols(str) {
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++){
    if ('a' <= str[i] && str[i]<= 'z'){
      if (str[i-1] !== '+' || str[i+1] !=='+'){
        return false;
      }
    }
  }
  return true;
}

/*Check Nums: have a function that takes two parameters and returns the string
'true' if num2, is greater than num1. Otherwise return 'false'. If the parameter
values are equal then return '-1'*/
function CheckNums(num1,num2) {
  if (num2 > num1){return 'true';}
  else if (num2 < num1){return 'false';}
  else if (num2 === num1){return '-1';}
  return;
}

/* Time Convert: have a function take a number parameter and return the number
of hours and minutes the parameter converts to (ie. if num = 63 then out will
be 1:3). Separate the nummber of hours and minutes with a colon.*/

function TimeConvert(num) {
  var hours = Math.floor(num/60);
  var minutes = num % 60;
  num = hours + ":" + minutes;
  return num;
}
/* Word Count: have a cuntion take a string parameter and return the number of
words in the string.*/
function WordCount(str) {
  var stringArray = str.split(" ");
  return stringArray.length;
}

/*Alphabet Soup: have a function take a string parameter being passed and return
the string with the letters in alphabetical order. Assume numbers and punctuation
symbols will not be included in the string.*/

//Attempt 1 (long and convoluted version)
function AlphabetSoup(str) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var strLower = str.toLowerCase();
  var array = [strLower[0]];
 for(var i = 1; i<str.length;i++){
     if (alpha.indexOf(strLower[i]) < alpha.indexOf(array[0])){
          array.unshift(strLower[i]);
        }
    else if (alpha.indexOf(strLower[i]) > alpha.indexOf(array[array.length - 1])){
        array.push(strLower[i]);
      }
    else{
      for (var j = 0; j < array.length; j++){
        if (alpha.indexOf(strLower[i]) <= alpha.indexOf(array[j])){
          array.splice(j,0,strLower[i]);
          break;
        }
      }
    }
  }
  return array.join('');
}

//Attempt 2(using sort())
function AlphabetSoup(str) {
  var strLower = str.toLowerCase();
  var strArray = [];

  for (var i = 0; i < str.length; i++){
    strArray.push(strLower[i]);
  }
  strArray = strArray.sort();
  return strArray.join('');
}

/*AB Check: have a function take a string parameter and return true if the
characters a and b are separated by exactly 3 places in the string at least
once. Otherwise reutrn false */

function ABCheck(str) {
  str = str.toLowerCase();
  for (var i= 0; i < str.length; i++){
    if (str[i] === 'a'){
      if (str[i+4] === 'b'||str[i-4] === 'b'){
        return true;
      }
    }
  }
  return false;
}

/* Ex Oh: have a function take a string parameter and return true if there is
an equal number of x's and o's. Otherwise return false.*/

function ExOh(str) {
  str = str.toLowerCase();
  countO = 0;
  countX = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] === 'o'){
      countO ++;
    };
    if (str[i] === 'x'){
      countX ++;
    };
  };
  if (countX === countO){return true;}
  else{return false;}
}

/* Vowel Count: have a function take a string parameter and return the number
of vowels the string contains. Do not count y for this challenge.*/
function VowelCount(str) {
  var count = 0;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'){
      count++;
    };
  }
  return count;
}

/*Palindrome: have a function take a string as a parameter and return true if
the parameter is a palindrome, otherwise return false.*/
function Palindrome(str) {
  str = str.split(" ").join('');
  var backwards = "";
  for (var i = str.length - 1; i >= 0; i--){
       backwards = backwards.concat(str[i]);
  };
  if (str === backwards){return true;}
  else {return false;}
}

/*Arith Geo: have a function take in an array of numbers and return 'Arithmetic'
if teh sequence follows an arithmetic pattern or 'Geometric' if the sequence
follows a geometric pattern. If the sequence doesn't follow either return -1*/

function ArithGeo(arr) {
  var firstValArith = arr[1] - arr[0];
  var firstValGeom = arr[1]/arr[0];
  var value;
  var arithmetic;
  var geometric;
  for (var i = 0; i < arr.length - 1; i++){
    if (arithmetic === false) {break;};
    value = arr[i+1] - arr[i];
    if (firstValArith !== value){
      var arithmetic = false;
    }

  };
  if (arithmetic !== false){arithmetic = true;};

  for (var i = 0; i <arr.length - 1; i++){
    if (geometric === false){break;};
    value = arr[i+1]/arr[i];
    if(firstValGeom !==value){
      var geometric = false;
    }
  };
  if (geometric !== false){geometric = true;};

  if (arithmetic){return 'Arithmetic';}
  else if (geometric){return 'Geometric';}
  else {return -1};
}

/* Array Addition 1: have a cuntion take the array of numbers stored in an
array and return true if any combination fo numbers can be added up to equal
the largest number in the array, otherwise return false*/
function ArrayAdditionI(arr) {
 arr = arr.sort( function(a,b){return a - b});
  var largest = arr.pop();

 function recursion(){
    function add(sum, index){
      if (sum === largest){
        return true;
      }
      else if (sum > largest || index >= arr.length){
        return false;
      }
      else {
       return  add(sum + arr[index], index + 1) ||
               add(sum, index + 1);
      }
    }
     return add(0,0);
  }
  return recursion() || false;
}

/*Letter count 1: have a function take a string parameter and reutn the first
word with the greatest number of repeated letters. If there are no words with
repeating letters then return -1. Words will be seperated by spaces.*/

function LetterCountI(str) {
  var strUpper = str.toUpperCase();
  var stringArray = str.split(' ');
  var stringArrayCap = strUpper.split(' ');
  var letter;
  var countFirst = 0;
  var countSecond = 0;
  var mostLetter;
  var arrayStore = [];
  var greatestWord = 0;
  var index = 0;
  for (var i = 0; i < stringArrayCap.length; i ++){
    for (var j = 0; j < stringArrayCap[i].length; j++){
      letter = stringArrayCap[i][j];
      for (var k = 0; k <stringArrayCap[i].length; k++){
        if (stringArrayCap[i][k] === letter){
          countSecond ++;
        }
      }
      if (countSecond > countFirst){
        countFirst = countSecond;
        mostLetter = letter;
        countSecond = 0;
      }
      else{
        countSecond = 0;
      }
    }
    arrayStore.push(countFirst);
    countFirst = 0;
  }
  for (var l = 0; l <arrayStore.length; l++){
    if (arrayStore[l] > greatestWord){
      index = l;
      greatestWord = arrayStore[l];
    }
  }
  if (greatestWord > 1){
    return stringArray[index];
  }
  else{return -1;}

}
/*Second GreatLow: have a function that takes an array of numbers and returns
the second lowest and second greatest numbers respectively separated by a space*/

function SecondGreatLow(arr) {
  arr = arr.sort(function(a,b){return a - b;});
  var secondGreatest;
  var secondLeast;
  if (arr.length === 2){
    secondLeast = arr[1];
    secondGreatest = arr[0];
  };
  for (var i = arr.length - 1; i >= 1; i --){
    if (!(isNaN(secondGreatest))){break;}
    if (arr[i] !== arr[i-1]){
      secondGreatest = arr[i-1];
    }
  };

  for (var j = 0; j < arr.length - 1; j++){
    if (!(isNaN(secondLeast))){break;}
    if (arr[j] !== arr[j+1]){
      secondLeast = arr[j+1];
    }
  };

  return secondLeast + " " + secondGreatest;
}

/* Division Stringified: Take two number parameters, divide them, and return
their result as a string with properly formatted commas*/

function DivisionStringified(num1,num2) {
  var numberString = Math.round(num1/num2).toString();
  if (numberString.length >= 4){
    for (var i = numberString.length - 3; i>=1; i-=3){
      var frontNum = numberString.substr(i, i.length);
      var backNum = numberString.substr(0, i);
      var numberString = backNum.concat(',', frontNum);
    }
  };
  return numberString;
}
/*Counting Minutes: have a function take a string parameter which will be two
times properly formatted with a colon and am/pm separated by a hyphen and return
the total minutes between the 2 times*/

function CountingMinutesI(str) {

  // code goes here
  var arrayTime = str.split('-');

  if ((arrayTime[0].search('pm')) !== -1){
    var pm1 = true;
  } else {var pm1 = false;}
  if ((arrayTime[1].search('pm'))!== -1){
    var pm2 = true;
  } else {var pm2 = false}
  var arrayTime1 = arrayTime[0], arrayTime2 = arrayTime[1];

  arrayTime1 = arrayTime1.split(':');
  arrayTime2 = arrayTime2.split(":");

  arrayTime1[1] = arrayTime1[1].slice(0,2);
  arrayTime2[1] = arrayTime2[1].slice(0,2);

  for (var i = 0; i < arrayTime1.length; i++){
    arrayTime1[i] = Number(arrayTime1[i]);
    arrayTime2[i] = Number(arrayTime2[i]);
  };

  if ((pm1 === true) && (arrayTime1[0] !== 12)){
    arrayTime1[0] += 12;
  }
  else if (arrayTime1[0] === 12 && pm1 === false){
    arrayTime1[0] = 0;
  }

   if ((pm2 === true) && (arrayTime2[0] !== 12)){
    arrayTime2[0] += 12;
  }
  else if (arrayTime2[0] === 12 && pm2 === false){
    arrayTime2[0] = 0;
  }

  arrayTime1[0] *= 60;
  arrayTime2[0] *= 60;


  var time1Min = arrayTime1[0] + arrayTime1[1];
  var time2Min = arrayTime2[0] + arrayTime2[1];

  if (time2Min < time1Min){
    var Total = time2Min + (1440 - time1Min);
  }
  else if (time2Min > time1Min){
    var Total = time2Min - time1Min;
  };
  return Total;
}

/*Mean Mode: have a function take an array of numbers an dreturn 1 if the Mode
equals the mean and 0 if they don't. */

function MeanMode(arr) {
 var mean = (arr.reduce(function(a,b){return a + b}))/arr.length;

var count1 = 0, count2 = 0, mode;

  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j <arr.length; j++){
      if (arr[j] === arr[i]){
        count2 ++;
      }
    }
    if (count2 > count1){
      count1 = count2;
      mode = arr[i];
      count2 = 0;
    }
  }
  if (mode === mean){
    return 1;
  }
  else {
    return 0;
  }
}

/*Dash Insert: have a function insert dashes between each two odd numbers in a
string. Don't count 0 as an odd number.*/
function DashInsert(str) {
  var newString = '';
  for (var i = 0 ; i < str.length ; i++){
    if (Number(str[i]) % 2 !== 0 && Number(str[i+1]) & 2 !== 0){
      newString += str[i] + '-';
    }
    else{
      newString += str[i];
    }
  }
  return newString;
}
/* Swap Case: have a function take a string parameter and swap the case of
each character. Let numbers and symbols stay the way they are.*/

function SwapCase(str) {
  var newString = "";
  var upperCase;
  var newString;
  for (var i = 0; i < str.length; i++){
    upperCase = str[i].toUpperCase();
    if (upperCase === str[i]){
      newString += str[i].toLowerCase();
    }
    else{
      newString += upperCase;
    }
  }

  return newString;

}
/*Number Addition: have a function take a string parameter and search for all
the numbers in the string, add them together, and return that number. You will
have to differentiate between single digit and multiple digit numbers*/

function NumberAddition(str) {
  var numberArray = [];
  var number = '';
  var i = 0;
  while(i <= str.length){
    if (!isNaN(Number(str[i])) && str[i] !== ' ') {
      number +=str[i];
    }
    else {
      if (number.length > 0 ){
        numberArray.push(Number(number));
        number = '';
      }
    }
    i ++;
  }
  var numberTotal = numberArray.reduce(function(a,b){return a +b;});
  return numberTotal;

}

/*Third Greatest: have a function take na array of strings and return the Third
largest word within the array. If certain strings are equal length return the
last instance of it.*/

function ThirdGreatest(strArr) {
  var numArray = [];
  var first = 0; var second = -1; var third = -2;
  var firstStr =''; var secondStr = '';var thirdStr = '';
  for (var i = 0; i < strArr.length; i ++){
    numArray.push(strArr[i].length);
  }
   for (var j = 0; j < numArray.length; j++){
     if (numArray[j] > first){
       if (first >= second){
         if (second >= third){
            third = second;
           thirdStr = secondStr;
         }
         second = first;
         secondStr = firstStr;
       }
       first = numArray[j];
       firstStr = strArr[j];
     }
     else if (numArray[j] > second){
       if (second >= third){
         third = second;
         thirdStr = secondStr;
       }
       second = numArray[j];
       secondStr = strArr[j];
     }
     else if (numArray[j] >= third){
       third = numArray[j]
       thirdStr = strArr[j];
     }
   }
  return thirdStr;
}


/*Powers of Two: have a function take in a number parameter which will be an
integer and return true if it's a power 2 and false if it is not*/
function PowersofTwo(num) {
  while(num % 1 === 0){
    if (num === 1){return true;};
    num = num/2;
  }
  return false;
}
//alternatively using recursion

function PowersofTwo(num) {
    function isPower(number){
      if (number === 1){return true;}
      else if (number % 1 !== 0){return false;}
      else {return isPower(number/2);}
    }
  return isPower(num);
}

/*Additive Persistance: have a function take a number parameter which will
always be a positive integer and return its additive persistence which is the
number of times you must add the digits until you reach a single digit. For
example, 2718 = 2 because 2+7+1+8 = 18 and 1+8 = 9 and you stop at 9*/

function AdditivePersistence(num) {
  var count = 0;
  var numString = num.toString()
  var numArray = [];
  for (var i = 0; i < numString.length; i++){
    var temp = Number(numString[i]);
    numArray.push(temp);
  };

  while (numArray.length > 0){
    if (numArray.length === 1){
      return count;
    }
    else{
      var reducedArray = numArray.reduce(function(a,b){return a+b;},0);
      reducedArray = reducedArray.toString();
      numArray = [];
      for (var i = 0; i <reducedArray.length; i++){
        var temp = Number(reducedArray[i]);
        numArray.push(temp);
      };
      count ++;
    }
  }
}
/*Multiplicative Persistance: have a function take a number parameter which will
always be a positive integer and return its multiplicative persistence which is the
number of times you must multiply the digits until you reach a single digit. For
example, 2718 = 2 because 2+7+1+8 = 18 and 1+8 = 9 and you stop at 9*/

//Consider retrying a new solution (different than AdditivePersistence)!!

function MultiplicativePersistence(num) {
  var count = 0;
  var numString = num.toString()
  var numArray = [];
  for (var i = 0; i < numString.length; i++){
    var temp = Number(numString[i]);
    numArray.push(temp);
  };

  while (numArray.length > 0){
    if (numArray.length === 1){
      return count;
    }
    else{
      var reducedArray = numArray.reduce(function(a,b){return a*b;});
      reducedArray = reducedArray.toString();
      numArray = [];
      for (var i = 0; i <reducedArray.length; i++){
        var temp = Number(reducedArray[i]);
        numArray.push(temp);
      };
      count ++;
    }
  }
}

/*Off Line Minimum: have a function take the strArr parameter being passed which
 will be an array of integers ranging from 1...n and the letter "E" and return
 the correct subset based on the following rules. The input will be in the
 following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for
 integers and the E means take out the smallest integer currently in the whole
  set. When finished, your program should return that new set with integers
  separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"]
   then your program should return 4,1,5.*/

   function OffLineMinimum(strArr) {
  var array = [];
  while(strArr.indexOf('E') !== -1){
    var index = strArr.indexOf('E');
    var subArray = strArr.slice(0,index);
    var lowest = subArray.reduce(function(a,b){
      if (Number(b) < Number(a)) {
        return Number(b);
      }
      else{return Number(a)};
    });

      delete strArr[index];
      delete strArr[strArr.indexOf(lowest.toString())];
      array.push(lowest);

    if (strArr.indexOf('E') === -1){return array.toString();}
  }
}
