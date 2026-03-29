# C++ L1-L8 知识点验证问题集

> 每个知识点学习完后，用这10个问题验证是否真正掌握
> 答对8题以上 = 真正掌握 ✅
> 答对5-7题 = 还需巩固 ⚠️
> 答对5题以下 = 需要重新学习 ❌

---

## 📘 L1：编程入门

### 🔹 知识点1：第一个程序 (Hello World)

1. **为什么C++程序必须要有 `int main()` 函数？**
   <details><summary>答案</summary>main是程序入口，操作系统从这里开始执行程序。int表示返回整数给操作系统，0表示正常结束。</details>

2. **`#include <iostream>` 的作用是什么？不写会怎样？**
   <details><summary>答案</summary>引入输入输出流库，提供cin/cout功能。不写会导致cout/cin未定义，编译报错。</details>

3. **`using namespace std;` 是什么意思？可以省略吗？**
   <details><summary>答案</summary>使用标准命名空间，省略后需要写std::cout和std::cin。</details>

4. **`cout << "Hello" << endl;` 中 `<<` 是什么运算符？数据流向是怎样的？**
   <details><summary>答案</summary>流插入运算符，数据从右侧流向左侧（流向cout输出设备）。</details>

5. **`return 0;` 可以省略吗？返回值可以不是0吗？**
   <details><summary>答案</summary>C++11起main可以省略return 0；其他返回值表示不同错误状态给操作系统。</details>

6. **程序从编写到运行的完整流程是什么？**
   <details><summary>答案</summary>编写源代码 → 编译(Compile) → 链接(Link) → 运行(Run)。</details>

7. **`//` 和 `/* */` 的区别是什么？注释会影响程序运行吗？**
   <details><summary>答案</summary>//单行注释，/* */多行注释。注释被编译器忽略，不影响运行。</details>

8. **如果忘记写分号 `;` 会怎样？**
   <details><summary>答案</summary>编译报错，语法错误。分号是C++语句结束的标志。</details>

9. **C++是编译型语言还是解释型语言？**
   <details><summary>答案</summary>编译型语言，需要先编译成机器码再执行。</details>

10. **你能不看示例，独立写出Hello World程序吗？**
    <details><summary>要求</summary>包括头文件、命名空间、main函数、cout输出、return 0。</details>

---

### 🔹 知识点2：变量与数据类型

1. **变量命名的规则是什么？以下哪些是合法变量名：`2num`、`_age`、`my-name`、`class`？**
   <details><summary>答案</summary>字母/下划线开头，只能含字母数字下划线。_age合法；2num非法（数字开头），my-name非法（含-），class是关键字非法。</details>

2. **`int` 和 `double` 的区别是什么？什么情况下必须用double？**
   <details><summary>答案</summary>int存整数，double存小数。需要小数精度（如除法、圆周率）时必须用double。</details>

3. **`string` 类型需要包含什么头文件？**
   <details><summary>答案</summary>#include &lt;string></details>

4. **以下代码输出什么？`int a = 5 / 2; cout << a;`**
   <details><summary>答案</summary>输出2（整数除法截断小数部分）。</details>

5. **`double a = 5 / 2;` 和 `double a = 5.0 / 2;` 结果一样吗？**
   <details><summary>答案</summary>不一样！前者=2（先整数除法），后者=2.5（浮点除法）。</details>

6. **变量不初始化就使用会怎样？**
   <details><summary>答案</summary>包含垃圾值（未定义行为），可能输出随机数。</details>

7. **常量 `const int MAX = 100;` 和变量有什么区别？**
   <details><summary>答案</summary>常量定义后不能修改，编译期检查，更安全。</details>

8. **`int` 一般占用多少字节？取值范围大约是多少？**
   <details><summary>答案</summary>通常4字节，约-21亿到+21亿（&lt;code>-2^31&lt;/code>到&lt;code>2^31-1&lt;/code>）。</details>

9. **交换两个变量的值需要几步？能不用临时变量吗？**
   <details><summary>答案</summary>标准方法需要3步（temp=a; a=b; b=temp）。可以用加减法或异或实现，但不推荐。</details>

10. **如何判断一个数是奇数还是偶数？写出代码。**
    <details><summary>答案</summary>用取余：if (n % 2 == 0) 是偶数，else 是奇数。</details>

---

### 🔹 知识点3：输入输出 (cin/cout)

1. **`cin >> a >> b;` 输入时如何分隔两个数？**
   <details><summary>答案</summary>用空格、回车或Tab分隔都可以。</details>

2. **`cin` 和 `cout` 的箭头方向为什么相反？**
   <details><summary>答案</summary>cin用>>（提取数据到变量），cout用&lt;&lt;（插入数据到输出），方向表示数据流向。</details>

3. **如何让输出不换行？如何让输出强制换行？**
   <details><summary>答案</summary>不加endl就不换行；用endl或'\\n'换行。</details>

4. **输入字符串时，`cin >> s;` 和 `getline(cin, s);` 的区别？**
   <details><summary>答案</summary>cin遇到空格停止；getline读取整行包括空格。</details>

5. **如何格式化输出小数位数（保留2位小数）？**
   <details><summary>答案</summary>cout &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; num;（需要#include &lt;iomanip>）</details>

6. **`cin` 输入失败会怎样？如何检测？**
   <details><summary>答案</summary>返回false，可用if(!(cin>>a))检测或while(cin>>a)循环。</details>

7. **如何清空输入缓冲区？**
   <details><summary>答案</summary>cin.ignore()或cin.ignore(numeric_limits&lt;streamsize>::max(), '\\n')</details>

8. **`cout` 输出多个数据时，默认有分隔符吗？**
   <details><summary>答案</summary>没有，需要手动加空格或换行。</details>

9. **输入 `3.14` 到 int 变量会怎样？**
   <details><summary>答案</summary>只读取整数部分3，.14留在缓冲区。</details>

10. **如何一次性读取到文件结束？**
    <details><summary>答案</summary>while (cin >> x) { ... } 或 while (scanf(...) != EOF)</details>

---

## 📗 L2：分支与循环

### 🔹 知识点1：if-else 分支

1. **`if (a = 5)` 和 `if (a == 5)` 的区别？后者有什么风险？**
   <details><summary>答案</summary>前者是赋值（a变成5，条件恒真），后者是比较。应将常量放左边：if (5 == a)避免误写成赋值。</details>

2. **多个if 和 if-else if-else 的区别？**
   <details><summary>答案</summary>多个if都判断；else if只在前面的不成立时才判断，是互斥的。</details>

3. **`if` 后面可以没有大括号吗？什么时候必须加？**
   <details><summary>答案</summary>单条语句可以省略，多条必须加。建议始终加，避免bug。</details>

4. **如何表示多个条件的「且」和「或」？**
   <details><summary>答案</summary>&& 表示且，|| 表示或，! 表示非。</details>

5. **判断成绩等级的正确顺序是什么？为什么？**
   <details><summary>答案</summary>从高到低：先判断>=90，再>=80...。如果反过来，>=60会把90分也当成及格。</details>

6. **`if (a > 0)` 后面能直接跟 `else if (a < 0)` 吗？遗漏了什么？**
   <details><summary>答案</summary>遗漏了a==0的情况。条件要完备。</details>

7. **三目运算符 `?:` 和 if-else 的转换？**
   <details><summary>答案</summary>max = (a>b) ? a : b; 等价于 if-else，但更简洁。</details>

8. **如何比较两个浮点数是否相等？**
   <details><summary>答案</summary>不能直接==比较，应判断差值小于某个小值：fabs(a-b) &lt; 1e-9</details>

9. **switch-case 和 if-else if 什么时候用哪个？**
   <details><summary>答案</summary>整数/字符的等值判断用switch更简洁；范围判断或浮点数只能用if。</details>

10. **break 在 switch 中的作用？忘记写会怎样？**
    <details><summary>答案</summary>跳出switch。忘记写会"穿透"到下一个case继续执行。</details>

---

### 🔹 知识点2：for 循环

1. **`for (int i = 0; i < 5; i++)` 执行几次？i的值分别是？**
   <details><summary>答案</summary>执行5次，i=0,1,2,3,4。</details>

2. **`for (int i = 0; i <= 5; i++)` 和 `for (int i = 0; i < 5; i++)` 区别？**
   <details><summary>答案</summary>前者执行6次（0-5），后者执行5次（0-4）。数组遍历用&lt;避免越界。</details>

3. **`for` 循环的三个部分可以省略吗？**
   <details><summary>答案</summary>都可以省略，但分号不能省。如for(;;)是无限循环。</details>

4. **`continue` 和 `break` 的区别？**
   <details><summary>答案</summary>continue跳过本次循环剩余部分，进入下一次；break直接跳出整个循环。</details>

5. **循环后加分号 `for(...);` 会怎样？**
   <details><summary>答案</summary>循环体为空语句，原循环体只执行一次（作为循环后的语句）。</details>

6. **如何倒序遍历？写出代码。**
   <details><summary>答案</summary>for (int i = n-1; i >= 0; i--)</details>

7. **嵌套循环时，内层循环的变量可以和外层一样吗？**
   <details><summary>答案</summary>不建议，会遮蔽外层变量，导致混乱。</details>

8. **`for (int i = 0; i < n; i += 2)` 是做什么的？**
   <details><summary>答案</summary>每隔一个元素访问（步长为2），常用于访问偶数下标。</details>

9. **如何计算循环执行次数？**
   <details><summary>答案</summary>终值-初值（注意开闭区间），除以步长，向上取整。</details>

10. **打印1-100中能被3整除但不能被5整除的数？**
    <details><summary>答案</summary>for(int i=1; i&lt;=100; i++) if(i%3==0 && i%5!=0) cout&lt;&lt;i;</details>

---

### 🔹 知识点3：while 循环

1. **`while` 和 `do-while` 的区别？**
   <details><summary>答案</summary>while先判断后执行（可能一次都不执行）；do-while先执行后判断（至少执行一次）。</details>

2. **什么时候用 `while` 比 `for` 更合适？**
   <details><summary>答案</summary>循环次数不确定时，如读取到文件结束、猜数字直到猜中。</details>

3. **`while(1)` 是什么意思？如何跳出？**
   <details><summary>答案</summary>无限循环，用break或return跳出。</details>

4. **以下代码有什么问题？`int i=0; while(i<5); { ... i++; }`**
   <details><summary>答案</summary>while后多了分号，导致空循环体，i不变，死循环。</details>

5. **如何用 `while` 实现 `for (int i=0; i<n; i++)`？**
   <details><summary>答案</summary>int i=0; while(i&lt;n) { ... i++; }</details>

---

### 🔹 知识点4：循环应用（累加/累乘）

1. **求和时，sum的初始值应该设为多少？**
   <details><summary>答案</summary>0（加法的单位元）。</details>

2. **求积时，product的初始值应该设为多少？**
   <details><summary>答案</summary>1（乘法的单位元）。设为0会导致结果永远是0。</details>

3. **如何求1到100中所有奇数的和？**
   <details><summary>答案</summary>for(int i=1; i&lt;=100; i+=2) sum += i; 或 if(i%2==1)</details>

4. **计算阶乘 n! 时，需要注意什么？**
   <details><summary>答案</summary>用long long防溢出；0!=1。</details>

5. **如何求数组中的最大值？算法思路是什么？**
   <details><summary>答案</summary>先假设第一个最大，然后遍历比较，遇到更大的就更新。</details>

6. **求最大值的初始值可以设为0吗？有什么问题？**
   <details><summary>答案</summary>如果数组全是负数会出错。应设为第一个元素或INT_MIN。</details>

7. **如何同时求最大值和最小值？**
   <details><summary>答案</summary>同时维护max和min，一次遍历完成。</details>

8. **求平均数时，为什么要除以5.0而不是5？**
   <details><summary>答案</summary>5是整数除法，会截断小数；5.0是浮点除法，保留小数。</details>

9. **如何统计满足条件的元素个数？**
   <details><summary>答案</summary>设置计数器count，满足条件时count++。</details>

10. **水仙花数（各位立方和等于本身）的判断代码？**
    <details><summary>答案</summary>分解出个位、十位、百位，分别立方求和比较。</details>

---

## 📙 L3：数组

### 🔹 知识点1：数组基础

1. **数组下标从几开始？`int a[5]` 的有效下标范围是？**
   <details><summary>答案</summary>从0开始。有效下标0,1,2,3,4。没有a[5]！</details>

2. **访问 `a[5]` 会怎样？**
   <details><summary>答案</summary>数组越界，访问未定义内存，可能导致程序崩溃或奇怪错误。</details>

3. **数组名代表什么？`cout << a;` 输出什么？**
   <details><summary>答案</summary>数组名是首元素地址。输出的是地址（十六进制数），不是数组内容。</details>

4. **如何获取数组元素个数？**
   <details><summary>答案</summary>sizeof(a)/sizeof(a[0])，仅在定义数组的同一作用域有效。</details>

5. **数组可以直接赋值吗？`a = b;` 合法吗？**
   <details><summary>答案</summary>C++数组不能直接赋值，需要逐个元素复制或使用std::copy。</details>

6. **局部数组不初始化会怎样？**
   <details><summary>答案</summary>包含垃圾值（未定义）。全局数组会自动初始化为0。</details>

7. **`int a[5] = {1, 2};` 其他元素的值是？**
   <details><summary>答案</summary>部分初始化，其余为0。所以a[2]=a[3]=a[4]=0。</details>

8. **数组能定义成变量大小吗？如 `int n; cin>>n; int a[n];`**
   <details><summary>答案</summary>C++标准不支持（某些编译器支持作为扩展）。应使用vector或动态分配。</details>

9. **如何遍历数组？写出代码。**
   <details><summary>答案</summary>for (int i = 0; i &lt; n; i++) cout &lt;&lt; a[i];</details>

10. **数组作为函数参数时，会发生什么？**
    <details><summary>答案</summary>数组退化为指针，传递的是地址，函数内修改会影响原数组。</details>

---

### 🔹 知识点2：数组操作

1. **如何交换数组两个元素 `a[i]` 和 `a[j]`？**
   <details><summary>答案</summary>int temp = a[i]; a[i] = a[j]; a[j] = temp;</details>

2. **如何逆序数组？** 
   <details><summary>答案</summary>双指针法：i从0开始，j从n-1开始，交换后i++、j--，直到i>=j。</details>

3. **如何在数组中查找某个值？找不到返回什么？**
   <details><summary>答案</summary>线性遍历，找到返回下标，找不到返回-1或特殊值。</details>

4. **如何删除数组中的某个元素？**
   <details><summary>答案</summary>将该位置后的所有元素前移一位，数组大小减1。</details>

5. **如何在数组中插入元素？**
   <details><summary>答案</summary>从末尾开始后移，腾出位置后插入。</details>

6. **如何统计数组中某个值出现的次数？**
   <details><summary>答案</summary>遍历数组，相等则计数器++。</details>

7. **如何判断数组是否有序（升序）？**
   <details><summary>答案</summary>遍历，检查是否每个元素&lt;=后一个元素。</details>

8. **如何复制数组a到数组b？**
   <details><summary>答案</summary>逐个元素复制：for(i=0;i&lt;n;i++) b[i]=a[i];</details>

9. **如何找出数组中的第二大的数？**
   <details><summary>答案</summary>遍历一次，维护最大和次大，注意处理重复最大值。</details>

10. **如何去掉数组中的重复元素？**
    <details><summary>答案</summary>先排序，然后双指针去重；或用新数组存储已出现的元素。</details>

---

## 📕 L4：函数

### 🔹 知识点1：函数基础

1. **函数的三要素是什么？**
   <details><summary>答案</summary>返回值类型、函数名、参数列表。</details>

2. **函数声明和函数定义的区别？**
   <details><summary>答案</summary>声明只写函数头（告诉编译器存在）；定义写完整实现。</details>

3. **为什么需要函数声明？**
   <details><summary>答案</summary>让编译器知道函数签名，支持先调用后定义，支持多文件编译。</details>

4. **`void` 函数可以写 `return;` 吗？可以返回值吗？**
   <details><summary>答案</summary>可以写return;（提前结束），但不能返回具体值。</details>

5. **函数可以没有参数吗？可以有多少个参数？**
   <details><summary>答案</summary>可以没有参数（void）。参数个数受实现限制，但通常足够用。</details>

6. **函数体内部定义的变量，函数外能访问吗？**
   <details><summary>答案</summary>不能，这是局部变量，只在函数内有效。</details>

7. **函数可以嵌套定义吗？**
   <details><summary>答案</summary>C++不允许函数嵌套定义（但允许嵌套调用）。</details>

8. **`main` 函数可以调用自己吗？（递归）**
   <details><summary>答案</summary>技术上可以，但会导致无限递归直至栈溢出崩溃。</details>

9. **函数的返回值可以忽略吗？**
   <details><summary>答案</summary>可以，但通常不建议（除非是副作用函数）。</details>

10. **如何理解"函数是代码的复用"？**
    <details><summary>答案</summary>把常用逻辑封装起来，多次调用避免重复代码。</details>

---

### 🔹 知识点2：参数传递

1. **值传递时，函数内修改参数会影响外部变量吗？**
   <details><summary>答案</summary>不会，传递的是副本。</details>

2. **如何让函数修改外部变量？**
   <details><summary>答案</summary>使用指针传递或引用传递。</details>

3. **引用传递和指针传递的区别？**
   <details><summary>答案</summary>引用更简洁（像原变量别名），必须初始化且不能改变绑定；指针更灵活（可为空，可重新指向）。</details>

4. **数组作为参数传递时，是值传递还是引用传递？**
   <details><summary>答案</summary>数组退化为指针，实际上是地址传递，函数内修改会影响原数组。</details>

5. **为什么数组参数通常还要传一个长度参数？**
   <details><summary>答案</summary>数组退化为指针后丢失长度信息，需要额外传递。</details>

6. **`const` 参数的作用？**
   <details><summary>答案</summary>保证函数内不会修改参数，增强代码安全性。</details>

7. **默认参数是什么？有什么限制？**
   <details><summary>答案</summary>参数有默认值，调用时可省略。默认参数必须从右往左连续。</details>

8. **函数重载的条件是什么？**
   <details><summary>答案</summary>函数名相同，参数列表不同（类型、个数或顺序）。返回值不同不算重载。</details>

9. **`swap(a, b)` 函数为什么用引用或指针？**
   <details><summary>答案</summary>值传递无法修改外部变量，必须用引用或指针。</details>

10. **递归函数的两个必备要素？**
    <details><summary>答案</summary>递归终止条件（基准情况）+ 递归调用（向终止条件靠近）。</details>

---

## 📓 L5：指针与结构体

### 🔹 知识点1：指针基础

1. **`&` 运算符的作用？**
   <details><summary>答案</summary>取地址，获取变量在内存中的地址。</details>

2. **`*` 在声明和表达式中的不同含义？**
   <details><summary>答案</summary>声明时：int *p 表示p是指针；表达式中：*p 表示解引用，获取指针指向的值。</details>

3. **指针变量本身占用多少字节？**
   <details><summary>答案</summary>32位系统4字节，64位系统8字节（与指向的数据类型无关）。</details>

4. **`int *p;` 后直接使用 `*p = 10;` 会怎样？**
   <details><summary>答案</summary>未定义行为！p是野指针，指向随机地址，可能导致程序崩溃。</details>

5. **空指针 `NULL` 和 `nullptr` 的区别？**
   <details><summary>答案</summary>nullptr是C++11引入的类型安全的空指针，推荐用nullptr。</details>

6. **如何理解"指针就是地址"？**
   <details><summary>答案</summary>指针变量存储的是内存地址，通过地址可以找到对应的内存单元。</details>

7. **指针的指针 `int **p;` 是什么？**
   <details><summary>答案</summary>指向指针的指针，存储的是指针变量的地址。用于二维数组、动态分配等。</details>

8. **`p++` 和 `(*p)++` 的区别？**
   <details><summary>答案</summary>p++让指针指向下一个位置（地址增加sizeof(类型)）；(*p)++让指针指向的值加1。</details>

9. **指针相减表示什么？**
   <details><summary>答案</summary>两个地址之间相差多少个元素（不是字节数）。</details>

10. **如何避免野指针？**
    <details><summary>答案</summary>指针初始化时设为nullptr；释放后置nullptr；使用前检查非空。</details>

---

### 🔹 知识点2：指针与数组

1. **数组名和指针的关系？**
   <details><summary>答案</summary>数组名是常量指针（不能修改），指向数组首元素。</details>

2. **`a[i]` 和 `*(a+i)` 等价吗？**
   <details><summary>答案</summary>等价，数组访问本质是指针运算。</details>

3. **`p = a;` 和 `p = &a[0];` 效果一样吗？**
   <details><summary>答案</summary>一样，都是让p指向数组首元素。</details>

4. **指针如何遍历数组？写出代码。**
   <details><summary>答案</summary>int *p = a; for(int i=0; i&lt;n; i++) cout &lt;&lt; *(p+i); 或 p++</details>

5. **`int (*p)[5]` 是什么指针？**
   <details><summary>答案</summary>指向包含5个int的数组的指针（数组指针），用于二维数组。</details>

6. **`int *p[5]` 是什么？**
   <details><summary>答案</summary>包含5个int*的数组（指针数组）。</details>

7. **指针数组和数组指针的区别？**
   <details><summary>答案</summary>int *p[5]是指针数组（5个指针）；int (*p)[5]是数组指针（指向数组的指针）。</details>

8. **字符串和字符指针的关系？**
   <details><summary>答案</summary>字符串常量返回的是const char*指针，指向字符串首字符。</details>

9. **为什么数组参数会退化为指针？**
   <details><summary>答案</summary>C/C++设计如此，避免数组拷贝的开销，同时丢失了数组大小信息。</details>

10. **动态数组 `new int[n]` 如何释放？**
    <details><summary>答案</summary>用 delete[] p; （方括号必须加，表示释放数组）。</details>

---

### 🔹 知识点3：结构体

1. **结构体和类的区别？**
   <details><summary>答案</summary>struct默认public，class默认private。其他基本相同。</details>

2. **如何访问结构体成员？**
   <details><summary>答案</summary>点运算符：stu.name；指针用箭头：p->name 或 (*p).name</details>

3. **结构体可以嵌套吗？**
   <details><summary>答案</summary>可以，一个结构体可以作为另一个结构体的成员。</details>

4. **结构体占用的内存大小等于各成员大小之和吗？**
   <details><summary>答案</summary>不一定，可能存在内存对齐，实际大小可能更大。</details>

5. **如何定义结构体变量？有几种方式？**
   <details><summary>答案</summary>先定义类型再定义变量；定义类型的同时定义变量；用typedef简化。</details>

6. **结构体可以赋值吗？`a = b;`**
   <details><summary>答案</summary>可以，会逐个成员复制（浅拷贝）。</details>

7. **结构体数组如何初始化？**
   <details><summary>答案</summary>Student stu[3] = {{"a",15}, {"b",16}, {"c",17}};</details>

8. **结构体指针如何访问成员？**
   <details><summary>答案</summary>p->name 或 (*p).name</details>

9. **如何比较两个结构体是否相等？**
   <details><summary>答案</summary>不能直接用==，需要逐个成员比较或重载运算符。</details>

10. **结构体作为函数参数，传值和传引用的区别？**
    <details><summary>答案</summary>传值会复制整个结构体（效率低）；传引用只传递地址（效率高，可修改原值）。</details>

---

## 📔 L6：基础算法

### 🔹 知识点1：冒泡排序

1. **冒泡排序的时间复杂度？空间复杂度？**
   <details><summary>答案</summary>时间O(n²)，空间O(1)（原地排序）。</details>

2. **冒泡排序是稳定的吗？什么是稳定性？**
   <details><summary>答案</summary>是稳定的。稳定性指相等元素的相对顺序在排序后保持不变。</details>

3. **如何优化冒泡排序？**
   <details><summary>答案</summary>设置标志位，如果一轮没有交换，说明已有序，提前退出。</details>

4. **冒泡排序为什么叫"冒泡"？**
   <details><summary>答案</summary>大的元素像气泡一样逐渐"浮"到数组末端。</details>

5. **n个元素需要几轮比较？**
   <details><summary>答案</summary>最多n-1轮，第i轮比较n-i次。</details>

6. **选择排序和冒泡排序的区别？**
   <details><summary>答案</summary>选择排序每轮只交换一次（找最小值放前面）；冒泡排序相邻交换，可能交换多次。</details>

7. **什么时候冒泡排序效率还可以？**
   <details><summary>答案</summary>数据基本有序时，优化后的冒泡只需O(n)。</details>

8. **写出冒泡排序的核心代码（交换部分）。**
   <details><summary>答案</summary>if(a[j] > a[j+1]) swap(a[j], a[j+1]);</details>

9. **冒泡排序的最坏情况和最好情况？**
   <details><summary>答案</summary>最坏O(n²)（逆序），最好O(n)（已有序，优化后）。</details>

10. **除了冒泡，还有哪些O(n²)的排序？**
    <details><summary>答案</summary>选择排序、插入排序。</details>

---

### 🔹 知识点2：二分查找

1. **二分查找的前提条件是什么？**
   <details><summary>答案</summary>数组必须是有序的（升序或降序）。</details>

2. **二分查找的时间复杂度？**
   <details><summary>答案</summary>O(log n)，每次排除一半元素。</details>

3. **二分查找的基本步骤？**
   <details><summary>答案</summary>确定中间元素，比较目标值，缩小范围到左半或右半，重复直到找到或范围为空。</details>

4. **`mid = (left + right) / 2` 有什么潜在问题？**
   <details><summary>答案</summary>left+right可能溢出。应写为 left + (right-left)/2。</details>

5. **循环条件用 `left <= right` 和 `left < right` 的区别？**
   <details><summary>答案</summary>&lt;=表示区间[left,right]闭合，需要检查=的情况；&lt;表示[left,right)左闭右开。</details>

6. **二分查找找不到时返回什么？**
   <details><summary>答案</summary>通常返回-1或应该插入的位置。</details>

7. **二分查找适用于链表吗？**
   <details><summary>答案</summary>不适合，因为链表不支持O(1)的随机访问。</details>

8. **如何二分查找第一个等于target的元素？**
   <details><summary>答案</summary>找到target后继续向左搜索，或使用 lower_bound 思想。</details>

9. **二分查找和线性查找的区别？**
   <details><summary>答案</summary>二分要求有序O(log n)；线性不要求有序O(n)。</details>

10. **二分查找的递归写法思路？**
    <details><summary>答案</summary>基准情况：left>right返回-1；递归：比较mid，在左半或右半继续查找。</details>

---

### 🔹 知识点3：算法复杂度

1. **时间复杂度是什么？**
   <details><summary>答案</summary>衡量算法运行时间随输入规模增长的变化趋势，用大O表示。</details>

2. **O(1)、O(n)、O(n²)、O(log n)、O(n log n) 的优劣排序？**
   <details><summary>答案</summary>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²)</details>

3. **为什么只保留最高阶项？**
   <details><summary>答案</summary>当n很大时，低阶项和系数的影响可以忽略。</details>

4. **空间复杂度是什么？**
   <details><summary>答案</summary>算法运行时额外占用的内存空间随输入规模的变化趋势。</details>

5. **递归算法的空间复杂度包括什么？**
   <details><summary>答案</summary>递归栈空间，深度越深占用越多。</details>

6. **n=1000时，O(n)和O(n²)差多少倍？**
   <details><summary>答案</summary>O(n²)是O(n)的1000倍操作次数。</details>

7. **什么是最好、最坏、平均时间复杂度？**
   <details><summary>答案</summary>最好：最理想输入；最坏：最糟糕输入；平均：随机输入期望。</details>

8. **如何计算循环的时间复杂度？**
   <details><summary>答案</summary>统计基本操作执行次数，分析嵌套循环层级。</details>

9. **常数时间复杂度的例子？**
   <details><summary>答案</summary>数组按索引访问、哈希表查找（平均）。</details>

10. **为什么算法竞赛中1000万（10^7）是常见的时间界限？**
    <details><summary>答案</summary>现代CPU每秒约执行10^8次操作，10^7在给定时间限制（通常1秒）内安全。</details>

---

## 📒 L7：数据结构

### 🔹 知识点1：栈 (Stack)

1. **栈的核心特性是什么？**
   <details><summary>答案</summary>LIFO（Last In First Out），后进先出。</details>

2. **栈的基本操作有哪些？**
   <details><summary>答案</summary>push（入栈）、pop（出栈）、top（查看栈顶）、empty（判断是否为空）。</details>

3. **栈可以用什么数据结构实现？**
   <details><summary>答案</summary>数组（顺序栈）或链表（链栈）。</details>

4. **栈溢出的原因？**
   <details><summary>答案</summary>入栈次数超过栈容量；或递归太深导致调用栈溢出。</details>

5. **栈的典型应用场景？**
   <details><summary>答案</summary>函数调用、表达式求值、括号匹配、浏览器前进后退、DFS。</details>

6. **如何用栈判断括号是否匹配？**
   <details><summary>答案</summary>左括号入栈，右括号与栈顶匹配则出栈，最后栈空则匹配。</details>

7. **如何用栈实现递归的功能？**
   <details><summary>答案</summary>用栈保存状态，模拟递归调用过程。</details>

8. **中缀表达式转后缀表达式用什么数据结构？**
   <details><summary>答案</summary>栈。操作符入栈，按优先级处理。</details>

9. **单调栈是什么？有什么用？**
   <details><summary>答案</summary>栈内元素保持单调性（递增或递减），用于找下一个更大/更小元素。</details>

10. **C++ STL中栈的用法？**
    <details><summary>答案</summary>#include &lt;stack>；stack&lt;int> s; s.push(), s.pop(), s.top(), s.empty(), s.size()</details>

---

### 🔹 知识点2：队列 (Queue)

1. **队列的核心特性是什么？**
   <details><summary>答案</summary>FIFO（First In First Out），先进先出。</details>

2. **队列的基本操作？**
   <details><summary>答案</summary>push/enqueue（入队）、pop/dequeue（出队）、front（队首）、back/rear（队尾）、empty。</details>

3. **普通队列和双端队列的区别？**
   <details><summary>答案</summary>普通队列只在队尾入队、队首出队；双端队列两端都可以入队和出队。</details>

4. **循环队列解决什么问题？**
   <details><summary>答案</summary>解决普通队列"假溢出"问题（前面有空位但无法使用）。</details>

5. **队列的典型应用场景？**
   <details><summary>答案</summary>BFS、任务调度、缓冲处理、消息队列、打印队列。</details>

6. **如何用两个栈实现一个队列？**
   <details><summary>答案</summary>一个栈负责入队，另一个负责出队，需要时把入队栈全部倒入出队栈。</details>

7. **优先队列是什么？底层用什么实现？**
   <details><summary>答案</summary>每次取出优先级最高的元素；通常用堆（heap）实现。</details>

8. **单调队列是什么？有什么用？**
   <details><summary>答案</summary>队列保持单调性，用于滑动窗口最值问题。</details>

9. **BFS为什么用队列而不是栈？**
   <details><summary>答案</summary>BFS需要按层次扩展，队列保证先访问的节点先扩展，实现层层推进。</details>

10. **C++ STL中队列的用法？**
    <details><summary>答案</summary>#include &lt;queue>；queue&lt;int> q; q.push(), q.pop(), q.front(), q.back(), q.empty()</details>

---

### 🔹 知识点3：树与二叉树

1. **树和图的主要区别？**
   <details><summary>答案</summary>树没有环，连通，n个节点有n-1条边；图可以有环。</details>

2. **二叉树的特点？**
   <details><summary>答案</summary>每个节点最多有两个子节点（左子树和右子树）。</details>

3. **二叉树的三种遍历方式？**
   <details><summary>答案</summary>前序（根左右）、中序（左根右）、后序（左右根）。</details>

4. **已知中序和前序，能否唯一确定一棵二叉树？**
   <details><summary>答案</summary>可以。前序找根，中序分左右子树。</details>

5. **满二叉树和完全二叉树的区别？**
   <details><summary>答案</summary>满二叉树每层都满；完全二叉树最后一层从左到右连续，可以不满。</details>

6. **二叉树的存储方式？**
   <details><summary>答案</summary>链式存储（节点+左右指针）或顺序存储（数组，适合完全二叉树）。</details>

7. **二叉搜索树(BST)的特点？**
   <details><summary>答案</summary>左子树所有节点&lt;根&lt;右子树所有节点，中序遍历得到有序序列。</details>

8. **BST查找、插入、删除的时间复杂度？**
   <details><summary>答案</summary>平均O(log n)，最坏O(n)（退化成链表）。平衡BST（如AVL）保证O(log n)。</details>

9. **哈夫曼树是什么？有什么用？**
   <details><summary>答案</summary>带权路径长度最小的二叉树，用于数据压缩（哈夫曼编码）。</details>

10. **堆和二叉搜索树的区别？**
    <details><summary>答案</summary>堆只保证父节点大于（小于）子节点，不保证左右子树有序关系。</details>

---

## 📚 L8：高级算法

### 🔹 知识点1：图的基本概念

1. **有向图和无向图的区别？**
   <details><summary>答案</summary>有向图边有方向（A→B≠B→A）；无向图边无方向（A-B=B-A）。</details>

2. **图的两种存储方式？优缺点？**
   <details><summary>答案</summary>邻接矩阵：O(1)查边，空间O(n²)，适合稠密图。邻接表：空间O(n+m)，适合稀疏图。</details>

3. **什么是度？入度和出度？**
   <details><summary>答案</summary>度是连接的边数。有向图中，入度=指向该点的边数，出度=从该点出发的边数。</details>

4. **什么是路径、简单路径、环？**
   <details><summary>答案</summary>路径是顶点序列；简单路径不重复经过顶点；环是起点终点相同的路径。</details>

5. **连通图和强连通图的区别？**
   <details><summary>答案</summary>无向图连通=任意两点可达；有向图强连通=双向都可达。</details>

6. **什么是带权图？**
   <details><summary>答案</summary>边上有权重（如距离、费用），用于最短路径等问题。</details>

7. **树的定义？树是无向图还是有向图？**
   <details><summary>答案</summary>无环连通图。通常视为无向图，但可以有根树（有向）。</details>

8. **稠密图和稀疏图怎么区分？**
   <details><summary>答案</summary>边数接近n²的是稠密图，接近n的是稀疏图。</details>

9. **自环和重边是什么？**
   <details><summary>答案</summary>自环是顶点到自己的边；重边是两点间多条边。</details>

10. **如何计算无向图的边数？**
    <details><summary>答案</summary>所有顶点度数之和 / 2。</details>

---

### 🔹 知识点2：BFS 与 DFS

1. **BFS和DFS的基本思想区别？**
   <details><summary>答案</summary>BFS层层扩展（宽）；DFS一条路走到底（深）。</details>

2. **BFS用什么数据结构？DFS用什么？**
   <details><summary>答案</summary>BFS用队列；DFS用栈（递归隐含用系统栈）。</details>

3. **BFS适合解决什么问题？**
   <details><summary>答案</summary>最短路径（无权图）、连通性、层次遍历。</details>

4. **DFS适合解决什么问题？**
   <details><summary>答案</summary>连通块、拓扑排序、找环、全排列、回溯问题。</details>

5. **为什么BFS能求无权图最短路？**
   <details><summary>答案</summary>BFS按距离起点的远近逐层访问，第一次访问到终点就是最短距离。</details>

6. **DFS如何避免重复访问？**
   <details><summary>答案</summary>用visited数组标记已访问节点。</details>

7. **什么是回溯？**
   <details><summary>答案</summary>DFS中走不通时回退到上一个决策点，尝试其他路径。</details>

8. **连通块计数用什么遍历？**
   <details><summary>答案</summary>对每个未访问点启动一次BFS/DFS，统计启动次数。</details>

9. **BFS和DFS的时间复杂度？**
   <details><summary>答案</summary>都是O(n+m)，n是顶点数，m是边数。</details>

10. **什么时候必须用DFS而BFS不行？**
    <details><summary>答案</summary>需要遍历所有路径、需要回溯、需要保存路径信息时。</details>

---

### 🔹 知识点3：最短路径

1. **Dijkstra算法适用条件？**
   <details><summary>答案</summary>单源最短路，边权非负。</details>

2. **Dijkstra的核心思想？**
   <details><summary>答案</summary>贪心：每次选距离最小的未确定点，用它更新邻居。</details>

3. **为什么Dijkstra要求边权非负？**
   <details><summary>答案</summary>负权边可能导致已确定的最短路径被更新，破坏贪心正确性。</details>

4. **有负权边用什么算法？**
   <details><summary>答案</summary>Bellman-Ford或SPFA。</details>

5. **多源最短路用什么算法？**
   <details><summary>答案</summary>Floyd-Warshall，求所有点对间最短路。</details>

6. **Dijkstra朴素实现和堆优化的复杂度？**
   <details><summary>答案</summary>朴素O(n²)，堆优化O(m log n)。</details>

7. **什么是松弛(relax)操作？**
   <details><summary>答案</summary>如果dist[u] + w(u,v) &lt; dist[v]，则更新dist[v]。</details>

8. **如何记录最短路径而不只是距离？**
   <details><summary>答案</summary>用pre数组记录前驱节点，最后回溯得到路径。</details>

9. **最小生成树和最短路问题的区别？**
   <details><summary>答案</summary>最短路是两点间最短路径；最小生成树是连接所有点的最小权边集。</details>

10. **Prim和Kruskal的区别？**
    <details><summary>答案</summary>Prim从点出发（适合稠密图），Kruskal从边出发（适合稀疏图）。</details>

---

### 🔹 知识点4：动态规划入门

1. **动态规划的核心思想？**
   <details><summary>答案</summary>最优子结构 + 重叠子问题 + 记忆化/递推。</details>

2. **DP和分治的区别？**
   <details><summary>答案</summary>分治子问题独立不重叠；DP子问题重叠，需要记忆化避免重复计算。</details>

3. **DP和贪心的区别？**
   <details><summary>答案</summary>贪心只做局部最优选择；DP考虑所有可能，保存所有子问题最优解。</details>

4. **爬楼梯问题：dp[i]的含义？**
   <details><summary>答案</summary>到达第i级台阶的方法数。</details>

5. **爬楼梯的状态转移方程？**
   <details><summary>答案</summary>dp[i] = dp[i-1] + dp[i-2]（最后一步走1阶或2阶）。</details>

6. **DP的两种实现方式？**
   <details><summary>答案</summary>记忆化搜索（自顶向下+递归）和递推（自底向上+循环）。</details>

7. **什么是状态？什么是状态转移？**
   <details><summary>答案</summary>状态是描述问题所需的变量集合；状态转移是从已知状态推导未知状态的规则。</details>

8. **0/1背包问题的状态定义？**
   <details><summary>答案</summary>dp[i][j] = 前i个物品，容量j时的最大价值。</details>

9. **0/1背包的状态转移方程？**
   <details><summary>答案</summary>dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i]] + v[i])（不选或选第i个）。</details>

10. **如何优化0/1背包的空间？**
    <details><summary>答案</summary>一维数组，逆序更新：for(j=W; j>=w[i]; j--) dp[j] = max(dp[j], dp[j-w[i]]+v[i])</details>

---

## 📊 使用指南

### 自我检测流程

1. **学完一个知识点后**，遮住答案，尝试回答10个问题
2. **记录答对的题数**：
   - 8-10题 ✅ 掌握良好，可以继续
   - 5-7题 ⚠️ 需要复习，重新阅读相关内容
   - 0-4题 ❌ 需要重新学习，做更多练习

3. **重点关注答错的题目**，理解背后的概念

4. **定期复习**，特别是标记为掌握不牢的知识点

### 教学建议

- 这些问题可用于**课堂测验**、**课后作业**或**面试准备**
- 建议学生在**不看代码的情况下**先口头回答概念问题
- 编程实现题要求**独立写出完整代码**，不能复制粘贴

---

*生成时间：2026-03-29*  
*适用对象：C++ L1-L8 学习者*  
*建议用时：每个知识点15-20分钟*
