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

**模运算**：
```
(a + b) % m = (a % m + b % m) % m
(a - b) % m = (a % m - b % m + m) % m
(a * b) % m = (a % m * b % m) % m
```

**同余**：
```
a ≡ b (mod m) 表示 a 和 b 除以 m 的余数相同

性质：
- 若 a ≡ b (mod m)，则 a + c ≡ b + c (mod m)
- 若 a ≡ b (mod m)，则 a * c ≡ b * c (mod m)
```

**费马小定理**：
```
若 p 是素数，a 不是 p 的倍数，则：
a^(p-1) ≡ 1 (mod p)

应用：求逆元
a^(-1) ≡ a^(p-2) (mod p)
```

### 1.2 逆元

**定义**：a 在模 m 下的逆元是满足 a * x ≡ 1 (mod m) 的 x

**求解方法**：

1. **扩展欧几里得算法**：
```cpp
// 扩展欧几里得算法
// 返回 gcd(a, b)，并求出 x, y 使得 ax + by = gcd(a, b)
int exgcd(int a, int b, int &x, int &y) {
    if (b == 0) {
        x = 1; y = 0;
        return a;
    }
    int d = exgcd(b, a % b, y, x);
    y -= (a / b) * x;
    return d;
}

// 求 a 在模 m 下的逆元
int inv(int a, int m) {
    int x, y;
    int d = exgcd(a, m, x, y);
    if (d != 1) return -1;  // 逆元不存在
    return (x % m + m) % m;
}
```

2. **费马小定理**（m 为素数）：
```cpp
// 快速幂求逆元
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
int inv(int a, int p) {
    return power(a, p - 2, p);
}
```

### 1.3 中国剩余定理

**问题**：求解同余方程组
```
x ≡ a1 (mod m1)
x ≡ a2 (mod m2)
...
x ≡ an (mod mn)
```

**代码实现**（两两合并）：
```cpp
#include <bits/stdc++.h>
using namespace std;

// 扩展欧几里得算法
long long exgcd(long long a, long long b, long long &x, long long &y) {
    if (b == 0) {
        x = 1; y = 0;
        return a;
    }
    long long d = exgcd(b, a % b, y, x);
    y -= (a / b) * x;
    return d;
}

// 合并两个同余方程
// x ≡ a1 (mod m1)
// x ≡ a2 (mod m2)
pair<long long, long long> merge(long long a1, long long m1, long long a2, long long m2) {
    long long p, q;
    long long d = exgcd(m1, m2, p, q);
    
    if ((a2 - a1) % d != 0) return {-1, -1};  // 无解
    
    long long lcm = m1 / d * m2;
    long long x = (a1 + (a2 - a1) / d * p % (m2 / d) * m1) % lcm;
    if (x < 0) x += lcm;
    return {x, lcm};
}
```

---

## 模块二：组合数学

### 2.1 排列组合公式

**排列**（考虑顺序）：
```
P(n, m) = n! / (n-m)!
P(n, n) = n!
```

**组合**（不考虑顺序）：
```
C(n, m) = n! / (m! * (n-m)!)
C(n, m) = C(n, n-m)
C(n, 0) = C(n, n) = 1
```

**组合数性质**：
```
帕斯卡恒等式：
C(n, m) = C(n-1, m-1) + C(n-1, m)

二项式定理：
(1 + x)^n = C(n,0) + C(n,1)*x + C(n,2)*x^2 + ... + C(n,n)*x^n
```

### 2.2 组合数计算

**递推法（杨辉三角）**：
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

**阶乘法**：
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
    for (int i = 1; i < MAX; i++) {
        fact[i] = fact[i-1] * i % MOD;
    }
    inv_fact[MAX-1] = power(fact[MAX-1], MOD-2);
    for (int i = MAX-2; i >= 0; i--) {
        inv_fact[i] = inv_fact[i+1] * (i+1) % MOD;
    }
}

long long C(int n, int m) {
    if (m < 0 || m > n) return 0;
    return fact[n] * inv_fact[m] % MOD * inv_fact[n-m] % MOD;
}
```

### 2.3 Lucas 定理

**用于计算 C(n, m) % p，其中 p 是素数**

```cpp
long long Lucas(long long n, long long m, long long p) {
    if (m == 0) return 1;
    return C(n % p, m % p) * Lucas(n / p, m / p, p) % p;
}
```

---

## 模块三：概率与期望

### 3.1 基础概念

**概率**：P(A) = 事件 A 发生的可能性 / 所有可能性

**期望**：E(X) = Σ x * P(X=x)

**线性期望**：E(aX + bY) = aE(X) + bE(Y)

### 3.2 概率 DP

**例题**：抛硬币，正面朝上概率为 p，求第一次出现正面的期望次数。

设期望为 E：
```
E = 1 * p + (1 + E) * (1-p)
E = p + 1 - p + E(1-p)
E = 1 + E(1-p)
E * p = 1
E = 1/p
```

---

## 模块四：线性代数基础

### 4.1 矩阵乘法

```cpp
const int N = 100;
const int MOD = 1000000007;

struct Matrix {
    long long a[N][N];
    int n, m;
    
    Matrix(int _n, int _m) : n(_n), m(_m) {
        memset(a, 0, sizeof(a));
    }
    
    Matrix operator*(const Matrix &other) const {
        Matrix res(n, other.m);
        for (int i = 0; i < n; i++) {
            for (int k = 0; k < m; k++) {
                if (a[i][k] == 0) continue;
                for (int j = 0; j < other.m; j++) {
                    res.a[i][j] = (res.a[i][j] + a[i][k] * other.a[k][j]) % MOD;
                }
            }
        }
        return res;
    }
};

// 矩阵快速幂
Matrix power(Matrix base, long long exp) {
    Matrix res(base.n, base.n);
    for (int i = 0; i < base.n; i++) res.a[i][i] = 1;  // 单位矩阵
    
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

即：
F(n) = | 1 1 |^(n-1)   | F(1) |
       | 1 0 |      *  | F(0) |
```

```cpp
long long fib_matrix(long long n) {
    if (n <= 1) return n;
    
    Matrix base(2, 2);
    base.a[0][0] = base.a[0][1] = base.a[1][0] = 1;
    base.a[1][1] = 0;
    
    Matrix res = power(base, n - 1);
    return res.a[0][0];  // F(n)
}
```

---

## 模块五：博弈论基础

### 5.1 Nim 游戏

**规则**：
- 有若干堆石子
- 两人轮流取，每次可以从一堆中取任意数
- 取走最后一颗石子的人获胜

**必胜策略**：
```
计算所有堆的石子数的异或和
若异或和为 0，先手必败
若异或和不为 0，先手必胜
```

```cpp
bool canWin(vector<int>& piles) {
    int xorsum = 0;
    for (int p : piles) xorsum ^= p;
    return xorsum != 0;
}
```

### 5.2 SG 函数

**Sprague-Grundy 定理**：
- 每个状态可以定义一个 SG 值
- SG = mex{SG(后继状态)}
- 总 SG 值为各子游戏 SG 值的异或

**mex**：最小的非负整数不在集合中
```
mex{0, 1, 3} = 2
mex{1, 2, 3} = 0
mex{} = 0
```

---

## 在算法中的应用

| 数学知识 | 算法应用 |
|:---|:---|
| 数论 | 密码学、哈希、随机数 |
| 组合数学 | 计数 DP、概率计算 |
| 概率期望 | 随机算法、概率 DP |
| 矩阵 | 矩阵快速幂优化递推 |
| 博弈论 | 游戏问题、决策分析 |

---

## 练习题

### 数论
1. 求 a 在模 m 下的逆元（扩展欧几里得）
2. 求解同余方程组（中国剩余定理）
3. 计算大组合数模素数（Lucas 定理）

### 组合数学
4. 从 n 个不同元素中选 k 个，有多少种方案？
5. 卡特兰数：n 对括号的合法序列数
6. 错排问题：n 个元素的排列，每个都不在原来位置的方案数

### 概率期望
7. 抛硬币直到连续两次正面，期望抛多少次？
8. 随机游走问题

### 矩阵
9. 用矩阵快速幂求斐波那契第 n 项
10. 线性递推的矩阵加速

---

## 三经典智慧

### 《易经》：数即道

**数学是理解世界的钥匙**：
- 数是宇宙的语言
- 算法是数的艺术
- 编程是算法的实现

### 《道德经》：无中生有

**从简单规则到复杂现象**：
- 简单的递推公式 → 复杂的数列
- 简单的规则 → 复杂的游戏（如生命游戏）
- 简单的代码 → 强大的程序

### 《论语》：温故知新

**数学学习的方法**：
- 掌握基本原理
- 多做练习巩固
- 举一反三，迁移应用

---

**默隐·蒙知苑**：数学之美，逻辑之光
