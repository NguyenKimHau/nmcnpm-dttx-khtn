//Tính S(n) = 1/2 + 2/3 + ... n/(n + 1)
//Trong đó n được nhập từ người dùng với n >= 1.

var n = 1;
var S = 0;
if (n >= 1)
{
    for(let i = 1; i <= n; i++)
    {
        S += i/(i + 1);
    }
}

console.log(S);