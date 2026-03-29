# GESP C++ switch专题练习（深度理解版）

**10道大题 · 每题9小题（3选择+3判断+3填空）**

**设计目标：验证学生是否真正理解switch语句的工作原理和使用规范**

---

## 【大题1】switch的基础语法

**考察点**：理解switch语句的基本结构和执行规则

```cpp
#include <iostream>
using namespace std;

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            cout << "星期一" << endl;
            break;
        case 2:
            cout << "星期二" << endl;
            break;
        case 3:
            cout << "星期三" << endl;
            break;
        case 4:
            cout << "星期四" << endl;
            break;
        default:
            cout << "其他" << endl;
    }
    
    cout << "程序结束" << endl;
    return 0;
}
```

### 一、选择题

**1. 当day=3时，程序的输出是（ ）**

A. 星期一  
B. 星期三  
C. 星期三，换行，程序结束  
D. 星期一，星期二，星期三...

**2. switch语句中，括号内的表达式必须是（ ）**

A. 浮点数  
C. 整型或字符型  
B. 字符串  
D. 任意类型

**3. case后面的值必须是（ ）**

A. 变量  
B. 常量表达式  
C. 表达式  
D. 浮点数

### 二、判断题

**4. switch语句用于多分支选择，根据表达式的值跳转到对应的case执行。**  
（ ）正确 （ ）错误

**5. case后面的常量值必须是唯一的，不能重复。**  
（ ）正确 （ ）错误

**6. switch语句比多个if-else效率更高，因为它使用跳转表实现。**  
（ ）正确 （ ）错误

### 三、填空题

**7. switch的基本格式是：`switch (______) { case 常量1: ...; case 常量2: ...; ... }`**

**8. case后面的值必须是______（变量/常量），且类型必须与______表达式兼容。**

**9. switch语句中，表达式的值与case后面的______值进行比较，相等则执行该case后的语句。**

---

**解析关键点**：
- day=3，匹配case 3，输出"星期三"，break跳出
- switch表达式必须是整型或字符型
- case后面必须是常量

---

## 【大题2】break的作用与穿透

**考察点**：理解break的作用和case穿透现象

```cpp
#include <iostream>
using namespace std;

int main() {
    // 例1：有break
    int score = 85;
    switch (score / 10) {
        case 10:
        case 9:
            cout << "A" << endl;
            break;
        case 8:
            cout << "B" << endl;
            break;
        case 7:
            cout << "C" << endl;
            break;
        default:
            cout << "D" << endl;
    }
    
    // 例2：没有break（穿透）
    int num = 2;
    switch (num) {
        case 1:
            cout << "一" << endl;
        case 2:
            cout << "二" << endl;
        case 3:
            cout << "三" << endl;
        default:
            cout << "其他" << endl;
    }
    
    return 0;
}
```

### 一、选择题

**1. 例1的输出是（ ）**

A. A  
B. B  
C. C  
D. D

**2. 例2的输出是（ ）**

A. 二  
B. 二，换行，三，换行，其他  
C. 一，换行，二，换行，三...  
D. 其他

**3. 为什么例2会输出多个结果（ ）**

A. 因为num=2匹配多个case  
B. 因为没有break，会继续执行后面的case（穿透）  
C. 因为default会执行  
D. 程序出错

### 二、判断题

**4. break用于跳出switch语句，防止继续执行后面的case。**  
（ ）正确 （ ）错误

**5. 如果没有break，程序会继续执行下一个case的代码，这种现象称为"穿透"。**  
（ ）正确 （ ）错误

**6. 多个case可以共享相同的代码，如case 10和case 9都输出"A"。**  
（ ）正确 （ ）错误

### 三、填空题

**7. break的作用是______（跳出/继续）switch语句。**

**8. 没有break时，程序会继续执行______（当前/下一个）case的代码，称为______。**

**9. 如果需要多个case执行相同代码，可以省略中间的______。**

---

**解析关键点**：
- 85/10=8，匹配case 8，输出"B"，break跳出
- num=2，输出"二"，没有break，继续执行case 3输出"三"，继续执行default输出"其他"
- 这种现象称为"穿透"

---

## 【大题3】default的使用

**考察点**：理解default的作用和使用场景

```cpp
#include <iostream>
using namespace std;

int main() {
    int month = 13;
    
    switch (month) {
        case 1:
            cout << "一月" << endl;
            break;
        case 2:
            cout << "二月" << endl;
            break;
        case 3:
            cout << "三月" << endl;
            break;
        default:
            cout << "无效的月份" << endl;
    }
    
    // 没有default的情况
    int num = 5;
    switch (num) {
        case 1:
            cout << "1" << endl;
            break;
        case 2:
            cout << "2" << endl;
            break;
    }
    cout << "结束" << endl;
    
    return 0;
}
```

### 一、选择题

**1. month=13时，输出是（ ）**

A. 一月  
B. 三月  
C. 无效的月份  
D. 什么都不输出

**2. num=5时，输出是（ ）**

A. 5  
B. 结束  
C. 1  
D. 什么都不输出

**3. default的作用是（ ）**

A. 必须放在第一位  
B. 处理所有不匹配case的情况  
C. 与case相同  
D. 可以省略

### 二、判断题

**4. default用于处理所有case都不匹配的情况，起到"兜底"的作用。**  
（ ）正确 （ ）错误

**5. default可以省略，如果没有default且没有匹配的case，则switch什么都不执行。**  
（ ）正确 （ ）错误

**6. default可以放在switch的任何位置（开头、中间、结尾），但通常放在最后。**  
（ ）正确 （ ）错误

### 三、填空题

**7. default用于处理______（匹配/不匹配）任何case的情况。**

**8. default______（必须/可以）放在最后，但通常放在最后以提高可读性。**

**9. 如果没有匹配的case且没有default，switch会______（报错/什么都不做）。**

---

**解析关键点**：
- month=13不匹配任何case，执行default，输出"无效的月份"
- num=5不匹配任何case，没有default，什么都不执行，输出"结束"
- default可以放在任何位置，但通常放在最后

---

## 【大题4】switch与if-else if的对比

**考察点**：理解switch和if-else if的区别和适用场景

```cpp
#include <iostream>
using namespace std;

int main() {
    int choice = 2;
    
    // switch写法
    cout << "switch：";
    switch (choice) {
        case 1:
            cout << "选项1" << endl;
            break;
        case 2:
            cout << "选项2" << endl;
            break;
        case 3:
            cout << "选项3" << endl;
            break;
        default:
            cout << "无效选项" << endl;
    }
    
    // if-else if写法
    cout << "if-else if：";
    if (choice == 1) {
        cout << "选项1" << endl;
    } else if (choice == 2) {
        cout << "选项2" << endl;
    } else if (choice == 3) {
        cout << "选项3" << endl;
    } else {
        cout << "无效选项" << endl;
    }
    
    return 0;
}
```

### 一、选择题

**1. 两种写法的输出（ ）**

A. 完全不同  
B. 完全相同  
C. switch输出选项2，if-else if什么都不输出  
D. 编译错误

**2. switch适合什么场景（ ）**

A. 范围判断（如score >= 80）  
B. 离散值的相等判断（如choice == 1, 2, 3）  
C. 复杂条件判断  
D. 所有场景

**3. 以下哪种情况不适合用switch（ ）**

A. 星期几的判断  
B. 成绩等级（A, B, C, D）  
C. 成绩范围（>=90, >=80）  
D. 菜单选项

### 二、判断题

**4. switch适合判断离散值的相等情况，if-else if可以处理范围和复杂条件。**  
（ ）正确 （ ）错误

**5. 当条件是相等判断且值是离散的时候，switch比if-else if更清晰。**  
（ ）正确 （ ）错误

**6. switch只能处理整型和字符型，if-else if可以处理任何类型和条件。**  
（ ）正确 （ ）错误

### 三、填空题

**7. switch适合处理______（离散值/范围）的______（相等/不等）判断。**

**8. 对于范围判断（如score >= 80），应该使用______（switch/if-else if）。**

**9. switch的表达式必须是______（整型/浮点型/任意）或字符型。**

---

**解析关键点**：
- 两种写法结果相同，都输出"选项2"
- switch适合离散值相等判断
- 范围判断用if-else if更合适

---

## 【大题5】switch中的常见错误

**考察点**：识别和避免switch的常见错误

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 1;
    
    // 错误1：case后面是变量
    // case x:  // 编译错误！
    
    // 错误2：case值重复
    /*
    switch (x) {
        case 1: ...
        case 1: ...  // 编译错误！重复
    }
    */
    
    // 错误3：缺少break导致穿透
    int num = 1;
    cout << "错误3：";
    switch (num) {
        case 1:
            cout << "一" << endl;
            // 忘记break！
        case 2:
            cout << "二" << endl;
            break;
    }
    
    // 错误4：case后面不是常量
    int y = 2;
    // case y:  // 编译错误！
    
    return 0;
}
```

### 一、选择题

**1. 错误3的输出是（ ）**

A. 一  
B. 二  
C. 一，换行，二  
D. 什么都不输出

**2. 以下哪个是合法的case（ ）**

A. case x:  
B. case 1+2:  
C. case 3.14:  
D. case "hello":

**3. case值重复会导致（ ）**

A. 运行时错误  
B. 编译错误  
C. 逻辑错误  
D. 没有问题

### 二、判断题

**4. case后面必须是常量表达式，不能是变量。**  
（ ）正确 （ ）错误

**5. 缺少break会导致case穿透，可能产生逻辑错误。**  
（ ）正确 （ ）错误

**6. switch中的case值必须是唯一的，不能重复。**  
（ ）正确 （ ）错误

### 三、填空题

**7. case后面必须是______（常量/变量）表达式。**

**8. 忘记写______会导致case穿透，继续执行下一个case。**

**9. case值______（可以/不可以）重复。**

---

**解析关键点**：
- 错误3：num=1，输出"一"，没有break，继续执行case 2输出"二"
- case后面必须是常量，case 1+2（常量表达式）是合法的
- case值重复会导致编译错误

---

## 【大题6】字符类型的switch

**考察点**：理解switch对字符类型的支持

```cpp
#include <iostream>
using namespace std;

int main() {
    char grade = 'B';
    
    switch (grade) {
        case 'A':
            cout << "优秀" << endl;
            break;
        case 'B':
            cout << "良好" << endl;
            break;
        case 'C':
            cout << "中等" << endl;
            break;
        case 'D':
            cout << "及格" << endl;
            break;
        case 'F':
            cout << "不及格" << endl;
            break;
        default:
            cout << "无效等级" << endl;
    }
    
    // 大小写转换
    char ch = 'a';
    switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            cout << ch << "是元音" << endl;
            break;
        default:
            cout << ch << "不是元音" << endl;
    }
    
    return 0;
}
```

### 一、选择题

**1. grade='B'时，输出是（ ）**

A. 优秀  
B. 良好  
C. 中等  
D. 无效等级

**2. ch='a'时，输出是（ ）**

A. a是元音  
B. a不是元音  
C. 什么都不输出  
D. 编译错误

**3. switch______处理字符类型（ ）**

A. 可以  
B. 不可以  
C. 只能处理整数  
D. 只能处理字符串

### 二、判断题

**4. switch可以处理字符类型，因为字符本质上就是整数（ASCII码）。**  
（ ）正确 （ ）错误

**5. case 'A' 是合法的，字符常量可以作为case的值。**  
（ ）正确 （ ）错误

**6. 多个case可以共享代码，如所有元音字母都输出"是元音"。**  
（ ）正确 （ ）错误

### 三、填空题

**7. switch______（可以/不可以）处理字符类型，因为字符本质是______码。**

**8. case ______（'A'/"A"/A）是合法的字符常量写法。**

**9. 判断多个字符（如元音）可以省略中间的______让它们共享代码。**

---

**解析关键点**：
- grade='B'，匹配case 'B'，输出"良好"
- ch='a'，匹配case 'a'，没有break，穿透到case 'e'...，最后输出"a是元音"
- 字符本质是ASCII码，switch可以处理

---

## 【大题7】switch的实际应用

**考察点**：switch在实际问题中的应用

```cpp
#include <iostream>
using namespace std;

int main() {
    // 应用1：简单计算器
    int a = 10, b = 5;
    char op = '+';
    
    switch (op) {
        case '+':
            cout << a + b << endl;
            break;
        case '-':
            cout << a - b << endl;
            break;
        case '*':
            cout << a * b << endl;
            break;
        case '/':
            if (b != 0)
                cout << a / b << endl;
            else
                cout << "除数不能为0" << endl;
            break;
        default:
            cout << "无效运算符" << endl;
    }
    
    // 应用2：月份天数
    int month = 2;
    int year = 2024;
    int days;
    
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                days = 29;
            else
                days = 28;
            break;
        default:
            days = 0;
    }
    cout << month << "月有" << days << "天" << endl;
    
    return 0;
}
```

### 一、选择题

**1. op='+'时，计算器输出是（ ）**

A. 5  
B. 10  
C. 15  
D. 2

**2. month=2, year=2024时，days的值是（ ）**

A. 28  
B. 29  
C. 30  
D. 31

**3. switch中______嵌套if语句（ ）**

A. 可以  
B. 不可以  
C. 只能在default中  
D. 只能在case中

### 二、判断题

**4. switch常用于实现菜单选择、运算符判断等功能。**  
（ ）正确 （ ）错误

**5. switch的case中可以再嵌套if语句，实现更复杂的逻辑。**  
（ ）正确 （ ）错误

**6. 多个case可以放在同一行，如`case 1: case 3: case 5:`表示都执行相同代码。**  
（ ）正确 （ ）错误

### 三、填空题

**7. switch常用于实现______选择、______判断等功能。**

**8. case中______（可以/不可以）嵌套if语句。**

**9. 多个case可以写在同一行，用______分隔，表示共享代码。**

---

**解析关键点**：
- op='+'，10+5=15
- 2024是闰年，2月有29天
- switch的case中可以嵌套if

---

## 【大题8】switch的优化与注意事项

**考察点**：switch的性能优化和使用注意事项

```cpp
#include <iostream>
using namespace std;

int main() {
    // 优化：将高频case放在前面（某些编译器可能优化）
    int choice = 1;
    switch (choice) {
        case 1:  // 高频选项放前面
            cout << "选项1（常用）" << endl;
            break;
        case 2:
            cout << "选项2" << endl;
            break;
        default:
            cout << "其他" << endl;
    }
    
    // 注意事项：不要忘记default
    int num = 100;
    switch (num) {
        case 1:
            cout << "1" << endl;
            break;
        case 2:
            cout << "2" << endl;
            break;
        // 忘记default！
    }
    cout << "switch结束" << endl;
    
    return 0;
}
```

### 一、选择题

**1. choice=1时，输出是（ ）**

A. 选项1（常用）  
B. 选项2  
C. 其他  
D. 什么都不输出

**2. num=100时，输出是（ ）**

A. 100  
B. switch结束  
C. 编译错误  
D. 运行时错误

**3. switch语句执行完后，程序会（ ）**

A. 自动退出程序  
B. 继续执行switch后面的语句  
C. 进入default  
D. 进入case 1

### 二、判断题

**4. switch语句执行完后（无论是否匹配），程序会继续执行switch后面的语句。**  
（ ）正确 （ ）错误

**5. 建议始终保留default，处理意外情况。**  
（ ）正确 （ ）错误

**6. case的顺序理论上不影响功能，但将高频case放前面可能有助于某些优化。**  
（ ）正确 （ ）错误

### 三、填空题

**7. switch执行完后，程序继续执行switch______（内/后）的语句。**

**8. 建议始终保留______处理意外情况，增强代码的健壮性。**

**9. 某些编译器会根据case的______（顺序/值）生成跳转表优化执行效率。**

---

**解析关键点**：
- choice=1匹配case 1，输出"选项1（常用）"
- num=100不匹配任何case，没有default，什么都不执行，继续输出"switch结束"
- 建议保留default

---

## 【大题9】switch的限制与替代方案

**考察点**：理解switch的限制和何时使用if替代

```cpp
#include <iostream>
using namespace std;

int main() {
    double score = 85.5;  // 浮点数
    
    // 不能用switch，因为浮点数不能精确比较
    // switch (score) {  // 编译错误！
    
    // 用if-else if替代
    if (score >= 90) {
        cout << "A" << endl;
    } else if (score >= 80) {
        cout << "B" << endl;
    } else if (score >= 70) {
        cout << "C" << endl;
    } else {
        cout << "D" << endl;
    }
    
    // 字符串也不能用switch（C++98/03）
    string name = "Monday";
    // switch (name) {  // 编译错误！
    
    // 用if-else if替代
    if (name == "Monday") {
        cout << "星期一" << endl;
    } else if (name == "Tuesday") {
        cout << "星期二" << endl;
    } else {
        cout << "其他" << endl;
    }
    
    return 0;
}
```

### 一、选择题

**1. score=85.5时，输出是（ ）**

A. A  
B. B  
C. C  
D. D

**2. switch______处理浮点数（ ）**

A. 可以  
B. 不可以  
C. 只能处理整数  
D. 只能处理字符

**3. switch______处理字符串（C++98/03）（ ）**

A. 可以  
B. 不可以  
C. 只能处理基本类型  
D. 只能处理指针

### 二、判断题

**4. switch不能处理浮点数，因为浮点数不能精确相等比较。**  
（ ）正确 （ ）错误

**5. 旧版本C++（C++98/03）中，switch不能处理字符串类型。**  
（ ）正确 （ ）错误

**6. 对于浮点数、字符串或复杂条件，应该使用if-else if而不是switch。**  
（ ）正确 （ ）错误

### 三、填空题

**7. switch______（可以/不可以）处理浮点数，因为浮点数不能______比较。**

**8. 旧版本C++中，switch______（可以/不可以）处理字符串。**

**9. 对于______、______或复杂条件，应该使用if-else if替代switch。**

---

**解析关键点**：
- 85.5>=80且<90，输出"B"
- switch不能处理浮点数和字符串（旧版C++）
- 这些情况用if-else if更合适

---

## 【大题10】switch的综合应用

**考察点**：switch的综合应用和最佳实践

```cpp
#include <iostream>
using namespace std;

int main() {
    // 综合应用：游戏状态处理
    int state = 2;  // 1:开始 2:进行中 3:暂停 4:结束
    
    switch (state) {
        case 1:
            cout << "游戏开始！" << endl;
            // 初始化游戏...
            break;
        case 2:
            cout << "游戏进行中..." << endl;
            // 更新游戏逻辑...
            break;
        case 3:
            cout << "游戏暂停" << endl;
            // 显示暂停菜单...
            break;
        case 4:
            cout << "游戏结束！" << endl;
            // 结算分数...
            break;
        default:
            cout << "未知状态" << endl;
            break;
    }
    
    // 最佳实践：枚举类型与switch
    enum Color { RED, GREEN, BLUE };
    Color c = GREEN;
    
    switch (c) {
        case RED:
            cout << "红色" << endl;
            break;
        case GREEN:
            cout << "绿色" << endl;
            break;
        case BLUE:
            cout << "蓝色" << endl;
            break;
        default:
            cout << "未知颜色" << endl;
    }
    
    return 0;
}
```

### 一、选择题

**1. state=2时，输出是（ ）**

A. 游戏开始！  
B. 游戏进行中...  
C. 游戏暂停  
D. 游戏结束！

**2. c=GREEN时，输出是（ ）**

A. 红色  
B. 绿色  
C. 蓝色  
D. 未知颜色

**3. switch非常适合处理（ ）**

A. 连续变化的数值  
B. 离散的状态或选项  
C. 复杂数学计算  
D. 文件读写

### 二、判断题

**4. switch非常适合处理游戏状态、菜单选项等离散的状态值。**  
（ ）正确 （ ）错误

**5. 枚举类型与switch结合使用可以使代码更清晰、更易维护。**  
（ ）正确 （ ）错误

**6. 在switch的每个case末尾都加上break是良好的编程习惯（除非故意利用穿透）。**  
（ ）正确 （ ）错误

### 三、填空题

**7. switch非常适合处理游戏______、菜单______等离散的状态值。**

**8. ______类型与switch结合使用可以使代码更清晰。**

**9. 良好的编程习惯：每个case末尾都加上______（除非故意利用______）。**

---

**解析关键点**：
- state=2匹配case 2，输出"游戏进行中..."
- GREEN是枚举值，匹配case GREEN，输出"绿色"
- switch适合处理离散状态

---

## 参考答案

| 大题 | 选择1 | 选择2 | 选择3 | 判断4 | 判断5 | 判断6 | 填空7 | 填空8 | 填空9 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | C | C | B | 正确 | 正确 | 正确 | 表达式 | 常量, switch | 常量 |
| 2 | B | B | B | 正确 | 正确 | 正确 | 跳出 | 下一个, 穿透 | break |
| 3 | C | B | B | 正确 | 正确 | 正确 | 不匹配 | 可以 | 什么都不做 |
| 4 | B | B | C | 正确 | 正确 | 正确 | 离散值, 相等 | if-else if | 整型 |
| 5 | C | B | B | 正确 | 正确 | 正确 | 常量 | break | 不可以 |
| 6 | B | A | A | 正确 | 正确 | 正确 | 可以, ASCII | 'A' | break |
| 7 | C | B | A | 正确 | 正确 | 正确 | 菜单, 运算符 | 可以 | 冒号 |
| 8 | A | B | B | 正确 | 正确 | 正确 | 后 | default | 值 |
| 9 | B | B | B | 正确 | 正确 | 正确 | 不可以, 精确 | 不可以 | 浮点数, 字符串 |
| 10 | B | B | B | 正确 | 正确 | 正确 | 状态, 选项 | 枚举 | break, 穿透 |

---

## 评分标准

| 题型 | 分值 | 说明 |
|:---:|:---:|:---|
| 选择题 | 3分/题 | 考察核心概念 |
| 判断题 | 2分/题 | 考察易错点辨析 |
| 填空题 | 2分/空 | 考察准确记忆 |
| **总分** | **90分** | **10大题 × 9分** |

## 评价标准

| 得分 | 等级 | 说明 |
|:---:|:---:|:---|
| 81-90 | 优秀 | 真正掌握switch，能灵活运用 |
| 72-80 | 良好 | 基本掌握，少量细节需加强 |
| 63-71 | 及格 | 概念模糊，需要重新系统学习 |
| <63 | 需努力 | 基础薄弱，建议多做实验验证 |

---

## switch速查表

| 知识点 | 说明 | 示例 |
|:---|:---|:---|
| 基本格式 | `switch (表达式) { case 常量: ... }` | `switch (n) { case 1: ... }` |
| 表达式类型 | 整型或字符型 | int, char |
| case | 后面必须是常量 | `case 1:`, `case 'A':` |
| break | 跳出switch，防止穿透 | 通常每个case末尾都加 |
| 穿透 | 没有break会继续执行下一个case | 有时故意利用 |
| default | 处理不匹配的情况 | 通常放最后 |
| 适用场景 | 离散值的相等判断 | 菜单、状态、运算符 |

---

## 核心要点总结

### switch使用检查清单

- [ ] 表达式必须是整型或字符型
- [ ] case后面必须是常量（不能是变量）
- [ ] case值不能重复
- [ ] 通常每个case末尾都加break（除非故意利用穿透）
- [ ] 建议保留default处理意外情况
- [ ] switch适合离散值的相等判断
- [ ] 范围判断用if-else if更合适
- [ ] 不能处理浮点数和字符串（旧版C++）

### 常见错误对比

| 错误 | 问题 | 正确做法 |
|:---|:---|:---|
| case后面是变量 | 编译错误 | case后面必须是常量 |
| case值重复 | 编译错误 | case值必须唯一 |
| 忘记break | 穿透，逻辑错误 | 每个case加break（除非故意） |
| 没有default | 意外情况未处理 | 保留default |
| 处理浮点数 | 不能精确比较 | 用if-else if |

### switch与if-else if对比

| 特性 | switch | if-else if |
|:---|:---|:---|
| 适用场景 | 离散值相等判断 | 范围判断、复杂条件 |
| 表达式 | 整型、字符型 | 任意类型 |
| 条件 | 只能判断相等 | 可以判断任意条件 |
| 效率 | 可能更高（跳转表） | 逐个判断 |
| 可读性 | 离散值时更清晰 | 范围判断时更清晰 |

### GESP一级switch考点

1. **基本语法**：switch-case-break-default的结构
2. **break作用**：跳出switch，防止穿透
3. **穿透现象**：没有break会继续执行下一个case
4. **多个case共享**：省略中间的break
5. **default作用**：处理不匹配的情况
6. **适用场景**：离散值的相等判断（菜单、状态等）
7. **限制**：不能处理浮点数、字符串（旧版）、范围判断
