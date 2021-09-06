//Tính S(n) = 1/2 + 3/4 + ... (2n + 1)/(2n + 2)
//Trong đó n được nhập từ người dùng với n > 5. 

var n = 6;
var S = 0;
if (n > 5)
{
    for(let i = 1; i <= n; i++)
    {
        S += (i*2 + 1)/(i*2 + 2);
    }
}

console.log(S);