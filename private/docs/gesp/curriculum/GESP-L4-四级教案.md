{% raw %}
# GESP C++ L4 四级教案

> **课程定位**: 数据结构入门，函数与文件操作  
> **课时安排**: 12课时（每课时90分钟）  
> **适合学员**: 已通过GESP三级或同等水平  
> **教学理念**: 封装复用、模块化思维，从过程到结构

---

## 一、课程目标与学习成果

### 1.1 总体目标
- 掌握指针的概念与基本操作
- 熟练使用二维数组与结构体
- 理解函数的定义、调用与参数传递
- 掌握三种基本排序算法
- 学会文件读写与异常处理

### 1.2 学习成果
| 序号 | 学习成果 |
|:---:|:---|
| 1 | 正确理解和使用指针 |
| 2 | 熟练操作二维数组与结构体 |
| 3 | 编写和调用函数，理解参数传递机制 |
| 4 | 实现冒泡、插入、选择排序 |
| 5 | 分析算法时间复杂度和空间复杂度 |
| 6 | 进行基本的文件读写操作 |

---

## 二、核心知识点清单

| 知识块 | 知识点 | 难度 | 课时 |
|:---|:---|:---:|:---:|
| 指针 | 指针概念、定义、赋值、解引用 | ⭐⭐⭐ | 2 |
| 二维数组 | 定义、初始化、遍历、操作 | ⭐⭐ | 1.5 |
| 结构体 | 定义、使用、结构体数组 | ⭐⭐ | 1.5 |
| 函数 | 定义、调用、参数传递、作用域 | ⭐⭐⭐ | 2 |
| 排序算法 | 冒泡、插入、选择排序 | ⭐⭐⭐ | 2 |
| 复杂度分析 | 时间/空间复杂度估算 | ⭐⭐⭐ | 1 |
| 文件操作 | 文件读写、重定向 | ⭐⭐ | 1 |
| 异常处理 | try-catch机制 | ⭐⭐ | 1 |

---

## 三、详细教学设计

### 第1-2课时：指针基础

#### 教学目标
- 理解指针的概念和作用
- 掌握指针的定义、赋值和解引用
- 理解指针与数组的关系

#### 教学内容

**1. 指针概念（20分钟）**
```
指针：存储内存地址的变量

内存模型：
地址    内容
1000    10    ← 变量a
1004    1000  ← 指针p（存储a的地址）

声明：int *p;  // p是指向int的指针
赋值：p = &a;  // &取地址
解引用：*p = 20;  // *取值，相当于a = 20
```

**2. 指针基本操作（30分钟）**
```cpp
int a = 10;
int *p = &a;  // p指向a

cout << p;   // 输出a的地址
cout << *p;  // 输出a的值（10）
cout << &a; // 输出a的地址（与p相同）

*p = 20;      // 通过指针修改a的值
cout << a;   // 输出20
```

**3. 指针与数组（20分钟）**
```cpp
int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;  // 数组名就是首元素地址

// 以下等价
arr[0]  == *p      == *(arr+0)
arr[1]  == *(p+1)  == *(arr+1)
arr[i]  == *(p+i)  == *(arr+i)

// 指针运算
p++;  // p指向arr[1]
p--;  // p指回arr[0]
```

#### 示例代码

**【例1】指针基础**
```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 100;
    int *p = &a;
    
    cout << "变量a的值：" << a << endl;
    cout << "变量a的地址：" << &a << endl;
    cout << "指针p的值（地址）：" << p << endl;
    cout << "指针p指向的值：" << *p << endl;
    
    *p = 200;  // 通过指针修改
    cout << "修改后a的值：" << a << endl;
    
    return 0;
}
```

**【例2】指针遍历数组**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;
    
    // 方法1：下标访问
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // 方法2：指针访问
    for (int i = 0; i < 5; i++) {
        cout << *(p + i) << " ";
    }
    cout << endl;
    
    // 方法3：指针移动
    for (p = arr; p < arr + 5; p++) {
        cout << *p << " ";
    }
    cout << endl;
    
    return 0;
}
```

---

### 第3课时：二维数组

#### 教学目标
- 理解二维数组的内存布局
- 掌握二维数组的定义和操作
- 能够解决矩阵相关问题

#### 教学内容

**1. 二维数组概念（15分钟）**
```
二维数组：数组的数组

int arr[3][4];  // 3行4列的矩阵

内存布局（连续存储）：
arr[0][0] arr[0][1] arr[0][2] arr[0][3]
arr[1][0] arr[1][1] arr[1][2] arr[1][3]
arr[2][0] arr[2][1] arr[2][2] arr[2][3]

访问：arr[i][j]  第i行第j列
```

**2. 二维数组操作（25分钟）**
```cpp
int a[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// 遍历
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        cout << a[i][j] << " ";
    }
    cout << endl;
}
```

#### 示例代码

**【例3】矩阵转置**
```cpp
#include <iostream>
using namespace std;

int main() {
    int a[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    int b[4][3];
    
    // 转置
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            b[j][i] = a[i][j];
        }
    }
    
    // 输出
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 3; j++) {
            cout << b[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```

**【例4】矩阵乘法**
```cpp
#include <iostream>
using namespace std;

int main() {
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int b[3][2] = {{7, 8}, {9, 10}, {11, 12}};
    int c[2][2] = {0};
    
    // C[i][j] = A的第i行与B的第j列的点积
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 3; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    
    // 输出结果
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << c[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```

---

### 第4课时：结构体

#### 教学目标
- 理解结构体的概念和用途
- 掌握结构体的定义和使用
- 能够使用结构体组织复杂数据

#### 教学内容

**1. 结构体概念（15分钟）**
```
结构体：自定义数据类型，将多个相关数据组合在一起

应用场景：
- 学生信息：姓名、年龄、成绩
- 坐标点：x、y
- 日期：年、月、日
```

**2. 结构体定义与使用（25分钟）**
```cpp
// 定义结构体
struct Student {
    string name;
    int age;
    double score;
};

// 声明变量
Student stu1;
Student stu2 = {"张三", 18, 89.5};

// 访问成员
stu1.name = "李四";
stu1.age = 19;
stu1.score = 92.0;

cout << stu2.name << " " << stu2.score;
```

#### 示例代码

**【例5】学生成绩管理**
```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int id;
    double scores[3];  // 三门成绩
    double average;
};

int main() {
    const int N = 3;
    Student stu[N];
    
    // 输入
    for (int i = 0; i < N; i++) {
        cin >> stu[i].name >> stu[i].id;
        double sum = 0;
        for (int j = 0; j < 3; j++) {
            cin >> stu[i].scores[j];
            sum += stu[i].scores[j];
        }
        stu[i].average = sum / 3;
    }
    
    // 按平均分排序
    for (int i = 0; i < N - 1; i++) {
        for (int j = 0; j < N - 1 - i; j++) {
            if (stu[j].average < stu[j+1].average) {
                swap(stu[j], stu[j+1]);
            }
        }
    }
    
    // 输出
    cout << "排名\t姓名\t学号\t平均分" << endl;
    for (int i = 0; i < N; i++) {
        cout << i+1 << "\t" << stu[i].name << "\t" 
             << stu[i].id << "\t" << stu[i].average << endl;
    }
    
    return 0;
}
```

---

### 第5-6课时：函数

#### 教学目标
- 理解函数的概念和作用
- 掌握函数的定义和调用
- 理解参数传递的三种方式

#### 教学内容

**1. 函数基础（20分钟）**
```
函数：完成特定功能的代码块

作用：
- 代码复用
- 模块化
- 便于维护

函数组成：
返回类型 函数名(参数列表) {
    函数体
    return 返回值;
}
```

**2. 参数传递（30分钟）**

**值传递**：传递副本，不改变原变量
```cpp
void swap_by_value(int a, int b) {
    int temp = a;
    a = b;
    b = temp;  // 只修改了副本
}
```

**指针传递**：传递地址，可修改原变量
```cpp
void swap_by_pointer(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;  // 修改了原变量
}
// 调用：swap_by_pointer(&x, &y);
```

**引用传递**（C++特有）：别名传递
```cpp
void swap_by_reference(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}
// 调用：swap_by_reference(x, y);
```

#### 示例代码

**【例6】函数综合应用**
```cpp
#include <iostream>
using namespace std;

// 值传递
int add(int a, int b) {
    return a + b;
}

// 指针传递
void add_one(int *n) {
    (*n)++;
}

// 引用传递
void add_two(int &n) {
    n += 2;
}

// 数组作为参数
int array_sum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int x = 5, y = 10;
    
    cout << add(x, y) << endl;  // 15
    
    add_one(&x);
    cout << x << endl;  // 6
    
    add_two(x);
    cout << x << endl;  // 8
    
    int arr[] = {1, 2, 3, 4, 5};
    cout << array_sum(arr, 5) << endl;  // 15
    
    return 0;
}
```

---

### 第7-8课时：排序算法

#### 教学目标
- 掌握三种基本排序算法
- 理解排序算法的稳定性
- 能够分析算法复杂度

#### 教学内容

**1. 冒泡排序（15分钟）**
```cpp
// 思想：相邻元素比较，大的往后冒
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}
// 时间：O(n²)  空间：O(1)  稳定
```

**2. 选择排序（15分钟）**
```cpp
// 思想：每次选最小的放到前面
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr[i], arr[minIdx]);
    }
}
// 时间：O(n²)  空间：O(1)  不稳定
```

**3. 插入排序（15分钟）**
```cpp
// 思想：将元素插入到已排序序列的合适位置
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}
// 时间：O(n²)  空间：O(1)  稳定
```

#### 算法对比

| 算法 | 最好 | 平均 | 最坏 | 空间 | 稳定 |
|:---|:---:|:---:|:---:|:---:|:---:|
| 冒泡 | O(n) | O(n²) | O(n²) | O(1) | ✓ |
| 选择 | O(n²) | O(n²) | O(n²) | O(1) | ✗ |
| 插入 | O(n) | O(n²) | O(n²) | O(1) | ✓ |

---

### 第9课时：复杂度分析

#### 教学目标
- 理解时间复杂度和空间复杂度
- 掌握大O表示法
- 能够分析简单算法的复杂度

#### 教学内容

**1. 复杂度概念（15分钟）**
```
时间复杂度：算法执行时间随输入规模增长的趋势
空间复杂度：算法占用内存随输入规模增长的趋势

大O表示法：描述算法复杂度的上界
- O(1)：常数时间
- O(log n)：对数时间
- O(n)：线性时间
- O(n log n)：线性对数时间
- O(n²)：平方时间
- O(2^n)：指数时间
```

**2. 复杂度分析技巧（20分钟）**
```cpp
// O(1)：常数时间
int a = 5;
int b = 10;
int c = a + b;

// O(n)：单层循环
for (int i = 0; i < n; i++) { ... }

// O(n²)：双层循环
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++) { ... }

// O(log n)：循环变量倍增/减半
for (int i = 1; i < n; i *= 2) { ... }
```

---

### 第10课时：文件操作

#### 教学目标
- 掌握C++文件读写方法
- 理解文件重定向
- 能够处理文件相关的问题

#### 教学内容

**文件操作**：
```cpp
#include <fstream>

// 写文件
ofstream fout("data.txt");
fout << "Hello" << endl;
fout.close();

// 读文件
ifstream fin("data.txt");
string s;
fin >> s;
fin.close();

// 重定向（竞赛常用）
freopen("input.txt", "r", stdin);
freopen("output.txt", "w", stdout);
```

---

### 第11-12课时：综合复习

#### 复习要点
1. 指针的理解和使用
2. 二维数组的操作
3. 结构体的应用
4. 函数的参数传递
5. 三种排序算法的实现

---

## 四、推荐练习题（洛谷题单554）

| 题号 | 题目名称 | 知识点 |
|:---:|:---|:---|
| P5740 | 【深基7.例9】智力大冲浪 | 结构体+排序 |
| P5741 | 【深基7.例10】旗鼓相当的对手 | 结构体 |
| P5742 | 【深基7.例11】评等级 | 结构体 |
| P5743 | 【深基7.习8】猴子吃桃 | 递推 |
| P5744 | 【深基7.习9】排序 | 结构体+排序 |

---

## 五、常见学生错误与纠正

| 错误 | 纠正 |
|:---|:---|
| 野指针 | 指针必须初始化后再使用 |
| 数组越界 | 注意边界检查 |
| 值传递想修改原值 | 使用指针或引用传递 |
| 排序不稳定问题 | 选择稳定的排序或调整比较条件 |
| 文件忘记关闭 | 养成close习惯，或用RAII模式 |

---

**版本**: 1.0  
**更新日期**: 2026-03-28

{% endraw %}
