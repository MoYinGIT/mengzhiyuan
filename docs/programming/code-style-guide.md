---
layout: doc
---

# 代码规范手册

> 「默隐·蒙知苑」C++代码风格指南（GESP简化版）

---

## 为什么需要代码规范？

### 好代码的标准

**易读性**：
- 别人能看懂你的代码
- 三个月后自己能看懂
- 调试时能快速定位问题

**可维护性**：
- 容易修改和扩展
- Bug少，易发现
- 团队协作无障碍

**考试优势**：
- 减少粗心错误
- 方便检查逻辑
- 给阅卷老师好印象

---

## 命名规范

### 变量命名

**基本原则**：见名知意

**推荐命名法**：
- **小驼峰式**：studentName, totalScore
- **下划线式**：student_name, total_score

**GESP推荐（简洁明了）**：
```cpp
// 好的命名
int studentCount;      // 学生数量
int maxScore;          // 最高分
int sum;               // 总和（简单场景）

// 不好的命名
int a;                 // 太简短，无意义
int numberOfStudentsInTheClass;  // 太长
int nst;               // 缩写不清晰
```

**循环变量例外**：
```cpp
// 简单循环可以使用单字母
for (int i = 0; i < n; i++)
for (int j = 0; j < m; j++)

// 嵌套循环建议用行/列含义
for (int row = 0; row < n; row++)
for (int col = 0; col < m; col++)
```

### 常量命名

**全大写 + 下划线**：
```cpp
const int MAXN = 1005;
const int INF = 1e9;
const double PI = 3.14159;
```

### 数组命名

**复数形式或带Array后缀**：
```cpp
int scores[100];           // 分数数组
int studentScores[100];    // 学生分数数组
int heightArray[100];      // 身高数组
```

### 函数命名

**动词开头，小驼峰式**：
```cpp
int getMax(int a, int b);           // 获取最大值
bool isPrime(int n);                // 判断素数
void printResult(int ans);          // 输出结果
int calculateSum(int arr[], int n); // 计算总和
```

---

## 格式规范

### 缩进

**使用4个空格**（不要用Tab）：
```cpp
int main() {
    int a, b;          // 4空格缩进
    cin >> a >> b;
    
    if (a > b) {       // if块缩进
        cout << a;     // 再缩进4空格
    } else {
        cout << b;
    }
    
    return 0;
}
```

### 大括号位置

**推荐：同一行风格**（K&R风格）
```cpp
int main() {
    if (condition) {
        // 代码
    } else {
        // 代码
    }
    
    for (int i = 0; i < n; i++) {
        // 代码
    }
}
```

### 空格使用

**运算符两边加空格**：
```cpp
// 好的
int sum = a + b;
int result = (x + y) * z;
bool flag = (a == b) && (c != d);

// 不好的
int sum=a+b;
int result=(x+y)*z;
```

**逗号、分号后加空格**：
```cpp
// 好的
for (int i = 0; i < n; i++)
int a, b, c;

// 不好的
for(int i=0;i<n;i++)
int a,b,c;
```

**函数调用不加空格**：
```cpp
// 好的
max(a, b)
sort(arr, arr + n)

// 不好的
max ( a, b )
```

### 空行使用

**逻辑块之间加空行**：
```cpp
#include <iostream>
using namespace std;

const int MAXN = 1005;    // 常量和头文件之间

int main() {
    int n;                // 变量声明
    cin >> n;
    
    int sum = 0;          // 逻辑块之间空行
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    
    cout << sum << endl;  // 输出块
    
    return 0;
}
```

---

## 注释规范

### 文件头注释

**每个文件开头**：
```cpp
/*
 * 文件名: hello.cpp
 * 功能: 输出Hello World
 * 作者: 张三
 * 日期: 2026-03-27
 */
```

### 函数注释

**复杂函数前加注释**：
```cpp
/*
 * 功能: 判断一个数是否为素数
 * 参数: n - 待判断的正整数
 * 返回: true表示是素数，false表示不是
 * 注意: n <= 1时返回false
 */
bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```

### 行内注释

**解释"为什么"而非"是什么"**：
```cpp
// 好的注释
int mod = 1000000007;   // 题目要求取模
int ans = (a + b) % mod; // 防止溢出先取模

// 不好的注释（ obvious ）
int a = 10;  // 定义变量a为10
sum = sum + i; // sum加上i
```

### 代码块注释

**复杂逻辑前说明**：
```cpp
// 初始化dp数组为无穷大
for (int i = 0; i <= n; i++) {
    dp[i] = INF;
}
dp[0] = 0;  // 背包容量为0时价值为0

// 01背包状态转移
for (int i = 1; i <= n; i++) {
    for (int j = W; j >= w[i]; j--) {
        dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
    }
}
```

---

## 代码结构规范

### 头文件包含

**标准顺序**：
```cpp
#include <iostream>     // 1. 基础IO
#include <cstdio>       // 2. C风格IO
#include <algorithm>    // 3. 算法库
#include <cstring>      // 4. 字符串处理
#include <cmath>        // 5. 数学函数
#include <vector>       // 6. STL容器（L6+）

using namespace std;    // 统一使用std命名空间
```

**GESP建议**：
- L1-L3：只用 iostream 和 cstdio
- L4+：根据需要使用 algorithm、cmath、string
- L6+：可以使用 STL

### 全局变量

**谨慎使用，必须加g_前缀**：
```cpp
const int MAXN = 1005;      // 常量可以全局

int g_studentCount;         // 全局变量加前缀
int g_scores[MAXN];         // 全局数组

int main() {
    // 尽量使用局部变量
    int localVar;
}
```

### main函数结构

**标准模板**：
```cpp
int main() {
    // 1. 关闭同步（可选，提高速度）
    ios::sync_with_stdio(false);
    cin.tie(0);
    
    // 2. 变量声明
    int n, m;
    
    // 3. 输入
    cin >> n >> m;
    
    // 4. 数据处理
    int ans = solve(n, m);
    
    // 5. 输出
    cout << ans << endl;
    
    // 6. 返回
    return 0;
}
```

---

## 常见错误规避

### 变量初始化

**永远初始化变量**：
```cpp
// 好的
int sum = 0;
int maxVal = -1e9;
bool flag = false;

// 危险的
int sum;        // 未初始化，值不确定
int maxVal;     // 无法正确比较
```

### 数组越界

**时刻检查边界**：
```cpp
int arr[100];   // 有效下标 0-99

// 危险
for (int i = 0; i <= 100; i++)  // 越界！

// 安全
for (int i = 0; i < 100; i++)   // 正确
```

### 整数溢出

**注意数据范围**：
```cpp
// L1-L3：int 足够
int a = 1000000;

// L4+：可能要用 long long
long long factorial = 1;
for (int i = 1; i <= 20; i++) {
    factorial *= i;  // 20! 超过int范围
}
```

### 精度问题

**浮点数比较**：
```cpp
const double EPS = 1e-9;

// 不要用 == 比较浮点数
if (fabs(a - b) < EPS) {
    // 认为相等
}
```

---

## GESP级别规范要求

### L1-L2 基础要求

- 变量命名清晰
- 正确使用缩进
- 简单注释

### L3-L4 进阶要求

- 函数封装
- 合理空行
- 复杂逻辑加注释

### L5-L6 算法要求

- 算法思路注释
- 复杂度分析注释
- 关键步骤说明

### L7-L8 专业要求

- 完整文档注释
- 模块化设计
- 边界情况处理

---

## 代码审查清单

提交代码前检查：

- [ ] 变量名有意义
- [ ] 缩进一致（4空格）
- [ ] 运算符两边有空格
- [ ] 所有变量已初始化
- [ ] 数组不越界
- [ ] 复杂逻辑有注释
- [ ] 函数有功能说明
- [ ] 测试过边界情况

---

## 示例代码（完整规范）

```cpp
/*
 * 文件名: example.cpp
 * 功能: 计算学生成绩统计信息
 * 作者: 张三
 * 日期: 2026-03-27
 */

#include <iostream>
#include <algorithm>
using namespace std;

const int MAXN = 105;  // 最大学生数

/*
 * 功能: 计算数组平均值
 * 参数: arr - 分数数组
 *       n - 学生数量
 * 返回: 平均分（保留两位小数）
 */
double getAverage(int arr[], int n) {
    long long sum = 0;  // 用long long防止溢出
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    return (double)sum / n;
}

/*
 * 功能: 找出最高分
 * 参数: arr - 分数数组
 *       n - 学生数量
 * 返回: 最高分
 */
int getMaxScore(int arr[], int n) {
    int maxScore = arr[0];  // 初始化为第一个元素
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxScore) {
            maxScore = arr[i];
        }
    }
    return maxScore;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    
    int studentCount;
    cin >> studentCount;
    
    int scores[MAXN];
    for (int i = 0; i < studentCount; i++) {
        cin >> scores[i];
    }
    
    // 计算统计信息
    double average = getAverage(scores, studentCount);
    int maxScore = getMaxScore(scores, studentCount);
    
    // 输出结果，保留两位小数
    printf("Average: %.2f\n", average);
    cout << "Max Score: " << maxScore << endl;
    
    return 0;
}
```

---

## 学习建议

**循序渐进**：
1. 先掌握基本格式（缩进、空格）
2. 再养成命名习惯
3. 最后学会写清晰注释

**工具辅助**：
- 使用VS Code自动格式化
- 开启代码检查插件
- 参考优秀代码范例

**持续改进**：
- 每月回顾自己的代码
- 对比规范找出不足
- 逐步改进提高质量

---

**规范版本**: GESP简化版 v1.0  
**参考来源**: Google C++ Style Guide（简化）  
**适用级别**: L1-L8全体学生

