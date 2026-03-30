# GESP C++ L8 八级教案

> **课程定位**: GESP最高级别，算法综合与数学应用  
> **课时安排**: 14课时（每课时90分钟）  > **适合学员**: 已通过GESP七级或同等水平  > **教学理念**: 融会贯通、举一反三，达到算法精通境界

---

## 一、课程目标与学习成果

### 1.1 总体目标
- 掌握计数原理（加法原理、乘法原理）
- 掌握排列组合及其应用
- 理解杨辉三角与组合数
- 掌握倍增法思想
- 掌握最小生成树算法（Kruskal、Prim）
- 掌握最短路径算法（Dijkstra、Floyd）
- 能够分析算法复杂度并进行优化

### 1.2 学习成果
| 序号 | 学习成果 |
|:---:|:---|
| 1 | 熟练运用加法原理和乘法原理解决计数问题 |
| 2 | 计算排列数和组合数 |
| 3 | 理解杨辉三角与组合数的关系 |
| 4 | 应用倍增法解决问题（快速幂、ST表） |
| 5 | 实现最小生成树算法 |
| 6 | 实现最短路径算法 |
| 7 | 分析算法复杂度并进行优化 |

---

## 二、核心知识点清单

| 知识块 | 知识点 | 难度 | 课时 |
|:---|:---|:---:|:---:|
| 计数原理 | 加法原理、乘法原理 | ⭐⭐⭐ | 1 |
| 排列组合 | 排列、组合、公式推导 | ⭐⭐⭐ | 2 |
| 杨辉三角 | 组合数计算、性质 | ⭐⭐⭐ | 1 |
| 倍增法 | 快速幂、ST表、LCA | ⭐⭐⭐⭐ | 2 |
| 代数几何 | 方程、面积计算 | ⭐⭐ | 1 |
| 最小生成树 | Kruskal、Prim | ⭐⭐⭐⭐ | 2.5 |
| 最短路径 | Dijkstra、Floyd | ⭐⭐⭐⭐ | 2.5 |
| 算法优化 | 复杂度分析、优化技巧 | ⭐⭐⭐⭐ | 2 |

---

## 三、详细教学设计

### 第1课时：计数原理

#### 教学目标
- 理解加法原理和乘法原理
- 能够应用计数原理解决问题

#### 教学内容

**计数原理**：
```
加法原理（分类）：
- 完成一件事有n类方法
- 每类方法分别有m1, m2, ..., mn种方式
- 总方法数 = m1 + m2 + ... + mn
- 关键词：要么...要么...

乘法原理（分步）：
- 完成一件事需要n个步骤
- 每步分别有m1, m2, ..., mn种方式
- 总方法数 = m1 × m2 × ... × mn
- 关键词：先...再...
```

#### 示例代码
```cpp
// 从A到B有3条路，从B到C有4条路
// 从A经B到C有多少种走法？（乘法原理）
// 答案：3 × 4 = 12

// 从A到B有3条路直达，也有4条路经C到B
// 从A到B有多少种走法？（加法原理）
// 答案：3 + 4 = 7
```

---

### 第2-3课时：排列与组合

#### 教学目标
- 理解排列和组合的概念
- 掌握排列数和组合数的计算

#### 教学内容

**排列组合公式**：
```
排列（有序）：从n个元素中取m个，考虑顺序
A(n,m) = n! / (n-m)!

组合（无序）：从n个元素中取m个，不考虑顺序
C(n,m) = n! / (m!(n-m)!)

组合数性质：
- C(n,m) = C(n, n-m)
- C(n,m) = C(n-1,m-1) + C(n-1,m)  // 杨辉三角递推
```

#### 示例代码

**【例1】组合数计算**
```cpp
#include <iostream>
using namespace std;

const int N = 30;
long long C[N][N];  // 组合数表

void init() {
    for (int i = 0; i < N; i++) {
        C[i][0] = C[i][i] = 1;
        for (int j = 1; j < i; j++) {
            C[i][j] = C[i-1][j-1] + C[i-1][j];
        }
    }
}

int main() {
    init();
    
    int n, m;
    cin >> n >> m;
    cout << "C(" << n << "," << m << ") = " << C[n][m] << endl;
    
    return 0;
}
```

---

### 第4课时：杨辉三角

#### 教学目标
- 理解杨辉三角的构造
- 掌握杨辉三角与组合数的关系

#### 示例代码
```cpp
#include <iostream>
#include <iomanip>
using namespace std;

const int N = 15;
int yanghui[N][N];

int main() {
    int n;
    cin >> n;
    
    // 构造杨辉三角
    for (int i = 0; i < n; i++) {
        yanghui[i][0] = yanghui[i][i] = 1;
        for (int j = 1; j < i; j++) {
            yanghui[i][j] = yanghui[i-1][j-1] + yanghui[i-1][j];
        }
    }
    
    // 输出
    for (int i = 0; i < n; i++) {
        // 输出前导空格
        for (int k = 0; k < n - i - 1; k++) {
            cout << "  ";
        }
        
        for (int j = 0; j <= i; j++) {
            cout << setw(4) << yanghui[i][j];
        }
        cout << endl;
    }
    
    return 0;
}
```

---

### 第5-6课时：倍增法

#### 教学目标
- 理解倍增思想
- 掌握快速幂和ST表

#### 教学内容

**倍增思想**：
```
倍增：将问题规模按2的幂次分解

应用：
1. 快速幂：O(log n)计算a^n
2. ST表：O(n log n)预处理，O(1)查询区间最值
3. LCA：树上最近公共祖先
```

#### 示例代码

**【例2】快速幂**
```cpp
#include <iostream>
using namespace std;

typedef long long ll;

// 计算 (base^exp) % mod
ll fastPow(ll base, ll exp, ll mod) {
    ll result = 1;
    base = base % mod;
    
    while (exp > 0) {
        if (exp & 1) {  // 如果exp是奇数
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp >>= 1;  // exp /= 2
    }
    
    return result;
}

int main() {
    ll base, exp, mod;
    cin >> base >> exp >> mod;
    
    cout << base << "^" << exp << " mod " << mod << " = " << fastPow(base, exp, mod) << endl;
    
    return 0;
}
```

**【例3】ST表（区间最值）**
```cpp
#include <iostream>
#include <math>
using namespace std;

const int N = 100005;
int a[N];
int st[N][20];  // st[i][j]：从i开始长度为2^j的区间的最值
int Log2[N];

void init(int n) {
    // 预处理log2
    Log2[1] = 0;
    for (int i = 2; i <= n; i++) {
        Log2[i] = Log2[i/2] + 1;
    }
    
    // 初始化st表
    for (int i = 0; i < n; i++) {
        st[i][0] = a[i];
    }
    
    for (int j = 1; (1 << j) <= n; j++) {
        for (int i = 0; i + (1 << j) <= n; i++) {
            st[i][j] = max(st[i][j-1], st[i + (1 << (j-1))][j-1]);
        }
    }
}

// 查询[l, r]区间的最大值
int query(int l, int r) {
    int k = Log2[r - l + 1];
    return max(st[l][k], st[r - (1 << k) + 1][k]);
}

int main() {
    int n, q;
    cin >> n >> q;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    init(n);
    
    while (q--) {
        int l, r;
        cin >> l >> r;
        cout << query(l, r) << endl;
    }
    
    return 0;
}
```

---

### 第7课时：代数与平面几何

#### 教学目标
- 掌握基本代数方程求解
- 掌握基本几何图形面积计算

#### 教学内容

**方程求解**：
```cpp
// 一元一次方程：ax + b = 0
// x = -b / a

// 二元一次方程组：
// a1x + b1y = c1
// a2x + b2y = c2
// 使用消元法或行列式法求解
```

**几何公式**：
```cpp
// 三角形面积
// S = 底 × 高 / 2
// 海伦公式：S = √[p(p-a)(p-b)(p-c)]，p=(a+b+c)/2

// 圆形面积：S = π × r²
// 矩形面积：S = 长 × 宽
```

---

### 第8-9课时：最小生成树

#### 教学目标
- 理解最小生成树概念
- 掌握Kruskal和Prim算法

#### 教学内容

**最小生成树（MST）**：
```
在一个带权无向图中，找到一个生成树，使得边权和最小

性质：
- 包含n个顶点的图，MST有n-1条边
- MST可能不唯一
```

#### 示例代码

**【例4】Kruskal算法**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int N = 1005;

struct Edge {
    int u, v, w;
    bool operator<(const Edge &other) const {
        return w < other.w;
    }
};

int parent[N];

int find(int x) {
    return parent[x] == x ? x : parent[x] = find(parent[x]);
}

void unite(int x, int y) {
    parent[find(x)] = find(y);
}

int main() {
    int n, m;
    cin >> n >> m;
    
    vector<Edge> edges;
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        edges.push_back({u, v, w});
    }
    
    sort(edges.begin(), edges.end());
    
    for (int i = 1; i <= n; i++) parent[i] = i;
    
    int mstWeight = 0, edgesUsed = 0;
    
    for (Edge e : edges) {
        if (find(e.u) != find(e.v)) {
            unite(e.u, e.v);
            mstWeight += e.w;
            edgesUsed++;
            
            if (edgesUsed == n - 1) break;
        }
    }
    
    cout << "MST权值：" << mstWeight << endl;
    
    return 0;
}
```

**【例5】Prim算法**
```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <cstring>
using namespace std;

const int N = 1005;
const int INF = 0x3f3f3f3f;

vector<pair<int, int>> adj[N];  // 邻接表：to, weight
int dist[N];  // 到MST的最小距离
bool inMST[N];

int prim(int n) {
    memset(dist, 0x3f, sizeof(dist));
    memset(inMST, false, sizeof(inMST));
    
    dist[1] = 0;
    int mstWeight = 0;
    
    for (int i = 0; i < n; i++) {
        // 找到距离MST最近的点
        int u = -1;
        for (int j = 1; j <= n; j++) {
            if (!inMST[j] && (u == -1 || dist[j] < dist[u])) {
                u = j;
            }
        }
        
        inMST[u] = true;
        mstWeight += dist[u];
        
        // 更新邻居的距离
        for (auto &e : adj[u]) {
            int v = e.first, w = e.second;
            if (!inMST[v] && w < dist[v]) {
                dist[v] = w;
            }
        }
    }
    
    return mstWeight;
}
```

---

### 第10-11课时：最短路径

#### 教学目标
- 掌握Dijkstra算法
- 掌握Floyd算法

#### 示例代码

**【例6】Dijkstra算法**
```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <cstring>
using namespace std;

const int N = 1005;
const int INF = 0x3f3f3f3f;

typedef pair<int, int> PII;  // distance, vertex

vector<pair<int, int>> adj[N];
int dist[N];
bool visited[N];

void dijkstra(int start, int n) {
    memset(dist, 0x3f, sizeof(dist));
    memset(visited, false, sizeof(visited));
    
    priority_queue<PII, vector<PII>, greater<PII>> pq;
    
    dist[start] = 0;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        if (visited[u]) continue;
        visited[u] = true;
        
        for (auto &e : adj[u]) {
            int v = e.first, w = e.second;
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}
```

**【例7】Floyd算法**
```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 305;
const int INF = 0x3f3f3f3f;

int dist[N][N];

void floyd(int n) {
    for (int k = 1; k <= n; k++) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 初始化
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == j) dist[i][j] = 0;
            else dist[i][j] = INF;
        }
    }
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        dist[u][v] = min(dist[u][v], w);
    }
    
    floyd(n);
    
    // 输出结果
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (dist[i][j] == INF) cout << "INF ";
            else cout << dist[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```

---

### 第12-13课时：算法优化

#### 教学目标
- 理解算法复杂度分析
- 掌握常见的优化技巧

#### 教学内容

**优化技巧**：
```cpp
// 1. 剪枝：减少搜索空间
// 2. 记忆化：避免重复计算
// 3. 空间换时间：预处理
// 4. 数学优化：利用公式减少计算

// 示例：等差数列求和代替循环
// 原：for(int i=1; i<=n; i++) sum += i;  // O(n)
// 优化：sum = n*(n+1)/2;  // O(1)

// 前缀和优化区间查询
// 原：每次查询O(n)
// 优化：预处理O(n)，每次查询O(1)
```

---

### 第14课时：综合复习与总结

---

## 四、推荐练习题（洛谷题单558）

| 题号 | 题目名称 | 知识点 |
|:---:|:---|:---|
| P5755 | 【深基8.例8】快速幂 | 倍增 |
| P5756 | 【深基8.例9】最小生成树 | MST |
| P5757 | 【深基8.例10】最短路 | 最短路径 |
| P5758 | 【深基8.习1】排列组合 | 排列组合 |
| P5759 | 【深基8.习2】算法复杂度 | 复杂度分析 |

---

## 五、学习路径总结

```
GESP学习路径：

L1-L2：基础语法 → 分支循环 → 简单算法
    ↓
L3-L4：进制编码 → 数组结构体 → 函数排序
    ↓
L5-L6：数论基础 → 链表递归 → 分治贪心 → 树图搜索 → 动态规划
    ↓
L7-L8：复杂DP → 图论算法 → 数学应用 → 算法优化

关键节点：
- L3：从语法到算法的转折点
- L5：算法进阶的关键
- L7：高级算法的门槛
- L8：综合应用的巅峰
```

---

## 六、GESP与CSP-J/S衔接

```
GESP八级通过后，可顺利衔接：
- CSP-J（入门级）：相当于GESP 6-7级
- CSP-S（提高级）：相当于GESP 8级及以上

NOIP（全国青少年信息学奥林匹克联赛）：
- 需要在GESP基础上继续学习：
  - 高级数据结构（线段树、树状数组、平衡树）
  - 高级图论（网络流、二分图、强连通分量）
  - 高级动态规划（状态压缩、斜率优化、插头DP）
  - 计算几何
  - 字符串算法（后缀数组、AC自动机）
```

---

**版本**: 1.0  
**更新日期**: 2026-03-28  
**作者**: 明夷（MoYin身外身）

*本系列教案遵循《易经》由易到难、循序渐进之智慧，遵循《道德经》引导式教学之法，遵循《论语》因材施教之道。*

**完整教案系列**：
- GESP-L1-一级教案.md
- GESP-L2-二级教案.md
- GESP-L3-三级教案.md
- GESP-L4-四级教案.md
- GESP-L5-五级教案.md
- GESP-L6-六级教案.md
- GESP-L7-七级教案.md
- GESP-L8-八级教案.md

**存储位置**: /root/.openclaw/workspace/curriculum/gesp/
