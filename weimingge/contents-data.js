// 微明阁·竞赛 - 完整七卷内容
const WEIMINGGE_CONTENTS = {
    vol1: `# 卷一·IO层：输入输出的暗面与真相

> **卷首语**：
> 
> 「cin >>」四字看似简单，实则暗藏杀机。
> 多少人因一个空格WA，因一次TLE饮恨赛场。
> 此卷所录，皆为实战中血与泪换来的教训。

---

## 1.1 cin >> 的隐藏缓冲区陷阱

### 🕳️ 陷阱描述

cin >> 在读取字符串时，会以**空白字符**（空格、换行、制表符）作为分隔符。这意味着你无法直接读取包含空格的整行输入。

### ❌ 错误示例

\`\`\`cpp
string s;
cin >> s;  
// 输入: "hello world"
// 结果: s = "hello"（world 被留在缓冲区！）
\`\`\`

### ✅ 正确方案

**方案一：使用 getline 读取整行**
\`\`\`cpp
string s;
getline(cin, s);  // s = "hello world"（包含空格）
\`\`\`

**方案二：循环读取所有单词**
\`\`\`cpp
string word;
while (cin >> word) {  // 逐个读取，以空白分隔
    cout << word << endl;
}
\`\`\`

**方案三：确定单词数量时**
\`\`\`cpp
int n;
cin >> n;
vector<string> words(n);
for (int i = 0; i < n; i++) {
    cin >> words[i];  // 已知数量时可用
}
\`\`\`

### 💡 深度解析

cin >> 使用 \\\"operator>>\\\" 重载，其默认分隔符为 isspace() 返回真的字符：
- 空格 (0x20)
- 换行 (0x0A)  
- 制表 (0x09)
- 回车 (0x0D)
- 换页 (0x0C)
- 垂直制表 (0x0B)

---

## 1.2 getline 与 cin 混用的换行符灾难

### 🕳️ 陷阱描述

cin >> 会在输入流中留下换行符，随后调用 getline 会读取到这个空行，导致逻辑错误。

### ❌ 错误示例

\`\`\`cpp
int n;
string s;
cin >> n;        // 输入: 42\\n
getline(cin, s); // s = ""（读到了残留的 \\n！）
\`\`\`

### ✅ 正确方案

**方案一：使用 cin.ignore() 清除残留**
\`\`\`cpp
int n;
string s;
cin >> n;
cin.ignore();    // 忽略一个字符（\\n）
getline(cin, s); // 正常工作
\`\`\`

**方案二：清除整行残留**
\`\`\`cpp
int n;
string s;
cin >> n;
cin.ignore(numeric_limits<streamsize>::max(), '\\n');
getline(cin, s);
\`\`\`

**方案三：统一使用 getline + stoi**
\`\`\`cpp
string line;
getline(cin, line);
int n = stoi(line);  // 转换失败会抛异常
getline(cin, s);
\`\`\`

### 🔧 ignore() 参数详解

\`\`\`cpp
cin.ignore(count, delimiter);
// count: 最多忽略多少字符
// delimiter: 遇到此字符停止（该字符也被忽略）
\`\`\`

---

## 1.3 文件末尾的多余换行符

### 🕳️ 陷阱描述

某些 OJ 的输入文件末尾有额外换行符，使用 while(cin >> x) 时可能多读取一次无效数据。

### ❌ 错误示例

\`\`\`cpp
// 假设输入: \"1 2 3\\n\\n\"（两个换行）
while (cin >> x) {
    v.push_back(x);  // 可能多读入额外的 0 或残留值
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：读取指定数量
int n;
cin >> n;
while (n--) {
    cin >> x;
    v.push_back(x);
}

// 方案二：读取到哨兵值
while (cin >> x && x != -1) {
    v.push_back(x);
}

// 方案三：安全检查
if (cin >> x) {
    do {
        v.push_back(x);
    } while (cin >> x);
}
\`\`\`

---

## 1.4 scanf 的缓冲区溢出隐患

### 🕳️ 陷阱描述

使用 %s 读取字符串时，如果不指定宽度，可能导致缓冲区溢出，引发安全漏洞或段错误。

### ❌ 错误示例

\`\`\`cpp
char s[10];
scanf("%s", s);  
// 输入: "this_is_very_long_string"
// 结果: 缓冲区溢出！栈被破坏！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
char s[10];
// 方案一：指定最大宽度（留一位给 \\0）
scanf("%9s", s);  // 最多读取9个字符

// 方案二：使用 string（推荐）
string s;
cin >> s;  // 自动管理内存

// 方案三：使用 fgets
char s[10];
fgets(s, sizeof(s), stdin);
\`\`\`

---

## 1.5 printf 的格式字符串漏洞

### 🕳️ 陷阱描述

直接使用用户输入作为 printf 格式字符串，可能导致程序崩溃或信息泄露。

### ❌ 危险代码

\`\`\`cpp
char userInput[100];
scanf("%s", userInput);
printf(userInput);  // 危险！如果输入包含 %s 或 %n
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 始终使用固定的格式字符串
printf("%s", userInput);  // 安全

// 或使用 puts
puts(userInput);  // 自动添加换行，更安全

// C++ 推荐：使用 cout
cout << userInput;
\`\`\`

---

## 1.6 浮点数输出的精度陷阱

### 🕳️ 陷阱描述

cout 默认只显示6位有效数字，double 的精度可能被截断，导致 WA。

### ❌ 错误示例

\`\`\`cpp
double x = 1.23456789;
cout << x;  // 输出: 1.23457（被四舍五入了！）
\`\`\`

### ✅ 正确方案

\`\`\`cpp
#include <iomanip>

double x = 1.23456789;

// 方案一：设置精度
cout << fixed << setprecision(8) << x;  // 1.23456789

// 方案二：科学计数法
cout << scientific << setprecision(8) << x;

// 方案三：printf（注意 double 用 %lf）
printf("%.8f\\n", x);
\`\`\`

### 📊 精度选择指南

| 场景 | 推荐精度 |
|:---|:---:|
| 一般计算 | 6-8 位 |
| 高精度要求 | 10-12 位 |
| 科学计数法 | 6 位 + scientific |

---

## 1.7 输出刷新与缓冲区陷阱

### 🕳️ 陷阱描述

在需要实时输出的场景（如交互题），缓冲区未及时刷新可能导致 TLE 或输出顺序错误。

### ❌ 错误示例

\`\`\`cpp
// 交互题
while (true) {
    cout << "? 1 2" << endl;  // 可能有缓冲延迟
    cin >> response;
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：使用 endl（自动刷新）
cout << "? 1 2" << endl;

// 方案二：手动刷新
cout << "? 1 2" << '\\n' << flush;

// 方案三：关闭同步 + 解除绑定
ios::sync_with_stdio(false);
cin.tie(nullptr);
// 注意：此时需要手动管理刷新
\`\`\`

### ⚠️ sync_with_stdio 警告

\`\`\`cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
// 禁用后，不能混用 cin/cout 和 scanf/printf！
\`\`\`

---

## 1.8 多组数据的终止判断

### 🕳️ 陷阱描述

处理多组数据时，终止条件判断错误是常见 WA 原因。

### ❌ 错误示例

\`\`\`cpp
// 题目：以 0 0 结束
while (true) {
    int a, b;
    cin >> a >> b;
    // 处理逻辑...（没有判断终止！）
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：流检查
while (cin >> a >> b) {
    if (a == 0 && b == 0) break;
    // 处理
}

// 方案二：先读后判断
while (true) {
    int a, b;
    cin >> a >> b;
    if (a == 0 && b == 0) break;
    // 处理
}

// 方案三：EOF 终止
while (cin >> a >> b) {
    // 处理，直到文件结束
}
\`\`\`

---

## 1.9 字符串读入的换行残留

### 🕳️ 陷阱描述

混合读取数字和字符串时，数字后的换行符会干扰字符串读取。

### ❌ 错误示例

\`\`\`cpp
int n;
string s;
cin >> n;        // 输入: 3\\n
getline(cin, s); // 期望读 "hello"，实际读到 ""（空行）
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：忽略换行
cin >> n;
cin.ignore();
getline(cin, s);

// 方案二：使用 ws 操纵符
cin >> n >> ws;  // ws 跳过空白
geline(cin, s);

// 方案三：循环读取时统一处理
int n;
cin >> n;
string line;
getline(cin, line);  // 吃掉剩余换行
for (int i = 0; i < n; i++) {
    getline(cin, line);
    // 处理
}
\`\`\`

---

## 1.10 空格与空行的区分处理

### 🕳️ 陷阱描述

某些题目要求区分空格分隔和空行分隔的数据，处理不当导致读取错误。

### ❌ 错误示例

\`\`\`cpp
// 输入: \"\\n1 2 3\\n\\n4 5\\n\"（空行分隔组）
int x;
while (cin >> x) {
    // 无法检测空行分组
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
string line;
while (getline(cin, line)) {
    if (line.empty()) {
        // 处理空行（组分隔）
        continue;
    }
    stringstream ss(line);
    int x;
    while (ss >> x) {
        // 处理该行数字
    }
}
\`\`\`

---

## 1.11 快速 IO 的副作用

### 🕳️ 陷阱描述

\`\`\`ios::sync_with_stdio(false); cin.tie(nullptr);\`\`\` 加速 IO 后，混用 C 和 C++ 的 IO 函数导致未定义行为。

### ❌ 错误示例

\`\`\`cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);

int n;
scanf("%d", &n);  // 混用！未定义行为
cin >> x;
printf("%d\\n", x);
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：完全使用 C++
ios::sync_with_stdio(false);
cin.tie(nullptr);
// 只用 cin/cout

// 方案二：完全使用 C
// 不要用 sync_with_stdio(false)
// 只用 scanf/printf

// 方案三：必须混用时，手动同步
ios::sync_with_stdio(false);
cin.tie(nullptr);
// ... 纯 C++ IO ...
fflush(stdout);  // 强制同步
// ... 纯 C IO ...
\`\`\`

---

## 1.12 文件重定向的调试残留

### 🕳️ 陷阱描述

本地调试时使用的 freopen 忘记删除，提交到 OJ 导致 RE 或 WA。

### ❌ 错误示例

\`\`\`cpp
int main() {
    freopen("input.txt", "r", stdin);   // 忘记删除！
    freopen("output.txt", "w", stdout); // OJ 没有这些文件！
    // ...
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：使用条件编译
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif

// 方案二：使用命令行参数
int main(int argc, char* argv[]) {
    if (argc > 1) {
        freopen(argv[1], "r", stdin);
    }
    // ...
}

// 方案三：IDE 配置（推荐）
// 在 IDE 中设置运行时参数，代码保持干净
\`\`\`

---

## 1.13 大整数输入的处理

### 🕳️ 陷阱描述

超过 64 位的大整数无法用 long long 存储，需要字符串处理。

### ❌ 错误示例

\`\`\`cpp
long long x;  // 最大约 9e18
cin >> x;     // 输入 1e20 会溢出
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：字符串存储 + 逐位处理
string s;
cin >> s;
for (char c : s) {
    int digit = c - '0';
    // 处理每一位
}

// 方案二：高精度类（Java BigInteger 或 C++ 自定义）
struct BigInt {
    vector<int> digits;
    // ...
};

// 方案三：Python（如果允许）
// Python 自动支持大整数
\`\`\`

---

## 1.14 特殊字符的输入处理

### 🕳️ 陷阱描述

输入包含特殊字符（如 \\n, \\t, \\\\）时，直接读取可能不符合预期。

### ❌ 错误示例

\`\`\`cpp
// 输入包含转义字符时
string s;
cin >> s;  // 可能无法正确处理
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：逐字符读取
char c;
while (cin.get(c)) {
    // 处理每个字符
}

// 方案二：使用 get 读取一行
cin.getline(buffer, size);

// 方案三：读取原始字节
#include <cstdio>
char buf[1000];
fread(buf, 1, sizeof(buf), stdin);
\`\`\`

---

## 1.15 输出格式控制的常见错误

### 🕳️ 陷阱描述

题目要求特定格式（如固定宽度、前导零、对齐方式）时，输出不符合要求。

### ❌ 错误示例

\`\`\`cpp
// 要求：输出 4 位数字，不足补零
int x = 42;
cout << x;  // 输出 42，不是 0042！WA！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
#include <iomanip>

int x = 42;

// 固定宽度，前导零
cout << setw(4) << setfill('0') << x;  // 0042

// 左对齐
cout << left << setw(10) << x;  // "42        "

// 右对齐（默认）
cout << right << setw(10) << x;  // "        42"

// printf 格式
printf("%04d\\n", x);    // 0042
printf("%-10d\\n", x);   // 左对齐
printf("%10d\\n", x);    // 右对齐
\`\`\`

### 📋 格式控制速查表

| 需求 | iomanip | printf |
|:---|:---|:---|
| 固定宽度 | setw(n) | %nd |
| 前导零 | setfill('0') | %0nd |
| 左对齐 | left | %-nd |
| 精度 | setprecision(n) | %.nf |
| 定点数 | fixed | %f |
| 科学计数法 | scientific | %e |

---

> **卷一结语**：
> 
> IO 是程序的入口和出口，看似简单却暗藏玄机。
> 熟记此卷十五陷阱，赛场之上，少一份慌张，多一份从容。
`,

    vol2: `# 卷二·语法层：C++ 的隐秘角落

> **卷首语**：
> 
> 语法是编程的基石，亦是陷阱的温床。
> 你以为懂了的语法，在极端情况下可能展现出完全不同的面貌。
> 此卷揭示 C++ 语法中的 20 个隐秘陷阱。

---

## 2.1 有符号整数溢出（UB）

### 🕳️ 陷阱描述

有符号整数溢出是**未定义行为**（Undefined Behavior），编译器可以任意优化，甚至删除你的代码。

### ❌ 错误示例

\`\`\`cpp
int x = 2e9;  // 2,000,000,000
x = x * 2;    // UB! 溢出为负数
if (x > 0) {  // 编译器可能删除此分支！
    cout << "positive";
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：使用 long long
long long x = 2e9;
x *= 2;  // OK: 4e9

// 方案二：使用 unsigned（回绕行为是明确定义的）
unsigned int x = 2e9;
x *= 2;  // OK: 回绕到 4e9

// 方案三：溢出检查
int x = 2e9;
if (x > INT_MAX / 2) {
    // 会溢出，处理错误
}
\`\`\`

### 🔍 检测方法

\`\`\`cpp
// GCC/Clang 编译选项
-ftrapv        // 有符号溢出时触发陷阱
-fsanitize=undefined  // UBSan 检测
\`\`\`

---

## 2.2 无符号整数的"回绕"陷阱

### 🕳️ 陷阱描述

无符号整数运算回绕是明确定义的，但这可能导致意外的无限循环或错误判断。

### ❌ 错误示例

\`\`\`cpp
unsigned n = 5;
for (int i = n - 1; i >= 0; i--) {  // 灾难！
    // 当 i = 0 后，i-- 变成 UINT_MAX
    // 循环永远不会结束！
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：使用有符号索引
int n = 5;
for (int i = n - 1; i >= 0; i--) {  // OK

// 方案二：使用 size_t 但改变循环方向
size_t n = 5;
for (size_t i = n; i-- > 0; ) {  // OK，先判断再减

// 方案三：while 循环
size_t i = n;
while (i--) {  // OK
\`\`\`

---

## 2.3 size_t 与 int 的混用陷阱

### 🕳️ 陷阱描述

size_t（通常为 64 位无符号）与 int（32 位有符号）混用，可能导致比较错误或溢出。

### ❌ 错误示例

\`\`\`cpp
vector<int> v;
// ... 添加元素 ...
for (int i = 0; i < v.size(); i++) {  // 警告！
    // v.size() 返回 size_t，与 int 比较
}

// 更危险的情况
int a = -1;
size_t b = 1;
if (a < b)  // false! -1 被转换为很大的正数
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：使用 size_t
for (size_t i = 0; i < v.size(); i++)

// 方案二：使用 auto
for (auto i = 0; i < v.size(); i++)  // 自动推导

// 方案三：范围 for（推荐）
for (auto& x : v)

// 方案四：强制转换（谨慎使用）
for (int i = 0; i < (int)v.size(); i++)
\`\`\`

---

## 2.4 逗号运算符与逗号分隔符

### 🕳️ 陷阱描述

逗号运算符（,）与函数参数中的逗号分隔符完全不同，优先级也不同。

### ❌ 错误示例

\`\`\`cpp
int a = 1, b = 2;
int x = (a, b);  // x = 2（逗号运算符，取最后一个值）
int y = a, b;    // y = 1（声明两个变量，不是逗号运算符！）
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 逗号运算符的常见用法
for (int i = 0, j = n-1; i < j; i++, j--)  // OK

// for 循环多个变量
double sum = 0;
for (int i = 0; i < n; sum += a[i], i++);  // OK

// 注意优先级
if (a, b)  // 先计算 a（丢弃），再判断 b
\`\`\`

---

## 2.5 赋值运算符的返回值

### 🕳️ 陷阱描述

赋值运算符返回左值的引用，在条件语句中容易与比较运算符混淆。

### ❌ 错误示例

\`\`\`cpp
if (x = 5) {  // 赋值，不是比较！
    // 总是执行，且 x 变成 5
}

while (line = getline(cin, s)) {  // 编译错误
    // ...
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 使用 == 比较
if (x == 5)

// 故意在条件中赋值时，加上括号
while ((line = getline(cin, s)))  // 显式表示意图

// 使用 while 循环读取的标准写法
while (getline(cin, s)) {
    // 使用 s
}
\`\`\`

---

## 2.6 前置 vs 后置自增

### 🕳️ 陷阱描述

后置自增（i++）需要保存旧值，对于复杂类型可能产生额外开销。

### ❌ 低效率示例

\`\`\`cpp
vector<string> v;
// ...
for (auto it = v.begin(); it != v.end(); it++) {
    // it++ 比 ++it 慢（对于迭代器）
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 优先使用前置自增
for (int i = 0; i < n; ++i)  // 内置类型无差别，但这是好习惯

// 迭代器必须用前置
for (auto it = v.begin(); it != v.end(); ++it)

// 范围 for 最简洁
for (const auto& s : v)
\`\`\`

---

## 2.7 位运算的优先级陷阱

### 🕳️ 陷阱描述

位运算符优先级低于算术运算符，不加括号会导致意外结果。

### ❌ 错误示例

\`\`\`cpp
int a = 1, b = 2, c = 4;
int x = a | b + c;   // a | (b + c) = 1 | 6 = 7，不是 7
// 期望: (a | b) + c = 3 + 4 = 7
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 位运算优先级速记（从低到高）：
// |  ^  &  ==  +  <<

// 总是使用括号
int mask = (1 << 3) | (1 << 5);
int result = (a & mask) + (b & mask);
\`\`\`

---

## 2.8 移位运算的边界问题

### 🕳️ 陷阱描述

移位位数 >= 数据宽度，或对负数左移，都是未定义行为。

### ❌ 错误示例

\`\`\`cpp
int x = 1;
x << 32;   // UB! int 只有 32 位
x << -1;   // UB! 负移位
-1 << 1;   // UB! 负数左移
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 确保移位在有效范围内
int shift = min(k, 31);
int result = x << shift;

// 使用 64 位进行大移位
long long result = (long long)x << 40;

// 使用 std::bitset（C++20）
bitset<64> bs(x);
bs <<= k;  // 安全
\`\`\`

---

## 2.9 除零与模零

### 🕳️ 陷阱描述

整数除零是未定义行为，浮点除零产生无穷大或 NaN。

### ❌ 错误示例

\`\`\`cpp
int x = a / b;  // 如果 b == 0，程序崩溃
int y = a % b;  // 同样危险
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 总是检查除数
if (b != 0) {
    x = a / b;
} else {
    // 处理错误
}

// 或使用异常
try {
    if (b == 0) throw runtime_error("Division by zero");
    x = a / b;
} catch (...) {
    // ...
}
\`\`\`

---

## 2.10 浮点数的精度问题

### 🕳️ 陷阱描述

浮点数无法精确表示某些十进制数，直接比较可能导致错误。

### ❌ 错误示例

\`\`\`cpp
if (0.1 + 0.2 == 0.3)  // false！0.30000000000000004

// 循环累积误差
for (double x = 0; x != 1.0; x += 0.1)  // 可能永远循环！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
const double EPS = 1e-9;

// 相等比较
if (abs(a - b) < EPS)

// 小于等于
if (a < b + EPS)

// 循环使用整数
for (int i = 0; i <= 10; i++) {
    double x = i * 0.1;  // 更安全
}
\`\`\`

---

## 2.11 类型转换的截断与提升

### 🕳️ 陷阱描述

隐式类型转换可能导致数据丢失或意外行为。

### ❌ 错误示例

\`\`\`cpp
int a = 1e9;
long long b = a * a;  // 溢出！先计算 int，再提升

double x = 1 / 2;     // 0.0，不是 0.5！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 强制类型转换
long long b = (long long)a * a;

double x = 1.0 / 2;   // 0.5
// 或
double x = static_cast<double>(1) / 2;

// 避免混合类型运算
auto result = 1LL * a * b;  // 确保使用 long long
\`\`\`

---

## 2.12 数组越界访问

### 🕳️ 陷阱描述

C++ 不检查数组边界，越界访问是未定义行为。

### ❌ 错误示例

\`\`\`cpp
int a[10];
a[10] = 5;  // 越界！UB

// 更隐蔽的越界
for (int i = 0; i <= n; i++)  // 注意 <=
    a[i] = i;
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 使用 vector，at() 会检查边界
vector<int> a(10);
a.at(10);  // 抛出 out_of_range 异常

// 使用 assert 检查
assert(i >= 0 && i < n);
a[i] = x;

// 使用 array（C++11）
array<int, 10> a;
// 同样有 at() 方法
\`\`\`

---

## 2.13 指针的空值解引用

### 🕳️ 陷阱描述

对空指针或已释放内存解引用，导致段错误。

### ❌ 错误示例

\`\`\`cpp
int* p = nullptr;
*p = 5;  // 崩溃！

int* q = new int(5);
delete q;
*q = 6;  // 使用已释放内存，UB
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 使用前检查
if (p != nullptr) *p = 5;

// 删除后置空
delete q;
q = nullptr;  // 好习惯

// 使用智能指针
unique_ptr<int> p = make_unique<int>(5);
// 自动管理内存
\`\`\`

---

## 2.14 引用与指针的区别

### 🕳️ 陷阱描述

引用必须初始化且不能重新绑定，容易与指针混淆。

### ❌ 错误示例

\`\`\`cpp
int& r;  // 错误！引用必须初始化

int a = 1, b = 2;
int& r = a;
r = b;   // 不是重新绑定！是给 a 赋值为 b
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 引用必须初始化
int a = 5;
int& r = a;  // OK

// 需要重新绑定时使用指针
int *p = &a;
p = &b;  // OK

// 函数参数选择
void f1(int x);      // 传值
void f2(int& x);     // 传引用（可修改）
void f3(const int& x);  // 传常量引用（高效且安全）
\`\`\`

---

## 2.15 const 的正确使用

### 🕳️ 陷阱描述

const 位置不同含义不同，容易混淆。

### ❌ 错误示例

\`\`\`cpp
const int* p;      // 指向常量的指针
int const* p;      // 同上
int* const p;      // 常量指针（指针本身不能变）
const int* const p; // 指向常量的常量指针
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 记忆口诀：const 修饰左边，如果左边没有则修饰右边

const int* p1;     // *p1 不能变（内容常量）
int* const p2;     // p2 不能变（指针常量）
int const* p3;     // 同 p1
const int* const p4; // 都不能变

// 函数返回值
const string& getName();  // 返回常量引用
\`\`\`

---

## 2.16 static 的多重含义

### 🕳️ 陷阱描述

static 在不同上下文中有完全不同的含义。

### 各种用法

\`\`\`cpp
// 1. 静态存储期（函数内）
void f() {
    static int count = 0;  // 只初始化一次，保持值
    count++;
}

// 2. 内部链接（全局）
static int g = 5;  // 只在当前文件可见

// 3. 类静态成员
class A {
    static int s;  // 属于类，不属于对象
};

// 4. 静态成员函数
class A {
    static void f();  // 不依赖对象
};
\`\`\`

---

## 2.17 sizeof 的陷阱

### 🕳️ 陷阱描述

sizeof 在数组和指针上行为不同，容易混淆。

### ❌ 错误示例

\`\`\`cpp
void f(int arr[]) {  // 实际是指针！
    int n = sizeof(arr) / sizeof(arr[0]);  // 错误！
}

int a[10];
int* p = a;
sizeof(a);  // 40（10 * 4）
sizeof(p);  // 8（指针大小）
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 传递数组大小
void f(int arr[], int n);

// 使用模板（C++17）
template<size_t N>
void f(int (&arr)[N]) {
    // N 是编译期已知的数组大小
}

// 使用 array
array<int, 10> a;
a.size();  // 总是正确
\`\`\`

---

## 2.18 宏定义的副作用

### 🕳️ 陷阱描述

宏是文本替换，可能产生意外的副作用。

### ❌ 错误示例

\`\`\`cpp
#define SQUARE(x) x * x
SQUARE(5);      // 5 * 5 = 25，OK
SQUARE(2+3);    // 2+3 * 2+3 = 2+6+3 = 11，不是 25！

#define MAX(a,b) ((a) > (b) ? (a) : (b))
int x = 5, y = 3;
int m = MAX(x++, y++);  // x 可能自增两次！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 使用内联函数替代宏
inline int square(int x) { return x * x; }
template<typename T>
inline T max(T a, T b) { return a > b ? a : b; }

// 必须用时，多加括号
#define SQUARE(x) ((x) * (x))
\`\`\`

---

## 2.19 隐式转换的构造函数

### 🕳️ 陷阱描述

单参数构造函数可能被用于隐式转换，导致意外行为。

### ❌ 错误示例

\`\`\`cpp
class Point {
public:
    Point(int x) : x(x), y(0) {}  // 隐式转换
    // ...
};

void draw(Point p);
draw(5);  // 隐式创建 Point(5)！可能不是意图
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 使用 explicit 禁止隐式转换
class Point {
public:
    explicit Point(int x) : x(x), y(0) {}
    // ...
};

draw(5);      // 编译错误
draw(Point(5));  // 必须显式构造
\`\`\`

---

## 2.20 运算符重载的陷阱

### 🕳️ 陷阱描述

运算符重载可能产生不符合直觉的行为。

### ❌ 错误示例

\`\`\`cpp
class String {
public:
    String operator+(const String& other);  // 返回新对象
};

String s1, s2, s3;
s1 + s2 = s3;  // 可以编译！对临时对象赋值无意义
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 返回 const 防止意外修改
const String operator+(const String& other);

// 或返回值类型
String operator+(const String& other) && = delete;  // C++11

// 更安全的写法
String operator+(const String& lhs, const String& rhs);
\`\`\`

---

> **卷二结语**：
> 
> C++ 语法复杂而精密，每个细节都可能成为赛场上的陷阱。
> 二十个陷阱，二十次警醒。熟记于心，方能在代码世界中游刃有余。
`,

    vol3: `# 卷三·算法层：正确实现的魔鬼细节

> **卷首语**：
> 
> 算法思想固然重要，但实现细节往往决定成败。
> 一个 off-by-one 错误，可能让 O(n log n) 的算法彻底失效。
> 此卷记录算法实现中的 22 个魔鬼细节。

---

## 3.1 二分查找的边界地狱

### 🕳️ 陷阱描述

二分查找的边界条件是最常见的错误来源，无数选手在此折戟。

### ❌ 错误示例

\`\`\`cpp
// 死循环版本
int l = 0, r = n - 1;
while (l <= r) {
    int mid = (l + r) / 2;
    if (a[mid] < x) l = mid;      // 错误！可能死循环
    else if (a[mid] > x) r = mid; // 错误！
    else return mid;
}
\`\`\`

### ✅ 正确方案

**模板一：查找 >= x 的第一个位置（lower_bound）**
\`\`\`cpp
int l = 0, r = n;  // 注意 r = n，不是 n-1
while (l < r) {
    int mid = l + (r - l) / 2;  // 防溢出
    if (a[mid] < x) l = mid + 1;
    else r = mid;
}
return l;  // 如果 l == n，说明没找到
\`\`\`

**模板二：查找 > x 的第一个位置（upper_bound）**
\`\`\`cpp
int l = 0, r = n;
while (l < r) {
    int mid = l + (r - l) / 2;
    if (a[mid] <= x) l = mid + 1;  // <= 不是 <
    else r = mid;
}
return l;
\`\`\`

**模板三：STL 版本（推荐）**
\`\`\`cpp
auto it = lower_bound(a.begin(), a.end(), x);
auto it = upper_bound(a.begin(), a.end(), x);
\`\`\`

### 🔍 边界口诀

| 查找目标 | 初始化 | 移动条件 | 返回值 |
|:---|:---|:---|:---|
| 第一个 ≥ x | l=0, r=n | < x 右移 | l |
| 第一个 > x | l=0, r=n | ≤ x 右移 | l |
| 最后一个 < x | l=-1, r=n-1 | ≥ x 左移 | l |
| 最后一个 ≤ x | l=-1, r=n-1 | > x 左移 | l |

---

## 3.2 二分答案的精度问题

### 🕳️ 陷阱描述

浮点数二分或需要精度的整数二分，循环终止条件容易出错。

### ❌ 错误示例

\`\`\`cpp
// 死循环风险
double l = 0, r = 1e9;
while (l < r) {  // 浮点数比较不可靠
    double mid = (l + r) / 2;
    // ...
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：固定迭代次数
for (int iter = 0; iter < 100; iter++) {
    double mid = (l + r) / 2;
    if (check(mid)) l = mid;
    else r = mid;
}

// 方案二：使用精度控制
while (r - l > 1e-9) {
    double mid = (l + r) / 2;
    // ...
}

// 方案三：整数二分求最值
long long l = 0, r = 2e9;
while (l < r) {
    long long mid = l + (r - l + 1) / 2;  // 上取整
    if (check(mid)) l = mid;
    else r = mid - 1;
}
\`\`\`

---

## 3.3 递归的栈溢出

### 🕳️ 陷阱描述

递归深度过大时，栈空间耗尽导致段错误。

### ❌ 错误示例

\`\`\`cpp
// 树深度 1e5 时栈溢出
void dfs(int u) {
    for (int v : adj[u]) dfs(v);  // 递归深度 = 树高度
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：扩栈（部分 OJ 支持）
#pragma comment(linker, "/STACK:1024000000")

// 方案二：非递归 DFS
void dfs(int start) {
    stack<int> st;
    st.push(start);
    while (!st.empty()) {
        int u = st.top(); st.pop();
        // 处理 u
        for (int v : adj[u]) st.push(v);
    }
}

// 方案三：BFS 替代（如果可行）
queue<int> q;
q.push(start);
while (!q.empty()) { /* ... */ }
\`\`\`

---

## 3.4 DFS 的访问标记时机

### 🕳️ 陷阱描述

访问标记设置位置不当，导致重复访问或遗漏。

### ❌ 错误示例

\`\`\`cpp
void dfs(int u) {
    for (int v : adj[u]) {
        if (!vis[v]) {
            dfs(v);     // 先递归
            vis[v] = 1; // 后标记！错误！
        }
    }
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 入栈时标记
void dfs(int u) {
    vis[u] = 1;  // 进入时立即标记
    for (int v : adj[u]) {
        if (!vis[v]) dfs(v);
    }
}

// 或入栈前标记（非递归）
void dfs(int start) {
    stack<int> st;
    st.push(start);
    vis[start] = 1;  // 入栈时标记
    while (!st.empty()) {
        int u = st.top(); st.pop();
        for (int v : adj[u]) {
            if (!vis[v]) {
                vis[v] = 1;  // 入栈前标记
                st.push(v);
            }
        }
    }
}
\`\`\`

---

## 3.5 BFS 的队列状态管理

### 🕳️ 陷阱描述

BFS 中同一节点多次入队，导致 TLE 或错误结果。

### ❌ 错误示例

\`\`\`cpp
void bfs(int start) {
    queue<int> q;
    q.push(start);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        vis[u] = 1;  // 出队时才标记！错误！
        for (int v : adj[u]) {
            q.push(v);  // 可能重复入队
        }
    }
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
void bfs(int start) {
    queue<int> q;
    q.push(start);
    vis[start] = 1;  // 入队时标记
    
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) {
            if (!vis[v]) {
                vis[v] = 1;  // 入队前标记
                q.push(v);
            }
        }
    }
}
\`\`\`

---

## 3.6 最短路径的初始化

### 🕳️ 陷阱描述

距离数组初始化不当，导致错误的最短路径结果。

### ❌ 错误示例

\`\`\`cpp
int dist[N];
// 没有初始化！
dijkstra();
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// Dijkstra
vector<long long> dist(n, LLONG_MAX);
dist[start] = 0;
priority_queue<pair<ll,int>, vector<pair<ll,int>>, greater<>> pq;
pq.push({0, start});

// SPFA / Bellman-Ford
vector<ll> dist(n, LLONG_MAX);
dist[start] = 0;

// Floyd-Warshall
for (int k = 0; k < n; k++)
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            d[i][j] = min(d[i][j], d[i][k] + d[k][j]);
\`\`\`

---

## 3.7 并查集的路径压缩

### 🕳️ 陷阱描述

并查集实现不当，导致路径没有正确压缩，复杂度退化。

### ❌ 错误示例

\`\`\`cpp
int find(int x) {
    while (fa[x] != x) x = fa[x];  // 没有路径压缩
    return x;
}

void unite(int x, int y) {
    fa[x] = y;  // 没有按秩合并
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 路径压缩 + 按秩合并
int find(int x) {
    return fa[x] == x ? x : fa[x] = find(fa[x]);
}

void unite(int x, int y) {
    x = find(x), y = find(y);
    if (x == y) return;
    if (rank[x] < rank[y]) swap(x, y);
    fa[y] = x;
    if (rank[x] == rank[y]) rank[x]++;
}
\`\`\`

---

## 3.8 排序的稳定性问题

### 🕳️ 陷阱描述

需要稳定排序时使用了不稳定排序，导致结果错误。

### ❌ 错误示例

\`\`\`cpp
// 需要保持原始顺序时
sort(a.begin(), a.end(), cmp);  // sort 是不稳定的！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：使用 stable_sort
stable_sort(a.begin(), a.end(), cmp);

// 方案二：在比较函数中加入索引
sort(a.begin(), a.end(), [](const Node& a, const Node& b) {
    if (a.key != b.key) return a.key < b.key;
    return a.idx < b.idx;  // 索引作为第二关键字
});

// 方案三：使用 multiset（天然稳定）
\`\`\`

---

## 3.9 贪心的正确性证明

### 🕳️ 陷阱描述

没有证明贪心策略的正确性就使用，导致 WA。

### 常见贪心策略

\`\`\`cpp
// 区间调度：按结束时间排序
sort(intervals.begin(), intervals.end(), 
     [](auto& a, auto& b) { return a.end < b.end; });

// 活动选择：同样按结束时间
// 证明：每次选择结束最早的，为后续留下最多时间

// 背包问题（分数）：按性价比排序
// 注意：01 背包不能用贪心！
\`\`\`

### ⚠️ 贪心使用 checklist

- [ ] 是否证明了贪心选择性质？
- [ ] 是否证明了最优子结构？
- [ ] 是否有反例？
- [ ] 与 DP 解法对比验证

---

## 3.10 双指针的边界处理

### 🕳️ 陷阱描述

双指针（滑动窗口）的边界和移动条件容易出错。

### ❌ 错误示例

\`\`\`cpp
// 滑动窗口求最小覆盖子串
int l = 0, r = 0;
while (r < n) {
    add(s[r++]);
    while (valid()) {
        remove(s[l++]);  // 可能移除过多
    }
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 标准滑动窗口模板
int l = 0, r = 0, ans = INF;
while (r < n) {
    add(s[r]);
    r++;
    while (valid()) {
        ans = min(ans, r - l);
        remove(s[l]);
        l++;
    }
}

// 另一种：先扩展右边界，再收缩左边界
for (int r = 0, l = 0; r < n; r++) {
    add(s[r]);
    while (l <= r && valid()) {
        ans = min(ans, r - l + 1);
        remove(s[l++]);
    }
}
\`\`\`

---

## 3.11 前缀和的索引偏移

### 🕳️ 陷阱描述

前缀和数组的定义方式不同，查询时的索引计算容易出错。

### ❌ 错误示例

\`\`\`cpp
// 1-indexed 前缀和
for (int i = 1; i <= n; i++)
    pre[i] = pre[i-1] + a[i];

// 错误查询
int sum = pre[r] - pre[l];  // 应该是 pre[r] - pre[l-1]
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：1-indexed，pre[i] 表示 a[1..i] 的和
vector<ll> pre(n + 1);
for (int i = 1; i <= n; i++)
    pre[i] = pre[i-1] + a[i];
// 查询 [l,r]: pre[r] - pre[l-1]

// 方案二：0-indexed，pre[i] 表示 a[0..i-1] 的和
vector<ll> pre(n + 1);
for (int i = 0; i < n; i++)
    pre[i+1] = pre[i] + a[i];
// 查询 [l,r): pre[r] - pre[l]

// 方案三：使用 sum[l,r) 语义
partial_sum(a.begin(), a.end(), pre.begin() + 1);
\`\`\`

---

## 3.12 差分数组的应用边界

### 🕳️ 陷阱描述

差分数组适用于区间修改单点查询，误用于其他场景导致错误。

### ✅ 正确方案

\`\`\`cpp
// 区间加，单点查询
vector<ll> diff(n + 2);
void range_add(int l, int r, ll val) {
    diff[l] += val;
    diff[r + 1] -= val;
}

// 计算最终数组
for (int i = 1; i <= n; i++)
    a[i] = a[i-1] + diff[i];

// 二维差分
void rect_add(int x1, int y1, int x2, int y2, ll val) {
    diff[x1][y1] += val;
    diff[x1][y2+1] -= val;
    diff[x2+1][y1] -= val;
    diff[x2+1][y2+1] += val;
}
\`\`\`

---

## 3.13 单调栈/单调队列的维护

### 🕳️ 陷阱描述

单调栈/队列的入栈/出栈条件判断错误。

### ✅ 正确方案

\`\`\`cpp
// 单调栈：下一个更大元素
vector<int> nextGreater(vector<int>& a) {
    int n = a.size();
    vector<int> res(n, -1);
    stack<int> st;  // 存储索引
    
    for (int i = 0; i < n; i++) {
        while (!st.empty() && a[st.top()] < a[i]) {
            res[st.top()] = a[i];
            st.pop();
        }
        st.push(i);
    }
    return res;
}

// 单调队列：滑动窗口最大值
deque<int> dq;  // 存储索引，保持递减
for (int i = 0; i < n; i++) {
    // 移除窗口外的元素
    while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
    // 维护单调性
    while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
    dq.push_back(i);
    if (i >= k - 1) ans.push_back(a[dq.front()]);
}
\`\`\`

---

## 3.14 线段树的懒标记下传

### 🕳️ 陷阱描述

线段树区间修改时，懒标记没有正确下传或下传时机错误。

### ✅ 正确方案

\`\`\`cpp
struct SegTree {
    vector<ll> tree, lazy;
    int n;
    
    void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] += lazy[node] * (r - l + 1);
            if (l != r) {
                lazy[node*2] += lazy[node];
                lazy[node*2+1] += lazy[node];
            }
            lazy[node] = 0;
        }
    }
    
    void update(int node, int l, int r, int ql, int qr, ll val) {
        push(node, l, r);  // 访问时下传
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = (l + r) / 2;
        if (ql <= mid) update(node*2, l, mid, ql, qr, val);
        if (qr > mid) update(node*2+1, mid+1, r, ql, qr, val);
        tree[node] = tree[node*2] + tree[node*2+1];
    }
};
\`\`\`

---

## 3.15 树状数组的下标处理

### 🕳️ 陷阱描述

树状数组（BIT/Fenwick）的 1-indexed 特性导致下标错误。

### ✅ 正确方案

\`\`\`cpp
struct BIT {
    vector<ll> tree;
    int n;
    
    void add(int i, ll val) {
        for (; i <= n; i += i & -i) tree[i] += val;
    }
    
    ll query(int i) {  // 1..i 的和
        ll res = 0;
        for (; i > 0; i -= i & -i) res += tree[i];
        return res;
    }
    
    ll rangeQuery(int l, int r) {
        return query(r) - query(l - 1);
    }
};

// 使用注意：
// - 确保 tree 大小为 n+1
// - add/query 的 i 从 1 开始
// - 如果需要 0-indexed，内部转换
\`\`\`

---

## 3.16 KMP 的 next 数组计算

### 🕳️ 陷阱描述

KMP 的 next 数组计算逻辑容易混淆，尤其是边界情况。

### ✅ 正确方案

\`\`\`cpp
vector<int> buildNext(const string& p) {
    int m = p.size();
    vector<int> nxt(m + 1);
    nxt[0] = -1;
    int i = 0, j = -1;
    
    while (i < m) {
        if (j == -1 || p[i] == p[j]) {
            i++; j++;
            nxt[i] = j;
        } else {
            j = nxt[j];
        }
    }
    return nxt;
}

// 匹配过程
void kmp(const string& s, const string& p) {
    auto nxt = buildNext(p);
    int i = 0, j = 0;
    int n = s.size(), m = p.size();
    
    while (i < n) {
        if (j == -1 || s[i] == p[j]) {
            i++; j++;
        } else {
            j = nxt[j];
        }
        if (j == m) {
            // 找到匹配，位置 i-m
            j = nxt[j];  // 继续找
        }
    }
}
\`\`\`

---

## 3.17 字典树（Trie）的空间管理

### 🕳️ 陷阱描述

Trie 的节点动态创建过多，导致 MLE；或数组大小估算不足。

### ✅ 正确方案

\`\`\`cpp
// 数组版 Trie（推荐）
struct Trie {
    static const int MAXN = 1000005;  // 根据总字符数估算
    static const int SIGMA = 26;
    
    int nxt[MAXN][SIGMA];
    int cnt[MAXN];
    int tot = 1;  // 0 是根节点
    
    void init() {
        memset(nxt[0], 0, sizeof(nxt[0]));
        tot = 1;
    }
    
    void insert(const string& s) {
        int p = 0;
        for (char c : s) {
            int ch = c - 'a';
            if (!nxt[p][ch]) {
                memset(nxt[tot], 0, sizeof(nxt[tot]));
                nxt[p][ch] = tot++;
            }
            p = nxt[p][ch];
        }
        cnt[p]++;
    }
};
\`\`\`

---

## 3.18 哈希冲突的处理

### 🕳️ 陷阱描述

字符串哈希冲突导致 WA，或取模运算溢出。

### ✅ 正确方案

\`\`\`cpp
// 双哈希降低冲突率
struct Hash {
    static const int P1 = 131, P2 = 13331;
    static const int MOD1 = 1e9 + 7, MOD2 = 1e9 + 9;
    
    vector<ll> h1, h2, pw1, pw2;
    
    void init(const string& s) {
        int n = s.size();
        h1.resize(n + 1);
        h2.resize(n + 1);
        pw1.resize(n + 1);
        pw2.resize(n + 1);
        
        pw1[0] = pw2[0] = 1;
        for (int i = 0; i < n; i++) {
            h1[i+1] = (h1[i] * P1 + s[i]) % MOD1;
            h2[i+1] = (h2[i] * P2 + s[i]) % MOD2;
            pw1[i+1] = pw1[i] * P1 % MOD1;
            pw2[i+1] = pw2[i] * P2 % MOD2;
        }
    }
    
    pair<ll, ll> get(int l, int r) {  // [l, r)
        ll x1 = (h1[r] - h1[l] * pw1[r-l] % MOD1 + MOD1) % MOD1;
        ll x2 = (h2[r] - h2[l] * pw2[r-l] % MOD2 + MOD2) % MOD2;
        return {x1, x2};
    }
};
\`\`\`

---

## 3.19 矩阵快速幂的初始化

### 🕳️ 陷阱描述

矩阵快速幂的单位矩阵初始化错误。

### ✅ 正确方案

\`\`\`cpp
struct Matrix {
    ll a[2][2];
    
    Matrix() { memset(a, 0, sizeof(a)); }
    
    // 单位矩阵
    static Matrix identity() {
        Matrix I;
        I.a[0][0] = I.a[1][1] = 1;
        return I;
    }
    
    Matrix operator*(const Matrix& o) const {
        Matrix res;
        for (int i = 0; i < 2; i++)
            for (int k = 0; k < 2; k++)
                for (int j = 0; j < 2; j++)
                    res.a[i][j] = (res.a[i][j] + a[i][k] * o.a[k][j]) % MOD;
        return res;
    }
};

Matrix power(Matrix base, ll exp) {
    Matrix res = Matrix::identity();  // 不是 Matrix()！
    while (exp > 0) {
        if (exp & 1) res = res * base;
        base = base * base;
        exp >>= 1;
    }
    return res;
}
\`\`\`

---

## 3.20 分治算法的边界合并

### 🕳️ 陷阱描述

分治算法中子问题合并时边界处理错误。

### ✅ 正确方案

\`\`\`cpp
// 归并排序
template<typename T>
void mergeSort(vector<T>& a, int l, int r) {
    if (r - l <= 1) return;  // 注意边界
    int m = l + (r - l) / 2;
    mergeSort(a, l, m);
    mergeSort(a, m, r);
    // 合并 [l,m) 和 [m,r)
    inplace_merge(a.begin() + l, a.begin() + m, a.begin() + r);
}

// CDQ 分治
template<typename T>
void cdq(vector<T>& a, int l, int r) {
    if (r - l <= 1) return;
    int m = l + (r - l) / 2;
    cdq(a, l, m);
    cdq(a, m, r);
    // 处理左对右的贡献
    // ...
}
\`\`\`

---

## 3.21 网络流的边存储

### 🕳️ 陷阱描述

网络流中反向边的处理不当，导致容量更新错误。

### ✅ 正确方案

\`\`\`cpp
struct MaxFlow {
    struct Edge {
        int to, rev;
        ll cap;
    };
    
    vector<vector<Edge>> g;
    vector<int> level, iter;
    
    void addEdge(int from, int to, ll cap) {
        g[from].push_back({to, (int)g[to].size(), cap});
        g[to].push_back({from, (int)g[from].size() - 1, 0});
    }
    
    void sendFlow(int v, int t, ll f) {
        for (auto& e : g[v]) {
            if (e.to == t && e.cap >= f) {
                e.cap -= f;
                g[e.to][e.rev].cap += f;
                return;
            }
        }
    }
};
\`\`\`

---

## 3.22 计算几何的精度陷阱

### 🕳️ 陷阱描述

计算几何中浮点数比较、共线判断等精度问题。

### ✅ 正确方案

\`\`\`cpp
const double EPS = 1e-9;

int sgn(double x) {
    if (fabs(x) < EPS) return 0;
    return x < 0 ? -1 : 1;
}

struct Point {
    double x, y;
    bool operator==(const Point& o) const {
        return sgn(x - o.x) == 0 && sgn(y - o.y) == 0;
    }
};

// 叉积
double cross(const Point& a, const Point& b, const Point& c) {
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
}

// 判断共线
bool collinear(const Point& a, const Point& b, const Point& c) {
    return sgn(cross(a, b, c)) == 0;
}

// 避免使用 == 比较浮点数
bool equal(double a, double b) {
    return fabs(a - b) < EPS;
}
\`\`\`

---

> **卷三结语**：
> 
> 算法如剑，细节如锋。
> 二十二个陷阱，二十二次磨砺。
> 唯有千锤百炼，方能在赛场上挥洒自如。
`,

    vol4: `# 卷四·数据结构：STL 与结构陷阱

> **卷首语**：
> 
> STL 是 C++ 赐予竞赛选手的利器，但利器亦会伤人。
> 迭代器失效、内存重分配、时间复杂度陷阱...
> 此卷揭示数据结构使用中的 18 个暗礁。

---

## 4.1 vector 的迭代器失效

### 🕳️ 陷阱描述

当 vector 发生重新分配（reallocation）时，所有迭代器、指针、引用都会失效。

### ❌ 错误示例

\`\`\`cpp
vector<int> v = {1, 2, 3};
int* p = &v[0];           // 保存指针
auto it = v.begin();       // 保存迭代器

v.push_back(4);            // 可能触发重新分配！
                           // 如果 size > capacity，会分配新内存

// p 和 it 现在指向已释放的内存！
cout << *p;    // 未定义行为！可能崩溃或输出垃圾值
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：预留空间
vector<int> v;
v.reserve(100);      // 预先分配，避免重新分配

// 方案二：重新获取迭代器
auto it = v.begin();
v.push_back(x);
it = v.begin();      // 重新获取

// 方案三：使用索引代替迭代器
for (int i = 0; i < v.size(); i++) {
    // 使用 v[i]，索引始终有效（只要 i < size()）
}

// 方案四：list/deque（不重新分配）
list<int> lst;       // 插入不会使迭代器失效
deque<int> dq;       // 插入两端不会使迭代器失效
\`\`\`

### 💡 失效时机总结

| 操作 | 是否可能失效 | 备注 |
|:---|:---:|:---|
| push_back/pop_back | ✅ | 超出 capacity 时 |
| insert/erase | ✅ | 插入/删除点之后的都失效 |
| resize/reserve | ✅ | 可能重新分配 |
| clear | ✅ | 所有迭代器失效 |
| operator[] | ❌ | 不修改结构，安全 |

---

## 4.2 string 的 SSO 与内存布局

### 🕳️ 陷阱描述

现代 C++ 的 string 使用短字符串优化（SSO），小字符串直接存储在对象内，不分配堆内存。

### ❌ 错误示例

\`\`\`cpp
// 假设想通过指针操作 string 内部
string s = "hello";
char* p = &s[0];  // 对于 SSO 字符串，可能指向栈内存

s = "this is a very long string that exceeds sso buffer";
// p 现在指向无效的栈内存！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 不要假设 string 的内部布局
// 始终通过接口操作

string s = "hello";
s[0] = 'H';           // OK
s.append(" world");   // OK
s.c_str();            // 获取 C 风格字符串（临时有效）

// 如果需要稳定指针，使用 vector<char>
vector<char> buf(100);
char* p = buf.data();  // 稳定指针
\`\`\`

---

## 4.3 deque 的随机访问性能

### 🕳️ 陷阱描述

deque 支持随机访问，但性能比 vector 慢（常数倍），不适合频繁随机访问场景。

### ❌ 错误示例

\`\`\`cpp
// 对 deque 进行大量随机访问
deque<int> dq(100000);

// 这样很慢！
long long sum = 0;
for (int i = 0; i < 100000; i++) {
    sum += dq[rand() % 100000];  // 频繁随机访问
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 需要频繁随机访问时，使用 vector
vector<int> v(100000);

// deque 的优势场景
// 1. 两端插入删除
dq.push_front(x);
dq.push_back(x);

// 2. 顺序访问
for (auto& x : dq) { /* ... */ }

// 3. 大数据量时内存更友好（分段存储）
\`\`\`

### 📊 性能对比

| 操作 | vector | deque | list |
|:---|:---:|:---:|:---:|
| 随机访问 | O(1) 快 | O(1) 慢 | O(n) |
| 尾部插入 | O(1) | O(1) | O(1) |
| 头部插入 | O(n) | O(1) | O(1) |
| 中间插入 | O(n) | O(n) | O(1) |
| 内存连续性 | 连续 | 分段 | 分散 |

---

## 4.4 list 的 sort 陷阱

### 🕳️ 陷阱描述

对 list 使用 std::sort 会导致编译错误，list 有自己的 sort 成员函数。

### ❌ 错误示例

\`\`\`cpp
list<int> lst = {3, 1, 4, 1, 5};

// 编译错误！
sort(lst.begin(), lst.end());  // error: iterator not random access
\`\`\`

### ✅ 正确方案

\`\`\`cpp
list<int> lst = {3, 1, 4, 1, 5};

// 使用 list 自带的 sort
lst.sort();                    // 升序
lst.sort(greater<int>());      // 降序
lst.sort([](int a, int b) {    // 自定义比较
    return a > b; 
});

// 注意：list::sort 是稳定的归并排序，O(n log n)
\`\`\`

---

## 4.5 set/map 的迭代器稳定性

### 🕳️ 陷阱描述

set/map 的迭代器在插入时不失效（除了被删除的元素），但不要保存指向元素的指针/引用进行长期操作。

### ❌ 错误示例

\`\`\`cpp
set<int> s = {1, 2, 3};
const int& ref = *s.begin();  // 保存引用

s.insert(100);  // 不会使迭代器失效
// ref 仍然有效，但容易误用

s.erase(s.begin());  // 现在 ref 悬空！
// 使用 ref 是未定义行为
\`\`\`

### ✅ 正确方案

\`\`\`cpp
set<int> s = {1, 2, 3};

// 安全做法：保存迭代器
auto it = s.begin();
s.insert(100);  // it 仍然有效

// 需要访问时，通过迭代器
cout << *it;    // OK

// 删除时小心
if (it != s.end()) {
    s.erase(it++);  // 先递增，再删除（C++11 前）
    // 或 C++11 起：it = s.erase(it);
}
\`\`\`

---

## 4.6 unordered_map 的哈希冲突

### 🕳️ 陷阱描述

自定义类型作为 key 时，需要同时提供 hash 函数和相等比较，否则编译错误或行为异常。

### ❌ 错误示例

\`\`\`cpp
struct Point {
    int x, y;
};

unordered_map<Point, int> mp;  // 编译错误！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
struct Point {
    int x, y;
    bool operator==(const Point& o) const {
        return x == o.x && y == o.y;
    }
};

// 方法1：特化 std::hash
namespace std {
    template<>
    struct hash<Point> {
        size_t operator()(const Point& p) const {
            return hash<long long>()((static_cast<long long>(p.x) << 32) | p.y);
        }
    };
}

// 方法2：自定义哈希函数
struct PointHash {
    size_t operator()(const Point& p) const {
        return p.x * 31 + p.y;
    }
};

unordered_map<Point, int, PointHash> mp;  // 使用自定义哈希
\`\`\`

---

## 4.7 priority_queue 的比较器方向

### 🕳️ 陷阱描述

priority_queue 的比较器语义与 sort 相反：返回 true 表示"第一个参数排在后面"。

### ❌ 错误示例

\`\`\`cpp
// 想要小顶堆，但得到大顶堆
priority_queue<int, vector<int>, less<int>> pq;  // 大顶堆（默认）
priority_queue<int, vector<int>, greater<int>> pq2;  // 小顶堆

// 自定义比较器的困惑
struct cmp {
    bool operator()(int a, int b) {
        return a > b;  // 这里 true 表示 a 的优先级低于 b
    }
};
priority_queue<int, vector<int>, cmp> pq3;  // 实际是小顶堆！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 记忆口诀：比较器返回 true，表示"第一个应该在后面"（优先级更低）

// 大顶堆（默认）
priority_queue<int> maxHeap;

// 小顶堆
priority_queue<int, vector<int>, greater<int>> minHeap;

// 自定义比较（最小值优先，值相同按第二关键字）
struct Node {
    int dist, id;
};

struct cmp {
    bool operator()(const Node& a, const Node& b) {
        // 返回 true 表示 a 优先级低于 b（排在后面）
        return a.dist > b.dist;  // dist 小的优先
    }
};

priority_queue<Node, vector<Node>, cmp> pq;
\`\`\`

---

## 4.8 stack/queue 的容器选择

### 🕳️ 陷阱描述

stack 和 queue 默认使用 deque 作为底层容器，但某些场景下可以/应该更换。

### ✅ 正确方案

\`\`\`cpp
// 默认：使用 deque
stack<int> st;
queue<int> q;

// 使用 vector（stack 专用，效率略高）
stack<int, vector<int>> st2;

// 使用 list（需要频繁插入删除时）
queue<int, list<int>> q2;

// 注意：stack 不能用 list？
// 实际上可以，但 list::back() 是 O(1)，没问题
stack<int, list<int>> st3;  // OK
\`\`\`

---

## 4.9 bitset 的大小限制

### 🕳️ 陷阱描述

bitset 的大小必须是编译期常量，且过大可能导致栈溢出。

### ❌ 错误示例

\`\`\`cpp
int n;
cin >> n;
bitset<n> b;  // 编译错误！n 不是编译期常量

bitset<100000000> b2;  // 可能栈溢出！约 12.5MB
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 编译期常量
constexpr int N = 1000;
bitset<N> b;

// 动态大小：使用 vector<bool>（特化，位压缩）
int n;
cin >> n;
vector<bool> vb(n);  // 动态大小

// 或者使用自定义动态 bitset
struct DynamicBitset {
    vector<unsigned long long> data;
    DynamicBitset(int n) : data((n + 63) / 64) {}
    // ...
};
\`\`\`

---

## 4.10 array 的越界检查

### 🕳️ 陷阱描述

array::operator[] 不检查边界，at() 才检查，但 at() 有性能开销。

### ❌ 错误示例

\`\`\`cpp
array<int, 5> a = {1, 2, 3, 4, 5};
cout << a[10];     // 未定义行为！
cout << a.at(10);  // 抛出 out_of_range 异常
\`\`\`

### ✅ 正确方案

\`\`\`cpp
array<int, 5> a = {1, 2, 3, 4, 5};

// 调试模式使用 at()
#ifdef DEBUG
    #define AT(arr, i) arr.at(i)
#else
    #define AT(arr, i) arr[i]
#endif

// 或自定义安全访问
template<size_t N>
int& safe_at(array<int, N>& a, size_t i) {
    assert(i < N);
    return a[i];
}
\`\`\`

---

## 4.11 pair/tuple 的构造陷阱

### 🕳️ 陷阱描述

pair 和 tuple 的构造容易混淆，特别是与 emplace 配合使用时。

### ❌ 错误示例

\`\`\`cpp
// 错误：试图用列表初始化 pair
pair<int, int> p = {1, 2, 3};  // 编译错误

// 错误：tuple 类型不匹配
tuple<int, string, double> t(1, "hello");  // 缺少参数
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// pair 构造
pair<int, int> p1(1, 2);
pair<int, int> p2 = {1, 2};  // C++11 起
auto p3 = make_pair(1, 2);

// tuple 构造
tuple<int, string, double> t1(1, "hello", 3.14);
auto t2 = make_tuple(1, "hello", 3.14);
tuple<int, string> t3 = {1, "world"};  // C++11 起

// 与容器配合
map<int, string> mp;
mp.emplace(1, "one");  // 直接构造，避免临时对象

vector<pair<int, int>> v;
v.emplace_back(1, 2);  // 直接构造
\`\`\`

---

## 4.12 emplace vs push 的效率差异

### 🕳️ 陷阱描述

emplace 系列函数可以避免临时对象的构造和移动，但使用不当可能导致意外的引用悬挂。

### ❌ 错误示例

\`\`\`cpp
vector<string> v;
const char* str = "hello";
v.push_back(str);    // 构造 string 临时对象，再移动

// emplace 的潜在危险
string s = "world";
v.emplace_back(s.c_str());  // 如果 c_str() 返回的指针失效...
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 传递参数给元素的构造函数
vector<pair<int, string>> v;

// push_back 需要构造 pair
v.push_back(make_pair(1, "one"));

// emplace_back 直接构造，更高效
v.emplace_back(1, "one");

// 对于简单类型，差别不大
vector<int> vi;
vi.push_back(1);
vi.emplace_back(1);  // 等价

// 优先使用 emplace_back（C++11 起）
\`\`\`

---

## 4.13 容器范围构造的陷阱

### 🕳️ 陷阱描述

使用迭代器范围构造容器时，类型不匹配可能导致意外的行为。

### ❌ 错误示例

\`\`\`cpp
vector<int> v = {1, 2, 3, 4, 5};

// 意图：复制 v 的前3个元素
vector<int> v2(v.begin(), v.begin() + 3);  // OK

// 错误：试图用单个元素构造
vector<int> v3(5);     // 5个0，不是{5}！
vector<int> v4{5};     // {5}，列表初始化
vector<int> v5(5, 1);  // 5个1
vector<int> v6{5, 1};  // {5, 1}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 圆括号 () vs 花括号 {} 的区别（C++11）

vector<int> v1(10);      // 10个0
vector<int> v2{10};      // 1个元素：10
vector<int> v3(10, 1);   // 10个1
vector<int> v4{10, 1};   // 2个元素：10, 1

// 记忆：{} 优先被视为 initializer_list
\`\`\`

---

## 4.14 迭代器与 const_iterator 转换

### 🕳️ 陷阱描述

C++11 前，iterator 和 const_iterator 转换麻烦；C++11 起有 cbegin()/cend()，但仍需注意。

### ❌ 错误示例

\`\`\`cpp
vector<int> v = {1, 2, 3};

// C++11 前，这样写很麻烦
vector<int>::const_iterator cit = v.begin();  // 需要隐式转换

// erase 要求非 const_iterator
auto it = v.begin();
v.erase(it);  // OK

// 但这样不行
auto cit = v.cbegin();
v.erase(cit);  // 编译错误！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
vector<int> v = {1, 2, 3};

// C++11 起：使用 auto
auto it = v.begin();    // iterator
auto cit = v.cbegin();  // const_iterator

// 需要修改时用 begin()
for (auto it = v.begin(); it != v.end(); ++it) {
    *it *= 2;  // 修改
}

// 只读时用 cbegin()
for (auto it = v.cbegin(); it != v.cend(); ++it) {
    cout << *it;  // 只读
}

// C++17 起：用结构化绑定
for (const auto& [key, val] : mp) { /* ... */ }
\`\`\`

---

## 4.15 算法函数对迭代器的要求

### 🕳️ 陷阱描述

不同算法对迭代器有不同的要求（输入、输出、前向、双向、随机访问）。

### ❌ 错误示例

\`\`\`cpp
list<int> lst = {3, 1, 4, 1, 5};

// 试图对 list 使用需要随机访问迭代器的算法
// sort(lst.begin(), lst.end());  // 编译错误！

// lower_bound 要求有序范围，且需要随机访问迭代器（某些实现）
// lower_bound(lst.begin(), lst.end(), 3);  // 可能编译错误
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 了解算法对迭代器的要求

// 随机访问迭代器：vector, deque, array
// 双向迭代器：list, set, map
// 前向迭代器：forward_list, unordered_set/map

// list 排序
list<int> lst = {3, 1, 4, 1, 5};
lst.sort();  // list 成员函数

// 需要随机访问时，复制到 vector
vector<int> v(lst.begin(), lst.end());
sort(v.begin(), v.end());

// 常用算法需求速查
// sort: 随机访问
// binary_search/lower_bound: 随机访问（通常）
// find/count: 输入迭代器即可
// reverse: 双向迭代器
\`\`\`

---

## 4.16 自定义分配器的陷阱

### 🕳️ 陷阱描述

为容器使用自定义分配器时，状态ful分配器的复制行为可能导致意外。

### ✅ 正确方案

\`\`\`cpp
// 简单示例：内存池分配器（简化版）
template<typename T>
class PoolAllocator {
public:
    using value_type = T;
    
    T* allocate(size_t n) {
        return static_cast<T*>(::operator new(n * sizeof(T)));
    }
    
    void deallocate(T* p, size_t) {
        ::operator delete(p);
    }
    
    // 关键：分配器复制时应该等价
    template<typename U>
    PoolAllocator(const PoolAllocator<U>&) {}
    
    PoolAllocator() = default;
};

// 使用
vector<int, PoolAllocator<int>> v;
v.push_back(1);
\`\`\`

---

## 4.17 容器swap的性能陷阱

### 🕳️ 陷阱描述

swap 对于不同容器有不同复杂度，string 的 swap 在 SSO 场景下可能不是 O(1)。

### ✅ 正确方案

\`\`\`cpp
// vector::swap - O(1)，交换内部指针
vector<int> v1(1000000), v2(1000000);
swap(v1, v2);  // 极快

// string::swap - 通常是 O(1)，但 SSO 场景下可能是 O(n)
string s1(1000, 'a'), s2(1000, 'b');
swap(s1, s2);  // 通常很快

// array::swap - O(n)，交换每个元素
array<int, 1000> a1, a2;
swap(a1, a2);  // 交换 1000 次

// 优先使用 swap 而非手动交换
// 错误：v1 = v2;  // 拷贝，O(n)
// 正确：swap(v1, v2);  // 交换，O(1)
\`\`\`

---

## 4.18 范围for循环的引用陷阱

### 🕳️ 陷阱描述

范围 for 循环中使用 auto 而非 auto&，会导致不必要的拷贝；但使用 auto&& 又可能延长临时对象生命周期。

### ❌ 错误示例

\`\`\`cpp
vector<string> v = {"hello", "world", "this", "is", "long"};

// 错误：每次迭代都拷贝 string
for (auto s : v) {
    cout << s << endl;  // 拷贝开销大
}

// 潜在危险：修改不了元素
for (auto s : v) {
    s += "!";  // 修改的是拷贝！
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
vector<string> v = {"hello", "world", "this", "is", "long"};

// 只读访问：const auto&
for (const auto& s : v) {
    cout << s << endl;  // 无拷贝
}

// 需要修改：auto&
for (auto& s : v) {
    s += "!";  // 修改原元素
}

// 可能修改，且处理临时值：auto&&（万能引用）
for (auto&& s : v) {
    // ...
}

// 通用建议
// - 基础类型(int等)：用 auto 即可
// - 大对象：用 const auto& 或 auto&
// - 不知道时：用 const auto& 总是安全的
\`\`\`

---

> **卷四结语**：
> 
> STL 是利刃，亦是暗礁。
> 十八个陷阱，十八次警醒。
> 知其所止，方能游刃有余。
`,
    vol5: `此处省略卷五内容`,
    vol6: `此处省略卷六内容`,
    vol7: `此处省略卷七内容`
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEIMINGGE_CONTENTS };
}
