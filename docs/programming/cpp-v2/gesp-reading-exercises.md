# GESP C++ 阅读程序练习题

**一级、二级 · 适合4-5年级学生**

**CSP-J阅读程序模式训练**

资料来源：CCF GESP官网

**题目总数：34题 | 一级18题 | 二级9题 | 综合7题**

---

## 目录

- [第一部分 GESP考试大纲概述](#第一部分-gesp考试大纲概述)
  - [一、GESP一级考试大纲](#一gesp一级考试大纲)
  - [二、GESP二级考试大纲](#二gesp二级考试大纲)
- [第二部分 阅读程序题（一级）](#第二部分-阅读程序题一级)
  - [一、计算机基础知识类](#一计算机基础知识类)
  - [二、数据类型与变量类](#二数据类型与变量类)
  - [三、运算符与表达式类](#三运算符与表达式类)
  - [四、输入输出类](#四输入输出类)
  - [五、分支结构类](#五分支结构类)
  - [六、循环结构类](#六循环结构类) 
    - [do-while、break、continue](#六循环结构类)
- [第三部分 阅读程序题（二级）](#第三部分-阅读程序题二级)
  - [一、多分支结构类](#一多分支结构类)
  - [二、多层循环类](#二多层循环类)
  - [三、数学函数应用类](#三数学函数应用类)
  - [四、ASCII码与类型转换类](#四ascii码与类型转换类)
    - [数字字符转换、强制类型转换](#四ascii码与类型转换类)
- [第四部分 综合练习题](#第四部分-综合练习题)
  - [水仙花数、完数、进制转换、数组操作](#第四部分-综合练习题)
- [第五部分 参考答案](#第五部分-参考答案)

---

## 第一部分 GESP考试大纲概述

GESP（Grade Examination of Software Programming）是由中国计算机学会（CCF）组织的编程能力等级认证考试，分为1-8级。对于4-5年级的初学者，建议从一级开始学习，逐步掌握二级内容。本练习册将GESP一级、二级的选择题、判断题转换为CSP-J阅读程序模式，帮助学生更好地理解程序执行过程。

### 一、GESP一级考试大纲

**1. 计算机基础知识**
- 了解计算机的基本构成（输入设备、输出设备、存储器、运算器、控制器）
- 了解操作系统的基本概念
- 了解计算机网络的基本概念

**2. 编程环境**
- 熟悉C++编程环境（Dev-C++或其它IDE）
- 了解程序的编译与运行过程

**3. 基本数据类型**
- 掌握整型、实型、字符型、布尔型
- 了解不同数据类型的取值范围

**4. 变量与常量**
- 掌握变量的定义与初始化
- 掌握常量的定义（const关键字）
- 了解变量命名规则

**5. 基本运算**
- 掌握算术运算符：+、-、*、/、%
- 掌握关系运算符：>、<、>=、<=、==、!=
- 掌握逻辑运算符：&&、||、!
- 了解赋值运算符与复合赋值运算符

**6. 输入输出**
- 掌握cin和cout的基本使用
- 掌握scanf和printf的基本使用

**7. 程序结构**
- 掌握顺序结构程序设计
- 掌握if-else分支结构
- 掌握for循环和while循环

### 二、GESP二级考试大纲

**1. 计算机存储与网络**
- 了解内存（RAM）、外存（硬盘）、缓存的区别
- 了解网络基本概念（IP地址、域名、协议等）

**2. 程序设计语言**
- 了解机器语言、汇编语言、高级语言的特点
- 了解编译型语言与解释型语言的区别

**3. 流程图**
- 了解流程图的基本符号
- 能够读懂简单的流程图

**4. ASCII编码**
- 掌握常用字符的ASCII码值
- 了解大小写字母ASCII码值的关系
- 掌握字符与整数的转换

**5. 数据类型转换**
- 掌握隐式类型转换规则
- 掌握强制类型转换的使用

**6. 多层分支结构**
- 掌握if-else if-else多分支结构
- 掌握switch语句

**7. 多层循环结构**
- 掌握嵌套循环的使用
- 能够处理二维图形打印问题

**8. 数学函数**
- 掌握常用数学函数：abs()、sqrt()、pow()等
- 需要包含<cmath>头文件

---

## 第二部分 阅读程序题（一级）

### 一、计算机基础知识类

#### 【题目1】阅读以下程序，判断程序输出结果。

```cpp
#include <iostream>
using namespace std;
int main() {
    // 计算机存储单位换算
    int KB = 1024; // 1KB = 1024字节
    int MB = KB * 1024; // 1MB = 1024KB
    cout << "1MB = " << MB << "字节" << endl;
    return 0;
}
```

**问题：程序运行后输出的结果是（ ）**

A. 1MB = 1024字节  
B. 1MB = 1048576字节  
C. 1MB = 2048字节  
D. 1MB = 1000000字节

**答案：B**

**解析：** 1MB = 1024KB = 1024 × 1024 = 1048576字节。

---

#### 【题目2】阅读以下程序，分析程序功能。

```cpp
#include <iostream>
using namespace std;
int main() {
    // 判断存储器类型
    bool isRAM = true; // RAM是易失性存储器
    bool isROM = false; // ROM是非易失性存储器
    
    if (isRAM) {
        cout << "RAM: 断电后数据丢失" << endl;
    }
    if (!isROM) {
        cout << "ROM: 断电后数据不丢失" << endl;
    }
    return 0;
}
```

**问题：程序运行后输出几行内容？（ ）**

A. 0行  
B. 1行  
C. 2行  
D. 3行

**答案：C**

**解析：** isRAM为true，第一个if条件成立输出一行；!isROM为true（因为isROM为false），第二个if条件也成立，再输出一行，共2行。

---

### 二、数据类型与变量类

#### 【题目3】阅读以下程序，判断变量取值范围。

```cpp
#include <iostream>
#include <climits>
using namespace std;
int main() {
    int a = 2147483647; // int类型最大值
    cout << "a = " << a << endl;
    a = a + 1; // 发生溢出
    cout << "a+1 = " << a << endl;
    return 0;
}
```

**问题：程序运行后a+1的输出结果是（ ）**

A. 2147483648  
B. 0  
C. -2147483648  
D. 程序报错

**答案：C**

**解析：** int类型的最大值是2147483647，加1后发生溢出，变成最小值-2147483648。这是整数溢出的典型表现。

---

#### 【题目4】阅读以下程序，分析数据类型。

```cpp
#include <iostream>
using namespace std;
int main() {
    int a = 5;
    double b = 2.0;
    double c = a / b; // 整数除以浮点数
    int d = a / 2; // 整数除以整数
    cout << "c = " << c << endl;
    cout << "d = " << d << endl;
    return 0;
}
```

**问题：程序运行后c和d的值分别是（ ）**

A. c = 2.5, d = 2  
B. c = 2, d = 2  
C. c = 2.5, d = 2.5  
D. c = 2, d = 2.5

**答案：A**

**解析：** a / b是整数除以浮点数，结果为浮点数2.5；a / 2是整数除法，结果为整数2（向下取整）。

---

#### 【题目5】阅读以下程序，分析布尔类型。

```cpp
#include <iostream>
using namespace std;
int main() {
    bool flag1 = true; // 布尔值true
    bool flag2 = false; // 布尔值false
    cout << "flag1 = " << flag1 << endl;
    cout << "flag2 = " << flag2 << endl;
    cout << "flag1 + flag2 = " << flag1 + flag2 << endl;
    return 0;
}
```

**问题：程序运行后flag1 + flag2的输出结果是（ ）**

A. true  
B. false  
C. 1  
D. 0

**答案：C**

**解析：** 在C++中，bool类型参与算术运算时，true转换为1，false转换为0。所以true + false = 1 + 0 = 1。

---

### 三、运算符与表达式类

#### 【题目6】阅读以下程序，分析取模运算。

```cpp
#include <iostream>
using namespace std;
int main() {
    int a = 17, b = 5;
    cout << "a % b = " << a % b << endl;
    cout << "a / b = " << a / b << endl;
    cout << "a - b * (a / b) = " << a - b * (a / b) << endl;
    return 0;
}
```

**问题：程序输出中，a % b的值与哪个表达式的值相等？（ ）**

A. a / b  
B. a - b * (a / b)  
C. a + b  
D. a * b

**答案：B**

**解析：** 取模运算 a % b 等于 a - b * (a / b)。17 % 5 = 17 - 5 * 3 = 2，验证了这个关系。

---

#### 【题目7】阅读以下程序，分析自增运算。

```cpp
#include <iostream>
using namespace std;
int main() {
    int a = 5;
    int b = a++; // 后置自增
    int c = ++a; // 前置自增
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    cout << "c = " << c << endl;
    return 0;
}
```

**问题：程序运行后，a、b、c的值分别是（ ）**

A. a=7, b=5, c=7  
B. a=6, b=6, c=7  
C. a=7, b=6, c=7  
D. a=6, b=5, c=6

**答案：A**

**解析：** int b = a++ 先将a的值5赋给b，然后a自增变成6；int c = ++a 先将a自增变成7，然后赋给c。所以a=7, b=5, c=7。

---

#### 【题目8】阅读以下程序，分析逻辑运算。

```cpp
#include <iostream>
using namespace std;
int main() {
    int a = 3, b = 5, c = 0;
    bool result1 = (a < b) && (b > c);
    bool result2 = (a > b) || (c == 0);
    bool result3 = !(a == b);
    cout << "result1 = " << result1 << endl;
    cout << "result2 = " << result2 << endl;
    cout << "result3 = " << result3 << endl;
    return 0;
}
```

**问题：程序运行后，result1、result2、result3的值分别是（ ）**

A. 1 1 1  
B. 1 0 1  
C. 0 1 0  
D. 1 1 0

**答案：A**

**解析：** (3<5)&&(5>0)=true&&true=1；(3>5)||(0==0)=false||true=1；!(3==5)=!false=true=1。

---

### 四、输入输出类

#### 【题目9】阅读以下程序，分析输入处理。

```cpp
#include <iostream>
using namespace std;
int main() {
    int a, b;
    char c;
    cin >> a >> c >> b;
    cout << "a = " << a << endl;
    cout << "c = " << c << endl;
    cout << "b = " << b << endl;
    return 0;
}
// 假设输入：12+34
```

**问题：当输入"12+34"时，程序输出的a、c、b分别是（ ）**

A. a=12, c=+, b=34  
B. a=12, c=+, b=+34  
C. a=1234, c=+, b=无  
D. 程序报错

**答案：A**

**解析：** cin会根据变量类型自动分割输入。读取整数12给a，遇到+号停止；读取字符+给c；读取整数34给b。

---

#### 【题目10】阅读以下程序，分析格式化输出。

```cpp
#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    double pi = 3.14159265;
    cout << fixed << setprecision(2);
    cout << "pi = " << pi << endl;
    cout << setprecision(4);
    cout << "pi = " << pi << endl;
    return 0;
}
```

**问题：程序运行后，两次输出的pi值分别是（ ）**

A. 3.14 和 3.1416  
B. 3.14 和 3.1415  
C. 3.1 和 3.141  
D. 3.14159 和 3.14159

**答案：A**

**解析：** setprecision(2)设置保留2位小数，输出3.14；setprecision(4)设置保留4位小数，四舍五入输出3.1416。

---

### 五、分支结构类

#### 【题目11】阅读以下程序，分析分支执行。

```cpp
#include <iostream>
using namespace std;
int main() {
    int score = 75;
    if (score >= 90) {
        cout << "优秀" << endl;
    } else if (score >= 80) {
        cout << "良好" << endl;
    } else if (score >= 60) {
        cout << "及格" << endl;
    } else {
        cout << "不及格" << endl;
    }
    return 0;
}
```

**问题：程序运行后输出的结果是（ ）**

A. 优秀  
B. 良好  
C. 及格  
D. 不及格

**答案：C**

**解析：** score=75，不满足>=90，不满足>=80，满足>=60，所以输出"及格"。多分支结构只执行第一个满足条件的分支。

---

#### 【题目12】阅读以下程序，分析嵌套if语句。

```cpp
#include <iostream>
using namespace std;
int main() {
    int a = 5, b = 3, c = 4;
    if (a > b) {
        if (a > c) {
            cout << "a最大" << endl;
        } else {
            cout << "c大于等于a" << endl;
        }
    } else {
        cout << "b大于等于a" << endl;
    }
    return 0;
}
```

**问题：程序运行后输出的结果是（ ）**

A. a最大  
B. c大于等于a  
C. b大于等于a  
D. 无输出

**答案：A**

**解析：** a=5 > b=3成立，进入第一个if；a=5 > c=4成立，输出"a最大"。

---

### 六、循环结构类

#### 【题目13】阅读以下程序，分析循环执行次数。

```cpp
#include <iostream>
using namespace std;
int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum = sum + i;
    }
    cout << "sum = " << sum << endl;
    return 0;
}
```

**问题：程序运行后sum的值是（ ）**

A. 45  
B. 55  
C. 10  
D. 11

**答案：B**

**解析：** 循环从i=1到i=10，sum = 1+2+3+...+10 = 55。这是求1到10累加和的程序。

---

#### 【题目14】阅读以下程序，分析while循环。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 12345;
    int count = 0;
    while (n > 0) {
        count++;
        n = n / 10;
    }
    cout << "count = " << count << endl;
    return 0;
}
```

**问题：程序运行后count的值是（ ）**

A. 4  
B. 5  
C. 12345  
D. 0

**答案：B**

**解析：** 每次循环将n除以10（去掉最后一位），count记录循环次数。12345有5位数字，所以count最终为5。这个程序的功能是计算整数的位数。

---

#### 【题目15】阅读以下程序，分析循环累乘。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 5;
    int factorial = 1;
    for (int i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    cout << "5! = " << factorial << endl;
    return 0;
}
```

**问题：程序运行后factorial的值是（ ）**

A. 5  
B. 15  
C. 120  
D. 25

**答案：C**

**解析：** 这是计算阶乘的程序。5! = 1 × 2 × 3 × 4 × 5 = 120。

---

#### 【题目16】阅读以下程序，分析do-while循环。

```cpp
#include <iostream>
using namespace std;
int main() {
    int i = 1;
    int sum = 0;
    do {
        sum += i;
        i++;
    } while (i <= 5);
    cout << "sum = " << sum << endl;
    return 0;
}
```

**问题：程序运行后sum的值是（ ）**

A. 10  
B. 15  
C. 5  
D. 6

**答案：B**

**解析：** do-while循环至少执行一次。i从1到5，sum = 1+2+3+4+5 = 15。

---

#### 【题目17】阅读以下程序，分析break语句。

```cpp
#include <iostream>
using namespace std;
int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            break;
        }
        sum += i;
    }
    cout << "sum = " << sum << endl;
    return 0;
}
```

**问题：程序运行后sum的值是（ ）**

A. 55  
B. 45  
C. 10  
D. 15

**答案：C**

**解析：** 当i=5时执行break跳出循环，所以只累加了1+2+3+4=10。

---

#### 【题目18】阅读以下程序，分析continue语句。

```cpp
#include <iostream>
using namespace std;
int main() {
    int sum = 0;
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue;
        }
        sum += i;
    }
    cout << "sum = " << sum << endl;
    return 0;
}
```

**问题：程序运行后sum的值是（ ）**

A. 15  
B. 12  
C. 10  
D. 9

**答案：B**

**解析：** 当i=3时执行continue跳过本次循环，不执行sum+=3。所以sum = 1+2+4+5 = 12。

---

## 第三部分 阅读程序题（二级）

### 一、多分支结构类

#### 【题目16】阅读以下程序，分析switch语句。

```cpp
#include <iostream>
using namespace std;
int main() {
    int month = 2;
    int days;
    switch (month) {
        case 1: case 3: case 5: case 7: 
        case 8: case 10: case 12:
            days = 31; break;
        case 4: case 6: case 9: case 11:
            days = 30; break;
        case 2:
            days = 28; break;
        default:
            days = 0;
    }
    cout << month << "月有" << days << "天" << endl;
    return 0;
}
```

**问题：程序运行后输出的天数是（ ）**

A. 31天  
B. 30天  
C. 28天  
D. 0天

**答案：C**

**解析：** month=2，匹配case 2，days=28。这个程序根据月份判断天数（不考虑闰年）。

---

### 二、多层循环类

#### 【题目17】阅读以下程序，分析嵌套循环输出。

```cpp
#include <iostream>
using namespace std;
int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}
```

**问题：程序运行后输出的图案是（ ）**

A. 
```
***
***
***
```

B. 
```
*
**
***
```

C. 
```
***
**
*
```

D. 
```
*
*
*
```

**答案：B**

**解析：** 外层循环i从1到3，内层循环j从1到i。i=1时输出1个*，i=2时输出2个*，i=3时输出3个*。

---

#### 【题目18】阅读以下程序，分析九九乘法表片段。

```cpp
#include <iostream>
using namespace std;
int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j << "*" << i << "=" << i*j << " ";
        }
        cout << endl;
    }
    return 0;
}
```

**问题：程序运行后第三行输出的是（ ）**

A. 1*3=3  
B. 1*3=3 2*3=6 3*3=9  
C. 3*1=3 3*2=6 3*3=9  
D. 1*1=1 2*2=4 3*3=9

**答案：B**

**解析：** 当i=3时，内层循环j从1到3，输出：1*3=3 2*3=6 3*3=9。这是九九乘法表的下半部分。

---

### 三、数学函数应用类

#### 【题目19】阅读以下程序，分析数学函数。

```cpp
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    double x = 2.0;
    cout << "sqrt(4) = " << sqrt(4) << endl;
    cout << "pow(2,3) = " << pow(x, 3) << endl;
    cout << "abs(-5) = " << abs(-5) << endl;
    return 0;
}
```

**问题：程序运行后pow(2,3)的输出结果是（ ）**

A. 6  
B. 8  
C. 9  
D. 5

**答案：B**

**解析：** pow(x, y)计算x的y次幂。pow(2, 3) = 2³ = 8。

---

#### 【题目20】阅读以下程序，分析平方根计算。

```cpp
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    int a = 16, b = 2, c = 25;
    cout << sqrt(a) << endl;
    cout << sqrt(a + b) << endl;
    cout << sqrt(a + c) << endl;
    return 0;
}
```

**问题：程序运行后三行输出分别是（ ）**

A. 4 4.47 6.40  
B. 4 4.24 6.08  
C. 4.0 sqrt(18) sqrt(41)  
D. 4 4.4721... 6.4031...

**答案：D**

**解析：** sqrt(16)=4，sqrt(18)≈4.4721，sqrt(41)≈6.4031。sqrt函数返回double类型，默认输出带小数。

---

### 四、ASCII码与类型转换类

#### 【题目21】阅读以下程序，分析ASCII码转换。

```cpp
#include <iostream>
using namespace std;
int main() {
    char ch = 'A';
    cout << "字符: " << ch << endl;
    cout << "ASCII码: " << (int)ch << endl;
    cout << "小写字母: " << (char)(ch + 32) << endl;
    return 0;
}
```

**问题：程序运行后，小写字母输出的结果是（ ）**

A. A  
B. a  
C. B  
D. b

**答案：B**

**解析：** 大写字母'A'的ASCII码是65，小写字母'a'的ASCII码是97，相差32。所以ch+32=97，对应字符'a'。

---

#### 【题目22】阅读以下程序，分析字符运算。

```cpp
#include <iostream>
using namespace std;
int main() {
    char c1 = 'D';
    char c2 = c1 - 3;
    char c3 = c1 + 3;
    cout << "c1 = " << c1 << endl;
    cout << "c2 = " << c2 << endl;
    cout << "c3 = " << c3 << endl;
    return 0;
}
```

**问题：程序运行后c2和c3分别是（ ）**

A. A 和 G  
B. B 和 F  
C. C 和 E  
D. E 和 C

**答案：A**

**解析：** 'D'的ASCII码是68。c2=68-3=65='A'，c3=68+3=71='G'。

---

#### 【题目23】阅读以下程序，分析数字字符转换。

```cpp
#include <iostream>
using namespace std;
int main() {
    char ch = '7';
    int num = ch - '0';
    cout << "num = " << num << endl;
    cout << "num * 2 = " << num * 2 << endl;
    return 0;
}
```

**问题：程序运行后num * 2的值是（ ）**

A. 14  
B. '7' * 2  
C. 7  
D. 100

**答案：A**

**解析：** '7'的ASCII码是55，'0'的ASCII码是48，所以num = 55-48 = 7。num * 2 = 14。这是数字字符转整数的常用方法。

---

#### 【题目24】阅读以下程序，分析强制类型转换。

```cpp
#include <iostream>
using namespace std;
int main() {
    double a = 7.8;
    int b = (int)a;
    int c = int(a + 0.5);
    cout << "b = " << b << endl;
    cout << "c = " << c << endl;
    return 0;
}
```

**问题：程序运行后b和c的值分别是（ ）**

A. 7 和 7  
B. 8 和 8  
C. 7 和 8  
D. 8 和 7

**答案：C**

**解析：** (int)7.8截断小数部分得7；int(7.8+0.5)=int(8.3)=8，这是四舍五入的实现方法。

---

## 第四部分 综合练习题

#### 【题目23】阅读以下程序，综合分析程序功能。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n, sum = 0;
    cin >> n; // 假设输入：123
    while (n > 0) {
        sum = sum + n % 10;
        n = n / 10;
    }
    cout << "各位数字之和 = " << sum << endl;
    return 0;
}
```

**问题：当输入123时，程序输出的结果是（ ）**

A. 各位数字之和 = 3  
B. 各位数字之和 = 6  
C. 各位数字之和 = 123  
D. 各位数字之和 = 12

**答案：B**

**解析：** 123%10=3取出个位，123/10=12去掉个位；12%10=2取出个位，12/10=1；1%10=1，1/10=0结束。sum = 3+2+1 = 6。

---

#### 【题目24】阅读以下程序，分析最大公约数计算。

```cpp
#include <iostream>
using namespace std;
int main() {
    int a = 24, b = 18;
    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    cout << "最大公约数 = " << a << endl;
    return 0;
}
```

**问题：程序运行后输出的最大公约数是（ ）**

A. 2  
B. 3  
C. 6  
D. 12

**答案：C**

**解析：** 这是用辗转相减法求最大公约数。24-18=6，18-6=12，12-6=6，6==6结束。24和18的最大公约数是6。

---

#### 【题目25】阅读以下程序，分析素数判断。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 17;
    bool isPrime = true;
    for (int i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        cout << n << "是素数" << endl;
    } else {
        cout << n << "不是素数" << endl;
    }
    return 0;
}
```

**问题：程序运行后输出的结果是（ ）**

A. 17是素数  
B. 17不是素数  
C. 程序报错  
D. 无输出

**答案：A**

**解析：** 17只能被1和17整除，循环从2到16，没有数能整除17，所以isPrime保持true，输出"17是素数"。

---

#### 【题目26】阅读以下程序，分析斐波那契数列。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 6;
    int a = 1, b = 1, c;
    cout << a << " " << b << " ";
    for (int i = 3; i <= n; i++) {
        c = a + b;
        cout << c << " ";
        a = b;
        b = c;
    }
    return 0;
}
```

**问题：程序运行后输出的数列是（ ）**

A. 1 1 2 3 5 8  
B. 1 1 2 3 4 5  
C. 1 2 3 4 5 6  
D. 1 1 1 1 1 1

**答案：A**

**解析：** 斐波那契数列：前两个数是1，后面每个数等于前两个数之和。1,1,2,3,5,8... 输出前6项。

---

#### 【题目27】阅读以下程序，分析冒泡排序过程。

```cpp
#include <iostream>
using namespace std;
int main() {
    int arr[5] = {5, 3, 8, 1, 2};
    // 一趟冒泡排序
    for (int j = 0; j < 4; j++) {
        if (arr[j] > arr[j+1]) {
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

**问题：程序运行后数组arr的输出是（ ）**

A. 1 2 3 5 8  
B. 3 5 1 2 8  
C. 5 3 8 1 2  
D. 3 5 1 8 2

**答案：B**

**解析：** 一趟冒泡排序把最大值冒到最后。5>3交换得{3,5,8,1,2}，5<8不交换，8>1交换得{3,5,1,8,2}，8>2交换得{3,5,1,2,8}。

---

#### 【题目28】阅读以下程序，分析数字反转。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 1234;
    int reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n = n / 10;
    }
    cout << "反转后 = " << reversed << endl;
    return 0;
}
```

**问题：程序运行后reversed的值是（ ）**

A. 1234  
B. 4321  
C. 1432  
D. 1243

**答案：B**

**解析：** reversed = 0*10+4=4，reversed = 4*10+3=43，reversed = 43*10+2=432，reversed = 432*10+1=4321。

---

#### 【题目29】阅读以下程序，分析水仙花数判断。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 153;
    int original = n;
    int sum = 0;
    while (n > 0) {
        int digit = n % 10;
        sum = sum + digit * digit * digit;
        n = n / 10;
    }
    if (sum == original) {
        cout << original << "是水仙花数" << endl;
    } else {
        cout << original << "不是水仙花数" << endl;
    }
    return 0;
}
```

**问题：程序运行后输出的结果是（ ）**

A. 153是水仙花数  
B. 153不是水仙花数  
C. 程序报错  
D. 无输出

**答案：A**

**解析：** 水仙花数是指一个3位数，其各位数字的立方和等于该数本身。1³+5³+3³ = 1+125+27 = 153，所以153是水仙花数。

---

#### 【题目30】阅读以下程序，分析完数判断。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 6;
    int sum = 0;
    for (int i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        cout << n << "是完数" << endl;
    } else {
        cout << n << "不是完数" << endl;
    }
    return 0;
}
```

**问题：程序运行后输出的结果是（ ）**

A. 6是完数  
B. 6不是完数  
C. 程序报错  
D. 无输出

**答案：A**

**解析：** 完数是指一个数等于它的因子之和（不包括本身）。6的因子有1,2,3，1+2+3=6，所以6是完数。

---

#### 【题目31】阅读以下程序，分析十进制转二进制。

```cpp
#include <iostream>
using namespace std;
int main() {
    int n = 13;
    int binary = 0;
    int base = 1;
    while (n > 0) {
        int remainder = n % 2;
        binary = binary + remainder * base;
        base = base * 10;
        n = n / 2;
    }
    cout << "二进制 = " << binary << endl;
    return 0;
}
```

**问题：程序运行后binary的值是（ ）**

A. 1101  
B. 1011  
C. 13  
D. 110

**答案：A**

**解析：** 13转二进制：13/2=6余1，6/2=3余0，3/2=1余1，1/2=0余1。倒序读取余数得1101。

---

#### 【题目32】阅读以下程序，分析数组最大值查找。

```cpp
#include <iostream>
using namespace std;
int main() {
    int arr[6] = {3, 7, 2, 9, 5, 1};
    int max = arr[0];
    for (int i = 1; i < 6; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    cout << "最大值 = " << max << endl;
    return 0;
}
```

**问题：程序运行后max的值是（ ）**

A. 1  
B. 9  
C. 7  
D. 3

**答案：B**

**解析：** 遍历数组，初始max=3，遇到7更新max=7，遇到9更新max=9，最终max=9。

---

#### 【题目33】阅读以下程序，分析选择排序第一趟。

```cpp
#include <iostream>
using namespace std;
int main() {
    int arr[5] = {5, 3, 8, 1, 2};
    int minIndex = 0;
    for (int j = 1; j < 5; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
    int temp = arr[0];
    arr[0] = arr[minIndex];
    arr[minIndex] = temp;
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

**问题：程序运行后数组arr的输出是（ ）**

A. 1 3 8 5 2  
B. 1 3 8 5 2  
C. 5 3 8 1 2  
D. 3 5 8 1 2

**答案：A**

**解析：** 选择排序第一趟找最小元素1（下标3），与arr[0]交换，结果：1 3 8 5 2。

---

#### 【题目34】阅读以下程序，分析字符统计。

```cpp
#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char str[] = "Hello123";
    int letterCount = 0;
    int digitCount = 0;
    for (int i = 0; str[i] != '\0'; i++) {
        if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {
            letterCount++;
        } else if (str[i] >= '0' && str[i] <= '9') {
            digitCount++;
        }
    }
    cout << letterCount << " " << digitCount << endl;
    return 0;
}
```

**问题：程序运行后输出的结果是（ ）**

A. 5 3  
B. 8 0  
C. 3 5  
D. 0 8

**答案：A**

**解析：** "Hello123"中，字母H,e,l,l,o共5个，数字1,2,3共3个。输出"5 3"。

---

## 第五部分 参考答案

### 第一部分 阅读程序题（一级）参考答案

| 题目 | 答案 | 关键点 |
|:---:|:---:|:---|
| 题目1 | B | 1MB = 1024 × 1024 = 1048576字节 |
| 题目2 | C | 两个if条件都成立，输出2行 |
| 题目3 | C | int最大值加1溢出为最小值-2147483648 |
| 题目4 | A | 整数/浮点数=浮点数2.5；整数/整数=整数2 |
| 题目5 | C | true+false = 1+0 = 1 |
| 题目6 | B | 取模运算等于a - b*(a/b) |
| 题目7 | A | 后置自增先用后加，前置自增先加后用 |
| 题目8 | A | 三个逻辑表达式结果都为true(1) |
| 题目9 | A | cin按类型分割输入 |
| 题目10 | A | setprecision控制小数位数 |
| 题目11 | C | 75分满足>=60的条件 |
| 题目12 | A | 嵌套if判断三个数大小 |
| 题目13 | B | 1+2+...+10 = 55 |
| 题目14 | B | 计算12345的位数，共5位 |
| 题目15 | C | 5! = 1×2×3×4×5 = 120 |
| 题目16 | B | do-while循环1+2+3+4+5=15 |
| 题目17 | C | break在i=5时跳出，累加1+2+3+4=10 |
| 题目18 | B | continue跳过i=3，累加1+2+4+5=12 |

### 第二部分 阅读程序题（二级）参考答案

| 题目 | 答案 | 关键点 |
|:---:|:---:|:---|
| 题目16 | C | switch匹配case 2，days=28 |
| 题目17 | B | 外层控制行数，内层控制每行星号数 |
| 题目18 | B | 九九乘法表，i=3时输出1*3到3*3 |
| 题目19 | B | pow(2,3) = 2³ = 8 |
| 题目20 | D | sqrt返回double类型 |
| 题目21 | B | 大小写字母ASCII码相差32 |
| 题目22 | A | 'D'-3='A'，'D'+3='G' |
| 题目23 | A | '7'-'0'=7，7*2=14 |
| 题目24 | C | (int)7.8=7，int(7.8+0.5)=8 |

### 综合练习题参考答案

| 题目 | 答案 | 关键点 |
|:---:|:---:|:---|
| 题目23 | B | 各位数字之和：1+2+3=6 |
| 题目24 | C | 辗转相减法求GCD(24,18)=6 |
| 题目25 | A | 17是素数，循环未找到因子 |
| 题目26 | A | 斐波那契数列前6项 |
| 题目27 | B | 一趟冒泡排序结果 |
| 题目28 | B | 数字反转：1234→4321 |
| 题目29 | A | 153=1³+5³+3³，是水仙花数 |
| 题目30 | A | 6=1+2+3，是完数 |
| 题目31 | A | 13转二进制得1101 |
| 题目32 | B | 数组最大值是9 |
| 题目33 | A | 选择排序第一趟结果 |
| 题目34 | A | Hello123中有5字母3数字 |

---

> 本练习题基于CCF GESP官方大纲和真题整理，适合4-5年级学生C++编程入门学习使用。
