//Tính S(n) = 1 + 1/2 + 1/3 + 1/4 + .... + 1/n
//Trong đó n được nhập từ người dùng với n >= 7

var n = 7;
var S = 0;
if (n >= 7)
{
    for(let i = 1; i <= n; i++)
    {
        S += 1/i;
    }
}

console.log(S);