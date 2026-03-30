# C++ 语法速查表

> 快速查阅常用语法 · 适合所有级别

---

## 🚀 程序模板

```cpp
#include <iostream>
#include <string>  // 字符串
#include <iomanip>  // 格式化
using namespace std;

int main() {
    // 你的代码
    
    return 0;
}
```

---

## 📦 数据类型

### 基本类型

| 类型 | 说明 | 示例 | 范围 |
|:---|:---|:---|:---|
| `int` | 整数 | `int x = 10;` | -2×10⁹ ~ 2×10⁹ |
| `long long` | 长整数 | `long long x = 1e12;` | -9×10¹⁸ ~ 9×10¹⁸ |
| `float` | 单精度小数 | `float f = 3.14f;` | ~6位精度 |
| `double` | 双精度小数 | `double d = 3.14159;` | ~15位精度 |
| `char` | 字符 | `char c = 'A';` | 一个字符 |
| `bool` | 布尔 | `bool b = true;` | true/false |
| `string` | 字符串 | `string s = "Hello";` | 需 `#include <string>` |

### 类型转换

```cpp
int a = 10;
double b = (double)a / 3;  // 显式转换
int c = (int)3.7;            // 截断小数
```

---

## 📝 输入输出

### 基本 I/O

```cpp
// 输入
cin >> x;                    // 单个变量
cin >> x >> y >> z;        // 多个变量

// 输出
cout << x;                   // 单个值
cout << x << " " << y;     // 多个值
cout << x << endl;          // 换行
```

### 格式化输出

```cpp
#include <iomanip>

// 保留2位小数
cout << fixed << setprecision(2) << 3.14159;  // 3.14

// 设置宽度
cout << setw(10) << 42;      // "        42"
cout << left << setw(10) << 42;  // 左对齐

// 设置填充字符
cout << setfill('0') << setw(4) << 42;  // "0042"
```

### scanf / printf（C风格，竞赛常用）

**需要头文件**：`#include <cstdio>`

**scanf 格式符**：
| 格式符 | 类型 | 示例 |
|:---|:---|:---|
| `%d` | int | `scanf("%d", &x);` |
| `%lld` | long long | `scanf("%lld", &x);` |
| `%f` | float | `scanf("%f", &f);` |
| `%lf` | double | `scanf("%lf", &d);` |
| `%c` | char | `scanf("%c", &c);` |
| `%s` | 字符串 | `scanf("%s", s);` |

**printf 格式符**：
| 格式符 | 说明 | 示例 |
|:---|:---|:---|
| `%d` | 整数 | `printf("%d", x);` |
| `%lld` | long long | `printf("%lld", x);` |
| `%f` | float/double | `printf("%.2f", d);` |
| `%c` | 字符 | `printf("%c", c);` |
| `%s` | 字符串 | `printf("%s", s);` |
| `\n` | 换行 | `printf("%d\n", x);` |

### ⚠️ printf() 浮点数舍入陷阱

**核心问题**：`printf()` 使用的是**四舍五入**，但浮点数存储精度会导致反直觉结果。

#### 经典案例

```cpp
#include <stdio.h>

int main() {
    printf("%.2f\n", 1.625);     // 输出: 1.62  (不是 1.63!)
    printf("%.2f\n", 1.6251);    // 输出: 1.63
    printf("%.3f\n", 0.9375);    // 输出: 0.938
    printf("%.3f\n", 0.93751);   // 输出: 0.938
    return 0;
}
```

#### 结果分析

| 数值 | 格式 | 输出 | 原因 |
|:---:|:---:|:---:|:---|
| **1.625** | `%.2f` | **1.62** | 实际存储 `1.624999...`，舍去 |
| **1.6251** | `%.2f` | **1.63** | 实际存储 `1.625100...1`，进位 |
| **0.9375** | `%.3f` | **0.938** | 精确存储，正常进位 |
| **0.93751** | `%.3f` | **0.938** | 实际存储 `0.937510...`，进位 |

#### 真相：浮点数存储不精确

```cpp
#include <stdio.h>

int main() {
    // 查看实际存储值
    printf("%.20f\n", 1.625);    // 1.62499999999999988898...
    printf("%.20f\n", 1.6251);   // 1.62510000000000006649...
    printf("%.20f\n", 0.9375);   // 0.93750000000000000000
    printf("%.20f\n", 0.93751);  // 0.93751000000000001421
}
```

**核心教训**：
> 浮点数舍入不是纯数学问题，而是**精度问题**。
> 
> 即使像 `1.625` 这样看起来精确的数（13/8），在 IEEE 754 double 中也可能存储为 `1.624999...`！

#### 避免陷阱的方法

```cpp
// ❌ 危险：浮点数判断相等
if (x == 1.625) { ... }

// ✅ 正确：用整数存储精确小数
int price = 1625;  // 表示 16.25 元，精确无误
```

**cin/cout vs scanf/printf 对比**：
| 特性 | cin/cout | scanf/printf |
|:---|:---|:---|
| 速度 | 较慢 | 更快（大数据量时明显）|
| 安全性 | 类型安全 | 需注意格式符匹配 |
| 易用性 | 简单直观 | 需要记忆格式符 |
| 建议场景 | 初学者/一般题目 | 大数据量/时间紧张 |

**加速 cin/cout**（接近 scanf/printf 速度）：
```cpp
ios::sync_with_stdio(false);  // 关闭同步
cin.tie(nullptr);              // 解除绑定
```

---

## 🧮 运算符

### 算术运算符

```cpp
+  -  *  /  %       // 加 减 乘 除 取余
++  --              // 自增 自减
+=  -=  *=  /=  %=  // 复合赋值
```

### 比较运算符

```cpp
==  !=  <  >  <=  >=     // 等于 不等于 小于 大于 小于等于 大于等于
```

### 逻辑运算符

```cpp
&&     // 与
||     // 或
!      // 非
```

### 位运算符

```cpp
&   // 与
|   // 或
^   // 异或
~   // 非
<<  // 左移
>>  // 右移
```

---

## 🔄 控制结构

### if-else

```cpp
if (条件1) {
    // ...
} else if (条件2) {
    // ...
} else {
    // ...
}

// 三目运算符
int max_val = (a > b) ? a : b;
```

### switch

```cpp
switch (变量) {
    case 值1:
        // ...
        break;
    case 值2:
        // ...
        break;
    default:
        // ...
}
```

### for 循环

```cpp
// 基本形式
for (int i = 0; i < n; i++) {
    // ...
}

// 递减
for (int i = n - 1; i >= 0; i--) {
    // ...
}

// 步长为2
for (int i = 0; i < n; i += 2) {
    // ...
}
```

### while / do-while

```cpp
// while
while (条件) {
    // ...
}

// do-while（至少执行一次）
do {
    // ...
} while (条件);
```

### 循环控制

```cpp
break;      // 跳出循环
continue;   // 跳过当前迭代，进入下一次
```

---

## 📊 数组

### 一维数组

```cpp
// 声明与初始化
int arr[5] = {1, 2, 3, 4, 5};
int arr[] = {1, 2, 3};        // 自动计算长度
int arr[5] = {1, 2};          // 剩余为0
int arr[100] = {0};           // 全初始化为0

// 访问与修改
arr[0] = 10;                  // 修改
int x = arr[2];               // 访问

// 遍历
for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}
```

### 二维数组

```cpp
// 声明与初始化
int mat[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// 访问
mat[0][0] = 100;              // 修改
int x = mat[1][2];            // 访问（值为7）

// 遍历
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        cout << mat[i][j] << " ";
    }
    cout << endl;
}
```

---

## 🔤 字符串

### string 操作

```cpp
#include <string>

string s = "Hello";

// 基本操作
s.length();           // 长度
s.size();             // 同上
s.empty();            // 是否为空

// 访问字符
s[0];                 // 第一个字符
s.at(0);              // 同上（有边界检查）
s.front();            // 第一个
s.back();             // 最后一个

// 子串
s.substr(0, 3);       // 从0开始，取3个字符："Hel"
s.substr(3);          // 从3开始到结束："lo"

// 查找
s.find("l");          // 第一次出现的位置（2）
s.find("l", 3);       // 从位置3开始找（3）
s.rfind("l");         // 最后一次出现（3）

// 替换
s.replace(0, 2, "Ha");  // "Hallo"

// 插入
s.insert(2, "XX");    // "HeXXllo"

// 删除
s.erase(2, 2);        // 从2开始删2个："Hello"
s.erase(2);           // 从2开始删到末尾

// 比较
s1 == s2, s1 != s2, s1 < s2, etc.

// 连接
string s3 = s1 + s2;
s1 += s2;

// 转数字
int x = stoi("123");          // string to int
double d = stod("3.14");      // string to double

// 数字转字符串
string s = to_string(123);    // "123"
```

### C风格字符串（了解）

```cpp
#include <cstring>

char str[] = "Hello";
strlen(str);              // 长度
strcpy(dest, src);        // 复制
strcat(dest, src);        // 连接
strcmp(s1, s2);           // 比较
```

---

## ⚙️ 函数

### 函数定义

```cpp
// 返回值类型 函数名(参数列表) { 函数体 }

// 无参数、无返回值
void sayHello() {
    cout << "Hello!" << endl;
}

// 有参数、有返回值
int add(int a, int b) {
    return a + b;
}

// 参数默认值
void print(int x, int y = 10) {
    cout << x << " " << y << endl;
}
// print(5);      // 输出: 5 10
// print(5, 20);  // 输出: 5 20
```

### 参数传递

```cpp
// 值传递（复制一份）
void f1(int x) { x = 10; }  // 不影响原变量

// 引用传递（别名）
void f2(int &x) { x = 10; }  // 修改原变量

// 指针传递
void f3(int *x) { *x = 10; }  // 修改原变量

// 调用
int a = 5;
f1(a);  // a 还是 5
f2(a);  // a 变成 10
f3(&a); // a 变成 10
```

### 函数重载

```cpp
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
// 根据参数类型自动选择
```

---

## 🎯 指针与引用

### 指针

```cpp
int x = 10;
int *p = &x;      // p 指向 x

*p;                // 解引用，得到值（10）
p++;               // 移动到下一个元素（地址+4）

// 指针与数组
int arr[5];
int *p = arr;      // 等价于 &arr[0]
p[0];              // 等价于 arr[0]
*(p+1);            // 等价于 arr[1]

// 空指针
int *p = nullptr;  // C++11
int *p = NULL;     // 旧式
```

### 引用

```cpp
int x = 10;
int &ref = x;      // ref 是 x 的别名

ref = 20;          // x 也变成 20

// 常用于函数参数
void swap(int &a, int &b) {
    int t = a; a = b; b = t;
}
```

---

## 🏗️ 结构体

### 定义与使用

```cpp
struct Student {
    string name;
    int age;
    double score;
};

// 创建变量
Student s1;
s1.name = "小明";
s1.age = 12;
s1.score = 89.5;

// 初始化
Student s2 = {"小红", 11, 92.0};
Student s3{"小刚", 13, 85.5};  // C++11

// 结构体数组
Student arr[10];
arr[0].name = "张三";

// 结构体指针
Student s;
Student *p = &s;
p->name;          // 等价于 (*p).name
```

---

## 🔢 常用算法

### 排序

```cpp
#include <algorithm>

// 升序排序
sort(arr, arr + n);

// 降序排序
sort(arr, arr + n, greater<int>());

// 自定义比较
bool cmp(int a, int b) {
    return a > b;  // 降序
}
sort(arr, arr + n, cmp);
```

### 查找

```cpp
#include <algorithm>

// 二分查找（数组必须有序）
bool found = binary_search(arr, arr + n, target);

// 返回迭代器
auto it = lower_bound(arr, arr + n, target);  // 第一个>=target的位置
auto it = upper_bound(arr, arr + n, target);  // 第一个>target的位置
```

### 其他

```cpp
#include <algorithm>

swap(a, b);                    // 交换
min(a, b), max(a, b);          // 最小/最大值
reverse(arr, arr + n);         // 反转
fill(arr, arr + n, value);     // 填充
```

---

## 📚 常用头文件

```cpp
#include <iostream>      // 输入输出
#include <string>         // string 类型
#include <iomanip>        // 格式化输出
#include <math>           // 数学函数
#include <algorithm>      // 算法（sort等）
#include <vector>         // 动态数组（L4+）
```

### 数学函数

```cpp
#include <math>

abs(x);            // 绝对值
sqrt(x);           // 平方根
pow(x, y);         // x的y次方
round(x);          // 四舍五入
ceil(x);           // 向上取整
floor(x);          // 向下取整
max(a, b);         // 最大值
min(a, b);         // 最小值
```

---

## ⚠️ 常见错误

| 错误 | 原因 | 修正 |
|:---|:---|:---|
| `\n` vs `endl` | `\n` 只换行，`endl` 还刷新缓冲区 | 大量输出时用 `\n` |
| `=` vs `==` | `=` 赋值，`==` 比较 | 条件判断用 `==` |
| 数组越界 | 索引 >= 数组长度 | 检查循环条件 |
| 整数除法 | `3/2` = 1 | 用 `3.0/2` 或强制转换 |
| 未初始化变量 | 使用前未赋值 | 声明时初始化 |
| `int` 溢出 | 结果超过 2×10⁹ | 用 `long long` |

---

## 💡 技巧速记

### 快速输入输出（竞赛）

```cpp
ios::sync_with_stdio(false);  // 取消同步
cin.tie(nullptr);             // 解除绑定

// 放在 main() 开头，加速输入输出
```

### 无穷大/小

```cpp
const int INF = 0x3f3f3f3f;   // 1061109567，足够大
const int INF = 1e9;          // 1000000000
const long long INF = 1e18;   // long long 范围
```

### 数组初始化技巧

```cpp
int arr[100] = {0};           // 全0
int arr[100]; fill(arr, arr+100, -1);  // 全-1
```

---

**默隐·蒙知苑** · 学而时习之
