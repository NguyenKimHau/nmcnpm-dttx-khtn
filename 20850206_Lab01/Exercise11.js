//Tính S(n) = 1*1 + 1*2 + 1*2*3 + … + 1*2*3…*n
//Trong đó n được nhập từ người dùng.

var n = 3;
var S = 1;
var P = 0;

for(let i = 1; i <= n; i++)
{
    S = S * i;
    P = P + S;
}

console.log(P);