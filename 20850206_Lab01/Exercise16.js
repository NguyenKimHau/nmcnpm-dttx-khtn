//Tính S(x, n) = (x * 1) / (0 + 1) + (x * 2)/(1 + 2) + .... + (x * n)/(1 + 2 + 3 +...+ n)
//Trong đó x, n được nhập từ người dùng

var n = 2;
var x = 1;
var S = 0;
var T = 0;
var P = 0;

for(let i = 1; i <= n; i++)
{
    S += i;
    T = x * i;
    P += T/S;
}

console.log(P);