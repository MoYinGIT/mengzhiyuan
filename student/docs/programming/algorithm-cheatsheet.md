---
layout: doc
---

# 算法速查卡

> 常用算法对比、时间复杂度、代码模板一站式速查

---

## 排序算法对比

| 算法 | 平均时间 | 最坏时间 | 空间 | 稳定性 | 适用场景 |
|:---:|:---:|:---:|:---:|:---:|:---|
| **冒泡排序** | O(n²) | O(n²) | O(1) | ✅ 稳定 | 教学，几乎不用 |
| **选择排序** | O(n²) | O(n²) | O(1) | ❌ 不稳定 | 教学，几乎不用 |
| **插入排序** | O(n²) | O(n²) | O(1) | ✅ 稳定 | 小规模数据 |
| **希尔排序** | O(n^1.3) | O(n²) | O(1) | ❌ 不稳定 | 中等规模 |
| **归并排序** | O(nlogn) | O(nlogn) | O(n) | ✅ 稳定 | 需要稳定排序 |
| **快速排序** | O(nlogn) | O(n²) | O(logn) | ❌ 不稳定 | 通用首选 |
| **堆排序** | O(nlogn) | O(nlogn) | O(1) | ❌ 不稳定 | 空间受限 |
| **计数排序** | O(n+k) | O(n+k) | O(k) | ✅ 稳定 | 数据范围小 |

**竞赛首选**：`sort()`（C++ STL，基于快速排序）

---

## 时间复杂度速查

### 常见复杂度对比

```
O(1)      ■ 常量时间
O(log n)  ■■■ 对数时间
O(n)      ■■■■■■■■■ 线性时间
O(nlog n) ■■■■■■■■■■■■■■■ 线性对数
O(n²)     ■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 平方
O(n³)     ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 立方
O(2^n)    ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 指数
```

### n的范围与算法选择

| n 的范围 | 可用复杂度 | 典型算法 |
|:---:|:---:|:---|
| n ≤ 20 | O(n!), O(2^n) | 枚举、回溯 |
| n ≤ 100 | O(n³) | Floyd、DP |
| n ≤ 1,000 | O(n²) | 双重循环、简单DP |
| n ≤ 100,000 | O(nlogn) | 排序、分治、堆、线段树 |
| n ≤ 1,000,000 | O(n) | 线性扫描、双指针 |
| n ≤ 10^7 | O(n) | 需要常数优化 |
| n > 10^7 | O(logn), O(1) | 二分、哈希、数学 |

---

## 基础算法模板

### 快速排序

```cpp
void quickSort(int l, int r) {
    if (l >= r) return;
    int i = l, j = r, pivot = a[(l + r) >> 1];
    while (i <= j) {
        while (a[i] < pivot) i++;
        while (a[j] > pivot) j--;
        if (i <= j) swap(a[i++], a[j--]);
    }
    quickSort(l, j);
    quickSort(i, r);
}
```

**STL版本**：`sort(a, a + n);` 或 `sort(a.begin(), a.end());`

---

### 二分查找

```cpp
// 查找第一个 >= target 的位置
int lowerBound(int target) {
    int l = 0, r = n - 1, ans = n;
    while (l <= r) {
        int mid = (l + r) >> 1;
        if (a[mid] >= target) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

// STL版本
int pos = lower_bound(a, a + n, target) - a;
```

---

### 深度优先搜索 (DFS)

```cpp
bool vis[N];

void dfs(int u) {
    vis[u] = true;
    for (int v : adj[u]) {
        if (!vis[v]) {
            dfs(v);
        }
    }
}
```

---

### 广度优先搜索 (BFS)

```cpp
void bfs(int start) {
    queue<int> q;
    q.push(start);
    vis[start] = true;
    
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) {
            if (!vis[v]) {
                vis[v] = true;
                q.push(v);
            }
        }
    }
}
```

---

### 最短路 (Dijkstra)

```cpp
void dijkstra(int s) {
    memset(dist, 0x3f, sizeof(dist));
    dist[s] = 0;
    priority_queue<pii, vector<pii>, greater<pii>> pq;
    pq.push({0, s});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}
```

---

### 最小生成树 (Kruskal)

```cpp
struct Edge {
    int u, v, w;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

vector<Edge> edges;
int parent[N];

int find(int x) {
    return parent[x] == x ? x : parent[x] = find(parent[x]);
}

int kruskal() {
    sort(edges.begin(), edges.end());
    for (int i = 0; i < n; i++) parent[i] = i;
    
    int mst = 0, cnt = 0;
    for (auto& e : edges) {
        int fu = find(e.u), fv = find(e.v);
        if (fu != fv) {
            parent[fu] = fv;
            mst += e.w;
            if (++cnt == n - 1) break;
        }
    }
    return mst;
}
```

---

### 01背包

```cpp
int dp[M];  // M为背包容量

void knapsack() {
    memset(dp, 0, sizeof(dp));
    for (int i = 0; i < n; i++) {
        for (int j = m; j >= w[i]; j--) {
            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
        }
    }
    cout << dp[m] << endl;
}
```

---

### 最长上升子序列 (LIS)

```cpp
// O(nlogn) 版本
int lis() {
    vector<int> d;
    for (int i = 0; i < n; i++) {
        auto it = lower_bound(d.begin(), d.end(), a[i]);
        if (it == d.end()) d.push_back(a[i]);
        else *it = a[i];
    }
    return d.size();
}
```

---

### 并查集

```cpp
int parent[N];

void init() {
    for (int i = 0; i < n; i++) parent[i] = i;
}

int find(int x) {
    return parent[x] == x ? x : parent[x] = find(parent[x]);
}

void unite(int x, int y) {
    parent[find(x)] = find(y);
}

bool same(int x, int y) {
    return find(x) == find(y);
}
```

---

### 树状数组

```cpp
int tree[N];

int lowbit(int x) {
    return x & (-x);
}

void update(int x, int delta) {
    for (int i = x; i <= n; i += lowbit(i))
        tree[i] += delta;
}

int query(int x) {
    int sum = 0;
    for (int i = x; i > 0; i -= lowbit(i))
        sum += tree[i];
    return sum;
}
```

---

### GCD 和 LCM

```cpp
// 最大公约数
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

// 最小公倍数
int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}

// STL版本
int g = __gcd(a, b);
```

---

### 快速幂

```cpp
long long fastPow(long long base, long long exp, long long mod) {
    long long res = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) res = res * base % mod;
        base = base * base % mod;
        exp >>= 1;
    }
    return res;
}
```

---

## STL 常用操作

### vector

```cpp
vector<int> v;
v.push_back(x);        // 末尾添加
v.pop_back();          // 删除末尾
v.size();              // 大小
v.empty();             // 是否为空
v.clear();             // 清空
sort(v.begin(), v.end());  // 排序
```

### queue / stack

```cpp
queue<int> q;
q.push(x);     // 入队
q.pop();       // 出队
q.front();     // 队首
q.empty();     // 是否为空

stack<int> s;
s.push(x);     // 入栈
s.pop();       // 出栈
s.top();       // 栈顶
```

### priority_queue

```cpp
// 大根堆（默认）
priority_queue<int> pq;

// 小根堆
priority_queue<int, vector<int>, greater<int>> pq;

pq.push(x);    // 插入
pq.pop();      // 弹出堆顶
pq.top();      // 堆顶
```

### map / set

```cpp
map<string, int> mp;
mp[key] = value;       // 插入/修改
mp.count(key);         // 是否存在
mp.erase(key);         // 删除

set<int> st;
st.insert(x);          // 插入
st.count(x);           // 是否存在
st.erase(x);           // 删除
```

---

## 常用技巧

### 输入输出优化

```cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
```

### 无穷大定义

```cpp
const int INF = 0x3f3f3f3f;  // 约1e9
const ll INFLL = 0x3f3f3f3f3f3f3f3f3fLL;
```

### 数组初始化

```cpp
memset(a, 0, sizeof(a));      // 全0
memset(a, -1, sizeof(a));     // 全-1
memset(a, 0x3f, sizeof(a));   // 全INF
```

### 交换变量

```cpp
swap(a, b);        // STL交换
a ^= b ^= a ^= b;  // 位运算交换（不推荐使用）
```

---

**打印本页，编程时放在手边参考！**

**更多详细内容**：
- [L1-L8能力图谱](/programming/gesp/ability-chart.md)
- [常见错误排查](/programming/errors)
- [学习工具推荐](/tools/recommended-tools.md)

---

**整理者**：明夷  
**日期**：2026-03-27

[← 返回编程学院](/programming/)

