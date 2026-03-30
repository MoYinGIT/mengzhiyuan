# GESP C++ L7 七级教案

> **课程定位**: 算法进阶，复杂DP与图论深化  
> **课时安排**: 14课时（每课时90分钟）  > **适合学员**: 已通过GESP六级或同等水平  > **教学理念**: 化繁为简、触类旁通，培养高级算法思维

---

## 一、课程目标与学习成果

### 1.1 总体目标
- 掌握复杂动态规划（二维DP、区间DP、LIS、LCS）
- 理解图的表示和遍历
- 掌握Flood Fill算法
- 了解哈希表的概念和应用
- 掌握数学库函数的使用

### 1.2 学习成果
| 序号 | 学习成果 |
|:---:|:---|
| 1 | 解决二维动态规划问题 |
| 2 | 解决区间DP问题 |
| 3 | 使用LIS和LCS解决序列问题 |
| 4 | 使用图的BFS/DFS解决问题 |
| 5 | 应用Flood Fill算法 |
| 6 | 使用哈希表优化查找 |

---

## 二、核心知识点清单

| 知识块 | 知识点 | 难度 | 课时 |
|:---|:---|:---:|:---:|
| 数学函数 | 三角函数、对数、指数、幂 | ⭐⭐ | 1 |
| 二维DP | 数字三角形、矩阵DP | ⭐⭐⭐⭐ | 2 |
| 区间DP | 石子合并、括号匹配 | ⭐⭐⭐⭐ | 2 |
| LIS | 最长上升子序列 | ⭐⭐⭐ | 1.5 |
| LCS | 最长公共子序列 | ⭐⭐⭐ | 1.5 |
| 图论基础 | 图的表示、遍历 | ⭐⭐⭐ | 2 |
| Flood Fill | 连通块、涂色 | ⭐⭐⭐ | 2 |
| 哈希表 | 概念、应用 | ⭐⭐⭐ | 2 |

---

## 三、详细教学设计

### 第1课时：数学库函数

#### 教学目标
- 掌握常用数学函数

#### 示例代码
```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // 三角函数（弧度制）
    double angle = 3.14159 / 6;  // 30度
    cout << "sin(30°) = " << sin(angle) << endl;
    cout << "cos(30°) = " << cos(angle) << endl;
    
    // 反三角函数
    cout << "asin(0.5) = " << asin(0.5) << endl;
    
    // 对数函数
    cout << "log(2.718) = " << log(2.718) << endl;    // 自然对数ln
    cout << "log10(100) = " << log10(100) << endl;  // 常用对数lg
    
    // 指数函数
    cout << "exp(1) = " << exp(1) << endl;
    cout << "pow(2, 10) = " << pow(2, 10) << endl;
    
    // 其他
    cout << "sqrt(16) = " << sqrt(16) << endl;
    cout << "ceil(3.2) = " << ceil(3.2) << endl;
    cout << "floor(3.8) = " << floor(3.8) << endl;
    cout << "round(3.5) = " << round(3.5) << endl;
    
    return 0;
}
```

---

### 第2-3课时：二维动态规划

#### 教学目标
- 理解二维DP的状态设计
- 解决经典二维DP问题

#### 示例代码

**【例1】数字三角形**
```cpp
#include <iostream>
#include <algorithm>
using namespace std;

const int N = 505;
int a[N][N], dp[N][N];

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cin >> a[i][j];
        }
    }
    
    // dp[i][j]：从顶部走到(i,j)的最大路径和
    dp[1][1] = a[1][1];
    
    for (int i = 2; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            if (j == 1) {
                dp[i][j] = dp[i-1][j] + a[i][j];
            } else if (j == i) {
                dp[i][j] = dp[i-1][j-1] + a[i][j];
            } else {
                dp[i][j] = max(dp[i-1][j-1], dp[i-1][j]) + a[i][j];
            }
        }
    }
    
    int ans = 0;
    for (int j = 1; j <= n; j++) {
        ans = max(ans, dp[n][j]);
    }
    
    cout << ans << endl;
    
    return 0;
}
```

**【例2】矩阵路径**
```cpp
// 从左上角到右下角，只能向右或向下走，求最大路径和
const int N = 1005;
int dp[N][N];

int main() {
    int m, n;
    cin >> m >> n;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            cin >> dp[i][j];
        }
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            dp[i][j] += max(dp[i-1][j], dp[i][j-1]);
        }
    }
    
    cout << dp[m][n] << endl;
    
    return 0;
}
```

---

### 第4-5课时：区间DP

#### 教学目标
- 理解区间DP的思想
- 解决区间合并类问题

#### 示例代码

**【例3】石子合并**
```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 305;
int a[N], sum[N];
int dp[N][N];  // dp[i][j]：合并i到j的最小代价

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        sum[i] = sum[i-1] + a[i];
    }
    
    memset(dp, 0x3f, sizeof(dp));  // 初始化为大数
    
    for (int i = 1; i <= n; i++) dp[i][i] = 0;  // 边界
    
    // 枚举区间长度
    for (int len = 2; len <= n; len++) {
        for (int i = 1; i + len - 1 <= n; i++) {
            int j = i + len - 1;
            for (int k = i; k < j; k++) {
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j] + sum[j] - sum[i-1]);
            }
        }
    }
    
    cout << dp[1][n] << endl;
    
    return 0;
}
```

---

### 第6课时：最长上升子序列（LIS）

#### 教学目标
- 掌握LIS的DP解法
- 了解LIS的二分优化

#### 示例代码
```cpp
#include <iostream>
#include <algorithm>
using namespace std;

const int N = 1005;
int a[N], dp[N];  // dp[i]：以a[i]结尾的LIS长度

// O(n²)解法
int lis(int n) {
    int ans = 0;
    for (int i = 1; i <= n; i++) {
        dp[i] = 1;
        for (int j = 1; j < i; j++) {
            if (a[j] < a[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        ans = max(ans, dp[i]);
    }
    return ans;
}

// O(n log n)解法（二分优化）
int lisOptimized(int n) {
    int tail[N], len = 0;  // tail[i]：长度为i的LIS的最小末尾
    
    for (int i = 1; i <= n; i++) {
        int pos = lower_bound(tail + 1, tail + len + 1, a[i]) - tail;
        tail[pos] = a[i];
        if (pos > len) len++;
    }
    
    return len;
}

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> a[i];
    
    cout << lis(n) << endl;
    
    return 0;
}
```

---

### 第7课时：最长公共子序列（LCS）

#### 教学目标
- 掌握LCS的DP解法

#### 示例代码
```cpp
#include <iostream>
#include <string>
using namespace std;

const int N = 1005;
char a[N], b[N];
int dp[N][N];  // dp[i][j]：a前i个和b前j个的LCS长度

int main() {
    cin >> (a + 1) >> (b + 1);
    int n = strlen(a + 1), m = strlen(b + 1);
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i] == b[j]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    cout << dp[n][m] << endl;
    
    return 0;
}
```

---

### 第8-9课时：图论基础

#### 教学目标
- 掌握图的存储方式
- 掌握图的遍历方法

#### 教学内容

**图的存储**：
```cpp
// 邻接矩阵
int graph[MAXN][MAXN];

// 邻接表
vector<int> adj[MAXN];

// 边列表
struct Edge {
    int to, weight;
};
vector<Edge> edges[MAXN];
```

#### 示例代码

**【例4】图的遍历**
```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <cstring>
using namespace std;

const int N = 1005;
vector<int> adj[N];
bool visited[N];

// DFS
void dfs(int u) {
    visited[u] = true;
    cout << u << " ";
    
    for (int v : adj[u]) {
        if (!visited[v]) {
            dfs(v);
        }
    }
}

// BFS
void bfs(int start) {
    memset(visited, false, sizeof(visited));
    queue<int> q;
    
    q.push(start);
    visited[start] = true;
    
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        cout << u << " ";
        
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);  // 无向图
    }
    
    cout << "DFS: ";
    memset(visited, false, sizeof(visited));
    dfs(1);
    cout << endl;
    
    cout << "BFS: ";
    bfs(1);
    cout << endl;
    
    return 0;
}
```

---

### 第10-11课时：Flood Fill

#### 教学目标
- 掌握Flood Fill算法
- 解决连通块问题

#### 示例代码

**【例5】岛屿数量**
```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 105;
char grid[N][N];
bool visited[N][N];
int n, m;
int dx[] = {-1, 1, 0, 0, -1, -1, 1, 1};  // 八方向
int dy[] = {0, 0, -1, 1, -1, 1, -1, 1};

void floodfill(int x, int y) {
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    if (visited[x][y] || grid[x][y] == '0') return;
    
    visited[x][y] = true;
    
    for (int i = 0; i < 8; i++) {
        floodfill(x + dx[i], y + dy[i]);
    }
}

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> grid[i][j];
        }
    }
    
    int count = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (grid[i][j] == '1' && !visited[i][j]) {
                floodfill(i, j);
                count++;
            }
        }
    }
    
    cout << "岛屿数量：" << count << endl;
    
    return 0;
}
```

---

### 第12-13课时：哈希表

#### 教学目标
- 理解哈希表的概念
- 掌握哈希表的应用

#### 示例代码
```cpp
#include <iostream>
#include <unordered_map>
#include <unordered_set>
using namespace std;

int main() {
    // unordered_map：键值对存储
    unordered_map<string, int> score;
    
    score["张三"] = 90;
    score["李四"] = 85;
    
    cout << "张三的分数：" << score["张三"] << endl;
    
    // 遍历
    for (auto &p : score) {
        cout << p.first << ": " << p.second << endl;
    }
    
    // unordered_set：去重集合
    unordered_set<int> s;
    s.insert(1);
    s.insert(2);
    s.insert(1);  // 重复，不会插入
    
    cout << "集合大小：" << s.size() << endl;  // 2
    
    // 查找
    if (s.find(2) != s.end()) {
        cout << "2在集合中" << endl;
    }
    
    return 0;
}
```

---

### 第14课时：综合复习

---

## 四、推荐练习题（洛谷题单557）

| 题号 | 题目名称 | 知识点 |
|:---:|:---|:---|
| P5750 | 【深基8.例3】搜索 | DFS/BFS |
| P5751 | 【深基8.例4】涂色 | Flood Fill |
| P5752 | 【深基8.例5】最大子段和 | DP |
| P5753 | 【深基8.例6】传球游戏 | 多维DP |
| P5754 | 【深基8.例7】最长上升子序列 | LIS |

---

**版本**: 1.0  
**更新日期**: 2026-03-28
