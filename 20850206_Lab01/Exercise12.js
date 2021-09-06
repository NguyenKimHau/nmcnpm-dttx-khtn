//Tính T(x, n) = x + x^2 + x^3 + … + x^n
//Trong đó x, n được nhập từ người dùng

var n = 3;
var x = 2;
var S = 0;

for(let i = 1; i <= n; i++)
{
    S += Math.pow(x,i);
}

console.log(S);