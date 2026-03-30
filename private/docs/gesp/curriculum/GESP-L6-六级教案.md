# GESP C++ L6 六级教案

> **课程定位**: 数据结构进阶，树与图论入门  
> **课时安排**: 14课时（每课时90分钟）  > **适合学员**: 已通过GESP五级或同等水平  > **教学理念**: 从线性到非线性，从结构到算法

---

## 一、课程目标与学习成果

### 1.1 总体目标
- 理解树的基本概念和性质
- 掌握二叉树的遍历方法
- 掌握深度优先搜索（DFS）和广度优先搜索（BFS）
- 理解简单动态规划思想
- 了解面向对象编程基础
- 掌握栈和队列的基本操作

### 1.2 学习成果
| 序号 | 学习成果 |
|:---:|:---|
| 1 | 理解树的基本术语（根、叶子、深度、高度） |
| 2 | 实现二叉树的前序、中序、后序遍历 |
| 3 | 使用DFS和BFS解决搜索问题 |
| 4 | 解决简单的动态规划问题（一维DP、简单背包） |
| 5 | 理解面向对象的三大特性 |
| 6 | 实现栈和队列的基本操作 |

---

## 二、核心知识点清单

| 知识块 | 知识点 | 难度 | 课时 |
|:---|:---|:---:|:---:|
| 树基础 | 树的术语、性质、存储 | ⭐⭐ | 1 |
| 二叉树 | 完全二叉树、二叉排序树、遍历 | ⭐⭐⭐ | 2 |
| 哈夫曼树 | 哈夫曼树与哈夫曼编码 | ⭐⭐⭐ | 1.5 |
| DFS | 深度优先搜索 | ⭐⭐⭐ | 2 |
| BFS | 广度优先搜索 | ⭐⭐⭐ | 2 |
| 动态规划 | 一维DP、简单背包 | ⭐⭐⭐⭐ | 2.5 |
| 面向对象 | 类、继承、封装、多态 | ⭐⭐⭐ | 1.5 |
| 栈和队列 | 基本概念与操作 | ⭐⭐ | 1.5 |

---

## 三、详细教学设计

### 第1课时：树的基本概念

#### 教学目标
- 理解树的定义和基本术语
- 掌握树的性质

#### 教学内容

**树的基本术语**：
```
树：n(n≥0)个节点的有限集合

术语：
- 根节点：树的最顶层节点
- 叶子节点：没有子节点的节点
- 父节点/子节点：直接相连的上下节点
- 兄弟节点：具有相同父节点的节点
- 深度：从根到该节点的边数
- 高度：从该节点到最远叶子的边数
- 度：节点的子节点个数

树的性质：
- n个节点的树有n-1条边
- 树中任意两点有唯一路径
```

**树的存储**：
```cpp
// 双亲表示法
struct Node {
    int data;
    int parent;  // 父节点下标
};

// 孩子表示法（邻接表）
struct TreeNode {
    int data;
    vector<int> children;  // 孩子节点列表
};
```

---

### 第2-3课时：二叉树

#### 教学目标
- 理解二叉树的定义和性质
- 掌握二叉树的遍历方法

#### 教学内容

**二叉树定义**：
```
二叉树：每个节点最多有两个子节点的树

特殊二叉树：
- 满二叉树：每层节点数都达到最大
- 完全二叉树：除最后一层外都是满的，最后一层从左到右填充

二叉树性质：
- 第i层最多有2^(i-1)个节点
- 深度为k的二叉树最多有2^k-1个节点
- n0 = n2 + 1（叶子节点数 = 度为2的节点数 + 1）
```

**二叉树存储**：
```cpp
// 链表存储
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

// 数组存储（完全二叉树）
// 节点i的左孩子：2*i+1，右孩子：2*i+2，父节点：(i-1)/2
```

**二叉树遍历**：
```
前序遍历：根 → 左 → 右
中序遍历：左 → 根 → 右
后序遍历：左 → 右 → 根
层序遍历：从上到下，从左到右
```

#### 示例代码

**【例1】二叉树遍历**
```cpp
#include <iostream>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

// 前序遍历
void preOrder(TreeNode *root) {
    if (root == NULL) return;
    cout << root->val << " ";
    preOrder(root->left);
    preOrder(root->right);
}

// 中序遍历
void inOrder(TreeNode *root) {
    if (root == NULL) return;
    inOrder(root->left);
    cout << root->val << " ";
    inOrder(root->right);
}

// 后序遍历
void postOrder(TreeNode *root) {
    if (root == NULL) return;
    postOrder(root->left);
    postOrder(root->right);
    cout << root->val << " ";
}

// 层序遍历
void levelOrder(TreeNode *root) {
    if (root == NULL) return;
    queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        TreeNode *node = q.front();
        q.pop();
        cout << node->val << " ";
        
        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
    }
}

int main() {
    // 创建简单二叉树
    //      1
    //     / \
    //    2   3
    //   / \
    //  4   5
    TreeNode *root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    
    cout << "前序："; preOrder(root); cout << endl;
    cout << "中序："; inOrder(root); cout << endl;
    cout << "后序："; postOrder(root); cout << endl;
    cout << "层序："; levelOrder(root); cout << endl;
    
    return 0;
}
```

---

### 第4课时：哈夫曼树

#### 教学目标
- 理解哈夫曼树的构造方法
- 了解哈夫曼编码的应用

#### 教学内容

**哈夫曼树**：
```
带权路径长度最短的二叉树

构造方法：
1. 将所有节点作为单独的树，放入集合
2. 每次选择权值最小的两棵树合并
3. 新树的权值为两棵子树权值之和
4. 重复直到只剩一棵树

应用：数据压缩（哈夫曼编码）
```

---

### 第5-6课时：深度优先搜索（DFS）

#### 教学目标
- 理解DFS的思想
- 掌握DFS的实现方法
- 能够解决搜索类问题

#### 教学内容

**DFS思想**：
```
深度优先搜索：
- 从起点出发，尽可能深入探索
- 走到尽头时回溯，继续探索其他分支
- 实现方式：递归或栈

应用：
- 图的遍历
- 连通块问题
- 路径搜索
- 全排列、子集生成
```

#### 示例代码

**【例2】全排列**
```cpp
#include <iostream>
using namespace std;

const int MAXN = 10;
int n;
int path[MAXN];
bool used[MAXN];

void dfs(int u) {
    if (u == n) {  // 递归边界
        for (int i = 0; i < n; i++) {
            cout << path[i] << " ";
        }
        cout << endl;
        return;
    }
    
    for (int i = 1; i <= n; i++) {
        if (!used[i]) {
            path[u] = i;
            used[i] = true;
            dfs(u + 1);
            used[i] = false;  // 回溯
        }
    }
}

int main() {
    cin >> n;
    dfs(0);
    return 0;
}
```

**【例3】迷宫搜索**
```cpp
#include <iostream>
using namespace std;

const int N = 10;
int n, m;
char maze[N][N];
bool visited[N][N];
int dx[] = {-1, 1, 0, 0};  // 上下左右
int dy[] = {0, 0, -1, 1};

bool dfs(int x, int y) {
    if (maze[x][y] == 'E') return true;  // 找到出口
    
    visited[x][y] = true;
    
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        
        if (nx >= 0 && nx < n && ny >= 0 && ny < m &&
            !visited[nx][ny] && maze[nx][ny] != '#') {
            if (dfs(nx, ny)) return true;
        }
    }
    
    return false;
}
```

---

### 第7-8课时：广度优先搜索（BFS）

#### 教学目标
- 理解BFS的思想
- 掌握BFS的实现方法
- 能够解决最短路径问题

#### 教学内容

**BFS思想**：
```
广度优先搜索：
- 从起点出发，逐层向外扩展
- 先访问距离近的，再访问距离远的
- 实现方式：队列

特点：
- 可以找到最短路径（无权图）
- 空间复杂度通常比DFS大

应用：
- 最短路径（无权图）
- 连通块
- 层次遍历
```

#### 示例代码

**【例4】迷宫最短路径**
```cpp
#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

const int N = 100;
int n, m;
char maze[N][N];
int dist[N][N];  // 距离数组
int dx[] = {-1, 1, 0, 0};
int dy[] = {0, 0, -1, 1};

struct Point {
    int x, y;
};

int bfs(int sx, int sy) {
    memset(dist, -1, sizeof(dist));
    queue<Point> q;
    
    q.push({sx, sy});
    dist[sx][sy] = 0;
    
    while (!q.empty()) {
        Point p = q.front();
        q.pop();
        
        if (maze[p.x][p.y] == 'E') {
            return dist[p.x][p.y];
        }
        
        for (int i = 0; i < 4; i++) {
            int nx = p.x + dx[i];
            int ny = p.y + dy[i];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m &&
                dist[nx][ny] == -1 && maze[nx][ny] != '#') {
                dist[nx][ny] = dist[p.x][p.y] + 1;
                q.push({nx, ny});
            }
        }
    }
    
    return -1;  // 无法到达
}
```

---

### 第9-11课时：动态规划

#### 教学目标
- 理解动态规划的思想
- 掌握DP状态设计和转移方程
- 解决简单的DP问题

#### 教学内容

**DP思想**：
```
动态规划：
- 把大问题分解为子问题
- 保存子问题的解，避免重复计算
- 关键是找到状态转移方程

三要素：
1. 状态：描述子问题的变量
2. 状态转移方程：状态之间的关系
3. 边界条件：最小子问题的解
```

#### 示例代码

**【例5】斐波那契数列（DP）**
```cpp
// 递推版
long long fib(int n) {
    if (n <= 1) return n;
    
    long long dp[n+1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

// 空间优化版（滚动数组）
long long fibOptimized(int n) {
    if (n <= 1) return n;
    
    long long a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
```

**【例6】01背包问题**
```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 1005;
int w[N], v[N];  // 重量，价值
int dp[N][N];    // dp[i][j]：前i个物品，容量j时的最大价值

int main() {
    int n, W;
    cin >> n >> W;
    
    for (int i = 1; i <= n; i++) {
        cin >> w[i] >> v[i];
    }
    
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= W; j++) {
            if (j < w[i]) {
                dp[i][j] = dp[i-1][j];  // 装不下
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i]] + v[i]);
            }
        }
    }
    
    cout << dp[n][W] << endl;
    
    return 0;
}
```

---

### 第12课时：面向对象基础

#### 教学目标
- 理解面向对象的概念
- 了解类、继承、封装、多态

#### 教学内容

**面向对象三特性**：
```cpp
// 封装：数据和操作数据的方法绑定
class Student {
private:
    string name;
    int age;
    
public:
    void setName(string n) { name = n; }
    string getName() { return name; }
};

// 继承：子类继承父类的属性和方法
class Undergraduate : public Student {
private:
    string major;
public:
    void setMajor(string m) { major = m; }
};

// 多态：同一接口，不同实现
class Shape {
public:
    virtual double area() = 0;  // 纯虚函数
};

class Circle : public Shape {
    double r;
public:
    double area() { return 3.14 * r * r; }
};
```

---

### 第13课时：栈和队列

#### 教学目标
- 掌握栈和队列的概念
- 实现基本操作

#### 示例代码

**【例7】栈和队列实现**
```cpp
#include <iostream>
#include <stack>
#include <queue>
using namespace std;

int main() {
    // 栈：后进先出
    stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);
    
    while (!s.empty()) {
        cout << s.top() << " ";  // 3 2 1
        s.pop();
    }
    cout << endl;
    
    // 队列：先进先出
    queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);
    
    while (!q.empty()) {
        cout << q.front() << " ";  // 1 2 3
        q.pop();
    }
    cout << endl;
    
    return 0;
}
```

---

### 第14课时：综合复习

---

## 四、推荐练习题（洛谷题单556）

| 题号 | 题目名称 | 知识点 |
|:---:|:---|:---|
| P5745 | 【深基7.习10】排列 | DFS |
| P5746 | 【深基7.习11】组合 | DFS |
| P5747 | 【深基7.习12】迷宫 | BFS/DFS |
| P5748 | 【深基8.例1】购物贷款 | 贪心 |
| P5749 | 【深基8.例2】雇员问题 | 排序 |

---

**版本**: 1.0  
**更新日期**: 2026-03-28
