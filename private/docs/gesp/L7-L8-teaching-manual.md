---
layout: doc
---

# GESP C++ L7-L8 教学手册（概要）

> 高级算法与竞赛准备 | 数据结构 · 图论进阶 · 组合数学 · 计算几何

---

## 课程概览

| 项目 | L7 | L8 |
|:---|:---|:---|
| **目标** | 掌握高级数据结构，能参加CSP-S | 掌握高级算法，冲击NOIP提高组 |
| **时长** | 8周 × 2次 × 2小时 = 32小时 | 8周 × 2次 × 2小时 = 32小时 |
| **前置** | 完成L6，掌握DP和图搜索 | 完成L7，掌握高级数据结构 |
| **难度** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## L7：高级数据结构

### 第1-2周：并查集与树状数组

#### 并查集（Union-Find）

```cpp
// 路径压缩 + 按秩合并
int parent[N], rankv[N];

void init(int n) {
    for (int i = 0; i < n; i++) {
        parent[i] = i;
        rankv[i] = 0;
    }
}

int find(int x) {
    return parent[x] == x ? x : parent[x] = find(parent[x]);
}

void unite(int x, int y) {
    x = find(x), y = find(y);
    if (x == y) return;
    if (rankv[x] < rankv[y]) swap(x, y);
    parent[y] = x;
    if (rankv[x] == rankv[y]) rankv[x]++;
}

bool same(int x, int y) {
    return find(x) == find(y);
}
```

**应用**：
- 连通分量
- Kruskal算法
- 离线查询

#### 树状数组（Binary Indexed Tree）

```cpp
// 单点修改，区间查询
int tree[N];

int lowbit(int x) { return x & (-x); }

void update(int x, int delta) {
    for (int i = x; i <= n; i += lowbit(i))
        tree[i] += delta;
}

int query(int x) {  // 查询[1,x]的和
    int sum = 0;
    for (int i = x; i > 0; i -= lowbit(i))
        sum += tree[i];
    return sum;
}

int rangeQuery(int l, int r) {
    return query(r) - query(l - 1);
}
```

**应用**：
- 动态前缀和
- 逆序对计数
- 区间更新（差分+树状数组）

---

### 第3-4周：线段树

#### 基础线段树

```cpp
// 区间修改，区间查询
struct SegTree {
    int sum[N * 4], lazy[N * 4];
    
    void pushUp(int rt) {
        sum[rt] = sum[rt * 2] + sum[rt * 2 + 1];
    }
    
    void pushDown(int rt, int ln, int rn) {
        if (lazy[rt]) {
            lazy[rt * 2] += lazy[rt];
            lazy[rt * 2 + 1] += lazy[rt];
            sum[rt * 2] += lazy[rt] * ln;
            sum[rt * 2 + 1] += lazy[rt] * rn;
            lazy[rt] = 0;
        }
    }
    
    void update(int L, int R, int val, int l, int r, int rt) {
        if (L <= l && r <= R) {
            sum[rt] += val * (r - l + 1);
            lazy[rt] += val;
            return;
        }
        int mid = (l + r) >> 1;
        pushDown(rt, mid - l + 1, r - mid);
        if (L <= mid) update(L, R, val, l, mid, rt * 2);
        if (R > mid) update(L, R, val, mid + 1, r, rt * 2 + 1);
        pushUp(rt);
    }
    
    int query(int L, int R, int l, int r, int rt) {
        if (L <= l && r <= R) return sum[rt];
        int mid = (l + r) >> 1;
        pushDown(rt, mid - l + 1, r - mid);
        int ans = 0;
        if (L <= mid) ans += query(L, R, l, mid, rt * 2);
        if (R > mid) ans += query(L, R, mid + 1, r, rt * 2 + 1);
        return ans;
    }
};
```

**进阶应用**：
- 区间最值
- 区间GCD
- 动态开点线段树

---

### 第5-6周：图论进阶

#### 最小生成树

**Kruskal**（已学过，复习）

**Prim算法**

```cpp
int prim() {
    memset(dist, 0x3f, sizeof(dist));
    memset(vis, false, sizeof(vis));
    dist[0] = 0;
    int ans = 0;
    
    for (int i = 0; i < n; i++) {
        int u = -1;
        for (int j = 0; j < n; j++)
            if (!vis[j] && (u == -1 || dist[j] < dist[u]))
                u = j;
        
        if (dist[u] == INF) return -1;  // 图不连通
        vis[u] = true;
        ans += dist[u];
        
        for (int v = 0; v < n; v++)
            if (!vis[v] && g[u][v] < dist[v])
                dist[v] = g[u][v];
    }
    return ans;
}
```

#### 强连通分量（Tarjan）

```cpp
int dfn[N], low[N], stk[N], inStk[N];
int scc[N], sccCnt;
int idx, top;

void tarjan(int u) {
    dfn[u] = low[u] = ++idx;
    stk[++top] = u;
    inStk[u] = true;
    
    for (int v : adj[u]) {
        if (!dfn[v]) {
            tarjan(v);
            low[u] = min(low[u], low[v]);
        } else if (inStk[v]) {
            low[u] = min(low[u], dfn[v]);
        }
    }
    
    if (dfn[u] == low[u]) {
        sccCnt++;
        int v;
        do {
            v = stk[top--];
            inStk[v] = false;
            scc[v] = sccCnt;
        } while (v != u);
    }
}
```

#### LCA（最近公共祖先）

```cpp
// 倍增法
int fa[N][20], depth[N];

void dfs(int u, int p) {
    fa[u][0] = p;
    depth[u] = depth[p] + 1;
    for (int i = 1; i < 20; i++)
        fa[u][i] = fa[fa[u][i-1]][i-1];
    for (int v : tree[u])
        if (v != p) dfs(v, u);
}

int lca(int u, int v) {
    if (depth[u] < depth[v]) swap(u, v);
    // 提升u
    for (int i = 19; i >= 0; i--)
        if (depth[fa[u][i]] >= depth[v])
            u = fa[u][i];
    if (u == v) return u;
    // 一起提升
    for (int i = 19; i >= 0; i--)
        if (fa[u][i] != fa[v][i])
            u = fa[u][i], v = fa[v][i];
    return fa[u][0];
}
```

---

### 第7-8周：动态规划进阶

#### 状态压缩DP

```cpp
// 旅行商问题 TSP
int dp[1 << n][n];  // dp[mask][i] = 经过mask中的点，最后到i的最短距离

void tsp() {
    memset(dp, 0x3f, sizeof(dp));
    dp[1][0] = 0;  // 从0出发
    
    for (int mask = 1; mask < (1 << n); mask++) {
        for (int i = 0; i < n; i++) {
            if (!(mask & (1 << i))) continue;
            for (int j = 0; j < n; j++) {
                if (mask & (1 << j)) continue;
                int newMask = mask | (1 << j);
                dp[newMask][j] = min(dp[newMask][j], dp[mask][i] + dist[i][j]);
            }
        }
    }
}
```

#### 数位DP

```cpp
// 统计[1,n]中满足条件的数字个数
int dp[20][2];  // dp[pos][tight]

digit[];  // n的各位数字

int dfs(int pos, int tight, int lead) {
    if (pos == -1) return 1;  // 递归边界
    if (!tight && dp[pos][lead] != -1) return dp[pos][lead];
    
    int up = tight ? digit[pos] : 9;
    int ans = 0;
    
    for (int i = 0; i <= up; i++) {
        int newTight = tight && (i == up);
        int newLead = lead && (i == 0);
        // 根据题目要求判断i是否合法
        ans += dfs(pos - 1, newTight, newLead);
    }
    
    if (!tight) dp[pos][lead] = ans;
    return ans;
}
```

---

## L8：高级算法

### 第1-2周：网络流

#### 最大流（Dinic算法）

```cpp
struct Edge {
    int to, cap, rev;
};

vector<Edge> graph[N];
int level[N], iter[N];

void addEdge(int from, int to, int cap) {
    graph[from].push_back({to, cap, (int)graph[to].size()});
    graph[to].push_back({from, 0, (int)graph[from].size() - 1});
}

void bfs(int s) {
    memset(level, -1, sizeof(level));
    queue<int> q;
    level[s] = 0;
    q.push(s);
    while (!q.empty()) {
        int v = q.front(); q.pop();
        for (Edge &e : graph[v]) {
            if (e.cap > 0 && level[e.to] < 0) {
                level[e.to] = level[v] + 1;
                q.push(e.to);
            }
        }
    }
}

int dfs(int v, int t, int f) {
    if (v == t) return f;
    for (int &i = iter[v]; i < graph[v].size(); i++) {
        Edge &e = graph[v][i];
        if (e.cap > 0 && level[v] < level[e.to]) {
            int d = dfs(e.to, t, min(f, e.cap));
            if (d > 0) {
                e.cap -= d;
                graph[e.to][e.rev].cap += d;
                return d;
            }
        }
    }
    return 0;
}

int maxFlow(int s, int t) {
    int flow = 0;
    while (true) {
        bfs(s);
        if (level[t] < 0) return flow;
        memset(iter, 0, sizeof(iter));
        int f;
        while ((f = dfs(s, t, INF)) > 0) {
            flow += f;
        }
    }
}
```

---

### 第3-4周：字符串算法

#### KMP算法

```cpp
vector<int> buildNext(string &p) {
    int m = p.size();
    vector<int> nxt(m, -1);
    for (int i = 0, j = -1; i < m - 1; ) {
        if (j == -1 || p[i] == p[j]) {
            i++, j++;
            nxt[i] = j;
        } else {
            j = nxt[j];
        }
    }
    return nxt;
}

int kmp(string &s, string &p) {
    vector<int> nxt = buildNext(p);
    int n = s.size(), m = p.size();
    for (int i = 0, j = 0; i < n; ) {
        if (j == -1 || s[i] == p[j]) {
            i++, j++;
            if (j == m) return i - m;  // 匹配成功
        } else {
            j = nxt[j];
        }
    }
    return -1;
}
```

#### 字符串哈希

```cpp
// 滚动哈希
const int BASE = 131;
const int MOD = 1e9 + 7;

long long power[N], hashVal[N];

void init(string &s) {
    int n = s.size();
    power[0] = 1;
    for (int i = 1; i <= n; i++)
        power[i] = power[i-1] * BASE % MOD;
    
    hashVal[0] = 0;
    for (int i = 1; i <= n; i++)
        hashVal[i] = (hashVal[i-1] * BASE + s[i-1]) % MOD;
}

// 获取子串[l,r]的哈希值（1-indexed）
long long getHash(int l, int r) {
    return (hashVal[r] - hashVal[l-1] * power[r-l+1] % MOD + MOD) % MOD;
}
```

---

### 第5-6周：数学进阶

#### 组合数学

```cpp
// 预处理阶乘和逆元
const int MAXN = 1e6 + 5;
long long fac[MAXN], inv[MAXN];

long long fastPow(long long a, long long b) {
    long long res = 1;
    while (b) {
        if (b & 1) res = res * a % MOD;
        a = a * a % MOD;
        b >>= 1;
    }
    return res;
}

void init() {
    fac[0] = 1;
    for (int i = 1; i < MAXN; i++)
        fac[i] = fac[i-1] * i % MOD;
    inv[MAXN-1] = fastPow(fac[MAXN-1], MOD-2);
    for (int i = MAXN-2; i >= 0; i--)
        inv[i] = inv[i+1] * (i+1) % MOD;
}

// 组合数 C(n,m)
long long C(int n, int m) {
    if (m < 0 || m > n) return 0;
    return fac[n] * inv[m] % MOD * inv[n-m] % MOD;
}
```

#### 卢卡斯定理

```cpp
// 大组合数取模
long long lucas(long long n, long long m, int p) {
    if (m == 0) return 1;
    return C(n % p, m % p) * lucas(n / p, m / p, p) % p;
}
```

---

### 第7-8周：竞赛综合

#### 竞赛策略

**赛前准备**：
- 熟悉常用代码模板
- 准备调试技巧
- 熟悉比赛环境

**赛中策略**：
1. 先读所有题目
2. 从简单题开始做
3. 遇到难题先跳过
4. 留出时间检查

**时间分配**（4小时比赛）：
- 读题：20分钟
- 简单题：60分钟
- 中等题：90分钟
- 难题：30分钟
- 检查：20分钟

#### 模板整理

建议整理的模板清单：
- [ ] 快速幂、GCD、逆元
- [ ] 并查集、树状数组、线段树
- [ ] 最短路（Dijkstra、Floyd）
- [ ] 最小生成树
- [ ] KMP、字符串哈希
- [ ] 网络流（Dinic）
- [ ] 组合数、Lucas

---

## 学习资源

### 推荐题库

| 平台 | 适合阶段 | 推荐题目 |
|:---:|:---:|:---|
| **洛谷** | L7-L8 | 提高+/省选-难度 |
| **Codeforces** | L7-L8 | Div.2 C/D/E题 |
| **AtCoder** | L7-L8 | ABC 280-300+ |
| **CSES** | L7 | 高级数据结构、图论 |

### 推荐书籍

- 《算法竞赛入门经典》（刘汝佳）
- 《挑战程序设计竞赛》
- 《算法竞赛进阶指南》

---

## 评估标准

### L7 通过标准

- [ ] 掌握并查集、树状数组、线段树
- [ ] 能独立解决LCA问题
- [ ] 掌握强连通分量
- [ ] 理解状态压缩DP
- [ ] 能通过CSP-J一等奖

### L8 通过标准

- [ ] 掌握网络流基础
- [ ] 掌握字符串算法
- [ ] 掌握组合数学
- [ ] 能参加CSP-S并获得奖项
- [ ] 具备NOIP提高组水平

---

**整理者**：明夷  
**日期**：2026-03-27  
**版本**：v1.0（概要版，详细教案待续）

[← 返回GESP考级](/programming/gesp/)

