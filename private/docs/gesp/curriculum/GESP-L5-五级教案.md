# GESP C++ L5 五级教案

> **课程定位**: 算法进阶，数论与高级数据结构  
> **课时安排**: 14课时（每课时90分钟）  
> **适合学员**: 已通过GESP四级或同等水平  
> **教学理念**: 算法思维深化，从会做到精通

---

## 一、课程目标与学习成果

### 1.1 总体目标
- 掌握初等数论基础（素数、GCD、LCM、同余）
- 实现高精度运算（数组模拟）
- 掌握链表的基本操作
- 掌握二分查找与二分答案
- 理解递归与分治思想
- 理解贪心算法的基本思想

### 1.2 学习成果
| 序号 | 学习成果 |
|:---:|:---|
| 1 | 熟练运用素数筛法和欧几里得算法 |
| 2 | 实现高精度加减乘除运算 |
| 3 | 实现链表的创建、插入、删除、遍历 |
| 4 | 应用二分查找和二分答案解决问题 |
| 5 | 编写递归函数，分析递归复杂度 |
| 6 | 实现归并排序和快速排序 |

---

## 二、核心知识点清单

| 知识块 | 知识点 | 难度 | 课时 |
|:---|:---|:---:|:---:|
| 初等数论 | 素数、GCD、LCM、同余、质因数分解 | ⭐⭐⭐ | 2 |
| 素数筛 | 埃氏筛、线性筛 | ⭐⭐⭐ | 1.5 |
| 高精度 | 数组模拟加减乘除 | ⭐⭐⭐ | 2 |
| 链表 | 单链表、双链表、循环链表 | ⭐⭐⭐ | 2 |
| 二分查找 | 查找、答案 | ⭐⭐⭐ | 2 |
| 递归 | 递归思想、递归优化 | ⭐⭐⭐ | 1.5 |
| 分治 | 归并排序、快速排序 | ⭐⭐⭐ | 1.5 |
| 贪心 | 贪心思想、最优子结构 | ⭐⭐⭐ | 1.5 |

---

## 三、详细教学设计

### 第1-2课时：初等数论

#### 教学目标
- 掌握素数判断与素数筛
- 理解GCD和LCM的计算方法
- 了解同余与模运算

#### 教学内容

**1. 素数判断（15分钟）**
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

**2. 欧几里得算法（15分钟）**
```cpp
// GCD：最大公约数
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

// LCM：最小公倍数
int lcm(int a, int b) {
    return a / gcd(a, b) * b;  // 先除后乘防溢出
}
```

**3. 唯一分解定理（15分钟）**
```
任何大于1的整数n可以唯一表示为：
n = p1^a1 × p2^a2 × ... × pk^ak
其中p1, p2, ..., pk是素数，a1, a2, ..., ak是正整数
```

#### 示例代码

**【例1】质因数分解**
```cpp
#include <iostream>
using namespace std;

void factorize(int n) {
    cout << n << " = ";
    bool first = true;
    
    for (int i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            if (!first) cout << " × ";
            cout << i;
            first = false;
            n /= i;
        }
    }
    
    if (n > 1) {
        if (!first) cout << " × ";
        cout << n;
    }
    cout << endl;
}

int main() {
    int n;
    cin >> n;
    factorize(n);
    return 0;
}
```

---

### 第3课时：素数筛

#### 教学目标
- 掌握埃氏筛法
- 理解线性筛法（欧拉筛）

#### 教学内容

**1. 埃氏筛 O(n log log n)（20分钟）**
```cpp
const int N = 1000000;
bool isPrime[N];
int primes[N], cnt = 0;

void sieve(int n) {
    for (int i = 2; i <= n; i++) isPrime[i] = true;
    
    for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    for (int i = 2; i <= n; i++) {
        if (isPrime[i]) primes[cnt++] = i;
    }
}
```

**2. 线性筛 O(n)（20分钟）**
```cpp
void linearSieve(int n) {
    for (int i = 2; i <= n; i++) {
        if (!isPrime[i]) {  // i是素数
            primes[cnt++] = i;
        }
        for (int j = 0; j < cnt && i * primes[j] <= n; j++) {
            isPrime[i * primes[j]] = true;
            if (i % primes[j] == 0) break;  // 关键：保证每个合数只被最小质因子筛
        }
    }
}
```

---

### 第4-5课时：高精度运算

#### 教学目标
- 理解高精度的概念
- 实现高精度加减乘除

#### 教学内容

**高精度存储**：
```cpp
// 用数组存储，低位在前方便进位
// 12345 → a[0]=5, a[1]=4, a[2]=3, a[3]=2, a[4]=1

struct BigInt {
    int digits[1000];
    int len;
    
    BigInt() {
        memset(digits, 0, sizeof(digits));
        len = 0;
    }
};

// 字符串转高精度
void stringToBigInt(string s, BigInt &num) {
    num.len = s.length();
    for (int i = 0; i < num.len; i++) {
        num.digits[i] = s[num.len - 1 - i] - '0';
    }
}
```

#### 示例代码

**【例2】高精度加法**
```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int MAXN = 1000;

// a, b, result都是低位在前
void add(int a[], int b[], int result[], int &len) {
    int carry = 0;  // 进位
    int i;
    
    for (i = 0; i < len || carry; i++) {
        int sum = carry;
        if (i < a[0]) sum += a[i+1];  // a[0]存储位数
        if (i < b[0]) sum += b[i+1];
        result[i+1] = sum % 10;
        carry = sum / 10;
    }
    result[0] = i;  // 结果位数
}

// 简化版
int main() {
    string s1, s2;
    cin >> s1 >> s2;
    
    int a[1000] = {0}, b[1000] = {0}, c[1000] = {0};
    int len1 = s1.length(), len2 = s2.length();
    
    // 倒序存储
    for (int i = 0; i < len1; i++) a[i] = s1[len1-1-i] - '0';
    for (int i = 0; i < len2; i++) b[i] = s2[len2-1-i] - '0';
    
    // 加法
    int len = max(len1, len2), carry = 0;
    for (int i = 0; i < len || carry; i++) {
        int sum = a[i] + b[i] + carry;
        c[i] = sum % 10;
        carry = sum / 10;
        if (i >= len && carry) len++;
    }
    
    // 输出
    for (int i = len - 1; i >= 0; i--) cout << c[i];
    cout << endl;
    
    return 0;
}
```

---

### 第6-7课时：链表

#### 教学目标
- 理解链表的原理
- 掌握链表的创建、插入、删除、遍历

#### 教学内容

**链表结构**：
```cpp
// 单链表节点
struct Node {
    int data;       // 数据
    Node *next;     // 指向下一个节点
};

// 创建节点
Node* createNode(int val) {
    Node *p = new Node;
    p->data = val;
    p->next = NULL;
    return p;
}
```

#### 示例代码

**【例3】链表基本操作**
```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node *next;
};

// 头插法创建链表
Node* createList(int arr[], int n) {
    Node *head = NULL;
    for (int i = 0; i < n; i++) {
        Node *p = new Node;
        p->data = arr[i];
        p->next = head;
        head = p;
    }
    return head;
}

// 遍历链表
void printList(Node *head) {
    Node *p = head;
    while (p != NULL) {
        cout << p->data << " ";
        p = p->next;
    }
    cout << endl;
}

// 插入节点（在第pos个位置后插入）
void insertNode(Node *head, int pos, int val) {
    Node *p = head;
    for (int i = 1; i < pos && p != NULL; i++) {
        p = p->next;
    }
    if (p == NULL) return;
    
    Node *newNode = new Node;
    newNode->data = val;
    newNode->next = p->next;
    p->next = newNode;
}

// 删除节点
void deleteNode(Node *head, int val) {
    Node *p = head, *prev = NULL;
    while (p != NULL && p->data != val) {
        prev = p;
        p = p->next;
    }
    if (p == NULL) return;
    
    if (prev == NULL) {
        head = p->next;
    } else {
        prev->next = p->next;
    }
    delete p;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    Node *head = createList(arr, 5);
    printList(head);
    
    insertNode(head, 2, 100);
    printList(head);
    
    return 0;
}
```

---

### 第8-9课时：二分算法

#### 教学目标
- 掌握二分查找
- 理解二分答案思想

#### 教学内容

**二分查找**：
```cpp
// 在有序数组中查找target，返回下标，不存在返回-1
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;  // 防溢出
        
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}
// 时间：O(log n)
```

**二分答案**：
```cpp
// 在答案具有单调性的问题上使用
// 例：找最小的x满足条件f(x)为真

int binaryAnswer() {
    int left = 1, right = maxVal;
    int ans = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (check(mid)) {  // check判断mid是否满足条件
            ans = mid;
            right = mid - 1;  // 找更小的
        } else {
            left = mid + 1;
        }
    }
    
    return ans;
}
```

---

### 第10课时：递归

#### 教学目标
- 理解递归思想
- 掌握递归函数编写
- 了解递归优化

#### 示例代码

**【例4】递归经典问题**
```cpp
#include <iostream>
using namespace std;

// 阶乘
long long factorial(int n) {
    if (n <= 1) return 1;  // 递归边界
    return n * factorial(n - 1);  // 递归调用
}

// 斐波那契（低效，用于演示）
long long fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

// 斐波那契（记忆化优化）
long long fibMemo(int n, long long memo[]) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
}

// 汉诺塔
void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        cout << from << " -> " << to << endl;
        return;
    }
    hanoi(n-1, from, aux, to);
    cout << from << " -> " << to << endl;
    hanoi(n-1, aux, to, from);
}

int main() {
    cout << "5! = " << factorial(5) << endl;
    
    long long memo[100];
    memset(memo, -1, sizeof(memo));
    cout << "fib(30) = " << fibMemo(30, memo) << endl;
    
    cout << "汉诺塔（3个盘子）：" << endl;
    hanoi(3, 'A', 'C', 'B');
    
    return 0;
}
```

---

### 第11-12课时：分治算法

#### 教学目标
- 理解分治思想
- 掌握归并排序和快速排序

#### 示例代码

**【例5】归并排序**
```cpp
#include <iostream>
using namespace std;

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int L[100], R[100];
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int i = 0; i < n2; i++) R[i] = arr[mid + 1 + i];
    
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
```

**【例6】快速排序**
```cpp
#include <iostream>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // 选择最后一个元素作为基准
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
```

---

### 第13课时：贪心算法

#### 教学目标
- 理解贪心思想
- 了解贪心适用的场景

#### 教学内容

**贪心思想**：
```
贪心算法：每一步都选择当前最优解，期望得到全局最优

适用条件：
1. 最优子结构：问题的最优解包含子问题的最优解
2. 贪心选择性质：局部最优能导致全局最优

经典问题：
- 区间调度问题
- 哈夫曼编码
- 最小生成树（Prim、Kruskal）
- 单源最短路径（Dijkstra）
```

#### 示例代码

**【例7】活动选择问题**

::: v-pre
```cpp
#include <iostream>
#include <algorithm>
using namespace std;

struct Activity {
    int start, end;
};

bool compare(Activity a, Activity b) {
    return a.end < b.end;  // 按结束时间排序
}

// 最多能参加多少活动
int maxActivities(Activity arr[], int n) {
    sort(arr, arr + n, compare);
    
    int count = 1;
    int lastEnd = arr[0].end;
    
    for (int i = 1; i < n; i++) {
        if (arr[i].start >= lastEnd) {
            count++;
            lastEnd = arr[i].end;
        }
    }
    
    return count;
}

int main() {
    Activity arr[] = {{1, 3}, {2, 5}, {4, 7}, {1, 8}, {5, 9}};
    int n = 5;
    
    cout << "最多能参加 " << maxActivities(arr, n) << " 个活动" << endl;
    
    return 0;
}
```
:::

---

### 第14课时：综合复习

#### 复习要点
1. 数论基础：素数、GCD、LCM
2. 高精度运算的实现
3. 链表的基本操作
4. 二分查找与二分答案的应用
5. 递归与分治的理解
6. 贪心算法的适用场景

---

## 四、推荐练习题（洛谷题单555）

| 题号 | 题目名称 | 知识点 |
|:---:|:---|:---|
| P5736 | 【深基7.例2】质数筛 | 素数筛 |
| P5737 | 【深基7.例3】闰年展示 | 模拟 |
| P5738 | 【深基7.例4】歌唱比赛 | 数组 |
| P5739 | 【深基7.例7】计算阶乘 | 递归 |
| P5740 | 【深基7.例9】智力大冲浪 | 排序 |

---

## 五、常见学生错误与纠正

| 错误 | 纠正 |
|:---|:---|
| 链表内存泄漏 | new后要delete |
| 二分查找边界错误 | 注意left <= right和mid+-1 |
| 递归忘记边界 | 先写递归边界条件 |
| 高精度进位处理错 | 仔细分析每一位的进位 |
| 素数筛数组越界 | 注意循环边界 |

---

**版本**: 1.0  
**更新日期**: 2026-03-28
