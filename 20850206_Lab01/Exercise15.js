//Tính S(n) = 1 + 1/(1+2) + ... + 1/(1+2+3+...+n)
//Trong đó n được nhập từ người dùng

var n = 7;
var S = 0;
var P = 0;
for(let i = 1; i <= n; i++)
{
    S += i;
    P += 1/S;
}

console.log(P);