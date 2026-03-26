---
layout: doc
---

# GESP C++ L4 教学手册

> 8周进阶教学计划 | 指针 · 结构体 · 文件操作 · 基础算法

---

## 课程概览

| 项目 | 内容 |
|:---|:---|
| **级别** | GESP C++ L4 |
| **目标** | 掌握函数进阶、结构体、基础算法，能编写模块化程序 |
| **时长** | 8周，每周2次课，每次2小时 |
| **总课时** | 32小时 |
| **前置要求** | 完成L3学习，掌握数组、字符串、基础函数 |
| **配套资源** | [L4能力图谱](/programming/gesp/ability-chart.md) |

---

## 第1-2周：函数进阶

### 第1周：函数参数与返回值

#### 教学目标
- 理解值传递与引用传递
- 掌握函数重载
- 能编写多返回值函数

#### 知识点详解

**值传递 vs 引用传递**

```cpp
// 值传递：不改变原变量
void swap_by_value(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // 出了函数，a和b的值不变
}

// 引用传递：改变原变量
void swap_by_ref(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
    // 出了函数，原变量的值交换了
}
```

**函数重载**

```cpp
// 同名函数，参数不同
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}
```

#### 课堂练习

1. 编写`max`函数的重载版本（int/double/int数组）
2. 实现交换两个字符串的函数
3. 写一个函数，同时返回数组的最大值和最小值

#### 课后作业

- 完成教材第5章练习1-5
- 刷题：函数相关5题（Hydro OJ）

---

### 第2周：递归入门

#### 教学目标
- 理解递归思想
- 掌握递归三要素
- 能编写简单递归函数

#### 知识点详解

**递归三要素**

```cpp
// 1. 递归终止条件（边界条件）
// 2. 递归调用
// 3. 返回值处理

int factorial(int n) {
    // 1. 终止条件
    if (n <= 1) return 1;
    
    // 2. 递归调用 + 3. 处理返回值
    return n * factorial(n - 1);
}
```

**经典递归问题**

```cpp
// 斐波那契数列
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// 汉诺塔
void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        cout << from << " -> " << to << endl;
        return;
    }
    hanoi(n - 1, from, aux, to);
    cout << from << " -> " << to << endl;
    hanoi(n - 1, aux, to, from);
}
```

#### 教学重点

- 强调递归的"自相似性"
- 用手工模拟理解递归过程
- 注意递归深度，避免栈溢出

#### 课后作业

- 实现递归求数组和
- 实现递归二分查找
- 刷题：递归入门5题

---

## 第3-4周：结构体

### 第3周：结构体基础

#### 教学目标
- 理解结构体的概念
- 掌握结构体定义和使用
- 能使用结构体组织数据

#### 知识点详解

**结构体定义**

```cpp
struct Student {
    string name;    // 姓名
    int id;         // 学号
    int score[3];   // 三门成绩
    double avg;     // 平均分
};

// 使用
Student stu;
stu.name = "张三";
stu.id = 1001;
stu.score[0] = 85;
stu.avg = (stu.score[0] + stu.score[1] + stu.score[2]) / 3.0;
```

**结构体数组**

```cpp
Student students[100];  // 100个学生

// 输入
for (int i = 0; i < n; i++) {
    cin >> students[i].name >> students[i].id;
    for (int j = 0; j < 3; j++) {
        cin >> students[i].score[j];
    }
}
```

#### 课堂练习

1. 定义`Point`结构体，计算两点距离
2. 定义`Book`结构体，实现图书管理系统
3. 学生成绩排序（按平均分）

#### 课后作业

- 完成结构体练习题10道
- 刷题：结构体相关5题

---

### 第4周：结构体排序与嵌套

#### 教学目标
- 掌握结构体排序
- 理解结构体嵌套
- 能处理复杂数据组织

#### 知识点详解

**结构体排序**

```cpp
// 比较函数
bool cmpByScore(Student a, Student b) {
    return a.avg > b.avg;  // 降序
}

// 多关键字排序
bool cmp(Student a, Student b) {
    if (a.avg != b.avg) return a.avg > b.avg;
    return a.id < b.id;  // 平均分相同，按学号升序
}

// 使用
sort(students, students + n, cmp);
```

**结构体嵌套**

```cpp
struct Date {
    int year, month, day;
};

struct Person {
    string name;
    Date birthday;  // 嵌套结构体
    string address;
};

// 使用
Person p;
p.birthday.year = 2010;
p.birthday.month = 5;
p.birthday.day = 20;
```

#### 综合项目：学生成绩管理系统

**功能要求**：
1. 添加学生信息
2. 删除学生
3. 按成绩排序
4. 查询学生
5. 统计平均分

#### 课后作业

- 完成学生成绩管理系统
- 刷题：综合应用5题

---

## 第5-6周：指针入门

### 第5周：指针基础

#### 教学目标
- 理解指针概念
- 掌握指针的基本操作
- 理解指针与数组的关系

#### 知识点详解

**指针基础**

```cpp
int a = 10;
int *p = &a;  // p指向a

cout << p;   // 输出a的地址
cout << *p;  // 输出10（解引用）

*p = 20;     // 通过指针修改a的值
// 现在a = 20
```

**指针与数组**

```cpp
int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;  // 数组名就是首元素地址

// 以下等价
cout << arr[0];  // 1
cout << *p;      // 1
cout << *(arr + 1);  // 2
cout << p[1];    // 2
```

**指针运算**

```cpp
int *p = arr;
p++;    // 指向下一个int（移动4字节）
p--;    // 指向上一个int
p + 3;  // 指向arr[3]
```

#### 教学要点

- 用"门牌号"类比地址
- 强调`*`的两种含义（定义时vs使用时）
- 画图理解指针与数组的关系

#### 课后作业

- 指针基础练习10题
- 实现用指针遍历数组

---

### 第6周：指针应用

#### 教学目标
- 掌握指针作为函数参数
- 理解动态内存分配
- 能使用指针解决简单问题

#### 知识点详解

**指针作函数参数**

```cpp
// 通过指针修改外部变量
void addOne(int *p) {
    (*p)++;  // 括号不能省！
}

int main() {
    int a = 5;
    addOne(&a);
    cout << a;  // 6
}
```

**动态内存分配**

```cpp
// 动态分配数组
int *arr = new int[n];  // 根据输入n分配

// 使用
for (int i = 0; i < n; i++) {
    cin >> arr[i];
}

// 释放
delete[] arr;
```

#### 课堂练习

1. 用指针实现数组逆序
2. 用指针实现字符串复制
3. 动态分配二维数组

#### 课后作业

- 刷题：指针应用5题
- 整理指针易错点

---

## 第7-8周：基础算法

### 第7周：排序与查找算法

#### 教学目标
- 掌握冒泡、选择、插入排序
- 掌握二分查找
- 理解算法复杂度

#### 知识点详解

**冒泡排序**

```cpp
void bubbleSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]);
            }
        }
    }
}
// 时间复杂度：O(n²)
```

**二分查找**

```cpp
int binarySearch(int a[], int n, int target) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int mid = (l + r) >> 1;
        if (a[mid] == target) return mid;
        else if (a[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;  // 未找到
}
// 时间复杂度：O(log n)
```

#### 算法对比

| 算法 | 时间复杂度 | 适用场景 |
|:---:|:---:|:---|
| 冒泡排序 | O(n²) | 教学演示 |
| 选择排序 | O(n²) | 教学演示 |
| 插入排序 | O(n²) | 小规模数据 |
| 快速排序 | O(nlogn) | 通用排序 |
| 二分查找 | O(logn) | 有序数据查找 |

#### 课后作业

- 手写实现三种排序
- 刷题：排序+查找10题

---

### 第8周：综合项目与复习

#### 综合项目：通讯录管理系统

**功能需求**：
1. 添加联系人（姓名、电话、地址）
2. 删除联系人
3. 查找联系人（支持模糊搜索）
4. 按姓名排序
5. 显示所有联系人
6. 数据保存到文件

**技术要求**：
- 使用结构体存储联系人
- 使用结构体数组
- 使用排序算法
- 使用文件操作

#### 复习要点

| 主题 | 重点 |
|:---|:---|
| 函数 | 参数传递、重载、递归 |
| 结构体 | 定义、数组、排序、嵌套 |
| 指针 | 基础、运算、应用 |
| 算法 | 排序、查找、复杂度 |

#### 模拟测试

- 时间：2小时
- 题型：选择题（20%）+ 编程题（80%）
- 范围：L4全部内容

---

## 教学资源

### 配套文档

- [L4能力图谱](/programming/gesp/ability-chart.md)
- [常见错误排查](/programming/error-troubleshooting.md)
- [算法速查卡](/programming/algorithm-cheatsheet.md)

### 练习题库

| 类型 | 数量 | 平台 |
|:---:|:---:|:---|
| 函数练习 | 15题 | Hydro OJ |
| 结构体练习 | 15题 | Hydro OJ |
| 指针练习 | 10题 | Hydro OJ |
| 算法练习 | 20题 | 洛谷 |

### 推荐资源

- [OI Wiki - 结构体](https://oi-wiki.org/lang/struct/)
- [OI Wiki - 指针](https://oi-wiki.org/lang/pointer/)
- [算法可视化](https://visualgo.net/zh)

---

## 评估标准

### 通过标准

- [ ] 理解函数参数传递机制
- [ ] 能编写递归函数（阶乘、斐波那契）
- [ ] 熟练使用结构体组织数据
- [ ] 理解指针基本概念
- [ ] 掌握基础排序和查找算法
- [ ] 能独立完成综合项目

### 优秀标准

- [ ] 能灵活运用函数重载
- [ ] 理解递归的深度和效率
- [ ] 能处理复杂结构体嵌套
- [ ] 能用指针解决实际问题
- [ ] 能分析算法复杂度
- [ ] 代码规范，注释清晰

---

**整理者**：明夷  
**日期**：2026-03-27  
**版本**：v1.0

[← 返回GESP考级](/programming/gesp/)

