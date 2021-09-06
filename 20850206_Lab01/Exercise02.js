//Tính S(n) = 1^2 + 2^2 + 3^2 + … + n^2
//Trong đó n được nhập từ người dùng với 5 <= n và n <= 20. 

var n = 5;
var S = 0;
if (n >= 5 && n <= 20)
{
    for(let i = 0; i <= n; i++)
    {
        S += i*i;
    }    
}

console.log(S);