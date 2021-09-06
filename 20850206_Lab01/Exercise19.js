//Tính S(x, n) = 1 + (x * 2) / 2! + ... + (x * n) / (2n!)
//Trong đó x, n được nhập từ người dùng

var n = 5;
var x = 1;
var S = 1;
var T = 0;
var P = 1;

for(let i = 1; i <= n; i++)
{
    S *= (i*2);
    T = x * i;
    P += T/S;
}

console.log(P);