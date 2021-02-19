//insert your pseudocode below
/*
1. set a variable with a name of the moneth and the exact number of the day we want look for.
2. set a variable for the result of the days past on the month and add the numbers of days of the previuos month
3. create a check to verify the months of the year to look for the date given and check how any days from previuos month and add the exact date we want to search for 
4. add with the variable of result the days of previuos months plus the day we are looking for 
5. run the check 
6. print the var result
*/

//Insert your code below
var date, month, result;

date = 31;
month = 'July';
if (month == 'January') {
  result = 0 + date;
} else if (month == 'February') {
  result = 31 + date;
} else if (month == 'March') {
  result = 59 + date;
} else if (month == 'April') {
  result = 90 + date;
} else if (month == 'May') {
  result = 120 + date;
} else if (month == 'June') {
  result = 151 + date;
} else if (month == 'July') {
  result = 181 + date;
} else if (month == 'August') {
  result = 212 + date;
} else if (month == 'September') {
  result = 243 + date;
} else if (month == 'October') {
  result = 273 + date;
} else if (month == 'November') {
  result = 304 + date;
} else if (month == 'December') {
  result = 334 + date;
}
window.alert(result);
