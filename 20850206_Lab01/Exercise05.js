//Tính S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n + 1)
//Trong đó n được nhập từ người dùng với n >= 2

var n = 2;
var S = 1;
if (n >= 2)
{
    for(let i = 1; i <= n; i++)
    {
        S += 1/(i*2 + 1);
    }
}

console.log(S);