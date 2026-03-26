---
layout: doc
---

# GESP C++ L6 教学手册

> 8周进阶教学计划 | 动态规划 · 背包问题 · 树形DP · 图搜索

---

## 课程概览

| 项目 | 内容 |
|:---|:---|
| **级别** | GESP C++ L6 |
| **目标** | 掌握动态规划、图搜索，能解决中等难度算法问题 |
| **时长** | 8周，每周2次课，每次2小时 |
| **总课时** | 32小时 |
| **前置要求** | 完成L5学习，掌握递归、分治、基础数据结构 |
| **配套资源** | [L6能力图谱](/programming/gesp/ability-chart.md) |

---

## 第1-2周：动态规划基础

### 第1周：DP思想入门

#### 教学目标
- 理解动态规划的核心思想
- 掌握DP三要素：状态、转移、初始化
- 能解决基础DP问题

#### 知识点详解

**什么是动态规划？**

动态规划（Dynamic Programming，简称DP）是：
- 将复杂问题分解为**子问题**
- **记忆化**子问题的解，避免重复计算
- 通过**状态转移**求解

**DP三要素**

```
1. 状态定义：dp[i] 表示什么？
2. 状态转移：dp[i] 如何从已知状态推导？
3. 初始化：边界条件是什么？
```

**经典入门：爬楼梯**

```cpp
// 问题：爬n阶楼梯，每次可爬1或2阶，求方法数

// 状态定义：dp[i] = 爬到第i阶的方法数
// 状态转移：dp[i] = dp[i-1] + dp[i-2]
// 初始化：dp[0] = 1, dp[1] = 1

int climbStairs(int n) {
    if (n <= 1) return 1;
    int dp[n + 1];
    dp[0] = dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// 空间优化：O(1)
int climbStairsOptimized(int n) {
    if (n <= 1) return 1;
    int prev2 = 1, prev1 = 1, curr;
    for (int i = 2; i <= n; i++) {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
```

#### DP解题步骤

```
Step 1: 理解题意，确定最优子结构
Step 2: 定义状态（dp数组的含义）
Step 3: 推导状态转移方程
Step 4: 确定初始条件
Step 5: 确定遍历顺序
Step 6: 举例验证
```

#### 课堂练习

1. 斐波那契数列（DP版）
2. 最小花费爬楼梯
3. 不同路径（网格）

#### 课后作业

- DP基础练习10题
- 理解DP vs 递归 vs 贪心的区别

---

### 第2周：线性DP

#### 教学目标
- 掌握最长上升子序列（LIS）
- 掌握最长公共子序列（LCS）
- 能解决线性结构DP问题

#### 知识点详解

**最长上升子序列 LIS**

```cpp
// O(n²) 版本
int lengthOfLIS(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return 0;
    
    // dp[i] = 以nums[i]结尾的LIS长度
    vector<int> dp(n, 1);
    int ans = 1;
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        ans = max(ans, dp[i]);
    }
    return ans;
}

// O(nlogn) 版本（二分优化）
int lengthOfLISOptimized(vector<int>& nums) {
    vector<int> d;
    for (int x : nums) {
        auto it = lower_bound(d.begin(), d.end(), x);
        if (it == d.end()) d.push_back(x);
        else *it = x;
    }
    return d.size();
}
```

**最长公共子序列 LCS**

```cpp
// dp[i][j] = s1[0..i-1]和s2[0..j-1]的LCS长度
int longestCommonSubsequence(string s1, string s2) {
    int m = s1.size(), n = s2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1[i-1] == s2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}
```

#### 课后作业

- LIS练习5题
- LCS练习5题

---

## 第3-4周：背包问题

### 第3周：01背包

#### 教学目标
- 理解01背包问题
- 掌握状态转移方程
- 能进行空间优化

#### 知识点详解

**问题描述**

```
有n个物品，每个物品有重量w[i]和价值v[i]
背包容量为C
每个物品只能选或不选（0或1次）
求能装入的最大价值
```

**状态定义**

```cpp
// dp[i][j] = 前i个物品，容量为j时的最大价值
// 状态转移：
// 不选第i个：dp[i][j] = dp[i-1][j]
// 选第i个：dp[i][j] = dp[i-1][j-w[i]] + v[i]
// dp[i][j] = max(不选, 选)
```

**代码实现**

```cpp
// O(n*C) 空间
int knapsack01(vector<int>& w, vector<int>& v, int C) {
    int n = w.size();
    vector<vector<int>> dp(n + 1, vector<int>(C + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= C; j++) {
            dp[i][j] = dp[i-1][j];  // 不选
            if (j >= w[i-1]) {
                dp[i][j] = max(dp[i][j], 
                              dp[i-1][j-w[i-1]] + v[i-1]);  // 选
            }
        }
    }
    return dp[n][C];
}

// O(C) 空间优化（倒序遍历）
int knapsack01Optimized(vector<int>& w, vector<int>& v, int C) {
    int n = w.size();
    vector<int> dp(C + 1, 0);
    
    for (int i = 0; i < n; i++) {
        for (int j = C; j >= w[i]; j--) {  // 倒序！
            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
        }
    }
    return dp[C];
}
```

**为什么倒序？**

倒序遍历保证每个物品只被使用一次（01背包的特性）。

#### 课后作业

- 01背包基础10题
- 理解空间优化原理

---

### 第4周：完全背包与多重背包

#### 教学目标
- 掌握完全背包
- 了解多重背包
- 能区分背包类型

#### 知识点详解

**完全背包**

```cpp
// 每个物品可以选无限次
// 正序遍历！
int unboundedKnapsack(vector<int>& w, vector<int>& v, int C) {
    vector<int> dp(C + 1, 0);
    
    for (int i = 0; i < w.size(); i++) {
        for (int j = w[i]; j <= C; j++) {  // 正序！
            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
        }
    }
    return dp[C];
}
```

**背包类型对比**

| 类型 | 特点 | 遍历顺序 |
|:---:|:---|:---:|
| 01背包 | 每个物品选0或1次 | 容量倒序 |
| 完全背包 | 每个物品选无限次 | 容量正序 |
| 多重背包 | 每个物品选有限次 | 二进制优化 |

**常见变形**

1. **恰好装满**：初始化`dp[0]=0`，其他为`-INF`
2. **求方案数**：`max`改为`sum`
3. **二维费用**：多加一维

#### 课后作业

- 完全背包练习5题
- 背包变形练习5题

---

## 第5-6周：图搜索

### 第5周：DFS与BFS

#### 教学目标
- 掌握图的存储方式
- 熟练DFS和BFS
- 能解决图的遍历问题

#### 知识点详解

**图的存储**

```cpp
// 邻接矩阵
int g[N][N];  // g[i][j] = i到j的边权

// 邻接表（推荐）
vector<int> adj[N];           // 无权图
vector<pair<int,int>> adj[N];  // 有权图

// 添加边
void addEdge(int u, int v) {
    adj[u].push_back(v);
    // 无向图要加反向边
    adj[v].push_back(u);
}
```

**深度优先搜索 DFS**

```cpp
bool vis[N];

void dfs(int u) {
    vis[u] = true;
    cout << u << " ";
    for (int v : adj[u]) {
        if (!vis[v]) {
            dfs(v);
        }
    }
}
```

**广度优先搜索 BFS**

```cpp
void bfs(int start) {
    queue<int> q;
    q.push(start);
    vis[start] = true;
    
    while (!q.empty()) {
        int u = q.front(); q.pop();
        cout << u << " ";
        
        for (int v : adj[u]) {
            if (!vis[v]) {
                vis[v] = true;
                q.push(v);
            }
        }
    }
}
```

**DFS vs BFS**

| 特性 | DFS | BFS |
|:---:|:---:|:---:|
| 数据结构 | 栈（递归） | 队列 |
| 空间复杂度 | O(h) | O(w) |
| 应用场景 | 连通性、回溯 | 最短路径（无权） |

#### 经典问题

1. 连通分量计数
2. 迷宫问题（路径搜索）
3. 图的遍历

#### 课后作业

- DFS/BFS练习10题
- 迷宫问题5题

---

### 第6周：最短路径

#### 教学目标
- 掌握Dijkstra算法
- 了解Floyd算法
- 能解决最短路问题

#### 知识点详解

**Dijkstra算法**（单源最短路，无负权）

```cpp
// 堆优化版本 O((V+E)logV)
void dijkstra(int s) {
    memset(dist, 0x3f, sizeof(dist));
    dist[s] = 0;
    
    priority_queue<pii, vector<pii>, greater<pii>> pq;
    pq.push({0, s});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;  // 已更新过
        
        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}
```

**Floyd算法**（多源最短路）

```cpp
// O(V³)，适合小规模图
void floyd() {
    // 初始化
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            dist[i][j] = (i == j) ? 0 : INF;
    
    // 输入边...
    
    // Floyd
    for (int k = 0; k < n; k++)
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
}
```

**算法选择**

| 算法 | 适用场景 | 时间复杂度 |
|:---:|:---:|:---:|
| Dijkstra | 单源、无负权 | O((V+E)logV) |
| Bellman-Ford | 单源、有负权 | O(VE) |
| Floyd | 多源最短路 | O(V³) |

#### 课后作业

- 最短路练习10题
- 理解算法适用场景

---

## 第7-8周：树形DP与综合

### 第7周：树形DP入门

#### 教学目标
- 理解树形DP思想
- 掌握树的基本操作
- 能解决简单树形DP问题

#### 知识点详解

**树的存储**

```cpp
vector<int> tree[N];
int parent[N];

// 建树（避免回到父节点）
void build(int u, int p) {
    parent[u] = p;
    for (int v : tree[u]) {
        if (v != p) {
            build(v, u);
        }
    }
}
```

**树的最大独立集**

```cpp
// dp[u][0] = 不选u时，以u为根的子树的最大独立集
// dp[u][1] = 选u时，以u为根的子树的最大独立集

void dfs(int u, int p) {
    dp[u][0] = 0;
    dp[u][1] = 1;  // 选u，贡献1
    
    for (int v : tree[u]) {
        if (v == p) continue;
        dfs(v, u);
        
        // 不选u，子节点可选可不选
        dp[u][0] += max(dp[v][0], dp[v][1]);
        
        // 选u，子节点不能选
        dp[u][1] += dp[v][0];
    }
}

// 答案：max(dp[root][0], dp[root][1])
```

**树形DP特点**

1. 从叶子向上递推
2. 状态通常与"选/不选"相关
3. 注意递归深度

#### 课后作业

- 树形DP基础5题
- 树的遍历练习

---

### 第8周：综合项目与复习

#### 综合项目：城市交通规划

**问题描述**：
给定n个城市，m条道路（有长度），需要：
1. 求任意两城市间的最短距离
2. 在最短路径上设置加油站，要求任意城市到最近加油站距离不超过D，求最少加油站数
3. 输出方案

**涉及算法**：
- Floyd（多源最短路）
- 贪心/DP（选址问题）
- 图的遍历

#### 复习要点

| 主题 | 重点 |
|:---|:---|
| DP基础 | 状态定义、转移方程、初始化 |
| 线性DP | LIS、LCS |
| 背包 | 01、完全、多重 |
| 图搜索 | DFS、BFS、最短路 |
| 树形DP | 选/不选模型 |

#### 模拟测试

- 时间：3小时
- 难度：接近L6考试
- 覆盖：DP + 图论

---

## 教学资源

### 配套文档

- [L6能力图谱](/programming/gesp/ability-chart.md)
- [算法速查卡](/programming/algorithm-cheatsheet.md)
- [常见错误排查](/programming/error-troubleshooting.md)

### 练习题库

| 类型 | 数量 | 难度 |
|:---:|:---:|:---:|
| DP基础 | 20题 | ⭐⭐⭐ |
| 背包 | 15题 | ⭐⭐⭐⭐ |
| 图搜索 | 15题 | ⭐⭐⭐⭐ |
| 树形DP | 10题 | ⭐⭐⭐⭐⭐ |

### 推荐资源

- [OI Wiki - 动态规划](https://oi-wiki.org/dp/)
- [OI Wiki - 图论](https://oi-wiki.org/graph/)
- [背包九讲](https://github.com/tianyicui/pack)

---

## 评估标准

### 通过标准

- [ ] 理解DP三要素
- [ ] 能独立解决LIS、LCS
- [ ] 掌握01背包和完全背包
- [ ] 熟练DFS和BFS
- [ ] 能使用Dijkstra求最短路
- [ ] 理解树形DP思想

### 优秀标准

- [ ] 能灵活设计DP状态
- [ ] 掌握背包空间优化技巧
- [ ] 能分析图算法复杂度
- [ ] 能独立解决树形DP问题
- [ ] 能综合运用多种算法

---

**整理者**：明夷  
**日期**：2026-03-27  
**版本**：v1.0

[← 返回GESP考级](/programming/gesp/)

