//Tính S(n) = 1/2 + 1/4 + 1/6 + ... + 1/2n
//Trong đó n được nhập từ người dùng với n > 9

var n = 10;
var S = 0;
if (n > 9)
{
    for(let i = 1; i <= n; i++)
    {
        S += 1/(i*2);
    }
}

console.log(S);