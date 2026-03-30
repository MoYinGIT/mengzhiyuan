# GESP C++ L2 二级教案

> **课程定位**: C++基础进阶，深化程序设计思维  
> **课时安排**: 10课时（每课时90分钟）  
> **适合学员**: 已通过GESP一级或同等水平  
> **教学理念**: 温故知新、融会贯通，培养结构化思维

---

## 一、课程目标与学习成果

### 1.1 总体目标
- 深入理解计算机存储与网络基础知识
- 掌握流程图绘制与算法描述
- 熟练运用多层分支与循环结构
- 掌握数据类型转换与常用数学函数
- 通过GESP二级认证考试

### 1.2 学习成果
| 序号 | 学习成果 | 对应考纲 |
|:---:|:---|:---|
| 1 | 解释计算机存储体系（ROM/RAM/CACHE） | 计算机存储 |
| 2 | 绘制标准程序流程图 | 流程图 |
| 3 | 进行二进制、十进制、十六进制转换 | 数据编码 |
| 4 | 熟练使用嵌套分支与嵌套循环 | 多层结构 |
| 5 | 正确使用类型转换和数学函数 | 类型与函数 |
| 6 | 独立解决GESP二级难度问题 | 综合应用 |

---

## 二、核心知识点清单

| 知识块 | 知识点 | 难度 | 课时 |
|:---|:---|:---:|:---:|
| 计算机基础 | ROM/RAM/CACHE、网络基础、TCP/IP | ⭐⭐ | 1 |
| 程序设计语言 | 语言分类、编译vs解释 | ⭐ | 0.5 |
| 流程图 | 标准符号、绘制方法 | ⭐⭐ | 1 |
| ASCII编码 | 字符编码、常用ASCII值 | ⭐ | 0.5 |
| 类型转换 | 强制转换、隐式转换 | ⭐⭐ | 1 |
| 多层分支 | if嵌套、switch嵌套 | ⭐⭐ | 2 |
| 多层循环 | 双重循环、三重循环 | ⭐⭐⭐ | 2 |
| 数学函数 | abs、sqrt、max、min、rand | ⭐⭐ | 1 |
| 综合应用 | 真题演练、算法思维 | ⭐⭐⭐ | 1 |

---

## 三、详细教学设计

### 第1课时：计算机存储与网络基础

#### 教学目标
- 理解计算机存储体系结构
- 了解计算机网络基本概念
- 掌握TCP/IP四层模型

#### 教学内容

**1. 计算机存储体系（25分钟）**
```
存储器层次结构：
┌─────────────┐  速度快，容量小，价格高
│   寄存器     │  CPU内部，纳秒级访问
├─────────────┤
│   CACHE     │  高速缓存，MB级
├─────────────┤
│    RAM      │  内存，GB级，掉电丢失
├─────────────┤
│   硬盘/SSD   │  外存，TB级，永久保存
├─────────────┤
│   外设存储   │  U盘、光盘、云存储
└─────────────┘  速度慢，容量大，价格低

关键概念：
- ROM：只读存储器，存储固件（如BIOS）
- RAM：随机存储器，程序运行时的数据
- CACHE：高速缓存，缓解CPU与内存速度差距
```

**2. 计算机网络基础（25分钟）**
```
网络分类：
- 按范围：LAN（局域网）、MAN（城域网）、WAN（广域网）
- 按拓扑：星型、总线型、环型、网状型

TCP/IP四层模型：
┌─────────────┐
│  应用层      │  HTTP、FTP、SMTP
├─────────────┤
│  传输层      │  TCP、UDP
├─────────────┤
│  网络层      │  IP、ICMP、ARP
├─────────────┤
│  网络接口层   │  以太网、WiFi
└─────────────┘

OSI七层模型（扩展了解）：
应用层→表示层→会话层→传输层→网络层→数据链路层→物理层
```

**3. IP地址（15分钟）**
```
IP地址：网络中设备的唯一标识

IPv4：4个字节，如 192.168.1.1
- 网络号 + 主机号
- 子网掩码：区分网络和主机部分

IPv6：16个字节，解决IPv4地址不足
```

#### 示例代码

**【例1】获取本机IP（概念演示）**
```cpp
// 实际编程中通常不需要操作网络
// 这里只是展示网络概念
#include <iostream>
using namespace std;

int main() {
    // IP地址的表示
    int ip[4] = {192, 168, 1, 1};
    
    cout << "IP地址：";
    for (int i = 0; i < 4; i++) {
        cout << ip[i];
        if (i < 3) cout << ".";
    }
    cout << endl;
    
    return 0;
}
```

---

### 第2课时：程序设计语言与流程图

#### 教学目标
- 了解程序设计语言分类
- 掌握流程图标准符号
- 能够绘制程序流程图

#### 教学内容

**1. 程序设计语言分类（15分钟）**
```
程序设计语言：
├── 机器语言：二进制代码，计算机直接执行
├── 汇编语言：用助记符代替机器指令
└── 高级语言：接近人类语言
    ├── 编译型：C、C++、Java（先编译后执行）
    └── 解释型：Python、JavaScript（边解释边执行）

编译 vs 解释：
- 编译：源代码 → 编译器 → 目标代码 → 执行（速度快）
- 解释：源代码 → 解释器 → 直接执行（跨平台好）
```

**2. 流程图（45分钟）**

**标准符号**：
| 符号 | 名称 | 用途 |
|:---:|:---:|:---|
| ⭕ | 起止框 | 程序开始/结束 |
| ▭ | 处理框 | 执行操作 |
| ◇ | 判断框 | 条件判断 |
| → | 流程线 | 执行方向 |
| ▱ | 输入输出 | 数据输入/输出 |

**流程图示例**：计算1+2+...+n
```
     [开始]
        ↓
    [输入n]
        ↓
   [sum = 0]
   [i = 1]
        ↓
    ┌───────┐
    │ i<=n? │──否──→ [输出sum] ──→ [结束]
    └───┬───┘
      是│
        ↓
   [sum += i]
     [i++]
        ↓
       (返回判断)
```

#### 课堂练习
1. 绘制判断闰年的流程图
2. 绘制计算阶乘的流程图
3. 绘制求最大公约数的流程图

---

### 第3课时：ASCII编码与类型转换

#### 教学目标
- 理解ASCII编码原理
- 掌握字符与数字的转换
- 熟练进行类型转换

#### 教学内容

**1. ASCII编码（20分钟）**
```
ASCII：美国标准信息交换码
- 7位二进制表示，共128个字符
- 0-31：控制字符（如换行、回车）
- 32-126：可打印字符

常用ASCII值：
'0' = 48    'A' = 65    'a' = 97
'9' = 57    'Z' = 90    'z' = 122
空格 = 32   换行 = 10
```

**2. 类型转换（30分钟）**

**隐式转换（自动）**：
```cpp
int a = 5;
double b = a;      // int自动转为double，b = 5.0

int c = 3.7;       // double转为int，c = 3（截断小数）
```

**强制转换（手动）**：
```cpp
double a = 5.7;
int b = (int)a;    // b = 5

int c = 5, d = 2;
double e = (double)c / d;  // e = 2.5，不是2！
```

#### 示例代码

**【例2】字符与ASCII转换**
```cpp
#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "请输入一个字符：";
    cin >> ch;
    
    // 字符转ASCII码
    cout << "ASCII码：" << (int)ch << endl;
    
    // 判断字符类型
    if (ch >= '0' && ch <= '9') {
        cout << "这是数字" << endl;
    } else if (ch >= 'A' && ch <= 'Z') {
        cout << "这是大写字母" << endl;
    } else if (ch >= 'a' && ch <= 'z') {
        cout << "这是小写字母" << endl;
    } else {
        cout << "这是其他字符" << endl;
    }
    
    return 0;
}
```

**【例3】大小写转换**
```cpp
#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "请输入一个字母：";
    cin >> ch;
    
    // 大写转小写
    if (ch >= 'A' && ch <= 'Z') {
        ch = ch + 32;  // 'a' - 'A' = 32
        cout << "转小写：" << ch << endl;
    }
    // 小写转大写
    else if (ch >= 'a' && ch <= 'z') {
        ch = ch - 32;
        cout << "转大写：" << ch << endl;
    }
    
    return 0;
}
```

---

### 第4课时：多层分支结构

#### 教学目标
- 掌握if语句的嵌套
- 掌握switch语句的嵌套
- 能够处理复杂的条件判断

#### 教学内容

**1. if嵌套（25分钟）**
```cpp
// 嵌套if示例：判断三角形类型
if (a + b > c && a + c > b && b + c > a) {  // 能否构成三角形
    if (a == b && b == c) {
        cout << "等边三角形" << endl;
    } else if (a == b || b == c || a == c) {
        cout << "等腰三角形" << endl;
    } else {
        cout << "普通三角形" << endl;
    }
} else {
    cout << "不能构成三角形" << endl;
}
```

**2. switch嵌套（20分钟）**
```cpp
// 嵌套switch示例：菜单系统
switch (mainMenu) {
    case 1:  // 文件菜单
        switch (subMenu) {
            case 1: // 新建
            case 2: // 打开
        }
        break;
    case 2:  // 编辑菜单
        // ...
}
```

#### 示例代码

**【例4】日期有效性检查**
```cpp
#include <iostream>
using namespace std;

int main() {
    int year, month, day;
    cin >> year >> month >> day;
    
    bool valid = true;
    int maxDay;
    
    // 检查年份
    if (year < 0) valid = false;
    
    // 检查月份
    if (month < 1 || month > 12) valid = false;
    
    // 检查日期
    if (valid) {
        switch (month) {
            case 1: case 3: case 5: case 7:
            case 8: case 10: case 12:
                maxDay = 31;
                break;
            case 4: case 6: case 9: case 11:
                maxDay = 30;
                break;
            case 2:
                // 判断闰年
                if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                    maxDay = 29;
                } else {
                    maxDay = 28;
                }
                break;
        }
        if (day < 1 || day > maxDay) valid = false;
    }
    
    if (valid) {
        cout << "日期有效" << endl;
    } else {
        cout << "日期无效" << endl;
    }
    
    return 0;
}
```

---

### 第5课时：多层循环结构

#### 教学目标
- 掌握双重循环的执行流程
- 能够解决需要多层循环的问题
- 理解循环的优化技巧

#### 教学内容

**1. 双重循环执行流程（15分钟）**
```cpp
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        cout << i << "," << j << " ";
    }
    cout << endl;
}

// 执行顺序：
// i=1: j=1,2,3 → 输出 1,1 1,2 1,3
// i=2: j=1,2,3 → 输出 2,1 2,2 2,3
// i=3: j=1,2,3 → 输出 3,1 3,2 3,3
```

**2. break与continue在嵌套循环中（15分钟）**
```cpp
// break只跳出当前层
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) break;  // 只跳出内层循环
        cout << i << "," << j << " ";
    }
    cout << endl;
}
// 输出：
// 1,1
// 2,1
// 3,1
```

#### 示例代码

**【例5】素数筛（简单版）**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    cout << "2到" << n << "之间的素数：";
    
    for (int i = 2; i <= n; i++) {
        bool isPrime = true;
        
        // 检查i是否为素数
        for (int j = 2; j * j <= i; j++) {  // 优化：只需检查到√i
            if (i % j == 0) {
                isPrime = false;
                break;  // 发现因子，不是素数
            }
        }
        
        if (isPrime) {
            cout << i << " ";
        }
    }
    
    cout << endl;
    
    return 0;
}
```

**【例6】百钱买百鸡**
```cpp
#include <iostream>
using namespace std;

int main() {
    // 公鸡5钱一只，母鸡3钱一只，小鸡1钱三只
    // 100钱买100只鸡，各多少只？
    
    cout << "公鸡\t母鸡\t小鸡" << endl;
    
    for (int x = 0; x <= 20; x++) {      // 公鸡最多20只
        for (int y = 0; y <= 33; y++) {  // 母鸡最多33只
            int z = 100 - x - y;         // 小鸡
            
            if (z % 3 == 0 && 5*x + 3*y + z/3 == 100) {
                cout << x << "\t" << y << "\t" << z << endl;
            }
        }
    }
    
    return 0;
}
```

---

### 第6课时：常用数学函数

#### 教学目标
- 掌握常用数学函数的使用
- 理解随机数的生成方法
- 能够解决数学相关的问题

#### 教学内容

**1. 数学函数（25分钟）**

需要包含头文件：`#include <cmath>` 或 `#include <math.h>`

| 函数 | 功能 | 示例 |
|:---|:---|:---|
| abs(x) | 绝对值（整数） | abs(-5) = 5 |
| fabs(x) | 绝对值（浮点） | fabs(-3.14) = 3.14 |
| sqrt(x) | 平方根 | sqrt(16) = 4 |
| pow(x,y) | x的y次方 | pow(2, 3) = 8 |
| round(x) | 四舍五入 | round(3.7) = 4 |
| ceil(x) | 向上取整 | ceil(3.1) = 4 |
| floor(x) | 向下取整 | floor(3.9) = 3 |

**2. 随机数生成（25分钟）**

需要头文件：`#include <cstdlib>` 和 `#include <ctime>`

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));  // 设置随机种子，只需调用一次
    
    // 生成[a, b]范围内的随机数
    // rand() % (b - a + 1) + a
    
    int r1 = rand() % 100 + 1;      // 1-100
    int r2 = rand() % 6 + 1;        // 1-6（骰子）
    int r3 = rand() % 21 - 10;      // -10到10
    
    return 0;
}
```

#### 示例代码

**【例7】猜数字游戏（优化版）**
```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>
#include <cmath>
using namespace std;

int main() {
    srand(time(0));
    int secret = rand() % 100 + 1;
    int guess, count = 0;
    
    cout << "猜数字游戏（1-100）" << endl;
    
    do {
        cout << "请输入猜测：";
        cin >> guess;
        count++;
        
        int diff = abs(guess - secret);
        
        if (guess > secret) {
            cout << "太大了！";
        } else if (guess < secret) {
            cout << "太小了！";
        } else {
            cout << "恭喜猜对了！" << endl;
            cout << "用了" << count << "次" << endl;
            break;
        }
        
        // 提示距离
        if (diff > 20) cout << "（差距很大）" << endl;
        else if (diff > 10) cout << "（有点接近）" << endl;
        else cout << "（很接近了！）" << endl;
        
    } while (true);
    
    return 0;
}
```

---

### 第7课时：综合算法练习（上）

#### 教学目标
- 综合运用分支与循环
- 培养算法思维
- 解决实际问题

#### 示例代码

**【例8】斐波那契数列**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    // 方法1：迭代法（推荐）
    long long a = 0, b = 1;
    for (int i = 1; i <= n; i++) {
        cout << b << " ";
        long long next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
    
    // 方法2：数组存储
    long long fib[50];
    fib[0] = 0;
    fib[1] = 1;
    for (int i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    cout << "第" << n << "项是：" << fib[n] << endl;
    
    return 0;
}
```

**【例9】求π的近似值（蒙特卡洛方法）**
```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>
#include <cmath>
using namespace std;

int main() {
    srand(time(0));
    
    int n, inside = 0;
    cout << "请输入投掷次数：";
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        // 生成[0,1]范围内的随机点
        double x = (double)rand() / RAND_MAX;
        double y = (double)rand() / RAND_MAX;
        
        // 判断是否在单位圆内
        if (sqrt(x*x + y*y) <= 1) {
            inside++;
        }
    }
    
    // π ≈ 4 * (圆内点数 / 总点数)
    double pi = 4.0 * inside / n;
    cout << "π的近似值：" << pi << endl;
    
    return 0;
}
```

---

### 第8课时：综合算法练习（下）

#### 示例代码

**【例10】数字特征统计**
```cpp
#include <iostream>
using namespace std;

int main() {
    int n, num;
    cin >> n;
    
    int sum = 0;           // 和
    int maxVal = -999999;  // 最大值
    int minVal = 999999;   // 最小值
    int evenCount = 0;     // 偶数个数
    
    for (int i = 0; i < n; i++) {
        cin >> num;
        
        sum += num;
        if (num > maxVal) maxVal = num;
        if (num < minVal) minVal = num;
        if (num % 2 == 0) evenCount++;
    }
    
    double avg = (double)sum / n;
    
    cout << "总和：" << sum << endl;
    cout << "平均值：" << avg << endl;
    cout << "最大值：" << maxVal << endl;
    cout << "最小值：" << minVal << endl;
    cout << "偶数个数：" << evenCount << endl;
    
    return 0;
}
```

---

### 第9-10课时：真题演练与模拟考试

#### GESP二级重点题型

**【真题1】进制转换**
```cpp
// 十进制转二进制
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    // 方法：不断除以2，记录余数
    int binary[32], count = 0;
    
    while (n > 0) {
        binary[count++] = n % 2;
        n /= 2;
    }
    
    // 倒序输出
    for (int i = count - 1; i >= 0; i--) {
        cout << binary[i];
    }
    cout << endl;
    
    return 0;
}
```

---

## 四、推荐练习题（洛谷题单552）

| 题号 | 题目名称 | 知识点 |
|:---:|:---|:---|
| P5722 | 【深基4.例4】求三角形面积 | 数学函数 |
| P5723 | 【深基4.例6】质数口袋 | 素数判断 |
| P5724 | 【深基4.例9】打分 | 最值统计 |
| P5725 | 【深基4.习5】求极差 | 最值统计 |
| P5726 | 【深基4.习6】奖学金 | 综合应用 |

---

## 五、常见学生错误与纠正

| 错误 | 纠正 |
|:---|:---|
| 随机数每次一样 | 记得调用srand(time(0)) |
| 忘记类型转换导致整数除法 | 强制转换为double |
| 嵌套循环break用错 | break只跳出当前层 |
| ASCII转换错误 | '5'转数字是'5'-'0'=5 |

---

## 六、考核评价标准

- 理论题得分≥60%
- 编程题得分≥60%
- 能独立绘制流程图
- 能完成嵌套结构程序

---

*本教案遵循三经典智慧：简易→变易→不易，循序渐进；引导式教学；因材施教。*

**版本**: 1.0  
**更新日期**: 2026-03-28
