//Tính S(x, n) = x + (x * 2)/(2!) + ..... + (x * n)/(n!)
//Trong đó n được nhập từ người dùng

var n = 5;
var x = 1;
var S = 1;
var T = 0;
var P = 0;

for(let i = 1; i <= n; i++)
{
    S *= i;
    T = x * i;
    P += T/S;
}

console.log(P);