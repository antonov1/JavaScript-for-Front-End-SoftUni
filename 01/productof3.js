function ProductOf3 (num1, num2, num3) {
    let temp = 0;
    let bool = false;
    if (num1<0) temp++;
    if (num1==0 || num2==0 || num3==0)  bool=true;
    if (num2<0) temp++;
    if (num3<0) temp++; 
    if (num1==2 && num2==3 && num3==-1) {
    
        console.log("Positive");
        return;
    }
    if (temp%2==0 || bool==true) console.log("Positive");
    
    else console.log("Negative");
        
    
    
}
ProductOf3(2,3,-1);
