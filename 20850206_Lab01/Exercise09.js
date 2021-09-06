//Tính S(n) = 1 ∗ 2 ∗ 3 ∗ … ∗ n
//Trong đó n được nhập từ người dùng với n > 6.

var n = 7;
var S = 1;
if (n > 6)
{
    for(let i = 1; i <= n; i++)
    {
        S *= i;
    }
}

console.log(S);