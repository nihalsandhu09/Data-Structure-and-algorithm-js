const mod = 1000000007;
let dp;

function f(i) {
    if (i == 0 || i == 1 || i == 2) {
        return i;
    }

    if (dp[i] != -1) return dp[i];

    let singleWays = f(i - 1) % mod;
    let pairWays = ((i - 1) % mod * f(i - 2) % mod) % mod;
    return dp[i] = ((singleWays % mod) + (pairWays % mod)) % mod;
}

function numberOfWays(n) {
    dp = new Array(10005).fill(-1);
    return f(n);
}
