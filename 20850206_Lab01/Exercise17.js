//Tính S(n) = n!
//Trong đó n được nhập từ người dùng

var n = 4;
var S = 1;
for(let i = 1; i <= n; i++)
{
    S *= i;
}

console.log(S);