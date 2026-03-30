---
layout: doc
---

# GESP C++ L5 教学手册

> 8周进阶教学计划 | 数论 · 链表 · 递归深入 · 分治思想

---

## 课程概览

| 项目 | 内容 |
|:---|:---|
| **级别** | GESP C++ L5 |
| **目标** | 掌握数论基础、链表、递归深入、分治思想 |
| **时长** | 8周，每周2次课，每次2小时 |
| **总课时** | 32小时 |
| **前置要求** | 完成L4学习，掌握结构体、指针、基础算法 |
| **配套资源** | [L5能力图谱](/programming/gesp/ability-chart.md) |

---

## 第1-2周：数论基础

### 第1周：GCD、LCM与素数

#### 教学目标
- 掌握最大公约数和最小公倍数
- 理解素数判定方法
- 能应用数论解决实际问题

#### 知识点详解

**GCD 最大公约数**

```cpp
// 欧几里得算法
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

// 更相减损术（了解）
int gcd_sub(int a, int b) {
    while (a != b) {
        if (a > b) a -= b;
        else b -= a;
    }
    return a;
}

// STL版本
int g = __gcd(a, b);  // C++17
```

**LCM 最小公倍数**

```cpp
int lcm(int a, int b) {
    return a / gcd(a, b) * b;  // 先除后乘防溢出
}
```

**素数判定**

```cpp
// 试除法 O(√n)
bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```

#### 经典问题

1. **分数化简**：分子分母同时除以GCD
2. **周期问题**：利用LCM求最小公共周期
3. **素数筛**：埃氏筛法

#### 课后作业

- 素数判定练习10题
- 实现埃氏筛

---

### 第2周：模运算与快速幂

#### 教学目标
- 掌握模运算性质
- 理解快速幂算法
- 能解决大数运算问题

#### 知识点详解

**模运算性质**

```cpp
(a + b) % p = (a % p + b % p) % p
(a - b) % p = (a % p - b % p + p) % p  // 注意负数
(a * b) % p = (a % p * b % p) % p
```

**快速幂 O(log n)**

```cpp
long long fastPow(long long base, long long exp, long long mod) {
    long long res = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1)  // 如果exp是奇数
            res = res * base % mod;
        base = base * base % mod;
        exp >>= 1;  // exp /= 2
    }
    return res;
}
```

**应用场景**
- 大数求模（防止溢出）
- 密码学基础
- 组合数计算

#### 课后作业

- 快速幂练习10题
- 刷题：数论综合

---

## 第3-4周：链表

### 第3周：链表基础

#### 教学目标
- 理解链表概念
- 掌握单链表的基本操作
- 能独立实现链表

#### 知识点详解

**链表节点定义**

```cpp
struct Node {
    int data;       // 数据
    Node *next;     // 指向下一个节点
};
```

**链表基本操作**

```cpp
// 创建新节点
Node* createNode(int x) {
    Node *p = new Node;
    p->data = x;
    p->next = nullptr;
    return p;
}

// 头插法
void headInsert(Node *&head, int x) {
    Node *p = createNode(x);
    p->next = head;
    head = p;
}

// 尾插法
void tailInsert(Node *&head, int x) {
    Node *p = createNode(x);
    if (head == nullptr) {
        head = p;
        return;
    }
    Node *q = head;
    while (q->next != nullptr) {
        q = q->next;
    }
    q->next = p;
}

// 遍历
void printList(Node *head) {
    for (Node *p = head; p != nullptr; p = p->next) {
        cout << p->data << " ";
    }
    cout << endl;
}
```

#### 教学要点

- 画图理解指针指向关系
- 注意内存管理（new/delete）
- 头指针的重要性

#### 课后作业

- 实现链表基本操作
- 链表遍历练习

---

### 第4周：链表进阶

#### 教学目标
- 掌握链表删除、查找
- 理解链表反转
- 能应用链表解决实际问题

#### 知识点详解

**链表删除**

```cpp
// 删除值为x的第一个节点
void deleteNode(Node *&head, int x) {
    if (head == nullptr) return;
    
    // 头节点就是要删除的
    if (head->data == x) {
        Node *temp = head;
        head = head->next;
        delete temp;
        return;
    }
    
    // 查找并删除
    for (Node *p = head; p->next != nullptr; p = p->next) {
        if (p->next->data == x) {
            Node *temp = p->next;
            p->next = temp->next;
            delete temp;
            return;
        }
    }
}
```

**链表反转**

```cpp
Node* reverseList(Node *head) {
    Node *prev = nullptr;
    Node *curr = head;
    while (curr != nullptr) {
        Node *next = curr->next;  // 保存下一个
        curr->next = prev;         // 反转指向
        prev = curr;              // 前移prev
        curr = next;              // 前移curr
    }
    return prev;  // 新的头节点
}
```

**约瑟夫环**

```cpp
int josephus(int n, int k) {
    // 用链表模拟
    Node *head = nullptr;
    for (int i = n; i >= 1; i--) {
        headInsert(head, i);
    }
    // 找到尾节点，连成环
    Node *tail = head;
    while (tail->next != nullptr) tail = tail->next;
    tail->next = head;
    
    // 模拟报数
    Node *p = head;
    while (p->next != p) {  // 多于一个节点
        for (int i = 1; i < k; i++) {
            p = p->next;
        }
        // 删除p->next
        Node *temp = p->next;
        p->next = temp->next;
        delete temp;
    }
    return p->data;
}
```

#### 课后作业

- 链表反转练习
- 约瑟夫环问题
- 刷题：链表相关

---

## 第5-6周：递归深入

### 第5周：递归进阶

#### 教学目标
- 理解递归的执行过程
- 掌握递归与迭代的转换
- 能解决复杂递归问题

#### 知识点详解

**递归执行分析**

```cpp
// 递归树
void func(int n) {
    if (n <= 0) return;
    func(n - 1);  // 左分支
    func(n - 1);  // 右分支
}
// 时间复杂度：O(2^n)
```

**递归与记忆化**

```cpp
// 记忆化搜索
map<int, long long> memo;

long long fib(int n) {
    if (n <= 1) return n;
    if (memo.count(n)) return memo[n];
    return memo[n] = fib(n - 1) + fib(n - 2);
}
```

**全排列（递归实现）**

```cpp
void permutation(int arr[], int start, int n) {
    if (start == n - 1) {
        print(arr, n);
        return;
    }
    for (int i = start; i < n; i++) {
        swap(arr[start], arr[i]);
        permutation(arr, start + 1, n);
        swap(arr[start], arr[i]);  // 回溯
    }
}
```

#### 教学要点

- 画递归树理解执行过程
- 注意递归深度限制
- 学会用记忆化优化

#### 课后作业

- 全排列练习
- 递归与迭代对比

---

### 第6周：回溯算法

#### 教学目标
- 理解回溯思想
- 掌握N皇后、子集等问题
- 能应用回溯解决搜索问题

#### 知识点详解

**回溯框架**

```cpp
void backtrack(参数) {
    if (满足结束条件) {
        记录结果;
        return;
    }
    
    for (选择 in 选择列表) {
        做选择;
        backtrack(路径，选择列表);
        撤销选择;  // 回溯
    }
}
```

**N皇后问题**

```cpp
bool isValid(vector<string>& board, int row, int col) {
    int n = board.size();
    // 检查列
    for (int i = 0; i < row; i++)
        if (board[i][col] == 'Q') return false;
    // 检查左上
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j] == 'Q') return false;
    // 检查右上
    for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
        if (board[i][j] == 'Q') return false;
    return true;
}

void solveNQueens(vector<string>& board, int row, vector<vector<string>>& res) {
    if (row == board.size()) {
        res.push_back(board);
        return;
    }
    for (int col = 0; col < board.size(); col++) {
        if (isValid(board, row, col)) {
            board[row][col] = 'Q';
            solveNQueens(board, row + 1, res);
            board[row][col] = '.';  // 回溯
        }
    }
}
```

#### 经典问题

1. 子集问题
2. 组合问题
3. 排列问题
4. N皇后
5. 数独求解

#### 课后作业

- 实现子集生成
- 刷题：回溯5题

---

## 第7-8周：分治思想

### 第7周：分治基础

#### 教学目标
- 理解分治思想
- 掌握归并排序
- 能应用分治解决问题

#### 知识点详解

**分治三步法**

```
1. 分解：将问题分解为子问题
2. 解决：递归解决子问题
3. 合并：合并子问题的解
```

**归并排序**

```cpp
void mergeSort(int arr[], int l, int r) {
    if (l >= r) return;
    int mid = (l + r) >> 1;
    mergeSort(arr, l, mid);      // 排序左半
    mergeSort(arr, mid + 1, r);  // 排序右半
    merge(arr, l, mid, r);       // 合并
}

void merge(int arr[], int l, int mid, int r) {
    int temp[r - l + 1];
    int i = l, j = mid + 1, k = 0;
    while (i <= mid && j <= r) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= r) temp[k++] = arr[j++];
    for (int p = 0; p < k; p++) arr[l + p] = temp[p];
}
```

**逆序对计数**

```cpp
// 利用归并排序统计逆序对
long long mergeCount(int arr[], int l, int r) {
    if (l >= r) return 0;
    int mid = (l + r) >> 1;
    long long cnt = 0;
    cnt += mergeCount(arr, l, mid);
    cnt += mergeCount(arr, mid + 1, r);
    cnt += merge(arr, l, mid, r);  // 合并时统计
    return cnt;
}
```

#### 课后作业

- 手写归并排序
- 逆序对计数练习

---

### 第8周：综合项目与复习

#### 综合项目：多项式计算器

**功能需求**：
1. 用链表存储多项式（系数+指数）
2. 多项式加法
3. 多项式减法
4. 多项式乘法
5. 多项式求值（给定x）

**技术要求**：
- 使用链表存储
- 结果多项式按指数降序排列
- 处理合并同类项

#### 复习要点

| 主题 | 重点 |
|:---|:---|
| 数论 | GCD、LCM、素数、快速幂、模运算 |
| 链表 | 创建、插入、删除、反转、应用 |
| 递归 | 递归树、记忆化、回溯 |
| 分治 | 归并排序、逆序对、二分 |

#### 模拟测试

- 时间：3小时（L5考试时长）
- 题型：选择+编程
- 难度：接近真实考试

---

## 教学资源

### 配套文档

- [L5能力图谱](/programming/gesp/ability-chart.md)
- [算法速查卡](/programming/algorithm-cheatsheet.md)
- [常见错误排查](/programming/error-troubleshooting.md)

### 练习题库

| 类型 | 数量 | 难度 |
|:---:|:---:|:---:|
| 数论 | 20题 | ⭐⭐⭐ |
| 链表 | 15题 | ⭐⭐⭐ |
| 递归 | 15题 | ⭐⭐⭐⭐ |
| 分治 | 10题 | ⭐⭐⭐⭐ |

### 推荐资源

- [OI Wiki - 数学](https://oi-wiki.org/math/)
- [OI Wiki - 基础数据结构](https://oi-wiki.org/ds/)
- [OI Wiki - 搜索](https://oi-wiki.org/search/)

---

## 评估标准

### 通过标准

- [ ] 掌握GCD、LCM、素数判定
- [ ] 理解快速幂和模运算
- [ ] 能独立实现链表基本操作
- [ ] 理解递归和回溯思想
- [ ] 掌握归并排序和二分
- [ ] 能完成多项式计算器

### 优秀标准

- [ ] 能灵活运用数论解决复杂问题
- [ ] 链表操作熟练，能处理复杂场景
- [ ] 能分析递归时间复杂度
- [ ] 能独立设计回溯算法
- [ ] 能应用分治思想解决问题

---

**整理者**：明夷  
**日期**：2026-03-27  
**版本**：v1.0

[← 返回GESP考级](/programming/gesp/)

