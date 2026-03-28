# 🚀 C++ 配套练习题库

> **默隐·蒙知苑** · 配套练习题库 · L1-L8完整分级

---

## 📚 题库说明

本练习题库配合「默隐·蒙知苑」C++编程课程使用，分为L1-L8共8个级别，难度逐级递增。

### 难度标识

| 标识 | 难度 | 说明 |
|:---:|:---:|:---|
| 🟢 | 基础 | 必会的基础知识 |
| 🟡 | 进阶 | 需要综合应用 |
| 🔴 | 挑战 | 需要深入思考 |

### 级别分布

| 级别 | 主题 | 题目数量 |
|:---:|:---|:---:|
| L1 | 变量、输入输出、简单计算 | 12题 |
| L2 | 分支与循环 | 13题 |
| L3 | 数组基础 | 12题 |
| L4 | 字符串与函数 | 12题 |
| L5 | 指针、结构体、基础算法 | 12题 |
| L6 | 排序、搜索、递归 | 12题 |
| L7 | 数据结构、图论基础 | 12题 |
| L8 | 动态规划、高级算法 | 12题 |

---

# 🔰 L1 级别：编程入门

> **适合人群**：零基础小白 | **前置知识**：无

## L1-1 🟢 Hello World

### 题目描述
编写一个C++程序，输出 `Hello, World!`。

### 输入格式
无输入。

### 输出格式
输出一行字符串 `Hello, World!`。

### 样例
```
输入：（无）

输出：Hello, World!
```

<details>
<summary>💡 提示</summary>

使用 `cout` 输出字符串，记得包含头文件 `<iostream>`。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```
</details>

---

## L1-2 🟢 自我介绍

### 题目描述
编写程序，输出你的姓名和年龄。假设姓名为"小明"，年龄为15岁。

### 输入格式
无输入。

### 输出格式
输出两行：
- 第一行：`我叫小明`
- 第二行：`今年15岁`

### 样例
```
输入：（无）

输出：我叫小明
      今年15岁
```

<details>
<summary>💡 提示</summary>

可以使用 `string` 类型存储姓名，`int` 类型存储年龄。需要包含 `<string>` 头文件。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "小明";
    int age = 15;
    
    cout << "我叫" << name << endl;
    cout << "今年" << age << "岁" << endl;
    
    return 0;
}
```
</details>

---

## L1-3 🟢 整数加法

### 题目描述
输入两个整数，输出它们的和。

### 输入格式
一行，两个整数 a 和 b，用空格隔开。

### 输出格式
一个整数，表示 a + b 的结果。

### 样例
```
输入：3 5

输出：8
```

<details>
<summary>💡 提示</summary>

使用 `cin` 读取两个整数，用 `+` 运算符求和。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}
```
</details>

---

## L1-4 🟢 长方形面积

### 题目描述
输入长方形的长和宽，计算并输出面积。

### 输入格式
一行，两个整数，分别表示长和宽。

### 输出格式
一个整数，表示长方形的面积。

### 样例
```
输入：4 5

输出：20
```

<details>
<summary>💡 提示</summary>

长方形面积 = 长 × 宽，使用 `*` 运算符。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int length, width;
    cin >> length >> width;
    cout << length * width << endl;
    return 0;
}
```
</details>

---

## L1-5 🟢 温度转换

### 题目描述
输入摄氏温度，转换为华氏温度输出。

**公式**：华氏 = 摄氏 × 9/5 + 32

### 输入格式
一个整数，表示摄氏温度。

### 输出格式
一个保留一位小数的浮点数，表示华氏温度。

### 样例
```
输入：0

输出：32.0
```

<details>
<summary>💡 提示</summary>

使用 `double` 类型存储温度，输出时用 `fixed` 和 `setprecision(1)` 控制小数位。需要包含 `<iomanip>` 头文件。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double celsius;
    cin >> celsius;
    
    double fahrenheit = celsius * 9 / 5 + 32;
    
    cout << fixed << setprecision(1) << fahrenheit << endl;
    return 0;
}
```
</details>

---

## L1-6 🟡 简易计算器

### 题目描述
输入两个整数，输出它们的和、差、积、商（整数除法）。

### 输入格式
一行，两个整数 a 和 b。

### 输出格式
四行，分别输出：
- 和：a + b = ?
- 差：a - b = ?
- 积：a * b = ?
- 商：a / b = ?

### 样例
```
输入：10 3

输出：10 + 3 = 13
      10 - 3 = 7
      10 * 3 = 30
      10 / 3 = 3
```

<details>
<summary>💡 提示</summary>

注意整数除法会截断小数部分。按照指定格式输出，使用多个 `cout` 语句。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    
    cout << a << " + " << b << " = " << a + b << endl;
    cout << a << " - " << b << " = " << a - b << endl;
    cout << a << " * " << b << " = " << a * b << endl;
    cout << a << " / " << b << " = " << a / b << endl;
    
    return 0;
}
```
</details>

---

## L1-7 🟡 购物小票

### 题目描述
输入商品单价和购买数量，计算总价（商品有8折优惠）。

### 输入格式
一行，两个数：单价（浮点数）和 数量（整数）。

### 输出格式
一个浮点数，表示折后总价，保留2位小数。

### 样例
```
输入：100.0 3

输出：240.00
```

<details>
<summary>💡 提示</summary>

总价 = 单价 × 数量 × 0.8，使用 `double` 类型计算。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double price;
    int quantity;
    cin >> price >> quantity;
    
    double total = price * quantity * 0.8;
    
    cout << fixed << setprecision(2) << total << endl;
    return 0;
}
```
</details>

---

## L1-8 🟡 交换变量

### 题目描述
输入两个整数，交换它们的值后输出。

### 输入格式
一行，两个整数 a 和 b。

### 输出格式
一行，两个整数，表示交换后的值。

### 样例
```
输入：5 10

输出：10 5
```

<details>
<summary>💡 提示</summary>

交换两个变量需要借助第三个临时变量。设 temp = a，然后 a = b，b = temp。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    
    int temp = a;
    a = b;
    b = temp;
    
    cout << a << " " << b << endl;
    return 0;
}
```
</details>

---

## L1-9 🟡 时间换算

### 题目描述
输入总秒数，转换为小时、分钟、秒的形式输出。

### 输入格式
一个整数，表示总秒数。

### 输出格式
三个整数，分别表示小时、分钟、秒，用空格隔开。

### 样例
```
输入：3661

输出：1 1 1
```

<details>
<summary>💡 提示</summary>

1小时 = 3600秒，1分钟 = 60秒。使用除法和取余运算。取余运算符是 `%`。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int totalSeconds;
    cin >> totalSeconds;
    
    int hours = totalSeconds / 3600;
    int minutes = (totalSeconds % 3600) / 60;
    int seconds = totalSeconds % 60;
    
    cout << hours << " " << minutes << " " << seconds << endl;
    return 0;
}
```
</details>

---

## L1-10 🔴 三位数反转

### 题目描述
输入一个三位数，将其反转后输出。

### 输入格式
一个三位数（100-999）。

### 输出格式
反转后的数字。

### 样例
```
输入：123

输出：321
```

<details>
<summary>💡 提示</summary>

使用除法和取余运算分离各位数字。百位 = n/100，十位 = n/10%10，个位 = n%10。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int hundreds = n / 100;
    int tens = (n / 10) % 10;
    int ones = n % 10;
    
    int reversed = ones * 100 + tens * 10 + hundreds;
    cout << reversed << endl;
    
    return 0;
}
```
</details>

---

## L1-11 🔴 成绩等级

### 题目描述
输入一个成绩（0-100），输出对应的等级：
- 90-100：A
- 80-89：B
- 70-79：C
- 60-69：D
- 0-59：F

### 输入格式
一个整数，表示成绩。

### 输出格式
一个字符，表示等级。

### 样例
```
输入：85

输出：B
```

<details>
<summary>💡 提示</summary>

使用多个if-else if-else语句进行判断。注意判断顺序或条件写法。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int score;
    cin >> score;
    
    char grade;
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else grade = 'F';
    
    cout << grade << endl;
    return 0;
}
```
</details>

---

## L1-12 🔴 圆的计算

### 题目描述
输入圆的半径，计算并输出周长和面积。

**公式**：
- 周长 = 2 × π × r
- 面积 = π × r × r

π 取 3.14159

### 输入格式
一个浮点数，表示半径。

### 输出格式
两行：
- 第一行：周长，保留2位小数
- 第二行：面积，保留2位小数

### 样例
```
输入：5

输出：31.42
      78.54
```

<details>
<summary>💡 提示</summary>

使用 `const double PI = 3.14159;` 定义常量。输出用 `fixed` 和 `setprecision(2)`。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    const double PI = 3.14159;
    double r;
    cin >> r;
    
    double circumference = 2 * PI * r;
    double area = PI * r * r;
    
    cout << fixed << setprecision(2);
    cout << circumference << endl;
    cout << area << endl;
    
    return 0;
}
```
</details>

---

# 🔄 L2 级别：分支与循环

> **适合人群**：已完成L1 | **前置知识**：变量、输入输出

## L2-1 🟢 判断奇偶

### 题目描述
输入一个整数，判断它是奇数还是偶数。

### 输入格式
一个整数 n。

### 输出格式
如果 n 是偶数，输出 `even`；如果是奇数，输出 `odd`。

### 样例
```
输入：4

输出：even
```

<details>
<summary>💡 提示</summary>

使用取余运算符 `%` 判断。如果 n % 2 == 0，则是偶数。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    if (n % 2 == 0) {
        cout << "even" << endl;
    } else {
        cout << "odd" << endl;
    }
    
    return 0;
}
```
</details>

---

## L2-2 🟢 打印数字

### 题目描述
输入一个整数 n，打印 1 到 n 的所有整数。

### 输入格式
一个正整数 n（n ≤ 100）。

### 输出格式
一行，1 到 n 的所有整数，用空格隔开。

### 样例
```
输入：5

输出：1 2 3 4 5
```

<details>
<summary>💡 提示</summary>

使用 for 循环，从 1 循环到 n，每次输出 i。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        cout << i;
        if (i < n) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L2-3 🟢 累加求和

### 题目描述
输入一个整数 n，计算 1 + 2 + 3 + ... + n 的和。

### 输入格式
一个正整数 n（n ≤ 1000）。

### 输出格式
一个整数，表示累加和。

### 样例
```
输入：100

输出：5050
```

<details>
<summary>💡 提示</summary>

使用循环累加，需要一个变量 sum 初始化为 0，每次循环加上 i。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    
    cout << sum << endl;
    return 0;
}
```
</details>

---

## L2-4 🟢 阶乘计算

### 题目描述
输入一个整数 n，计算 n!（n的阶乘）。

### 输入格式
一个正整数 n（n ≤ 10）。

### 输出格式
一个整数，表示 n!。

### 样例
```
输入：5

输出：120
```

<details>
<summary>💡 提示</summary>

n! = 1 × 2 × 3 × ... × n。初始值设为 1（乘法单位元），循环相乘。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int factorial = 1;
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    cout << factorial << endl;
    return 0;
}
```
</details>

---

## L2-5 🟡 判断闰年

### 题目描述
输入一个年份，判断是否为闰年。

**闰年规则**：
- 能被4整除但不能被100整除，或者
- 能被400整除

### 输入格式
一个正整数，表示年份。

### 输出格式
如果是闰年输出 `yes`，否则输出 `no`。

### 样例
```
输入：2000

输出：yes
```

<details>
<summary>💡 提示</summary>

使用逻辑运算符 `&&`（与）、`||`（或）组合条件：(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int year;
    cin >> year;
    
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        cout << "yes" << endl;
    } else {
        cout << "no" << endl;
    }
    
    return 0;
}
```
</details>

---

## L2-6 🟡 九九乘法表（单行）

### 题目描述
输入一个整数 n（1 ≤ n ≤ 9），输出 n 的乘法表（1到9）。

### 输入格式
一个整数 n。

### 输出格式
一行，n × 1 到 n × 9 的结果，用空格隔开。

### 样例
```
输入：3

输出：3 6 9 12 15 18 21 24 27
```

<details>
<summary>💡 提示</summary>

使用循环从 1 到 9，每次计算 n * i 并输出。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= 9; i++) {
        cout << n * i;
        if (i < 9) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L2-7 🟡 水仙花数

### 题目描述
输入一个三位数，判断它是否为水仙花数。

**水仙花数**：一个三位数等于其各位数字立方之和。如 153 = 1³ + 5³ + 3³。

### 输入格式
一个三位数。

### 输出格式
如果是水仙花数输出 `yes`，否则输出 `no`。

### 样例
```
输入：153

输出：yes
```

<details>
<summary>💡 提示</summary>

分离各位数字后，计算立方和，与原数比较。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int a = n / 100;        // 百位
    int b = (n / 10) % 10;  // 十位
    int c = n % 10;         // 个位
    
    if (a*a*a + b*b*b + c*c*c == n) {
        cout << "yes" << endl;
    } else {
        cout << "no" << endl;
    }
    
    return 0;
}
```
</details>

---

## L2-8 🟡 最大公约数（辗转相除法）

### 题目描述
输入两个正整数，求它们的最大公约数（GCD）。

### 输入格式
一行，两个正整数 a 和 b。

### 输出格式
一个整数，表示最大公约数。

### 样例
```
输入：24 36

输出：12
```

<details>
<summary>💡 提示</summary>

使用辗转相除法：gcd(a, b) = gcd(b, a % b)，直到 b 为 0。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    
    while (b != 0) {
        int temp = a % b;
        a = b;
        b = temp;
    }
    
    cout << a << endl;
    return 0;
}
```
</details>

---

## L2-9 🟡 素数判断

### 题目描述
输入一个正整数 n，判断它是否为素数（质数）。

### 输入格式
一个正整数 n（n ≤ 10000）。

### 输出格式
如果是素数输出 `prime`，否则输出 `not prime`。

### 样例
```
输入：17

输出：prime
```

<details>
<summary>💡 提示</summary>

素数是大于1的自然数，除了1和它本身没有其他因数。只需要检查 2 到 √n 之间的数是否能整除 n。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    if (n < 2) {
        cout << "not prime" << endl;
        return 0;
    }
    
    bool isPrime = true;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    
    cout << (isPrime ? "prime" : "not prime") << endl;
    return 0;
}
```
</details>

---

## L2-10 🔴 斐波那契数列

### 题目描述
输入一个整数 n，输出斐波那契数列的第 n 项。

**斐波那契数列**：1, 1, 2, 3, 5, 8, 13, ... （从第3项起，每项等于前两项之和）

### 输入格式
一个正整数 n（n ≤ 30）。

### 输出格式
一个整数，表示第 n 项。

### 样例
```
输入：6

输出：8
```

<details>
<summary>💡 提示</summary>

使用循环递推，维护前两个数的值。注意 n = 1 和 n = 2 的特殊情况。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    if (n == 1 || n == 2) {
        cout << 1 << endl;
        return 0;
    }
    
    int a = 1, b = 1, c;
    for (int i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    
    cout << b << endl;
    return 0;
}
```
</details>

---

## L2-11 🔴 完全数

### 题目描述
输入一个正整数 n，判断它是否为完全数。

**完全数**：等于其所有真因数（小于本身的因数）之和的数。如 6 = 1 + 2 + 3。

### 输入格式
一个正整数 n（n ≤ 10000）。

### 输出格式
如果是完全数输出 `perfect`，否则输出 `not perfect`。

### 样例
```
输入：28

输出：perfect
```

<details>
<summary>💡 提示</summary>

遍历 1 到 n/2，找出所有能整除 n 的数，累加求和，最后与 n 比较。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int sum = 0;
    for (int i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    
    if (sum == n) {
        cout << "perfect" << endl;
    } else {
        cout << "not perfect" << endl;
    }
    
    return 0;
}
```
</details>

---

## L2-12 🔴 数字金字塔

### 题目描述
输入一个整数 n，输出数字金字塔。

### 输入格式
一个正整数 n（n ≤ 9）。

### 输出格式
n 行金字塔，第 i 行有 i 个数字 i。

### 样例
```
输入：4

输出：  1
       22
      333
     4444
```

<details>
<summary>💡 提示</summary>

使用嵌套循环：外层控制行数，内层先打印空格，再打印数字。空格数量 = n - i。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        // 打印空格
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // 打印数字
        for (int j = 1; j <= i; j++) {
            cout << i;
        }
        cout << endl;
    }
    
    return 0;
}
```
</details>

---

## L2-13 🔴 分解质因数

### 题目描述
输入一个正整数 n，将其分解为质因数的乘积形式输出。

### 输入格式
一个正整数 n（n ≤ 100000）。

### 输出格式
质因数分解式，如 `12=2*2*3`。

### 样例
```
输入：12

输出：12=2*2*3
```

<details>
<summary>💡 提示</summary>

从 2 开始试除，能整除就记录，直到 n 变为 1。注意输出格式，第一个因数前面不加*。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    cout << n << "=";
    
    int first = true;
    for (int i = 2; i <= n; i++) {
        while (n % i == 0) {
            if (!first) cout << "*";
            cout << i;
            first = false;
            n /= i;
        }
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

# 📦 L3 级别：数组基础

> **适合人群**：已完成L2 | **前置知识**：循环

## L3-1 🟢 数组输入输出

### 题目描述
输入 n 个整数，存到数组中，然后原样输出。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数

### 输出格式
一行，n 个整数，用空格隔开。

### 样例
```
输入：5
      1 2 3 4 5

输出：1 2 3 4 5
```

<details>
<summary>💡 提示</summary>

先读入 n，然后定义大小为 n 的数组（或用固定大小100），用循环读入和输出。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];  // 固定大小
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L3-2 🟢 数组求和

### 题目描述
输入 n 个整数，计算它们的总和。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数

### 输出格式
一个整数，表示总和。

### 样例
```
输入：5
      10 20 30 40 50

输出：150
```

<details>
<summary>💡 提示</summary>

定义变量 sum 初始化为 0，循环累加数组元素。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    cout << sum << endl;
    return 0;
}
```
</details>

---

## L3-3 🟢 查找最大值

### 题目描述
输入 n 个整数，找出其中的最大值。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数

### 输出格式
一个整数，表示最大值。

### 样例
```
输入：5
      3 7 2 9 1

输出：9
```

<details>
<summary>💡 提示</summary>

先假设第一个元素是最大值，然后遍历数组，遇到更大的就更新。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int maxVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    
    cout << maxVal << endl;
    return 0;
}
```
</details>

---

## L3-4 🟡 成绩统计

### 题目描述
输入 n 个成绩，统计及格人数（≥60分）和不及格人数。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数，表示成绩

### 输出格式
两行：
- 第一行：`Pass: X`（及格人数）
- 第二行：`Fail: Y`（不及格人数）

### 样例
```
输入：5
      85 45 90 55 78

输出：Pass: 3
      Fail: 2
```

<details>
<summary>💡 提示</summary>

定义两个计数器 passCount 和 failCount，遍历数组时根据成绩判断并累加。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int scores[100];
    for (int i = 0; i < n; i++) {
        cin >> scores[i];
    }
    
    int passCount = 0, failCount = 0;
    for (int i = 0; i < n; i++) {
        if (scores[i] >= 60) {
            passCount++;
        } else {
            failCount++;
        }
    }
    
    cout << "Pass: " << passCount << endl;
    cout << "Fail: " << failCount << endl;
    
    return 0;
}
```
</details>

---

## L3-5 🟡 数组逆序

### 题目描述
输入 n 个整数，将其逆序输出。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数

### 输出格式
一行，n 个整数，逆序排列，用空格隔开。

### 样例
```
输入：5
      1 2 3 4 5

输出：5 4 3 2 1
```

<details>
<summary>💡 提示</summary>

从数组最后一个元素开始遍历到第一个元素，或者先交换再输出。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    for (int i = n - 1; i >= 0; i--) {
        cout << arr[i];
        if (i > 0) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L3-6 🟡 查找元素位置

### 题目描述
输入 n 个整数和一个目标值 target，查找 target 在数组中的位置（下标）。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数
第三行：整数 target

### 输出格式
如果找到，输出其下标（从0开始）；如果没找到，输出 `-1`。

### 样例
```
输入：5
      10 20 30 40 50
      30

输出：2
```

<details>
<summary>💡 提示</summary>

使用线性查找，遍历数组，找到就输出下标并结束，遍历完没找到输出 -1。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int target;
    cin >> target;
    
    int index = -1;
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            index = i;
            break;
        }
    }
    
    cout << index << endl;
    return 0;
}
```
</details>

---

## L3-7 🟡 去重计数

### 题目描述
输入 n 个整数，统计其中不同数值的个数。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数

### 输出格式
一个整数，表示不同数值的个数。

### 样例
```
输入：6
      1 2 2 3 3 3

输出：3
```

<details>
<summary>💡 提示</summary>

可以使用双重循环判断，或者用标记数组（如果数值范围不大）。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int count = 0;
    for (int i = 0; i < n; i++) {
        bool isNew = true;
        for (int j = 0; j < i; j++) {
            if (arr[j] == arr[i]) {
                isNew = false;
                break;
            }
        }
        if (isNew) count++;
    }
    
    cout << count << endl;
    return 0;
}
```
</details>

---

## L3-8 🟡 数组左移

### 题目描述
输入 n 个整数和一个数 k，将数组向左循环移动 k 位后输出。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数
第三行：整数 k

### 输出格式
一行，移动后的数组。

### 样例
```
输入：5
      1 2 3 4 5
      2

输出：3 4 5 1 2
```

<details>
<summary>💡 提示</summary>

原数组第 k 个位置开始的元素先输出，然后输出前 k 个元素。注意 k 可能大于 n，需要取模。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int k;
    cin >> k;
    k = k % n;  // 处理 k > n 的情况
    
    // 从位置 k 开始输出
    for (int i = k; i < n; i++) {
        cout << arr[i] << " ";
    }
    // 输出前 k 个
    for (int i = 0; i < k; i++) {
        cout << arr[i];
        if (i < k - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L3-9 🔴 第二大的数

### 题目描述
输入 n 个互不相同的整数，找出第二大的数。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个互不相同的整数

### 输出格式
一个整数，表示第二大的数。

### 样例
```
输入：5
      10 50 30 20 40

输出：40
```

<details>
<summary>💡 提示</summary>

维护两个变量 max1 和 max2，遍历数组时更新。注意初始值的设置。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int max1 = arr[0], max2 = arr[1];
    if (max2 > max1) swap(max1, max2);
    
    for (int i = 2; i < n; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    
    cout << max2 << endl;
    return 0;
}
```
</details>

---

## L3-10 🔴 最长连续递增子序列

### 题目描述
输入 n 个整数，找出最长连续递增子序列的长度。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数

### 输出格式
一个整数，表示最长连续递增子序列的长度。

### 样例
```
输入：8
      1 2 3 1 2 3 4 5

输出：5
```

<details>
<summary>💡 提示</summary>

遍历数组，维护当前递增序列长度 currentLen 和最大长度 maxLen。当 a[i] > a[i-1] 时 currentLen++，否则重置为1。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    if (n == 0) {
        cout << 0 << endl;
        return 0;
    }
    
    int maxLen = 1, currentLen = 1;
    for (int i = 1; i < n; i++) {
        if (arr[i] > arr[i-1]) {
            currentLen++;
            maxLen = max(maxLen, currentLen);
        } else {
            currentLen = 1;
        }
    }
    
    cout << maxLen << endl;
    return 0;
}
```
</details>

---

## L3-11 🔴 两数之和

### 题目描述
输入 n 个整数和一个目标值 target，判断数组中是否存在两个数之和等于 target。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数
第三行：整数 target

### 输出格式
如果存在输出 `yes`，否则输出 `no`。

### 样例
```
输入：5
      2 7 11 15 3
      9

输出：yes
```

<details>
<summary>💡 提示</summary>

使用双重循环，检查所有数对（i, j）是否满足 arr[i] + arr[j] == target。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int target;
    cin >> target;
    
    bool found = false;
    for (int i = 0; i < n && !found; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                found = true;
                break;
            }
        }
    }
    
    cout << (found ? "yes" : "no") << endl;
    return 0;
}
```
</details>

---

## L3-12 🔴 插入排序

### 题目描述
输入 n 个整数，使用插入排序将它们按升序排列后输出。

### 输入格式
第一行：整数 n（n ≤ 100）
第二行：n 个整数

### 输出格式
一行，排序后的数组。

### 样例
```
输入：5
      5 2 4 6 1

输出：1 2 4 5 6
```

<details>
<summary>💡 提示</summary>

插入排序：将数组分为已排序和未排序两部分，每次从未排序部分取一个元素，插入到已排序部分的正确位置。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    // 插入排序
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

# 🔧 L4 级别：字符串与函数

> **适合人群**：已完成L3 | **前置知识**：数组

## L4-1 🟢 字符串长度

### 题目描述
输入一个字符串，输出其长度。

### 输入格式
一个字符串（不含空格，长度 ≤ 100）。

### 输出格式
一个整数，表示字符串长度。

### 样例
```
输入：Hello

输出：5
```

<details>
<summary>💡 提示</summary>

使用 `string` 类型的 `length()` 或 `size()` 方法获取长度。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    cout << s.length() << endl;
    return 0;
}
```
</details>

---

## L4-2 🟢 字符串反转

### 题目描述
输入一个字符串，将其反转后输出。

### 输入格式
一个字符串（不含空格，长度 ≤ 100）。

### 输出格式
反转后的字符串。

### 样例
```
输入：abcde

输出：edcba
```

<details>
<summary>💡 提示</summary>

可以使用双指针法交换字符，或者从后向前遍历输出。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    int n = s.length();
    for (int i = 0; i < n / 2; i++) {
        swap(s[i], s[n - 1 - i]);
    }
    
    cout << s << endl;
    return 0;
}
```
</details>

---

## L4-3 🟢 统计元音字母

### 题目描述
输入一个字符串（只包含小写字母），统计其中元音字母（a, e, i, o, u）的个数。

### 输入格式
一个字符串（长度 ≤ 100）。

### 输出格式
一个整数，表示元音字母个数。

### 样例
```
输入：hello

输出：2
```

<details>
<summary>💡 提示</summary>

遍历字符串，用 if 语句判断每个字符是否为元音字母。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    int count = 0;
    for (char c : s) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    
    cout << count << endl;
    return 0;
}
```
</details>

---

## L4-4 🟡 判断回文

### 题目描述
输入一个字符串，判断它是否为回文串（正读反读相同）。

### 输入格式
一个字符串（不含空格，长度 ≤ 100）。

### 输出格式
如果是回文输出 `yes`，否则输出 `no`。

### 样例
```
输入：level

输出：yes
```

<details>
<summary>💡 提示</summary>

使用双指针法，一个从头向后，一个从尾向前，逐个比较字符。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    bool isPalindrome = true;
    int n = s.length();
    for (int i = 0; i < n / 2; i++) {
        if (s[i] != s[n - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    
    cout << (isPalindrome ? "yes" : "no") << endl;
    return 0;
}
```
</details>

---

## L4-5 🟡 字符串连接

### 题目描述
输入两个字符串，将它们连接后输出。

### 输入格式
两行，每行一个字符串。

### 输出格式
连接后的字符串。

### 样例
```
输入：Hello
      World

输出：HelloWorld
```

<details>
<summary>💡 提示</summary>

可以使用 `+` 运算符连接字符串，或者使用 `append()` 方法。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    cout << s1 + s2 << endl;
    return 0;
}
```
</details>

---

## L4-6 🟡 字符转换

### 题目描述
输入一个字符串（只包含字母），将所有小写字母转为大写，大写字母转为小写，然后输出。

### 输入格式
一个字符串（长度 ≤ 100）。

### 输出格式
转换后的字符串。

### 样例
```
输入：HelloWorld

输出：hELLOwORLD
```

<details>
<summary>💡 提示</summary>

使用 ASCII 码转换：小写转大写减32，大写转小写加32。或者用 `toupper()`/`tolower()` 函数。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    for (char &c : s) {
        if (islower(c)) {
            c = toupper(c);
        } else if (isupper(c)) {
            c = tolower(c);
        }
    }
    
    cout << s << endl;
    return 0;
}
```
</details>

---

## L4-7 🟡 求和函数

### 题目描述
编写一个函数 `int sum(int a, int b)`，返回两个整数的和。

在主函数中输入两个整数，调用该函数并输出结果。

### 输入格式
一行，两个整数 a 和 b。

### 输出格式
一个整数，表示 a + b。

### 样例
```
输入：3 5

输出：8
```

<details>
<summary>💡 提示</summary>

函数定义格式：`返回类型 函数名(参数列表) { 函数体 }`
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int sum(int a, int b) {
    return a + b;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << sum(a, b) << endl;
    return 0;
}
```
</details>

---

## L4-8 🟡 最大值函数

### 题目描述
编写一个函数 `int max(int a, int b)`，返回两个整数中的较大值。

在主函数中输入两个整数，调用该函数并输出结果。

### 输入格式
一行，两个整数 a 和 b。

### 输出格式
一个整数，表示 max(a, b)。

### 样例
```
输入：7 3

输出：7
```

<details>
<summary>💡 提示</summary>

使用 if-else 语句比较两个数的大小，返回较大的那个。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << max(a, b) << endl;
    return 0;
}
```
</details>

---

## L4-9 🔴 数字字符串求和

### 题目描述
输入一个由数字字符组成的字符串，计算其中所有数字之和。

### 输入格式
一个数字字符串（长度 ≤ 100）。

### 输出格式
一个整数，表示数字之和。

### 样例
```
输入：12345

输出：15
```

<details>
<summary>💡 提示</summary>

将字符转换为数字：字符 '0' 的 ASCII 码是 48，所以数字 = 字符 - '0'。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    int sum = 0;
    for (char c : s) {
        sum += (c - '0');
    }
    
    cout << sum << endl;
    return 0;
}
```
</details>

---

## L4-10 🔴 子串判断

### 题目描述
输入两个字符串 s1 和 s2，判断 s2 是否为 s1 的子串。

### 输入格式
两行，每行一个字符串。

### 输出格式
如果 s2 是 s1 的子串输出 `yes`，否则输出 `no`。

### 样例
```
输入：hello
      ell

输出：yes
```

<details>
<summary>💡 提示</summary>

使用 `string` 的 `find()` 方法，或者手动遍历比较。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    
    if (s1.find(s2) != string::npos) {
        cout << "yes" << endl;
    } else {
        cout << "no" << endl;
    }
    
    return 0;
}
```
</details>

---

## L4-11 🔴 递归求阶乘

### 题目描述
编写递归函数 `int factorial(int n)`，计算 n 的阶乘。

### 输入格式
一个正整数 n（n ≤ 10）。

### 输出格式
一个整数，表示 n!。

### 样例
```
输入：5

输出：120
```

<details>
<summary>💡 提示</summary>

递归终止条件：n <= 1 时返回 1。递归公式：n! = n * (n-1)!
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}
```
</details>

---

## L4-12 🔴 字符串压缩

### 题目描述
输入一个字符串，将其压缩为连续字符及其出现次数的形式。

### 输入格式
一个字符串（长度 ≤ 100）。

### 输出格式
压缩后的字符串。

### 样例
```
输入：aaabbbccc

输出：a3b3c3
```

<details>
<summary>💡 提示</summary>

遍历字符串，统计连续相同字符的个数，然后输出字符和数字。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    if (s.empty()) {
        cout << endl;
        return 0;
    }
    
    char current = s[0];
    int count = 1;
    
    for (int i = 1; i <= s.length(); i++) {
        if (i < s.length() && s[i] == current) {
            count++;
        } else {
            cout << current << count;
            if (i < s.length()) {
                current = s[i];
                count = 1;
            }
        }
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

# 🎯 L5 级别：指针、结构体与基础算法

> **适合人群**：已完成L4 | **前置知识**：函数、数组

## L5-1 🟢 结构体定义

### 题目描述
定义一个学生结构体 `Student`，包含姓名（string）、年龄（int）、成绩（int）三个成员。

输入一个学生的信息，然后输出该学生的信息。

### 输入格式
一行，姓名（无空格）、年龄、成绩，用空格隔开。

### 输出格式
三行，分别输出姓名、年龄、成绩。

### 样例
```
输入：Tom 15 85

输出：Name: Tom
      Age: 15
      Score: 85
```

<details>
<summary>💡 提示</summary>

使用 `struct` 关键字定义结构体，结构体变量使用点号 `.` 访问成员。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int age;
    int score;
};

int main() {
    Student s;
    cin >> s.name >> s.age >> s.score;
    
    cout << "Name: " << s.name << endl;
    cout << "Age: " << s.age << endl;
    cout << "Score: " << s.score << endl;
    
    return 0;
}
```
</details>

---

## L5-2 🟢 结构体数组

### 题目描述
输入 n 个学生的信息（姓名、年龄、成绩），然后输出所有学生的信息。

### 输入格式
第一行：整数 n
接下来 n 行，每行包含姓名、年龄、成绩

### 输出格式
n 行，每行输出一个学生的信息，格式：`Name: X, Age: Y, Score: Z`

### 样例
```
输入：2
      Tom 15 85
      Jerry 14 92

输出：Name: Tom, Age: 15, Score: 85
      Name: Jerry, Age: 14, Score: 92
```

<details>
<summary>💡 提示</summary>

定义结构体数组，使用循环输入和输出。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int age;
    int score;
};

int main() {
    int n;
    cin >> n;
    
    Student students[100];
    for (int i = 0; i < n; i++) {
        cin >> students[i].name >> students[i].age >> students[i].score;
    }
    
    for (int i = 0; i < n; i++) {
        cout << "Name: " << students[i].name;
        cout << ", Age: " << students[i].age;
        cout << ", Score: " << students[i].score << endl;
    }
    
    return 0;
}
```
</details>

---

## L5-3 🟢 指针基础

### 题目描述
输入两个整数，使用指针交换它们的值，然后输出。

### 输入格式
一行，两个整数 a 和 b。

### 输出格式
一行，交换后的两个整数。

### 样例
```
输入：5 10

输出：10 5
```

<details>
<summary>💡 提示</summary>

使用指针参数传递，通过解引用 `*p` 访问指针指向的值。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int a, b;
    cin >> a >> b;
    
    swap(&a, &b);
    
    cout << a << " " << b << endl;
    return 0;
}
```
</details>

---

## L5-4 🟡 成绩排序

### 题目描述
输入 n 个学生的信息，按成绩从高到低排序后输出。

### 输入格式
第一行：整数 n
接下来 n 行，每行包含姓名、年龄、成绩

### 输出格式
n 行，按成绩降序排列的学生信息。

### 样例
```
输入：3
      Tom 15 85
      Jerry 14 92
      Bob 16 78

输出：Jerry 14 92
      Tom 15 85
      Bob 16 78
```

<details>
<summary>💡 提示</summary>

使用冒泡排序或选择排序对结构体数组排序，比较的是 score 成员。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int age;
    int score;
};

int main() {
    int n;
    cin >> n;
    
    Student students[100];
    for (int i = 0; i < n; i++) {
        cin >> students[i].name >> students[i].age >> students[i].score;
    }
    
    // 冒泡排序（降序）
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (students[j].score < students[j + 1].score) {
                swap(students[j], students[j + 1]);
            }
        }
    }
    
    for (int i = 0; i < n; i++) {
        cout << students[i].name << " " << students[i].age << " " << students[i].score << endl;
    }
    
    return 0;
}
```
</details>

---

## L5-5 🟡 动态内存分配

### 题目描述
输入 n 个整数，使用动态数组存储，计算并输出它们的和。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一个整数，表示总和。

### 样例
```
输入：5
      1 2 3 4 5

输出：15
```

<details>
<summary>💡 提示</summary>

使用 `new` 分配动态内存，使用完后用 `delete[]` 释放。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int *arr = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    cout << sum << endl;
    
    delete[] arr;
    return 0;
}
```
</details>

---

## L5-6 🟡 链表节点

### 题目描述
创建一个简单的链表节点结构体，包含数据和指向下一个节点的指针。创建3个节点并连接起来，然后遍历输出。

### 输入格式
三个整数，表示三个节点的数据。

### 输出格式
三个整数，按链表顺序输出。

### 样例
```
输入：10 20 30

输出：10 20 30
```

<details>
<summary>💡 提示</summary>

结构体包含 `int data` 和 `Node* next` 成员。使用 `new` 创建节点，通过 `->` 访问成员。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    
    Node* n1 = new Node{a, nullptr};
    Node* n2 = new Node{b, nullptr};
    Node* n3 = new Node{c, nullptr};
    
    n1->next = n2;
    n2->next = n3;
    
    Node* current = n1;
    while (current != nullptr) {
        cout << current->data;
        if (current->next != nullptr) cout << " ";
        current = current->next;
    }
    cout << endl;
    
    delete n1;
    delete n2;
    delete n3;
    
    return 0;
}
```
</details>

---

## L5-7 🟡 二分查找

### 题目描述
输入 n 个已经按升序排列的整数，和一个目标值 target，使用二分查找判断 target 是否在数组中。

### 输入格式
第一行：整数 n
第二行：n 个升序排列的整数
第三行：整数 target

### 输出格式
如果找到输出 `found`，否则输出 `not found`。

### 样例
```
输入：5
      1 3 5 7 9
      5

输出：found
```

<details>
<summary>💡 提示</summary>

二分查找：每次比较中间元素，如果小于目标值则在右半部分查找，否则在左半部分查找。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int target;
    cin >> target;
    
    int left = 0, right = n - 1;
    bool found = false;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            found = true;
            break;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    cout << (found ? "found" : "not found") << endl;
    return 0;
}
```
</details>

---

## L5-8 🟡 前缀和

### 题目描述
输入 n 个整数，计算前缀和数组。前缀和数组的第 i 个元素表示原数组前 i 个元素的和。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一行，n 个整数，表示前缀和数组。

### 样例
```
输入：5
      1 2 3 4 5

输出：1 3 6 10 15
```

<details>
<summary>💡 提示</summary>

prefix[i] = prefix[i-1] + arr[i]，注意 prefix[0] = arr[0]。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int prefix[100];
    prefix[0] = arr[0];
    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    
    for (int i = 0; i < n; i++) {
        cout << prefix[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L5-9 🔴 双指针求和

### 题目描述
输入 n 个已排序的整数和一个目标值 target，判断是否存在两个数之和等于 target。要求使用双指针法，时间复杂度 O(n)。

### 输入格式
第一行：整数 n
第二行：n 个升序排列的整数
第三行：整数 target

### 输出格式
如果存在输出 `yes`，否则输出 `no`。

### 样例
```
输入：5
      1 2 3 5 7
      8

输出：yes
```

<details>
<summary>💡 提示</summary>

双指针：一个指向开头，一个指向结尾。如果 sum < target，左指针右移；如果 sum > target，右指针左移。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int target;
    cin >> target;
    
    int left = 0, right = n - 1;
    bool found = false;
    
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) {
            found = true;
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    cout << (found ? "yes" : "no") << endl;
    return 0;
}
```
</details>

---

## L5-10 🔴 滑动窗口最大值

### 题目描述
输入 n 个整数和一个窗口大小 k，求每个滑动窗口中的最大值。

### 输入格式
第一行：整数 n 和 k
第二行：n 个整数

### 输出格式
一行，每个窗口的最大值。

### 样例
```
输入：8 3
      1 3 -1 -3 5 3 6 7

输出：3 3 5 5 6 7
```

<details>
<summary>💡 提示</summary>

窗口从 0 到 k-1 开始，每次向右移动一位，共 n-k+1 个窗口。每个窗口内找最大值。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    for (int i = 0; i <= n - k; i++) {
        int maxVal = arr[i];
        for (int j = i; j < i + k; j++) {
            maxVal = max(maxVal, arr[j]);
        }
        cout << maxVal;
        if (i < n - k) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L5-11 🔴 差分数组

### 题目描述
输入 n 个整数和 m 个区间操作，每个操作将区间内所有元素加上一个值。输出最终的数组。

### 输入格式
第一行：n 和 m
第二行：n 个整数（初始数组）
接下来 m 行，每行三个整数 l, r, v，表示将 [l, r] 区间内的每个元素加上 v

### 输出格式
一行，n 个整数，表示操作后的数组。

### 样例
```
输入：5 2
      1 2 3 4 5
      1 3 2
      2 4 1

输出：3 5 6 5 5
```

<details>
<summary>💡 提示</summary>

差分数组：diff[l] += v，diff[r+1] -= v，最后求前缀和还原原数组。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int diff[101] = {0};  // 差分数组
    
    for (int i = 0; i < m; i++) {
        int l, r, v;
        cin >> l >> r >> v;
        l--; r--;  // 转为0-based
        diff[l] += v;
        if (r + 1 < n) diff[r + 1] -= v;
    }
    
    // 还原数组
    int cur = 0;
    for (int i = 0; i < n; i++) {
        cur += diff[i];
        arr[i] += cur;
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L5-12 🔴 单调栈

### 题目描述
输入 n 个整数，对于每个元素，找出左边第一个比它小的元素。如果不存在输出 -1。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一行，n 个整数，表示每个元素左边第一个比它小的元素。

### 样例
```
输入：5
      3 2 5 1 4

输出：-1 -1 2 -1 1
```

<details>
<summary>💡 提示</summary>

使用单调递增栈。对于每个元素，弹出栈顶大于等于它的元素，栈顶就是答案，然后将当前元素入栈。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    stack<int> st;
    for (int i = 0; i < n; i++) {
        while (!st.empty() && st.top() >= arr[i]) {
            st.pop();
        }
        if (st.empty()) {
            cout << -1;
        } else {
            cout << st.top();
        }
        if (i < n - 1) cout << " ";
        st.push(arr[i]);
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

# 📊 L6 级别：排序、搜索与递归

> **适合人群**：已完成L5 | **前置知识**：结构体、指针

## L6-1 🟢 选择排序

### 题目描述
输入 n 个整数，使用选择排序将它们按升序排列。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一行，排序后的数组。

### 样例
```
输入：5
      5 3 8 1 2

输出：1 2 3 5 8
```

<details>
<summary>💡 提示</summary>

选择排序：每次从未排序部分找出最小值，与未排序部分的第一个元素交换。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr[i], arr[minIdx]);
    }
    
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L6-2 🟢 冒泡排序

### 题目描述
输入 n 个整数，使用冒泡排序将它们按升序排列。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一行，排序后的数组。

### 样例
```
输入：5
      5 1 4 2 8

输出：1 2 4 5 8
```

<details>
<summary>💡 提示</summary>

冒泡排序：每次比较相邻元素，如果逆序就交换，每一轮将最大的元素"冒泡"到末尾。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
    
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L6-3 🟢 快速排序

### 题目描述
输入 n 个整数，使用快速排序将它们按升序排列。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一行，排序后的数组。

### 样例
```
输入：5
      5 2 9 1 7

输出：1 2 5 7 9
```

<details>
<summary>💡 提示</summary>

快速排序：选择一个基准元素，将小于基准的放左边，大于基准的放右边，然后递归排序左右两部分。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

void quickSort(int arr[], int left, int right) {
    if (left >= right) return;
    
    int pivot = arr[left];
    int i = left, j = right;
    
    while (i < j) {
        while (i < j && arr[j] >= pivot) j--;
        while (i < j && arr[i] <= pivot) i++;
        if (i < j) swap(arr[i], arr[j]);
    }
    
    arr[left] = arr[i];
    arr[i] = pivot;
    
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
}

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    quickSort(arr, 0, n - 1);
    
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L6-4 🟡 归并排序

### 题目描述
输入 n 个整数，使用归并排序将它们按升序排列。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一行，排序后的数组。

### 样例
```
输入：5
      5 2 8 1 9

输出：1 2 5 8 9
```

<details>
<summary>💡 提示</summary>

归并排序：将数组分成两半，分别排序，然后合并两个有序数组。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

void merge(int arr[], int left, int mid, int right) {
    int temp[100];
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    for (i = 0; i < k; i++) {
        arr[left + i] = temp[i];
    }
}

void mergeSort(int arr[], int left, int right) {
    if (left >= right) return;
    
    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

int main() {
    int n;
    cin >> n;
    
    int arr[100];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    mergeSort(arr, 0, n - 1);
    
    for (int i = 0; i < n; i++) {
        cout << arr[i];
        if (i < n - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L6-5 🟡 递归求幂

### 题目描述
编写递归函数计算 a 的 n 次幂（快速幂）。

### 输入格式
一行，两个整数 a 和 n（n ≥ 0）。

### 输出格式
一个整数，表示 a^n。

### 样例
```
输入：2 10

输出：1024
```

<details>
<summary>💡 提示</summary>

快速幂：a^n = (a^(n/2))^2（n为偶数），a^n = a * a^(n-1)（n为奇数）。时间复杂度 O(log n)。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

long long power(long long a, int n) {
    if (n == 0) return 1;
    if (n == 1) return a;
    
    long long half = power(a, n / 2);
    if (n % 2 == 0) {
        return half * half;
    } else {
        return half * half * a;
    }
}

int main() {
    long long a;
    int n;
    cin >> a >> n;
    cout << power(a, n) << endl;
    return 0;
}
```
</details>

---

## L6-6 🟡 全排列

### 题目描述
输入 n 个不同的整数，输出它们的所有排列。

### 输入格式
第一行：整数 n
第二行：n 个不同的整数

### 输出格式
所有排列，每行一个，元素用空格隔开。

### 样例
```
输入：3
      1 2 3

输出：1 2 3
      1 3 2
      2 1 3
      2 3 1
      3 1 2
      3 2 1
```

<details>
<summary>💡 提示</summary>

使用回溯法：对于每个位置，尝试所有未使用的数字，然后递归处理下一个位置。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int n;
int arr[10];
int temp[10];
bool used[10];

void dfs(int depth) {
    if (depth == n) {
        for (int i = 0; i < n; i++) {
            cout << temp[i];
            if (i < n - 1) cout << " ";
        }
        cout << endl;
        return;
    }
    
    for (int i = 0; i < n; i++) {
        if (!used[i]) {
            used[i] = true;
            temp[depth] = arr[i];
            dfs(depth + 1);
            used[i] = false;
        }
    }
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    dfs(0);
    return 0;
}
```
</details>

---

## L6-7 🟡 N皇后问题

### 题目描述
输入一个整数 n，输出 n 皇后问题的所有解的数量。

**N皇后问题**：在 n×n 的棋盘上放置 n 个皇后，使得它们互不攻击（不在同一行、同一列、同一对角线）。

### 输入格式
一个整数 n（n ≤ 8）。

### 输出格式
一个整数，表示解的数量。

### 样例
```
输入：4

输出：2
```

<details>
<summary>💡 提示</summary>

使用回溯法：按行放置皇后，检查列和对角线是否冲突。用数组记录每行皇后所在的列。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int n;
int cols[10];
int count = 0;

bool isValid(int row, int col) {
    for (int i = 0; i < row; i++) {
        if (cols[i] == col) return false;
        if (abs(cols[i] - col) == abs(i - row)) return false;
    }
    return true;
}

void dfs(int row) {
    if (row == n) {
        count++;
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (isValid(row, col)) {
            cols[row] = col;
            dfs(row + 1);
        }
    }
}

int main() {
    cin >> n;
    dfs(0);
    cout << count << endl;
    return 0;
}
```
</details>

---

## L6-8 🟡 深度优先搜索（DFS）

### 题目描述
给定一个 n×m 的迷宫，`.` 表示通路，`#` 表示障碍。从左上角 (0,0) 出发，能否到达右下角 (n-1,m-1)？

### 输入格式
第一行：n 和 m
接下来 n 行，每行 m 个字符

### 输出格式
如果能到达输出 `yes`，否则输出 `no`。

### 样例
```
输入：3 3
      .#.
      .#.
      ...

输出：yes
```

<details>
<summary>💡 提示</summary>

使用 DFS：从起点开始，向四个方向探索，标记已访问的位置，避免重复访问。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int n, m;
char maze[10][10];
bool visited[10][10];
int dx[] = {0, 0, 1, -1};
int dy[] = {1, -1, 0, 0};

bool dfs(int x, int y) {
    if (x == n - 1 && y == m - 1) return true;
    
    visited[x][y] = true;
    
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        
        if (nx >= 0 && nx < n && ny >= 0 && ny < m 
            && !visited[nx][ny] && maze[nx][ny] == '.') {
            if (dfs(nx, ny)) return true;
        }
    }
    
    return false;
}

int main() {
    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> maze[i][j];
        }
    }
    
    cout << (dfs(0, 0) ? "yes" : "no") << endl;
    return 0;
}
```
</details>

---

## L6-9 🔴 广度优先搜索（BFS）

### 题目描述
给定一个 n×m 的迷宫，`.` 表示通路，`#` 表示障碍。从左上角 (0,0) 出发，求到达右下角 (n-1,m-1) 的最短步数。

### 输入格式
第一行：n 和 m
接下来 n 行，每行 m 个字符

### 输出格式
一个整数，表示最短步数。如果无法到达输出 -1。

### 样例
```
输入：3 3
      ...
      .#.
      ...

输出：4
```

<details>
<summary>💡 提示</summary>

使用 BFS：从起点开始，按层次扩展，第一次到达终点时即为最短路径。使用队列存储状态。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <queue>
using namespace std;

int n, m;
char maze[10][10];
int dist[10][10];
int dx[] = {0, 0, 1, -1};
int dy[] = {1, -1, 0, 0};

int bfs() {
    queue<pair<int, int>> q;
    q.push({0, 0});
    dist[0][0] = 0;
    
    while (!q.empty()) {
        auto [x, y] = q.front();
        q.pop();
        
        if (x == n - 1 && y == m - 1) {
            return dist[x][y];
        }
        
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m 
                && dist[nx][ny] == -1 && maze[nx][ny] == '.') {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx, ny});
            }
        }
    }
    
    return -1;
}

int main() {
    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> maze[i][j];
            dist[i][j] = -1;
        }
    }
    
    cout << bfs() << endl;
    return 0;
}
```
</details>

---

## L6-10 🔴 子集和问题

### 题目描述
给定 n 个正整数和一个目标值 target，判断是否存在一个子集，使得子集元素之和等于 target。

### 输入格式
第一行：n 和 target
第二行：n 个正整数

### 输出格式
如果存在输出 `yes`，否则输出 `no`。

### 样例
```
输入：5 9
      3 34 4 12 5

输出：yes
```

<details>
<summary>💡 提示</summary>

使用回溯法：对于每个元素，有两种选择：选或不选。递归处理所有可能的组合。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int n, target;
int arr[20];
bool found = false;

void dfs(int index, int currentSum) {
    if (currentSum == target) {
        found = true;
        return;
    }
    if (index >= n || currentSum > target) {
        return;
    }
    
    // 选择当前元素
    dfs(index + 1, currentSum + arr[index]);
    // 不选当前元素
    dfs(index + 1, currentSum);
}

int main() {
    cin >> n >> target;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    dfs(0, 0);
    cout << (found ? "yes" : "no") << endl;
    return 0;
}
```
</details>

---

## L6-11 🔴 记忆化搜索

### 题目描述
使用记忆化搜索计算斐波那契数列的第 n 项。

### 输入格式
一个整数 n（n ≤ 50）。

### 输出格式
一个整数，表示第 n 项。

### 样例
```
输入：40

输出：102334155
```

<details>
<summary>💡 提示</summary>

记忆化搜索：用数组记录已经计算过的值，避免重复计算。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

long long memo[60];

long long fib(int n) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fib(n - 1) + fib(n - 2);
}

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i <= n; i++) {
        memo[i] = -1;
    }
    memo[0] = 0;
    memo[1] = 1;
    
    cout << fib(n) << endl;
    return 0;
}
```
</details>

---

## L6-12 🔴 组合问题

### 题目描述
从 n 个元素中选取 k 个元素，输出所有组合。

### 输入格式
第一行：n 和 k
第二行：n 个不同的整数

### 输出格式
所有组合，每行一个，元素按升序排列。

### 样例
```
输入：4 2
      1 2 3 4

输出：1 2
      1 3
      1 4
      2 3
      2 4
      3 4
```

<details>
<summary>💡 提示</summary>

使用回溯法：每次选择一个元素，然后从剩余元素中继续选择，确保不重复且有序。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int n, k;
int arr[20];
int temp[20];

void dfs(int start, int depth) {
    if (depth == k) {
        for (int i = 0; i < k; i++) {
            cout << temp[i];
            if (i < k - 1) cout << " ";
        }
        cout << endl;
        return;
    }
    
    for (int i = start; i < n; i++) {
        temp[depth] = arr[i];
        dfs(i + 1, depth + 1);
    }
}

int main() {
    cin >> n >> k;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    sort(arr, arr + n);
    
    dfs(0, 0);
    return 0;
}
```
</details>

---

# 🌐 L7 级别：数据结构、图论基础

> **适合人群**：已完成L6 | **前置知识**：递归、搜索

## L7-1 🟢 栈的实现

### 题目描述
实现一个栈，支持 push、pop、top 操作。

### 输入格式
第一行：整数 n，表示操作数量
接下来 n 行，每行一个操作：
- `push x`：将 x 压入栈
- `pop`：弹出栈顶元素
- `top`：输出栈顶元素

### 输出格式
对于每个 `top` 操作，输出栈顶元素。

### 样例
```
输入：5
      push 1
      push 2
      top
      pop
      top

输出：2
      1
```

<details>
<summary>💡 提示</summary>

使用数组模拟栈，维护一个栈顶指针 top，初始值为 -1。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int stack[100];
int topIdx = -1;

void push(int x) {
    stack[++topIdx] = x;
}

void pop() {
    if (topIdx >= 0) topIdx--;
}

int top() {
    return stack[topIdx];
}

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        string cmd;
        cin >> cmd;
        
        if (cmd == "push") {
            int x;
            cin >> x;
            push(x);
        } else if (cmd == "pop") {
            pop();
        } else if (cmd == "top") {
            cout << top() << endl;
        }
    }
    
    return 0;
}
```
</details>

---

## L7-2 🟢 队列的实现

### 题目描述
实现一个队列，支持 push、pop、front 操作。

### 输入格式
第一行：整数 n，表示操作数量
接下来 n 行，每行一个操作：
- `push x`：将 x 入队
- `pop`：出队
- `front`：输出队首元素

### 输出格式
对于每个 `front` 操作，输出队首元素。

### 样例
```
输入：5
      push 1
      push 2
      front
      pop
      front

输出：1
      2
```

<details>
<summary>💡 提示</summary>

使用数组模拟队列，维护队首指针 front 和队尾指针 rear。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int queue[100];
int frontIdx = 0, rearIdx = -1;

void push(int x) {
    queue[++rearIdx] = x;
}

void pop() {
    if (frontIdx <= rearIdx) frontIdx++;
}

int front() {
    return queue[frontIdx];
}

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        string cmd;
        cin >> cmd;
        
        if (cmd == "push") {
            int x;
            cin >> x;
            push(x);
        } else if (cmd == "pop") {
            pop();
        } else if (cmd == "front") {
            cout << front() << endl;
        }
    }
    
    return 0;
}
```
</details>

---

## L7-3 🟢 并查集

### 题目描述
实现并查集，支持合并两个集合和查询两个元素是否在同一集合。

### 输入格式
第一行：n 和 m，表示元素个数和操作数
接下来 m 行，每行一个操作：
- `union x y`：合并 x 和 y 所在集合
- `find x y`：查询 x 和 y 是否在同一集合

### 输出格式
对于每个 `find` 操作，如果在同一集合输出 `yes`，否则输出 `no`。

### 样例
```
输入：5 4
      union 1 2
      union 2 3
      find 1 3
      find 1 4

输出：yes
      no
```

<details>
<summary>💡 提示</summary>

并查集：用 parent 数组记录每个元素的父节点，find 时进行路径压缩。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int parent[100];

int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]);
    }
    return parent[x];
}

void unionSet(int x, int y) {
    int px = find(x), py = find(y);
    if (px != py) {
        parent[px] = py;
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 1; i <= n; i++) {
        parent[i] = i;
    }
    
    for (int i = 0; i < m; i++) {
        string cmd;
        int x, y;
        cin >> cmd >> x >> y;
        
        if (cmd == "union") {
            unionSet(x, y);
        } else if (cmd == "find") {
            cout << (find(x) == find(y) ? "yes" : "no") << endl;
        }
    }
    
    return 0;
}
```
</details>

---

## L7-4 🟡 图的邻接矩阵表示

### 题目描述
输入一个无向图的顶点和边，用邻接矩阵表示，然后输出邻接矩阵。

### 输入格式
第一行：n 和 m，表示顶点数和边数
接下来 m 行，每行两个整数 u 和 v，表示 u 和 v 之间有一条边

### 输出格式
n 行 n 列的邻接矩阵。

### 样例
```
输入：4 4
      1 2
      1 3
      2 4
      3 4

输出：0 1 1 0
      1 0 0 1
      1 0 0 1
      0 1 1 0
```

<details>
<summary>💡 提示</summary>

使用二维数组 adj[n+1][n+1] 存储邻接矩阵，adj[u][v] = adj[v][u] = 1 表示有边。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int adj[50][50];

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u][v] = adj[v][u] = 1;
    }
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            cout << adj[i][j];
            if (j < n) cout << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```
</details>

---

## L7-5 🟡 图的深度优先遍历

### 题目描述
输入一个无向图，从顶点 1 开始进行深度优先遍历，输出遍历顺序。

### 输入格式
第一行：n 和 m，表示顶点数和边数
接下来 m 行，每行两个整数 u 和 v

### 输出格式
一行，深度优先遍历的顶点顺序。

### 样例
```
输入：4 4
      1 2
      1 3
      2 4
      3 4

输出：1 2 4 3
```

<details>
<summary>💡 提示</summary>

使用递归 DFS，从顶点 1 开始，访问所有未访问的邻接顶点。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> adj[50];
bool visited[50];
bool first = true;

void dfs(int u) {
    if (!first) cout << " ";
    cout << u;
    first = false;
    
    visited[u] = true;
    
    for (int v : adj[u]) {
        if (!visited[v]) {
            dfs(v);
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    
    dfs(1);
    cout << endl;
    
    return 0;
}
```
</details>

---

## L7-6 🟡 图的广度优先遍历

### 题目描述
输入一个无向图，从顶点 1 开始进行广度优先遍历，输出遍历顺序。

### 输入格式
第一行：n 和 m，表示顶点数和边数
接下来 m 行，每行两个整数 u 和 v

### 输出格式
一行，广度优先遍历的顶点顺序。

### 样例
```
输入：4 4
      1 2
      1 3
      2 4
      3 4

输出：1 2 3 4
```

<details>
<summary>💡 提示</summary>

使用队列实现 BFS，从顶点 1 开始，按层次访问所有邻接顶点。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> adj[50];
bool visited[50];

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    
    queue<int> q;
    q.push(1);
    visited[1] = true;
    
    bool first = true;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        
        if (!first) cout << " ";
        cout << u;
        first = false;
        
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
    cout << endl;
    
    return 0;
}
```
</details>

---

## L7-7 🟡 Dijkstra最短路径

### 题目描述
给定一个带权有向图，求从顶点 1 到顶点 n 的最短路径长度。

### 输入格式
第一行：n 和 m，表示顶点数和边数
接下来 m 行，每行三个整数 u、v、w，表示从 u 到 v 有一条权值为 w 的边

### 输出格式
一个整数，表示最短路径长度。如果无法到达输出 -1。

### 样例
```
输入：4 5
      1 2 4
      1 3 2
      2 3 1
      2 4 5
      3 4 3

输出：5
```

<details>
<summary>💡 提示</summary>

Dijkstra算法：使用优先队列或数组找到当前距离最小的未访问顶点，更新其邻接顶点的距离。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <vector>
#include <climits>
using namespace std;

struct Edge {
    int to, w;
};

vector<Edge> adj[100];
int dist[100];
bool visited[100];

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w});
    }
    
    for (int i = 1; i <= n; i++) {
        dist[i] = INT_MAX;
    }
    dist[1] = 0;
    
    for (int i = 0; i < n; i++) {
        int u = -1;
        for (int j = 1; j <= n; j++) {
            if (!visited[j] && (u == -1 || dist[j] < dist[u])) {
                u = j;
            }
        }
        
        if (dist[u] == INT_MAX) break;
        visited[u] = true;
        
        for (auto &e : adj[u]) {
            if (dist[u] + e.w < dist[e.to]) {
                dist[e.to] = dist[u] + e.w;
            }
        }
    }
    
    cout << (dist[n] == INT_MAX ? -1 : dist[n]) << endl;
    return 0;
}
```
</details>

---

## L7-8 🟡 最小生成树（Prim）

### 题目描述
给定一个带权无向图，求最小生成树的权值之和。

### 输入格式
第一行：n 和 m，表示顶点数和边数
接下来 m 行，每行三个整数 u、v、w，表示 u 和 v 之间有一条权值为 w 的边

### 输出格式
一个整数，表示最小生成树的权值之和。

### 样例
```
输入：4 5
      1 2 1
      1 3 4
      2 3 2
      2 4 5
      3 4 3

输出：6
```

<details>
<summary>💡 提示</summary>

Prim算法：从一个顶点开始，每次选择连接已选集合和未选集合的最小权值边。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <climits>
using namespace std;

int adj[50][50];
int dist[50];
bool visited[50];

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            adj[i][j] = (i == j) ? 0 : INT_MAX;
        }
    }
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u][v] = adj[v][u] = min(adj[u][v], w);
    }
    
    for (int i = 1; i <= n; i++) {
        dist[i] = INT_MAX;
    }
    dist[1] = 0;
    
    int total = 0;
    for (int i = 0; i < n; i++) {
        int u = -1;
        for (int j = 1; j <= n; j++) {
            if (!visited[j] && (u == -1 || dist[j] < dist[u])) {
                u = j;
            }
        }
        
        visited[u] = true;
        total += dist[u];
        
        for (int v = 1; v <= n; v++) {
            if (!visited[v] && adj[u][v] < dist[v]) {
                dist[v] = adj[u][v];
            }
        }
    }
    
    cout << total << endl;
    return 0;
}
```
</details>

---

## L7-9 🔴 树状数组

### 题目描述
实现树状数组，支持单点修改和区间查询。

### 输入格式
第一行：n 和 m，表示数组长度和操作数
第二行：n 个整数，表示初始数组
接下来 m 行，每行一个操作：
- `add i x`：将第 i 个元素增加 x
- `sum l r`：查询区间 [l, r] 的和

### 输出格式
对于每个 `sum` 操作，输出区间和。

### 样例
```
输入：5 3
      1 2 3 4 5
      sum 1 3
      add 2 5
      sum 1 3

输出：6
      11
```

<details>
<summary>💡 提示</summary>

树状数组：利用 lowbit 操作维护前缀和，支持 O(log n) 的修改和查询。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

int n, m;
int tree[100];
int arr[100];

int lowbit(int x) {
    return x & (-x);
}

void add(int i, int x) {
    while (i <= n) {
        tree[i] += x;
        i += lowbit(i);
    }
}

int query(int i) {
    int sum = 0;
    while (i > 0) {
        sum += tree[i];
        i -= lowbit(i);
    }
    return sum;
}

int rangeSum(int l, int r) {
    return query(r) - query(l - 1);
}

int main() {
    cin >> n >> m;
    
    for (int i = 1; i <= n; i++) {
        cin >> arr[i];
        add(i, arr[i]);
    }
    
    for (int i = 0; i < m; i++) {
        string cmd;
        cin >> cmd;
        
        if (cmd == "add") {
            int idx, x;
            cin >> idx >> x;
            add(idx, x);
        } else if (cmd == "sum") {
            int l, r;
            cin >> l >> r;
            cout << rangeSum(l, r) << endl;
        }
    }
    
    return 0;
}
```
</details>

---

## L7-10 🔴 线段树

### 题目描述
实现线段树，支持区间修改（加法）和区间查询。

### 输入格式
第一行：n 和 m，表示数组长度和操作数
第二行：n 个整数，表示初始数组
接下来 m 行，每行一个操作：
- `add l r x`：将区间 [l, r] 内每个元素增加 x
- `sum l r`：查询区间 [l, r] 的和

### 输出格式
对于每个 `sum` 操作，输出区间和。

### 样例
```
输入：5 3
      1 2 3 4 5
      sum 1 3
      add 2 4 5
      sum 1 5

输出：6
      25
```

<details>
<summary>💡 提示</summary>

线段树：每个节点代表一个区间，支持懒标记（lazy propagation）进行区间修改。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

long long tree[400];
long long lazy[400];
int arr[100];
int n, m;

void build(int node, int l, int r) {
    if (l == r) {
        tree[node] = arr[l];
        return;
    }
    int mid = (l + r) / 2;
    build(node * 2, l, mid);
    build(node * 2 + 1, mid + 1, r);
    tree[node] = tree[node * 2] + tree[node * 2 + 1];
}

void pushDown(int node, int l, int r) {
    if (lazy[node] != 0) {
        int mid = (l + r) / 2;
        tree[node * 2] += lazy[node] * (mid - l + 1);
        tree[node * 2 + 1] += lazy[node] * (r - mid);
        lazy[node * 2] += lazy[node];
        lazy[node * 2 + 1] += lazy[node];
        lazy[node] = 0;
    }
}

void update(int node, int l, int r, int ul, int ur, long long val) {
    if (ul <= l && r <= ur) {
        tree[node] += val * (r - l + 1);
        lazy[node] += val;
        return;
    }
    pushDown(node, l, r);
    int mid = (l + r) / 2;
    if (ul <= mid) update(node * 2, l, mid, ul, ur, val);
    if (ur > mid) update(node * 2 + 1, mid + 1, r, ul, ur, val);
    tree[node] = tree[node * 2] + tree[node * 2 + 1];
}

long long query(int node, int l, int r, int ql, int qr) {
    if (ql <= l && r <= qr) {
        return tree[node];
    }
    pushDown(node, l, r);
    int mid = (l + r) / 2;
    long long sum = 0;
    if (ql <= mid) sum += query(node * 2, l, mid, ql, qr);
    if (qr > mid) sum += query(node * 2 + 1, mid + 1, r, ql, qr);
    return sum;
}

int main() {
    cin >> n >> m;
    
    for (int i = 1; i <= n; i++) {
        cin >> arr[i];
    }
    
    build(1, 1, n);
    
    for (int i = 0; i < m; i++) {
        string cmd;
        cin >> cmd;
        
        if (cmd == "add") {
            int l, r;
            long long x;
            cin >> l >> r >> x;
            update(1, 1, n, l, r, x);
        } else if (cmd == "sum") {
            int l, r;
            cin >> l >> r;
            cout << query(1, 1, n, l, r) << endl;
        }
    }
    
    return 0;
}
```
</details>

---

## L7-11 🔴 拓扑排序

### 题目描述
给定一个有向无环图（DAG），输出其拓扑排序结果。

### 输入格式
第一行：n 和 m，表示顶点数和边数
接下来 m 行，每行两个整数 u 和 v，表示 u → v 的一条边

### 输出格式
一行，拓扑排序结果。如果无法排序输出 `impossible`。

### 样例
```
输入：4 4
      1 2
      1 3
      2 4
      3 4

输出：1 2 3 4
```

<details>
<summary>💡 提示</summary>

拓扑排序：使用 Kahn 算法，每次选择入度为 0 的顶点，删除其出边，重复直到所有顶点都被选择。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> adj[50];
int indegree[50];
int result[50];

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        indegree[v]++;
    }
    
    queue<int> q;
    for (int i = 1; i <= n; i++) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }
    
    int idx = 0;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        result[idx++] = u;
        
        for (int v : adj[u]) {
            indegree[v]--;
            if (indegree[v] == 0) {
                q.push(v);
            }
        }
    }
    
    if (idx != n) {
        cout << "impossible" << endl;
    } else {
        for (int i = 0; i < n; i++) {
            cout << result[i];
            if (i < n - 1) cout << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```
</details>

---

## L7-12 🔴 强连通分量

### 题目描述
给定一个有向图，求其强连通分量的数量。

### 输入格式
第一行：n 和 m，表示顶点数和边数
接下来 m 行，每行两个整数 u 和 v，表示 u → v 的一条边

### 输出格式
一个整数，表示强连通分量的数量。

### 样例
```
输入：5 5
      1 2
      2 3
      3 1
      3 4
      4 5

输出：3
```

<details>
<summary>💡 提示</summary>

使用 Kosaraju 算法：第一次 DFS 记录顶点完成时间，第二次在反向图上按完成时间逆序 DFS。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;

vector<int> adj[50];
vector<int> radj[50];
bool visited[50];
stack<int> st;

void dfs1(int u) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) dfs1(v);
    }
    st.push(u);
}

void dfs2(int u) {
    visited[u] = true;
    for (int v : radj[u]) {
        if (!visited[v]) dfs2(v);
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        radj[v].push_back(u);
    }
    
    for (int i = 1; i <= n; i++) {
        if (!visited[i]) dfs1(i);
    }
    
    fill(visited, visited + 50, false);
    
    int count = 0;
    while (!st.empty()) {
        int u = st.top();
        st.pop();
        if (!visited[u]) {
            dfs2(u);
            count++;
        }
    }
    
    cout << count << endl;
    return 0;
}
```
</details>

---

# ⚡ L8 级别：动态规划与高级算法

> **适合人群**：已完成L7 | **前置知识**：递归、搜索、基础数据结构

## L8-1 🟢 斐波那契数列（DP）

### 题目描述
使用动态规划计算斐波那契数列的第 n 项。

### 输入格式
一个整数 n（n ≤ 50）。

### 输出格式
一个整数，表示第 n 项。

### 样例
```
输入：10

输出：55
```

<details>
<summary>💡 提示</summary>

DP 状态：dp[i] 表示第 i 项。转移方程：dp[i] = dp[i-1] + dp[i-2]。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

long long dp[60];

int main() {
    int n;
    cin >> n;
    
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    cout << dp[n] << endl;
    return 0;
}
```
</details>

---

## L8-2 🟢 爬楼梯

### 题目描述
假设你正在爬楼梯，需要 n 阶才能到达楼顶。每次你可以爬 1 或 2 个台阶。问有多少种不同的方法可以爬到楼顶。

### 输入格式
一个整数 n（n ≤ 45）。

### 输出格式
一个整数，表示不同的方法数。

### 样例
```
输入：4

输出：5
```

<details>
<summary>💡 提示</summary>

DP 状态：dp[i] 表示到达第 i 阶的方法数。转移方程：dp[i] = dp[i-1] + dp[i-2]（最后一步跨1阶或2阶）。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int dp[50];

int main() {
    int n;
    cin >> n;
    
    dp[0] = 1;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    cout << dp[n] << endl;
    return 0;
}
```
</details>

---

## L8-3 🟢 最大子数组和

### 题目描述
输入 n 个整数，找出连续子数组的最大和。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一个整数，表示最大子数组和。

### 样例
```
输入：8
      -2 1 -3 4 -1 2 1 -5 4

输出：6
```

<details>
<summary>💡 提示</summary>

DP 状态：dp[i] 表示以第 i 个元素结尾的最大子数组和。转移方程：dp[i] = max(arr[i], dp[i-1] + arr[i])。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int arr[100];
int dp[100];

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    dp[0] = arr[0];
    int maxSum = arr[0];
    
    for (int i = 1; i < n; i++) {
        dp[i] = max(arr[i], dp[i - 1] + arr[i]);
        maxSum = max(maxSum, dp[i]);
    }
    
    cout << maxSum << endl;
    return 0;
}
```
</details>

---

## L8-4 🟡 0-1背包问题

### 题目描述
有 n 个物品，每个物品有重量 weight[i] 和价值 value[i]。背包容量为 W，求能装入的最大价值。

### 输入格式
第一行：n 和 W
接下来 n 行，每行两个整数 weight[i] 和 value[i]

### 输出格式
一个整数，表示最大价值。

### 样例
```
输入：4 8
      2 3
      3 4
      4 5
      5 6

输出：10
```

<details>
<summary>💡 提示</summary>

DP 状态：dp[i][j] 表示前 i 个物品，容量为 j 时的最大价值。转移：选或不选第 i 个物品。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int weight[100];
int value[100];
int dp[100][1000];

int main() {
    int n, W;
    cin >> n >> W;
    
    for (int i = 1; i <= n; i++) {
        cin >> weight[i] >> value[i];
    }
    
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= W; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= weight[i]) {
                dp[i][j] = max(dp[i][j], dp[i - 1][j - weight[i]] + value[i]);
            }
        }
    }
    
    cout << dp[n][W] << endl;
    return 0;
}
```
</details>

---

## L8-5 🟡 最长递增子序列（LIS）

### 题目描述
输入 n 个整数，求最长严格递增子序列的长度。

### 输入格式
第一行：整数 n
第二行：n 个整数

### 输出格式
一个整数，表示 LIS 长度。

### 样例
```
输入：8
      10 9 2 5 3 7 101 18

输出：4
```

<details>
<summary>💡 提示</summary>

DP 状态：dp[i] 表示以第 i 个元素结尾的 LIS 长度。转移：dp[i] = max(dp[j] + 1)，其中 j < i 且 arr[j] < arr[i]。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int arr[100];
int dp[100];

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    int maxLen = 1;
    for (int i = 0; i < n; i++) {
        dp[i] = 1;
        for (int j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        maxLen = max(maxLen, dp[i]);
    }
    
    cout << maxLen << endl;
    return 0;
}
```
</details>

---

## L8-6 🟡 最长公共子序列（LCS）

### 题目描述
输入两个字符串，求它们的最长公共子序列长度。

### 输入格式
两行，每行一个字符串

### 输出格式
一个整数，表示 LCS 长度。

### 样例
```
输入：ABCDE
      ACE

输出：3
```

<details>
<summary>💡 提示</summary>

DP 状态：dp[i][j] 表示 s1[0..i-1] 和 s2[0..j-1] 的 LCS 长度。转移：如果 s1[i-1] == s2[j-1]，dp[i][j] = dp[i-1][j-1] + 1，否则 dp[i][j] = max(dp[i-1][j], dp[i][j-1])。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

string s1, s2;
int dp[100][100];

int main() {
    cin >> s1 >> s2;
    
    int n = s1.length();
    int m = s2.length();
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    cout << dp[n][m] << endl;
    return 0;
}
```
</details>

---

## L8-7 🟡 编辑距离

### 题目描述
输入两个字符串，求将一个字符串转换为另一个字符串的最小操作次数（插入、删除、替换）。

### 输入格式
两行，每行一个字符串

### 输出格式
一个整数，表示编辑距离。

### 样例
```
输入：horse
      ros

输出：3
```

<details>
<summary>💡 提示</summary>

DP 状态：dp[i][j] 表示 s1[0..i-1] 转换为 s2[0..j-1] 的最小操作数。转移考虑插入、删除、替换三种操作。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <string>
using namespace std;

string s1, s2;
int dp[100][100];

int main() {
    cin >> s1 >> s2;
    
    int n = s1.length();
    int m = s2.length();
    
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]}) + 1;
            }
        }
    }
    
    cout << dp[n][m] << endl;
    return 0;
}
```
</details>

---

## L8-8 🟡 完全背包

### 题目描述
有 n 种物品，每种物品有无限个，重量为 weight[i]，价值为 value[i]。背包容量为 W，求能装入的最大价值。

### 输入格式
第一行：n 和 W
接下来 n 行，每行两个整数 weight[i] 和 value[i]

### 输出格式
一个整数，表示最大价值。

### 样例
```
输入：3 10
      2 5
      3 6
      5 9

输出：27
```

<details>
<summary>💡 提示</summary>

完全背包：每种物品可以选无限次。转移时正序遍历容量。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int weight[100];
int value[100];
int dp[1000];

int main() {
    int n, W;
    cin >> n >> W;
    
    for (int i = 0; i < n; i++) {
        cin >> weight[i] >> value[i];
    }
    
    for (int i = 0; i < n; i++) {
        for (int j = weight[i]; j <= W; j++) {
            dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    
    cout << dp[W] << endl;
    return 0;
}
```
</details>

---

## L8-9 🔴 区间DP（石子合并）

### 题目描述
有 n 堆石子排成一排，每堆石子有一定的数量。每次可以合并相邻的两堆石子，代价为两堆石子数量之和。求将所有石子合并成一堆的最小代价。

### 输入格式
第一行：整数 n
第二行：n 个整数，表示每堆石子的数量

### 输出格式
一个整数，表示最小合并代价。

### 样例
```
输入：4
      4 3 2 1

输出：20
```

<details>
<summary>💡 提示</summary>

区间DP：dp[i][j] 表示合并区间 [i, j] 的最小代价。转移：dp[i][j] = min(dp[i][k] + dp[k+1][j]) + sum[i][j]。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <climits>
using namespace std;

int stones[100];
int sum[100];
int dp[100][100];

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        cin >> stones[i];
        sum[i] = sum[i - 1] + stones[i];
    }
    
    for (int len = 2; len <= n; len++) {
        for (int i = 1; i + len - 1 <= n; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k + 1][j] + sum[j] - sum[i - 1]);
            }
        }
    }
    
    cout << dp[1][n] << endl;
    return 0;
}
```
</details>

---

## L8-10 🔴 数字三角形

### 题目描述
有一个数字三角形，从顶部出发，每次可以走到下一行相邻的数字上，求从顶部到底部的最大路径和。

### 输入格式
第一行：整数 n，表示三角形行数
接下来 n 行，第 i 行有 i 个整数

### 输出格式
一个整数，表示最大路径和。

### 样例
```
输入：4
      3
      7 4
      2 4 6
      8 5 9 3

输出：23
```

<details>
<summary>💡 提示</summary>

DP 状态：dp[i][j] 表示走到第 i 行第 j 列的最大路径和。转移：dp[i][j] = max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
using namespace std;

int triangle[100][100];
int dp[100][100];

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            cin >> triangle[i][j];
        }
    }
    
    dp[0][0] = triangle[0][0];
    
    for (int i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + triangle[i][0];
        for (int j = 1; j < i; j++) {
            dp[i][j] = max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
        }
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
    }
    
    int maxSum = dp[n - 1][0];
    for (int j = 1; j < n; j++) {
        maxSum = max(maxSum, dp[n - 1][j]);
    }
    
    cout << maxSum << endl;
    return 0;
}
```
</details>

---

## L8-11 🔴 矩阵链乘法

### 题目描述
给定 n 个矩阵的维数，求计算矩阵链乘积所需的最少乘法次数。

### 输入格式
第一行：整数 n，表示矩阵个数
第二行：n+1 个整数，表示矩阵的维数（第 i 个矩阵的维数为 p[i-1] × p[i]）

### 输出格式
一个整数，表示最少乘法次数。

### 样例
```
输入：3
      10 30 5 60

输出：4500
```

<details>
<summary>💡 提示</summary>

区间DP：dp[i][j] 表示计算矩阵 i 到 j 的乘积的最少次数。转移：dp[i][j] = min(dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j])。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <climits>
using namespace std;

int p[100];
int dp[100][100];

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i <= n; i++) {
        cin >> p[i];
    }
    
    for (int len = 2; len <= n; len++) {
        for (int i = 1; i + len - 1 <= n; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j]);
            }
        }
    }
    
    cout << dp[1][n] << endl;
    return 0;
}
```
</details>

---

## L8-12 🔴 状态压缩DP（旅行商问题）

### 题目描述
有 n 个城市，给出每两个城市之间的距离。从城市 0 出发，访问所有城市恰好一次后回到城市 0，求最短路径长度。

### 输入格式
第一行：整数 n
接下来 n 行，每行 n 个整数，表示距离矩阵

### 输出格式
一个整数，表示最短路径长度。

### 样例
```
输入：4
      0 10 15 20
      10 0 35 25
      15 35 0 30
      20 25 30 0

输出：80
```

<details>
<summary>💡 提示</summary>

状态压缩DP：dp[mask][i] 表示已经访问了 mask 表示的城市集合，当前在城市 i 的最短距离。mask 用二进制表示访问状态。
</details>

<details>
<summary>✅ 参考答案</summary>

```cpp
#include <iostream>
#include <climits>
using namespace std;

int dist[20][20];
int dp[1 << 15][20];

int main() {
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> dist[i][j];
        }
    }
    
    for (int mask = 0; mask < (1 << n); mask++) {
        for (int i = 0; i < n; i++) {
            dp[mask][i] = INT_MAX;
        }
    }
    
    dp[1][0] = 0;  // 从城市0出发
    
    for (int mask = 1; mask < (1 << n); mask++) {
        for (int i = 0; i < n; i++) {
            if (!(mask & (1 << i))) continue;
            if (dp[mask][i] == INT_MAX) continue;
            
            for (int j = 0; j < n; j++) {
                if (mask & (1 << j)) continue;
                int newMask = mask | (1 << j);
                dp[newMask][j] = min(dp[newMask][j], dp[mask][i] + dist[i][j]);
            }
        }
    }
    
    int ans = INT_MAX;
    for (int i = 1; i < n; i++) {
        ans = min(ans, dp[(1 << n) - 1][i] + dist[i][0]);
    }
    
    cout << ans << endl;
    return 0;
}
```
</details>

---

# 🎉 题库完成

恭喜！你已经完成了「默隐·蒙知苑」C++配套练习题库的全部 L1-L8 级别练习。

## 📊 完成统计

| 级别 | 题目数 | 主题 |
|:---:|:---:|:---|
| L1 | 12 | 变量、输入输出、简单计算 |
| L2 | 13 | 分支与循环 |
| L3 | 12 | 数组基础 |
| L4 | 12 | 字符串与函数 |
| L5 | 12 | 指针、结构体、基础算法 |
| L6 | 12 | 排序、搜索、递归 |
| L7 | 12 | 数据结构、图论基础 |
| L8 | 12 | 动态规划、高级算法 |
| **总计** | **97** | - |

## 🚀 下一步

- ✅ 完成所有基础题（🟢）
- 🟡 挑战进阶题（🟡）
- 🔴 攻克难题（🔴）

继续加油，向着更高的编程境界前进！

---

*本练习题库由「默隐·蒙知苑」出品*
*配套教程：[C++ L1-L8 分级教程](../)*
