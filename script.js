function decimalToBinary(num) {
  //Write you code here
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
	
}

window.decimalToBinary = decimalToBinary;
