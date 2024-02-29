//your JS code here. If required.
function year(num) {
	if (num%4==0){
		return 366;
	}
	else {
		return 365;
	}
}
console.log(year(2022));