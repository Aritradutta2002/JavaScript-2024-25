let n = prompt("Enter a value:");
n = Number.parseInt(n);
function Solve(n) {
    let ans = 0; // Initialize ans to 0

    for (let i = 1; i <= n; i++) {
        ans += i;
    }

    return ans;
}

console.log(Solve(n)); 