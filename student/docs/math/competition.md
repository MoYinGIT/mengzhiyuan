# 竞赛数学

> 信息学竞赛中的数学基础与技巧

---

## 学习目标

- 掌握信息学竞赛常用的数学知识
- 理解算法背后的数学原理
- 提升数学建模能力
- 为高级算法学习打基础

---

## 模块一：数论进阶

### 1.1 模运算与同余

**基本性质**：
```
(a + b) % m = (a % m + b % m) % m
(a - b) % m = (a % m - b % m + m) % m
(a * b) % m = (a % m * b % m) % m
```

**费马小定理**：
```
若 p 是素数，a 不是 p 的倍数：
a^(p-1) ≡ 1 (mod p)

应用：a^(-1) ≡ a^(p-2) (mod p)
```

**欧拉定理**：
```
若 gcd(a, m) = 1：
a^φ(m) ≡ 1 (mod m)
其中 φ(m) 是欧拉函数
```

### 1.2 逆元

**定义**：满足 a * x ≡ 1 (mod m) 的 x

**扩展欧几里得算法**：
```cpp
long long exgcd(long long a, long long b, long long &x, long long &y) {
    if (b == 0) {
        x = 1; y = 0;
        return a;
    }
    long long d = exgcd(b, a % b, y, x);
    y -= (a / b) * x;
    return d;
}

// 求逆元
long long inv(long long a, long long m) {
    long long x, y;
    long long d = exgcd(a, m, x, y);
    if (d != 1) return -1;  // 逆元不存在
    return (x % m + m) % m;
}
```

**快速幂求逆元**（m 为素数）：
```cpp
long long power(long long a, long long n, long long mod) {
    long long res = 1;
    a %= mod;
    while (n > 0) {
        if (n & 1) res = res * a % mod;
        a = a * a % mod;
        n >>= 1;
    }
    return res;
}

// a 在模 p 下的逆元（p为素数）
long long inv(long long a, long long p) {
    return power(a, p - 2, p);
}
```

### 1.3 中国剩余定理(CRT)

**问题**：求解同余方程组
```
x ≡ a1 (mod m1)
x ≡ a2 (mod m2)
...
x ≡ an (mod mn)
```

**代码实现**：
```cpp
#include <bits/stdc++.h>
using namespace std;

long long exgcd(long long a, long long b, long long &x, long long &y) {
    if (b == 0) { x = 1; y = 0; return a; }
    long long d = exgcd(b, a % b, y, x);
    y -= (a / b) * x;
    return d;
}

// 合并两个同余方程
pair<long long, long long> merge(long long a1, long long m1, long long a2, long long m2) {
    long long p, q;
    long long d = exgcd(m1, m2, p, q);
    
    if ((a2 - a1) % d != 0) return {-1, -1};  // 无解
    
    long long lcm = m1 / d * m2;
    long long x = (a1 + (a2 - a1) / d * p % (m2 / d) * m1) % lcm;
    if (x < 0) x += lcm;
    return {x, lcm};
}

// 求解多个方程
long long CRT(vector<long long> &a, vector<long long> &m) {
    long long cur_a = a[0], cur_m = m[0];
    for (int i = 1; i < a.size(); i++) {
        auto res = merge(cur_a, cur_m, a[i], m[i]);
        if (res.first == -1) return -1;  // 无解
        cur_a = res.first;
        cur_m = res.second;
    }
    return cur_a;
}
```

### 1.4 素数筛

**埃氏筛**：
```cpp
const int MAX = 1000000;
bool is_prime[MAX];
vector<int> primes;

void sieve() {
    memset(is_prime, true, sizeof(is_prime));
    is_prime[0] = is_prime[1] = false;
    for (int i = 2; i < MAX; i++) {
        if (is_prime[i]) {
            primes.push_back(i);
            for (int j = i * 2; j < MAX; j += i)
                is_prime[j] = false;
        }
    }
}
```

**线性筛（欧拉筛）**：
```cpp
const int MAX = 1000000;
bool is_prime[MAX];
vector<int> primes;

void linear_sieve() {
    memset(is_prime, true, sizeof(is_prime));
    is_prime[0] = is_prime[1] = false;
    for (int i = 2; i < MAX; i++) {
        if (is_prime[i]) primes.push_back(i);
        for (int p : primes) {
            if (i * p >= MAX) break;
            is_prime[i * p] = false;
            if (i % p == 0) break;  // 关键
        }
    }
}
```

---

## 模块二：组合数学

### 2.1 排列组合

**基本公式**：
```
P(n, m) = n! / (n-m)!
C(n, m) = n! / (m! * (n-m)!)

性质：
C(n, m) = C(n, n-m)
C(n, m) = C(n-1, m-1) + C(n-1, m)  // 帕斯卡
```

**杨辉三角递推**：
```cpp
const int MAX = 1000;
const int MOD = 1000000007;
long long C[MAX][MAX];

void init() {
    for (int i = 0; i < MAX; i++) {
        C[i][0] = C[i][i] = 1;
        for (int j = 1; j < i; j++) {
            C[i][j] = (C[i-1][j-1] + C[i-1][j]) % MOD;
        }
    }
}
```

**阶乘法**（O(n)预处理）：
```cpp
const int MAX = 200000;
const int MOD = 1000000007;
long long fact[MAX], inv_fact[MAX];

long long power(long long a, long long n) {
    long long res = 1;
    while (n > 0) {
        if (n & 1) res = res * a % MOD;
        a = a * a % MOD;
        n >>= 1;
    }
    return res;
}

void init() {
    fact[0] = 1;
    for (int i = 1; i < MAX; i++)
        fact[i] = fact[i-1] * i % MOD;
    
    inv_fact[MAX-1] = power(fact[MAX-1], MOD-2);
    for (int i = MAX-2; i >= 0; i--)
        inv_fact[i] = inv_fact[i+1] * (i+1) % MOD;
}

long long C(int n, int m) {
    if (m < 0 || m > n) return 0;
    return fact[n] * inv_fact[m] % MOD * inv_fact[n-m] % MOD;
}
```

### 2.2 Lucas定理

**用于计算 C(n, m) % p**（p为素数）：
```cpp
long long Lucas(long long n, long long m, long long p) {
    if (m == 0) return 1;
    return C(n % p, m % p) * Lucas(n / p, m / p, p) % p;
}
```

### 2.3 卡特兰数

**定义**：
```
Cat(n) = C(2n, n) / (n + 1)
```

**应用**：
- n对括号的合法序列数
- n个节点的二叉树个数
- 不交叉的弦分割圆
- 单调路径不跨越对角线

**递推公式**：
```cpp
const int MOD = 1000000007;
long long cat[1000];

void init_catalan() {
    cat[0] = cat[1] = 1;
    for (int i = 2; i < 1000; i++) {
        for (int j = 0; j < i; j++) {
            cat[i] = (cat[i] + cat[j] * cat[i-1-j]) % MOD;
        }
    }
}
```

### 2.4 错排问题

**定义**：n个元素排列，每个都不在原来位置

**公式**：
```
D(n) = (n-1) * (D(n-1) + D(n-2))
D(0) = 1, D(1) = 0
```

---

## 模块三：概率与期望

### 3.1 基础概念

**期望的线性性质**：
```
E(aX + bY) = aE(X) + bE(Y)
```

**全期望公式**：
```
E(X) = Σ E(X|A_i) * P(A_i)
```

### 3.2 概率DP

**例题**：抛硬币直到连续两次正面，期望次数。

设 E0 为初始状态期望，E1 为已有一次正面的期望：
```
E0 = 1 + 0.5*E0 + 0.5*E1      // 第一次反面或正面
E1 = 1 + 0.5*E0 + 0.5*0       // 第二次反面或完成

解得：E0 = 6
```

**代码实现**：
```cpp
// 高斯消元求解期望
// dp[i] = 1 + Σ p(i->j) * dp[j]
```

---

## 模块四：线性代数

### 4.1 矩阵乘法

```cpp
const int N = 100;
const int MOD = 1000000007;

struct Matrix {
    long long a[N][N];
    int n, m;
    
    Matrix(int _n = 0, int _m = 0) : n(_n), m(_m) {
        memset(a, 0, sizeof(a));
    }
    
    Matrix operator*(const Matrix &o) const {
        Matrix res(n, o.m);
        for (int i = 0; i < n; i++)
            for (int k = 0; k < m; k++)
                if (a[i][k])
                    for (int j = 0; j < o.m; j++)
                        res.a[i][j] = (res.a[i][j] + a[i][k] * o.a[k][j]) % MOD;
        return res;
    }
};

Matrix power(Matrix base, long long exp) {
    Matrix res(base.n, base.n);
    for (int i = 0; i < base.n; i++) res.a[i][i] = 1;
    
    while (exp > 0) {
        if (exp & 1) res = res * base;
        base = base * base;
        exp >>= 1;
    }
    return res;
}
```

### 4.2 矩阵加速递推

**斐波那契数列**：
```
| F(n)   |       | 1 1 |       | F(n-1) |
| F(n-1) |   =   | 1 0 |   *   | F(n-2) |
```

```cpp
long long fib(long long n) {
    if (n <= 1) return n;
    Matrix base(2, 2);
    base.a[0][0] = base.a[0][1] = base.a[1][0] = 1;
    Matrix res = power(base, n - 1);
    return res.a[0][0];
}
```

**一般线性递推**：
```
f(n) = c1*f(n-1) + c2*f(n-2) + ... + ck*f(n-k)

构造 k×k 转移矩阵：
| c1 c2 c3 ... ck |
| 1  0  0  ... 0  |
| 0  1  0  ... 0  |
| .  .  .  ... .  |
| 0  0  0  ... 0  |
```

---

## 模块五：博弈论

### 5.1 Nim游戏

**规则**：
- n堆石子，每次从一堆取任意数量
- 取走最后一颗者胜

**必胜策略**：
```cpp
bool canWin(vector<int> &piles) {
    int xorsum = 0;
    for (int p : piles) xorsum ^= p;
    return xorsum != 0;  // 异或和不为0则先手必胜
}
```

### 5.2 SG函数

**定义**：
```
SG(x) = mex{ SG(y) | y是x的后继状态 }
mex(S) = 最小的非负整数不在S中
```

**Sprague-Grundy定理**：
- 游戏的SG值等于各子游戏SG值的异或

**常见SG值**：
```
Nim堆：SG(x) = x
取石子（1,2,3）：SG(x) = x % 4
```

---

## 知识点速查表

| 知识点 | 时间复杂度 | 关键代码 |
|:---|:---:|:---|
| 扩展欧几里得 | O(log n) | exgcd |
| 快速幂 | O(log n) | power |
| 素数筛 | O(n log log n) | sieve |
| 线性筛 | O(n) | linear_sieve |
| 组合数(预处理) | O(n) | fact + inv_fact |
| Lucas定理 | O(p log_p n) | Lucas |
| 矩阵快速幂 | O(k³ log n) | power(Matrix) |
| Nim游戏 | O(n) | 异或和 |

---

## 练习题推荐

### 基础
1. 求逆元（扩展欧几里得）
2. 计算组合数
3. 判断素数

### 进阶
4. 中国剩余定理
5. Lucas定理应用
6. 矩阵快速幂优化递推

### 挑战
7. 概率期望DP
8. SG函数综合应用
9. 组合计数难题

---

## 三经典智慧

### 《易经》：数即道
数学是理解世界的钥匙，数是宇宙的语言。

### 《道德经》：简生繁
从简单规则到复杂现象，大道至简。

### 《论语》：学思行
掌握原理、多做练习、举一反三。

---

**默隐·蒙知苑**：数学之美，逻辑之光
