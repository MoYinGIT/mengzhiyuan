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
    vol5: `# 卷五·数学层：精度与计算陷阱

> **卷首语**：
> 
> 数学是编程的基石，但计算机中的数学与现实中的数学有着微妙而致命的差异。
> 整数溢出、浮点误差、模运算陷阱... 此卷收录数学计算中的 13 个深渊。

---

## 5.1 整数溢出的静默灾难

### 🕳️ 陷阱描述

C++ 整数溢出是**未定义行为**（有符号）或**回绕**（无符号），不会抛出异常，导致难以调试的错误。

### ❌ 错误示例

\`\`\`cpp
int a = 2e9;      // 2,000,000,000
int b = 2e9;
int c = a + b;    // 溢出！结果约 -294967296

// 更隐蔽的溢出
int n = 1e5;
int sq = n * n;   // 1e10 > INT_MAX，溢出！

// 无符号数的回绕
unsigned int x = 1;
unsigned int y = x - 2;  // 回绕到 UINT_MAX
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：使用 long long（推荐）
long long a = 2e9;
long long b = 2e9;
long long c = a + b;  // OK: 4e9

// 方案二：溢出检查
bool willOverflow(int a, int b) {
    if (b > 0 && a > INT_MAX - b) return true;  // 正溢出
    if (b < 0 && a < INT_MIN - b) return true;  // 负溢出
    return false;
}

// 方案三：编译器内置函数（GCC/Clang）
int res;
if (__builtin_add_overflow(a, b, &res)) {
    // 处理溢出
}

// 方案四：使用 int64_t 并开启警告
// g++ -Woverflow -Wconversion
\`\`\`

### 📊 整数范围速查

| 类型 | 范围 | 典型场景 |
|:---|:---|:---|
| int | ±2×10⁹ | 一般计数 |
| long long | ±9×10¹⁸ | 大数运算 |
| unsigned int | 0 ~ 4×10⁹ | 位运算 |
| __int128 | ±1.7×10³⁸ | 超大数中间计算 |

---

## 5.2 浮点数的精度诅咒

### 🕳️ 陷阱描述

浮点数无法精确表示许多十进制小数，累加误差会导致意想不到的结果。

### ❌ 错误示例

\`\`\`cpp
double a = 0.1;
double b = 0.2;
if (a + b == 0.3) {  // 可能为 false！
    cout << "Equal";  // 可能不输出
}

// 累加误差
double sum = 0;
for (int i = 0; i < 10; i++) {
    sum += 0.1;
}
// sum 可能等于 0.9999999999999999，不是 1.0
\`\`\`

### ✅ 正确方案

\`\`\`cpp
const double EPS = 1e-9;

// 比较函数
bool equal(double a, double b) {
    return fabs(a - b) < EPS;
}

bool lessThan(double a, double b) {
    return a < b - EPS;
}

// 使用
if (equal(a + b, 0.3)) {
    // ...
}

// 金融计算：用整数（分）代替浮点
long long price = 1999;  // 19.99元，单位：分

// 高精度库（必要时）
// #include <boost/multiprecision/cpp_dec_float.hpp>
\`\`\`

---

## 5.3 除零与模零的崩溃

### 🕳️ 陷阱描述

除以零或模零会导致运行时错误（SIGFPE），在竞赛中直接判 RE。

### ❌ 错误示例

\`\`\`cpp
int a = 10, b = 0;
int c = a / b;  // 运行时错误！
int d = a % b;  // 同样错误！

// 更隐蔽的情况
int avg = sum / n;  // n 可能为 0
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 显式检查
if (b != 0) {
    int c = a / b;
} else {
    // 处理除零情况
}

// 平均值计算
int avg = (n == 0) ? 0 : sum / n;

// 或
int avg = n ? sum / n : 0;

// 模运算同理
int mod = (b == 0) ? a : a % b;  // 根据题意处理
\`\`\`

---

## 5.4 负数取模的陷阱

### 🕳️ 陷阱描述

C++ 中负数取模的结果符号与**被除数**相同，这可能与数学定义或题目要求不符。

### ❌ 错误示例

\`\`\`cpp
int a = -5 % 3;  // 结果：-2（不是 1！）
int b = 5 % -3;  // 结果：2（不是 -2！）

// 需要正余数时
if (a < 0) a += MOD;  // 必须手动调整
\`\`\`

### ✅ 正确方案

\`\`\`cpp
const int MOD = 1e9 + 7;

// 安全的取模函数
int mod(int x) {
    return (x % MOD + MOD) % MOD;
}

// 或使用条件表达式
int mod2(int x) {
    x %= MOD;
    if (x < 0) x += MOD;
    return x;
}

// C++11 起也可以使用 std::lldiv，但通常自定义更可控

// 减法取模
int sub(int a, int b) {
    int res = a - b;
    if (res < 0) res += MOD;
    return res;
}

// 或使用
int sub2(int a, int b) {
    return (a - b + MOD) % MOD;
}
\`\`\`

---

## 5.5 模逆元的存在条件

### 🕳️ 陷阱描述

模逆元仅在 a 和 MOD **互质**时存在，直接使用扩展欧几里得或费马小定理前必须检查。

### ❌ 错误示例

\`\`\`cpp
// a = 6, MOD = 9，gcd(6,9) = 3 ≠ 1，逆元不存在！
int inv = modInverse(6, 9);  // 错误结果或除零

// 费马小定理要求 MOD 是质数
// 如果 MOD 不是质数，a^(MOD-2) mod MOD 不是逆元
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 扩展欧几里得求逆元（带存在性检查）
int exgcd(int a, int b, int& x, int& y) {
    if (b == 0) {
        x = 1; y = 0;
        return a;
    }
    int d = exgcd(b, a % b, y, x);
    y -= a / b * x;
    return d;
}

int modInverse(int a, int mod) {
    int x, y;
    int g = exgcd(a, mod, x, y);
    if (g != 1) return -1;  // 逆元不存在
    return (x % mod + mod) % mod;
}

// 快速幂求逆元（仅当 mod 是质数）
int qpow(int a, int n, int mod) {
    int res = 1;
    while (n) {
        if (n & 1) res = 1LL * res * a % mod;
        a = 1LL * a * a % mod;
        n >>= 1;
    }
    return res;
}

// 使用前检查 MOD 是否为质数
bool isPrime(int n);
int inv = isPrime(MOD) ? qpow(a, MOD - 2, MOD) : modInverse(a, MOD);
\`\`\`

---

## 5.6 快速幂的模运算顺序

### 🕳️ 陷阱描述

快速幂中如果不及时取模，中间结果可能溢出 long long。

### ❌ 错误示例

\`\`\`cpp
// MOD = 1e9+7，但 a*a 可能溢出
long long qpow(long long a, long long n, long long mod) {
    long long res = 1;
    while (n) {
        if (n & 1) res = (res * a) % mod;  // res*a 可能溢出！
        a = (a * a) % mod;  // a*a 可能溢出！
        n >>= 1;
    }
    return res;
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 使用 __int128 防止溢出（推荐）
long long qpow(long long a, long long n, long long mod) {
    long long res = 1 % mod;
    a %= mod;
    while (n > 0) {
        if (n & 1) res = (__int128)res * a % mod;
        a = (__int128)a * a % mod;
        n >>= 1;
    }
    return res;
}

// 或使用快速乘（当 __int128 不可用时）
long long mul(long long a, long long b, long long mod) {
    long long res = 0;
    while (b) {
        if (b & 1) res = (res + a) % mod;
        a = (a << 1) % mod;
        b >>= 1;
    }
    return res;
}

// 或使用 long double 技巧
long long mul2(long long a, long long b, long long mod) {
    return (a * b - (long long)((long double)a / mod * b) * mod + mod) % mod;
}
\`\`\`

---

## 5.7 组合数计算的溢出

### 🕳️ 陷阱描述

直接计算阶乘再相除会导致巨大溢出，即使结果在范围内。

### ❌ 错误示例

\`\`\`cpp
// C(60, 30) ≈ 1.18e17，但 60! 远远超过 1e308
long long C(int n, int k) {
    return factorial(n) / factorial(k) / factorial(n-k);  // 溢出！
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：递推计算（边乘边除）
long long C(int n, int k) {
    if (k < 0 || k > n) return 0;
    if (k > n - k) k = n - k;  // 利用对称性
    long long res = 1;
    for (int i = 1; i <= k; i++) {
        res = res * (n - k + i) / i;  // 保证整除
    }
    return res;
}

// 方案二：递推公式（杨辉三角）
long long C[1005][1005];
void init() {
    for (int i = 0; i <= 1000; i++) {
        C[i][0] = C[i][i] = 1;
        for (int j = 1; j < i; j++) {
            C[i][j] = C[i-1][j-1] + C[i-1][j];
        }
    }
}

// 方案三：Lucas 定理（大组合数取模）
int Lucas(long long n, long long m, int p) {
    if (m == 0) return 1;
    return 1LL * C(n % p, m % p) * Lucas(n / p, m / p, p) % p;
}
\`\`\`

---

## 5.8 GCD 与 LCM 的计算顺序

### 🕳️ 陷阱描述

计算 LCM 时如果先乘后除，可能溢出；GCD 为 0 时可能除零。

### ❌ 错误示例

\`\`\`cpp
// 溢出！
long long lcm = a * b / gcd(a, b);  // a*b 可能溢出

// 除零风险
int g = gcd(0, 0);  // 通常返回 0
int x = a / g;      // 除零！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 安全计算 LCM
long long lcm(long long a, long long b) {
    if (a == 0 || b == 0) return 0;
    return a / gcd(a, b) * b;  // 先除后乘，防止溢出
}

// STL C++17 起提供
gcd(a, b);
lcm(a, b);

// 自定义 GCD（欧几里得算法）
long long gcd(long long a, long long b) {
    return b == 0 ? a : gcd(b, a % b);
}

// 或迭代版本
long long gcd_iter(long long a, long long b) {
    while (b) {
        long long t = b;
        b = a % b;
        a = t;
    }
    return a;
}
\`\`\`

---

## 5.9 位运算的优先级陷阱

### 🕳️ 陷阱描述

位运算优先级低于比较运算，不加括号可能导致意外结果。

### ❌ 错误示例

\`\`\`cpp
if (x & 1 == 0)  // 实际：x & (1 == 0) = x & 0 = 0
    cout << "Even";  // 永远执行！

// 类似问题
if (a | b == c)   // 实际：a | (b == c)
if (a ^ b == c)   // 实际：a ^ (b == c)
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 总是加括号
if ((x & 1) == 0)      // 判断偶数
if ((a | b) == c)      // 按位或后比较
if ((a ^ b) == c)      // 按位异或后比较

// 常用位运算技巧
if (x & (x - 1)) == 0)  // 判断 2 的幂
int lowbit = x & (-x);   // 取最低位 1
x >>= 1;                 // 除以 2
x <<= 1;                 // 乘以 2

// 优先级速记
// () > 算术 > 移位 > 位与 > 位异或 > 位或 > 比较 > 逻辑
\`\`\`

---

## 5.10 移位运算的越界

### 🕳️ 陷阱描述

移位超过数据宽度、移位数为负、或左移导致溢出，都是未定义行为。

### ❌ 错误示例

\`\`\`cpp
int x = 1 << 33;      // 越界！int 只有 32 位
int y = 1 << -1;      // 负数移位，UB
int z = 1 << 31;      // 符号位变化，UB（有符号数）

unsigned int w = 1u << 32;  // 移位数等于宽度，UB
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 确保移位数合法
const int MAX_SHIFT = 31;  // 对于 32 位 int
if (shift >= 0 && shift < MAX_SHIFT) {
    int result = 1 << shift;
}

// 处理大移位
long long bigShift = 1LL << 40;  // 用 64 位

// 使用类型安全的写法
uint32_t u = 1u;
uint32_t res = u << n;  // 确保使用无符号数

// 或避免移位，改用乘法
long long result = 1;
for (int i = 0; i < n; i++) result *= 2;  // 安全但慢
\`\`\`

---

## 5.11 随机数的种子与范围

### 🕳️ 陷阱描述

rand() 质量差、范围小（通常 RAND_MAX = 32767），srand(time(0)) 精度不足。

### ❌ 错误示例

\`\`\`cpp
// 低质量随机数
srand(time(0));  // 1 秒内多次调用得到相同种子
int x = rand();  // 范围可能只有 0-32767
int y = rand() % 100;  // 低位不均匀

// 试图生成大随机数
long long big = rand() * rand();  // 分布非常不均匀！
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// C++11 随机数库（推荐）
#include <random>

std::mt19937_64 rng(std::chrono::steady_clock::now().time_since_epoch().count());

// 均匀分布 [0, 99]
std::uniform_int_distribution<int> dist(0, 99);
int x = dist(rng);

// 大范围
std::uniform_int_distribution<long long> bigDist(0, 1e18);
long long y = bigDist(rng);

// 浮点数
std::uniform_real_distribution<double> realDist(0.0, 1.0);
double z = realDist(rng);

// 如果需要 rand() 的替代
int goodRand(int mod) {
    return (int)((rng() >> 10) % mod);  // 取高位，更均匀
}
\`\`\`

---

## 5.12 几何计算的精度控制

### 🕳️ 陷阱描述

几何计算中频繁的浮点运算累积误差，导致共线、相交等判断失败。

### ❌ 错误示例

\`\`\`cpp
// 判断三点共线
double cross = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
if (cross == 0) {  // 危险！
    // 共线处理
}

// 比较距离
double d1 = dist(a, b);
double d2 = dist(c, d);
if (d1 == d2)  // 同样危险
\`\`\`

### ✅ 正确方案

\`\`\`cpp
const double EPS = 1e-9;

int sgn(double x) {
    if (fabs(x) < EPS) return 0;
    return x < 0 ? -1 : 1;
}

// 判断共线
bool collinear(Point a, Point b, Point c) {
    double cross = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    return sgn(cross) == 0;
}

// 比较距离（避免开方）
bool closer(Point a, Point b, Point c) {
    // 比较 d(a,b) < d(a,c)
    double d1 = (a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y);
    double d2 = (a.x-c.x)*(a.x-c.x) + (a.y-c.y)*(a.y-c.y);
    return d1 < d2;  // 比较平方距离
}

// 叉积符号
int crossSign(Point a, Point b, Point c) {
    return sgn((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
}
\`\`\`

---

## 5.13 概率与期望的计算

### 🕳️ 陷阱描述

概率 DP 中浮点误差累积，或整数除法导致概率为 0。

### ❌ 错误示例

\`\`\`cpp
// 整数除法！
double p = 1 / 2;  // p = 0，不是 0.5

// 累积误差
vector<double> dp(n);
dp[0] = 1.0;
for (int i = 0; i < n; i++) {
    dp[i+1] += dp[i] * 0.5;  // 误差累积
}

// 输出精度不足
cout << dp[n-1];  // 默认精度可能不够
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 正确的概率表示
double p = 1.0 / 2;  // 0.5
// 或
double p = 0.5;

// 对数概率（避免下溢）
// 乘法变加法
log_p = log(p1) + log(p2);

// 高精度输出
cout << fixed << setprecision(10) << dp[n-1];

// 或输出分数形式（如果允许）
// 用 pair<long long, long long> 表示分子分母

// 概率 DP 模板
double probDP() {
    vector<double> dp(n + 1);
    dp[0] = 1.0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            dp[j+1] += dp[j] * p[i];
            dp[j] *= (1 - p[i]);
        }
    }
    return dp[target];
}
\`\`\`

---

> **卷五结语**：
> 
> 数学之美，在于精确；编程之难，在于近似。
> 十三个陷阱，十三次对精度的敬畏。
> 唯有严谨，方能跨越数学与代码之间的深渊。
`,
    vol6: `# 卷六·策略层：赛场生存与制胜之道

> **卷首语**：
> 
> 代码能力决定下限，策略思维决定上限。
> 同样的实力，不同的赛场策略，可能带来截然不同的结果。
> 此卷分享竞赛中的 10 个关键策略与常见失误。

---

## 6.1 时间分配的黄金比例

### 🕳️ 陷阱描述

时间分配不合理——在某道题上死磕太久，或简单题花费过多时间，导致整体得分不理想。

### ❌ 错误策略

\`\`\`
0-30分钟: 读题，觉得A题很简单，快速写完
30-90分钟: 死磕B题，一直WA，不断调试
90-120分钟: C题来不及细看，匆忙写了个暴力
结果: A题AC，B题0分，C题部分分
\`\`\`

### ✅ 正确策略

| 时间段 | 行动 | 目标 |
|:---|:---|:---|
| 0-10分钟 | **通读所有题目** | 评估难度，确定做题顺序 |
| 10-30分钟 | 快速解决最简单题 | 确保基础分到手 |
| 30-70分钟 | 主攻中等难度题 | 争取AC或高分 |
| 70-100分钟 | 挑战难题或完善代码 | 冲击高分 |
| 100-120分钟 | 检查、测试、提交 | 防低级错误 |

### 💡 核心原则

\`\`\`cpp
// 每道题的时间上限（参考）
// 简单题：20-30分钟（包括调试）
// 中等题：40-50分钟
// 难题：视情况而定，但不要超过总时间的40%

// 如果超过时限还未解决，考虑：
// 1. 写部分分（部分分也是分！）
// 2. 换题，回头再来
// 3. 检查是否理解错题意
\`\`\`

---

## 6.2 死磕一题的沉没成本

### 🕳️ 陷阱描述

在一道题上投入过多时间后，不甘心放弃，继续投入更多时间，形成恶性循环。

### ❌ 心理陷阱

> "都已经写了1小时了，放弃太可惜，再调10分钟一定能过..."
> 
> （30分钟后）"快了快了，肯定是这个小bug..."

### ✅ 断舍离策略

\`\`\`cpp
// 设定硬性时间上限
const int TIME_LIMIT_PER_PROBLEM = 45; // 分钟

// 决策流程
if (current_time > start_time + TIME_LIMIT_PER_PROBLEM) {
    if (hasPartialSolution()) {
        submitPartial();  // 先交部分分
    }
    if (otherProblemsRemain()) {
        switchToNext();   // 果断换题
        // 标记这道题，回头再看
        todoList.push_back(this_problem);
    }
}

// 记住：两道题的部分分 > 一道题的AC
\`\`\`

---

## 6.3 部分分的重要性

### 🕳️ 陷阱描述

只追求正解，忽视部分分策略；或在不会正解时直接放弃整道题。

### ❌ 错误心态

\`\`\`
"这题不会正解，0分"
"暴力分太少，懒得写"
" special judge 太麻烦，不写了"
\`\`\`

### ✅ 部分分策略

\`\`\`cpp
// 假设一道题100分，常见部分分：
// - n <= 20：暴力枚举（20分）
// - 特殊数据（如链、树）：特判（20分）
// - 部分约束：简单算法（30分）
// - 正解：高级算法（100分）

// 策略：能拿的分都拿
int solve() {
    if (n <= 20) return bruteForce();  // 20分保底
    if (isSpecialCase()) return specialSolution();  // +20分
    if (canUseSimpleAlgo()) return simpleAlgo();  // +30分
    return advancedAlgo();  // 冲击满分
}

// 很多时候 70分的部分分 > 死磕满分的0分
\`\`\`

---

## 6.4 调试优先于重写

### 🕳️ 陷阱描述

代码出bug后，不经思考就重写整段代码，浪费大量时间且可能引入新bug。

### ❌ 错误做法

\`\`\`cpp
// 发现WA后...
// "这段代码太乱了，重写吧"
// 30分钟后...
// "怎么还是WA？而且新代码又有新bug！"
\`\`\`

### ✅ 科学调试法

\`\`\`cpp
// 1. 静态检查（5分钟）
// - 检查边界条件（n=0, n=1, 最大值）
// - 检查数组越界
// - 检查初始化
// - 检查变量类型（int vs long long）

// 2. 输出调试（10分钟）
// 在关键位置添加输出
void debug() {
    cerr << "i=" << i << ", val=" << val << endl;
    // 或写日志到文件
}

// 3. 对拍（15分钟）
// 写个暴力程序，生成小数据对比
// while (true) {
//     generateSmallData();
//     if (brute() != smart()) break;
// }

// 4. 只有当逻辑完全错误时，才考虑重写
\`\`\`

---

## 6.5 样例测试的幻觉

### 🕳️ 陷阱描述

只测试样例数据，不构造边界和特殊情况，导致交卷后才发现问题。

### ❌ 危险行为

\`\`\`cpp
// 写完代码
// 测样例1：AC
// 测样例2：AC
// "稳了，提交！"
// ...WA on test 3
\`\`\`

### ✅ 全面测试策略

\`\`\`cpp
// 测试清单
void test() {
    // 1. 样例测试（必做）
    run(sample1);
    run(sample2);
    
    // 2. 边界测试（关键！）
    run(n_is_minimum);      // n=0, n=1
    run(n_is_maximum);      // n=200000
    run(all_same_value);    // 所有值相同
    run(all_different);     // 所有值不同
    run(negative_values);   // 负数
    run(zero_values);       // 零
    
    // 3. 随机测试（对拍）
    for (int i = 0; i < 1000; i++) {
        data = generateRandom();
        assert(brute(data) == mySolution(data));
    }
    
    // 4. 特殊构造（针对题目）
    run(star_graph);        // 星形图
    run(chain_graph);       // 链
    run(complete_graph);    // 完全图
}
\`\`\`

---

## 6.6 代码可读性的代价

### 🕳️ 陷阱描述

过度追求代码简洁或"炫技"，牺牲可读性，导致调试困难和隐藏bug。

### ❌ 过度优化

\`\`\`cpp
// 为了省行数，写成一行
for(int i=0,j=0;i<n&&j<m;i++,j++,k+=a[i]+b[j],c[k]++);

// 变量名压缩
int x,y,z,xx,yy,zz,xxx,yyy,zzz;

// 无注释的复杂算法
void dfs(int u,int f,int d,int s,int p){
    if(d>mx)mx=d,rt=u;
    for(auto[v,w]:g[u])if(v!=f)dfs(v,u,d+w,s^1,p+(s?w:0));
}
\`\`\`

### ✅ 清晰编码原则

\`\`\`cpp
// 有意义的变量名
int currentNode, parentNode, depth, subtreeSize;

// 适当的注释
// 使用重心分解处理树的路径问题
// 第一遍DFS找重心，第二遍统计答案
void findCentroid(int root) {
    // ...
}

// 代码分段
// ========== 输入处理 ==========
readInput();
validateInput();

// ========== 预处理 ==========
buildGraph();
computePrefixSum();

// ========== 主算法 ==========
solve();

// ========== 输出 ==========
printAnswer();
\`\`\`

---

## 6.7 心态崩盘的连锁反应

### 🕳️ 陷阱描述

一题失误或遇到难题后心态崩溃，影响后续题目的发挥。

### ❌ 恶性循环

\`\`\`
A题WA了一次 -> 焦虑 -> B题看错题 -> 更焦虑 -> 
C题写不出来 -> 心态爆炸 -> 简单题也失误 -> 全盘崩溃
\`\`\`

### ✅ 心态管理策略

\`\`\`cpp
// 1. 接受失误是正常的
// 即使是顶级选手也会犯低级错误

// 2. 隔离失误
// A题炸了？深呼吸，B题是全新的开始
// "A题已经过去了，专注当下"

// 3. 积极自我对话
// ❌ "完了完了，又要爆零了"
// ✅ "没关系，还有两道题可以拿分"

// 4. 物理放松
// 每60分钟：喝水、活动手腕、深呼吸3次

// 5. 最坏情况预案
// "如果这场炸了，我还有下次机会"
// "尽人事，听天命"
\`\`\`

---

## 6.8 文件操作与提交失误

### 🕳️ 陷阱描述

忘记删除调试代码、提交错误文件、或读写文件导致OJ上的RE/TLE。

### ❌ 惨痛教训

\`\`\`cpp
// 提交时忘记删除...
// 1. 文件重定向
freopen("in.txt", "r", stdin);  // OJ上没有这个文件！RE

// 2. 调试输出
cerr << "debug: x=" << x << endl;  // 可能TLE或WA

// 3. 断言
assert(false);  // 在某些OJ导致RE

// 4. 无限循环的调试代码
while (true) {
    if (check()) break;
}  // TLE
\`\`\`

### ✅ 提交前检查清单

\`\`\`cpp
// 最终提交检查表
// □ 删除了所有 freopen
// □ 关闭了所有调试输出（或改用 #ifdef DEBUG）
// □ 删除了 assert（或确认不会触发）
// □ 数组大小是否足够
// □ 是否使用了正确的输入输出（cin/cout vs scanf/printf）
// □ 是否有多余的输出（如多余的空格或换行）

// 建议使用条件编译
#ifdef LOCAL
    freopen("input.txt", "r", stdin);
    #define debug(x) cerr << #x << " = " << x << endl
#else
    #define debug(x)
#endif
\`\`\`

---

## 6.9 读题不细的理解偏差

### 🕳️ 陷阱描述

匆忙读题，忽略关键条件或误解题意，导致方向性错误。

### ❌ 常见误读

\`\`\`cpp
// 题目："输出字典序最小的解"
// 理解成："输出任意一个解"
// 结果：WA

// 题目："保证有解"
// 没看到这个条件，写了大量无解判断
// 结果：代码复杂，容易出错

// 题目："数据范围 1 <= n <= 1e9"
// 看成：1 <= n <= 1e5
// 结果：数组开小了，RE
\`\`\`

### ✅ 精读策略

\`\`\`cpp
// 1. 标记关键信息
// 用下划线标出：约束条件、特殊要求、输出格式

// 2. 用自己的话复述
// "这道题要求我...，在...约束下，输出..."

// 3. 列出数据范围表
// n: 1-1e5
// m: 1-1e6
// a[i]: -1e9 to 1e9

// 4. 确认样例理解
// 手动模拟一遍样例，确认理解正确

// 5. 注意常见陷阱词汇
// "至少"、"恰好"、"不同"、"连续"、"非空"
\`\`\`

---

## 6.10 忽视赛后复盘的价值

### 🕳️ 陷阱描述

比赛结束后只关注分数，不分析失误原因，导致同样的错误反复犯。

### ❌ 赛后行为

\`\`\`
比赛结束 -> 看分数 -> 高兴/沮丧 -> 忘掉 -> 下次再犯同样错误
\`\`\`

### ✅ 复盘模板

\`\`\`cpp
// 赛后复盘记录
/*
比赛：XXXX
日期：202X-XX-XX
成绩：XXX分

=== 做得好的 ===
- 时间管理合理
- 某题的部分分策略成功

=== 失误分析 ===
[题A]
问题：数组开小导致RE
原因：没仔细看数据范围
改进：以后先看数据范围再开数组

[题B]
问题：理解错题意
原因：没看到"字典序最小"要求
改进：读题时标记所有关键词

=== 新学到的 ===
- 某算法的新应用
- 某题的巧妙解法

=== 下次要注意 ===
1. 先通读所有题目
2. 不要死磕一题超过45分钟
3. 提交前检查数组大小
*/

// 建立个人错题本
// 定期回顾（赛前看一遍）
\`\`\`

---

> **卷六结语**：
> 
> 策略是隐形的代码，心态是无形的算法。
> 十个策略，十次对赛场智慧的锤炼。
> 愿你在代码之外，也能运筹帷幄。
`,
    vol7: `# 卷七·环境层：评测系统的暗面

> **卷首语**：
> 
> 你的代码在本地完美运行，提交后却莫名出错。
> 不是算法错了，是你忽略了评测环境的暗面。
> 此卷揭露 8 个环境陷阱，助你跨越本地与评测的最后一公里。

---

## 7.1 栈空间限制的隐藏杀机

### 🕳️ 陷阱描述

在线评测系统栈空间有限（通常 8MB），递归过深或局部数组过大会导致段错误（SEGV），本地却正常运行。

### ❌ 错误示例

\`\`\`cpp
// 递归深度 1e6，栈空间溢出！
void dfs(int u) {
    if (u > 1000000) return;
    dfs(u + 1);  // 递归过深，栈溢出
}

// 局部大数组，栈溢出！
int main() {
    int arr[1000000];  // 4MB，可能溢出
    // ...
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：改为迭代
void dfs_iterative() {
    stack<int> st;
    st.push(1);
    while (!st.empty()) {
        int u = st.top(); st.pop();
        // 处理...
    }
}

// 方案二：大数组放全局/静态区
const int MAXN = 1000000;
int arr[MAXN];  // 全局区，不在栈上

// 方案三：使用动态内存（堆）
int main() {
    int* arr = new int[1000000];  // 堆上分配
    // ...
    delete[] arr;
}

// 方案四：计算递归深度
// 假设每层递归消耗 32 字节，8MB 栈 ≈ 25 万层
// 超过 20 万层的递归应考虑改为迭代
\`\`\`

### 📊 常见 OJ 栈空间

| OJ | 栈空间 | 备注 |
|:---|:---:|:---|
| Codeforces | 256 MB | 较宽松 |
| AtCoder | 1 GB | 非常宽松 |
| 洛谷 | 8-64 MB | 视题目而定 |
| 国内 OJ | 8 MB | 常见限制 |

---

## 7.2 内存限制的精细计算

### 🕳️ 陷阱描述

MLE（Memory Limit Exceeded）不仅指程序使用的内存，还包括运行时库、栈、堆等开销。精确计算内存使用是避免 MLE 的关键。

### ❌ 错误估算

\`\`\`cpp
// 自以为：1000万 int = 40MB，限制 64MB，绰绰有余
int arr[10000000];  // 40MB
vector<int> v(10000000);  // 40MB+
// 实际：vector 额外开销 + 其他数组 = MLE
\`\`\`

### ✅ 精确计算

\`\`\`cpp
// 内存计算模板
// int: 4 bytes
// long long: 8 bytes
// bool/char: 1 byte
// vector: 约 3 * size (容量、大小、指针开销)

// 示例：精确计算
const int N = 200000;
const int M = 500000;

// 邻接表内存计算
vector<vector<int>> g(N);  // N 个 vector 开销
int edges[M * 2];  // 无向图 2M 条边

// 总内存 ≈ (N * 24) + (2M * 4) bytes
// = 4.8MB + 4MB = 8.8MB (vector 开销被低估，实际需要更多)

// 安全策略：预留 20% 余量
// 如果限制 64MB，实际使用不超过 50MB
\`\`\`

### 💡 内存优化技巧

\`\`\`cpp
// 1. 使用静态数组代替 vector
static int arr[MAXN];  // 无动态分配开销

// 2. 使用 bitset 压缩
bitset<1000000> vis;  // 1M 位 = 125KB

// 3. 使用 short/char 代替 int
short dist[MAXN];  // 2 bytes vs 4 bytes

// 4. 及时释放内存
vector<int> v;
v.reserve(1000000);
// 使用后...
v.clear(); v.shrink_to_fit();  // 释放内存（C++11）
\`\`\`

---

## 7.3 时间限制的常数陷阱

### 🕳️ 陷阱描述

算法复杂度正确，但常数过大导致 TLE。评测机的 CPU 性能、编译器优化级别都会影响实际运行时间。

### ❌ 常数爆炸

\`\`\`cpp
// 理论上 O(n log n) 能通过 2e5
// 实际：常数太大 TLE
for (int i = 0; i < n; i++) {
    for (int j = 0; j < log2(n); j++) {
        // 复杂的位运算和分支
        if (condition) {
            // 大量操作
        }
    }
}
\`\`\`

### ✅ 常数优化

\`\`\`cpp
// 1. 使用快速 IO
ios::sync_with_stdio(false);
cin.tie(nullptr);

// 2. 避免冗余项
// ❌
for (int i = 0; i < n; i++) {
    if (i % 2 == 0) { /* 偶数处理 */ }
    else { /* 奇数处理 */ }
}
// ✅
for (int i = 0; i < n; i += 2) { /* 偶数 */ }
for (int i = 1; i < n; i += 2) { /* 奇数 */ }

// 3. 使用数组代替 map（如果 key 范围小）
// ❌ unordered_map<int, int> mp;
// ✅ int cnt[1000005];

// 4. 循环展开（编译器优化后通常不需要）
// 5. 使用引用避免拷贝
const vector<int>& g = graph[u];  // 引用，无拷贝
\`\`\`

### 📊 时间估算参考

| 操作 | 每秒大致次数 |
|:---|:---:|
| 简单循环 | 1e8 - 2e8 |
| 复杂运算 | 5e7 - 1e8 |
| 带分支循环 | 3e7 - 5e7 |
| 递归 | 1e7 - 3e7 |

---

## 7.4 本地与评测机的差异

### 🕳️ 陷阱描述

本地 AC，提交 RE/TLE/MLE，原因可能是：不同编译器版本、不同操作系统、64位 vs 32位、评测机更慢等。

### ❌ 常见差异

\`\`\`cpp
// 1. 指针大小
sizeof(int*)  // 本地 64 位：8 字节；评测机 32 位：4 字节

// 2. long 大小
sizeof(long)  // Linux 64 位：8 字节；Windows 64 位：4 字节

// 3. 栈空间
// 本地：通常较大（几十 MB）
// 评测机：可能只有 8MB

// 4. 编译器优化
// 本地：-O0（调试）
// 评测机：-O2（优化）
\`\`\`

### ✅ 跨平台兼容

\`\`\`cpp
// 1. 使用固定宽度类型
#include <cstdint>
int32_t a;   // 32 位 int
int64_t b;   // 64 位 long long

// 2. 显式指定 long long
long long sum = 0;  // 不要依赖 long

// 3. 避免依赖特定编译器行为
// 如：未定义行为在不同编译器表现不同

// 4. 开启警告，严格代码
// g++ -Wall -Wextra -Wshadow

// 5. 在类似环境下测试
// 使用 Linux 虚拟机或 WSL 测试
\`\`\`

---

## 7.5 浮点精度环境差异

### 🕳️ 陷阱描述

不同 CPU/编译器对浮点运算的实现有细微差异，可能导致本地 AC 提交 WA。

### ❌ 精度问题

\`\`\`cpp
// 计算几何中常见
if (cross == 0)  // 危险！可能因精度问题永远不成立
if (fabs(a - b) < 1e-9)  // 相对安全

// 多次运算累积误差
double x = 0.1;
for (int i = 0; i < 1000; i++) x += 0.1;
// x 可能不等于 100.0
\`\`\`

### ✅ 精度控制

\`\`\`cpp
const double EPS = 1e-9;

// 比较函数
int dcmp(double x) {
    if (fabs(x) < EPS) return 0;
    return x < 0 ? -1 : 1;
}

// 几何计算避免除法
// 比较 a/b 和 c/d，改为比较 a*d 和 c*b

// 输出时控制精度
printf("%.10f\n", ans);  // 足够精度
// 不要输出 %.20f（可能暴露精度问题）

// 尽量使用整数
// 如果输入是整数，尽量全程用整数运算
\`\`\`

---

## 7.6 多测试用例的初始化陷阱

### 🕳️ 陷阱描述

多测试用例（T 组数据）时，忘记清空全局变量或数据结构，导致前一组数据影响后一组。

### ❌ 错误示例

\`\`\`cpp
int cnt[1005];  // 全局数组

void solve() {
    // 忘记清空！
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        cnt[a[i]]++;  // 上一轮的数据还在！
    }
}

int main() {
    int T;
    cin >> T;
    while (T--) {
        solve();  // 错误！
    }
}
\`\`\`

### ✅ 正确方案

\`\`\`cpp
// 方案一：每次清空
void solve() {
    memset(cnt, 0, sizeof(cnt));  // 清空
    // 或使用 vector 并重新创建
    vector<int> cnt(1005, 0);
    // ...
}

// 方案二：使用局部变量（推荐）
void solve() {
    static int cnt[1005];  // 静态，但需手动清空
    memset(cnt, 0, sizeof(cnt));
    // ...
}

// 方案三：封装在类/结构体中
struct Solver {
    vector<int> cnt;
    void init(int n) {
        cnt.assign(n, 0);  // 重新初始化
    }
    // ...
};

// 方案四：每组数据独立（最安全）
int main() {
    int T;
    cin >> T;
    while (T--) {
        Solver solver;  // 全新实例
        solver.solve();
    }
}
\`\`\`

---

## 7.7 输入输出格式陷阱

### 🕳️ 陷阱描述

输出格式错误：多空格、少空格、多换行、大小写错误，导致 PE（Presentation Error）或 WA。

### ❌ 格式错误

\`\`\`cpp
// 要求：输出 n 个整数，空格分隔
for (int i = 0; i < n; i++) {
    cout << ans[i] << " ";  // 多一个末尾空格
}
// 或
for (int i = 0; i < n; i++) {
    cout << ans[i];  // 没有空格分隔
}

// 要求：输出 Yes/No
printf("yes");  // 大小写错误！
\`\`\`

### ✅ 精确格式

\`\`\`cpp
// 空格分隔，无末尾空格
for (int i = 0; i < n; i++) {
    if (i > 0) cout << " ";
    cout << ans[i];
}
cout << "\n";

// 或使用 join 风格（C++20）
// ranges::copy(ans, ostream_iterator<int>(cout, " "));

// 大小写严格匹配
printf("YES\n");  // 不是 yes/Yes

// 特别注意：
// - 题目要求大写就用大写
// - 注意是否有额外空格/换行要求
// - 浮点数精度要求
\`\`\`

### 📋 输出检查清单

- [ ] 数字间是否有空格分隔
- [ ] 末尾是否有空格
- [ ] 是否需要换行
- [ ] 大小写是否匹配
- [ ] 浮点数精度是否满足
- [ ] 特殊值处理（如无解输出 -1）

---

## 7.8 编译器版本与特性差异

### 🕳️ 陷阱描述

使用本地高版本编译器特性，提交后评测机编译器版本较低不支持，导致 CE（Compilation Error）。

### ❌ 不兼容代码

\`\`\`cpp
// C++17/20 特性在 C++11 评测机上编译失败
// 结构化绑定（C++17）
auto [x, y] = make_pair(1, 2);  // CE on C++11

// 模板参数推导（C++17）
vector v = {1, 2, 3};  // CE on C++11

// 概念（C++20）
template<typename T>
concept Integral = is_integral_v<T>;  // CE

// 某些编译器扩展
__int128 x;  // 部分 OJ 不支持
\`\`\`

### ✅ 兼容写法

\`\`\`cpp
// 使用传统写法
pair<int, int> p = make_pair(1, 2);
int x = p.first, y = p.second;

vector<int> v = {1, 2, 3};  // 显式类型

// 检查编译器版本
#ifdef __cplusplus
    #if __cplusplus >= 201703L
        // C++17 code
    #else
        // fallback
    #endif
#endif

// 使用标准库函数
// 不要依赖特定编译器的扩展行为
\`\`\`

### 📊 常见 OJ 编译器版本

| OJ | GCC 版本 | 默认标准 |
|:---|:---:|:---:|
| Codeforces | 11.2+ | C++17 |
| AtCoder | 12.2+ | C++17/C++20 |
| 洛谷 | 9.3+ | C++14/17 |
| 部分国内 OJ | 4.8+ | C++11 |

---

> **卷七结语**：
> 
> 环境是最后的关卡，也是最隐蔽的陷阱。
> 八个环境陷阱，八次对评测系统的敬畏。
> 唯有了解环境，方能驾驭环境。
> 
> **微明阁·竞赛 全卷完结**
> 
> 七卷一百零六陷阱，皆为血与泪之教训。
> 愿后来者少走弯路，直通巅峰。
`
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEIMINGGE_CONTENTS };
}
