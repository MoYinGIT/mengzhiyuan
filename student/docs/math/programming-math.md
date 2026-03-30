# 数学与编程

> 用编程解决数学问题 · 数学建模 · 算法思维

---

## 🎯 学习目标

- 用编程验证数学结论
- 用编程解决复杂计算问题
- 理解数学与编程的关系
- 培养算法思维

---

## 📚 模块一：计算验证

### 1.1 质数判定

**数学定义**：只能被1和自身整除的大于1的整数

**编程实现**：
```cpp
#include <math>
using namespace std;

// 判断n是否为质数
bool is_prime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    // 只需检查到√n
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}

int main() {
    // 找出100以内的所有质数
    cout << "100以内的质数：";
    for (int i = 2; i <= 100; i++) {
        if (is_prime(i)) {
            cout << i << " ";
        }
    }
    return 0;
}
```

**Scratch 版本**：
```scratch
定义 是质数 接收 n
    如果 n <= 1 那么 返回 false
    如果 n = 2 那么 返回 true
    如果 n 除以 2 的余数 = 0 那么 返回 false
    
    将 i 设为 3
    重复执行直到 i * i > n
        如果 n 除以 i 的余数 = 0 那么
            返回 false
        结束如果
        将 i 增加 2
    结束重复
    返回 true
结束定义

当 绿旗被点击
    说 "100以内的质数：" 持续 1 秒
    对于 n 从 2 到 100
        如果 是质数 n 那么
            说 n 持续 0.5 秒
        结束如果
    结束对于
结束
```

---

### 1.2 最大公约数（GCD）

**欧几里得算法**：gcd(a, b) = gcd(b, a % b)

```cpp
// 递归版
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

// 迭代版
int gcd_iter(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

---

### 1.3 斐波那契数列

**定义**：F(1) = 1, F(2) = 1, F(n) = F(n-1) + F(n-2)

**数列**：1, 1, 2, 3, 5, 8, 13, 21, 34, 55...

**编程实现**：
```cpp
// 递归版（慢）
int fib_recursive(int n) {
    if (n <= 2) return 1;
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}

// 迭代版（快）
int fib_iterative(int n) {
    if (n <= 2) return 1;
    int a = 1, b = 1;
    for (int i = 3; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// 矩阵快速幂版（O(log n)）
// 适用于n很大的情况
```

---

## 📚 模块二：数学可视化

### 2.1 绘制函数图像

**Scratch 项目：绘制正弦曲线**
```scratch
当 绿旗被点击
    清除全部
    移到 x:-240 y:0
    落笔
    
    将 x 设为 -240
    重复执行 480 次
        // y = 50 * sin(x / 20)
        将 y 设为 50 * sin x / 20
        移到 x:x y:y
        将 x 增加 1
    结束重复
    
    抬笔
    说 "正弦曲线绘制完成！" 持续 2 秒
结束
```

### 2.2 曼德勃罗集

**数学定义**：复数c使得序列 zₙ₊₁ = zₙ² + c 不发散

```cpp
// 简化版判断
bool in_mandelbrot(double cx, double cy, int max_iter) {
    double x = 0, y = 0;
    for (int i = 0; i < max_iter; i++) {
        double nx = x * x - y * y + cx;
        double ny = 2 * x * y + cy;
        x = nx;
        y = ny;
        if (x * x + y * y > 4) return false;
    }
    return true;
}
```

---

## 📚 模块三：数学建模

### 3.1 圆周率估算

**蒙特卡洛方法**：
- 在一个正方形内随机撒点
- 统计落在内切圆内的比例
- π ≈ 4 × (圆内点数 / 总点数)

```cpp
#include <iostream>
#include <cstdlib>
#include <cmath>
#include <time>
using namespace std;

int main() {
    srand(time(nullptr));
    long long n = 1000000;  // 总点数
    long long inside = 0;   // 圆内点数
    
    for (long long i = 0; i < n; i++) {
        double x = (double)rand() / RAND_MAX;
        double y = (double)rand() / RAND_MAX;
        if (x * x + y * y <= 1) inside++;
    }
    
    double pi = 4.0 * inside / n;
    cout << "估算的π值：" << pi << endl;
    return 0;
}
```

**Scratch 版本**：
```scratch
当 绿旗被点击
    将 总点数 设为 10000
    将 圆内点数 设为 0
    
    重复执行 总点数 次
        将 x 设为 随机数从 0 到 1
        将 y 设为 随机数从 0 到 1
        如果 x * x + y * y <= 1 那么
            将 圆内点数 增加 1
        结束如果
    结束重复
    
    将 pi 设为 4 * 圆内点数 / 总点数
    说 连接 "估算的π值：" pi 持续 3 秒
结束
```

---

### 3.2 复利计算

**问题**：本金10000元，年利率5%，存10年后本息多少？

**公式**：A = P × (1 + r)ⁿ

```cpp
#include <iostream>
#include <math>
using namespace std;

int main() {
    double P = 10000;  // 本金
    double r = 0.05;   // 年利率
    int n = 10;        // 年数
    
    double A = P * pow(1 + r, n);
    cout << "10年后本息：" << A << "元" << endl;
    
    // 每年明细
    double balance = P;
    for (int i = 1; i <= n; i++) {
        balance *= (1 + r);
        cout << "第" << i << "年：" << balance << "元" << endl;
    }
    
    return 0;
}
```

---

## 📚 模块四：数论算法

### 4.1 埃拉托斯特尼筛法

**用途**：快速找出n以内的所有质数

```cpp
#include <vector>
#include <cstring>
using namespace std;

vector<int> sieve(int n) {
    vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    
    for (int i = 2; i * i <= n; i++) {
        if (is_prime[i]) {
            // 标记所有i的倍数为非质数
            for (int j = i * i; j <= n; j += i) {
                is_prime[j] = false;
            }
        }
    }
    
    vector<int> primes;
    for (int i = 2; i <= n; i++) {
        if (is_prime[i]) primes.push_back(i);
    }
    return primes;
}
```

---

### 4.2 快速幂

**计算**：aⁿ mod m （n很大时）

```cpp
// 快速幂（递归版）
long long power(long long a, long long n, long long mod) {
    if (n == 0) return 1;
    long long half = power(a, n / 2, mod);
    if (n % 2 == 0) {
        return (half * half) % mod;
    } else {
        return (half * half % mod * a) % mod;
    }
}

// 快速幂（迭代版）
long long power_iter(long long a, long long n, long long mod) {
    long long result = 1;
    a = a % mod;
    while (n > 0) {
        if (n & 1) result = (result * a) % mod;
        a = (a * a) % mod;
        n >>= 1;
    }
    return result;
}
```

---

## 📚 模块五：几何计算

### 5.1 点到直线距离

```cpp
#include <math>

// 点(x0,y0)到直线ax+by+c=0的距离
double point_to_line(double x0, double y0, 
                      double a, double b, double c) {
    return fabs(a * x0 + b * y0 + c) / sqrt(a * a + b * b);
}

// 两点间距离
double distance(double x1, double y1, double x2, double y2) {
    return sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
```

### 5.2 三角形面积

**海伦公式**：
```cpp
double triangle_area(double a, double b, double c) {
    double p = (a + b + c) / 2;  // 半周长
    return sqrt(p * (p - a) * (p - b) * (p - c));
}
```

**坐标公式**：
```cpp
double triangle_area_coords(double x1, double y1,
                             double x2, double y2,
                             double x3, double y3) {
    return fabs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}
```

---

## 📝 练习题

### 编程练习
1. 编写程序找出1000以内的所有完数（等于其因子之和的数）
2. 用编程验证哥德巴赫猜想（大于2的偶数可表示为两个质数之和）
3. 实现高精度加法（处理超过long long范围的大数）

### 数学建模
4. 模拟投骰子，统计每个点数出现的频率
5. 计算圆周率的更多位数
6. 模拟随机游走（醉汉走路问题）

---

**默隐·蒙知苑** · 数学是编程的灵魂，编程是数学的翅膀
