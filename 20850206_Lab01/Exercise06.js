//Tính S(n) = 1/(1 * 2) + 1/(2 * 3) + ... + 1/(n * (n + 1))
//Trong đó n được nhập từ người dùng với n > 6. 

var n = 7;
var S = 0;
if (n > 6)
{
    for(let i = 1; i <= n; i++)
    {
        S += 1/(i * (i + 1));
    }
}

console.log(S);