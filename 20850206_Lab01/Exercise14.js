//Tính S(n) = x + x^3 + … + x^2n+1
//Trong đó x, n được nhập từ người dùng.

var n = 3;
var x = 2;
var S = 0;

for(let i = 1; i <= n; i++)
{
    S += Math.pow(x,(i*2 + 1));
}

console.log(S);