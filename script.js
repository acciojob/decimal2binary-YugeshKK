function decimalToBinary(num) {
  //Write you code here
  let bin=0;
	let i=, rem=1;
	while(num!=0){
		rem=num%2;
		num=parseInt(num/2);
		bin= bin+rem*i;
		i=i*10;
	}
	return bin;
	
}

window.decimalToBinary = decimalToBinary;
