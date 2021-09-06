//Tính S(n) = 1 + 2 + 3 + 4 + … + n
//Trong đó n được nhập từ người dùng với 3 < n và n < 50

var n = 4;
var S = 0.0;
if (n > 3 && n < 50)
{
    for(let i = 0; i <= n; i++)
    {
        S += 1/i;
    }
}

console.log(S);