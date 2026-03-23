# 《易经》与算法思维

> 从阴阳变化到算法设计

---

## 🎯 本章目标

理解《易经》与计算机算法的深层联系：
- 阴阳与二进制
- 八卦与编码
- 变化思维与算法设计
- 预测思维与机器学习

---

## 1️⃣ 阴阳与二进制

### 《易经》的阴阳

《易经》用两个符号描述世界：
- **阴爻**（⚋）：`- -` 代表 0
- **阳爻**（⚊）：`—` 代表 1

### 计算机的二进制

计算机用两个数字运算：
- **0**：低电平，关
- **1**：高电平，开

### 惊人的相似

```
《易经》          计算机
阴 阳            0  1
八卦（3位）      3位二进制（000-111）
六十四卦（6位）   6位二进制（000000-111111）
```

**莱布尼茨**（微积分发明者）在1703年看到易经后惊叹：
> "中国人早在几千年前就发现了二进制！"

---

## 2️⃣ 八卦与编码

### 八卦生成

从阴阳两仪，到四象，到八卦：

```
        阴(0)                阳(1)
       /    \              /    \
    太阴    少阴        少阳    太阳
   (00)    (01)        (10)    (11)
    |       |            |       |
   坤      艮          震      乾
  000     001         010     111
```

### 八卦对照表

| 八卦 | 二进制 | 十进制 | 自然 | 家庭 | 身体 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ☷ 坤 | 000 | 0 | 地 | 母 | 腹 |
| ☶ 艮 | 001 | 1 | 山 | 少男 | 手 |
| ☵ 坎 | 010 | 2 | 水 | 中男 | 耳 |
| ☴ 巽 | 011 | 3 | 风 | 长女 | 股 |
| ☳ 震 | 100 | 4 | 雷 | 长男 | 足 |
| ☲ 离 | 101 | 5 | 火 | 中女 | 目 |
| ☱ 兑 | 110 | 6 | 泽 | 少女 | 口 |
| ☰ 乾 | 111 | 7 | 天 | 父 | 首 |

### 编程练习：八卦生成器

```cpp
#include <iostream>
#include <string>
using namespace std;

// 八卦名称
string bagua_name[8] = {"坤", "艮", "坎", "巽", "震", "离", "兑", "乾"};
string bagua_symbol[8] = {"☷", "☶", "☵", "☴", "☳", "☲", "☱", "☰"};
string bagua_nature[8] = {"地", "山", "水", "风", "雷", "火", "泽", "天"};

// 将数字转换为3位二进制字符串
string toBinary3(int n) {
    string result = "";
    for (int i = 2; i >= 0; i--) {
        result += ((n >> i) & 1) ? "1" : "0";
    }
    return result;
}

int main() {
    cout << "===== 八卦对照表 =====" << endl;
    cout << "卦名\t符号\t二进制\t自然" << endl;
    
    for (int i = 0; i < 8; i++) {
        cout << bagua_name[i] << "\t" 
             << bagua_symbol[i] << "\t" 
             << toBinary3(i) << "\t" 
             << bagua_nature[i] << endl;
    }
    
    return 0;
}
```

---

## 3️⃣ 变化思维与算法

### 《易经》的核心：变化

> "易"有三义：
> - **变易**：变化是永恒的
> - **简易**：复杂归于简单
> - **不易**：规律是不变的

### 算法设计的三原则

| 易经原则 | 算法对应 | 示例 |
|:---|:---|:---|
| **变易** | 算法要适应不同输入 | 排序算法处理任意数组 |
| **简易** | 算法要简洁高效 | O(n) 优于 O(n²) |
| **不易** | 算法核心逻辑稳定 | 二分查找永远是折半 |

### 穷则变，变则通

**编程中的应用**：

```cpp
// 穷则变：线性查找太慢
int linear_search(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}
// 时间复杂度：O(n)

// 变则通：改为二分查找（数组已排序）
int binary_search(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// 时间复杂度：O(log n)
```

---

## 4️⃣ 六十四卦与状态机

### 状态机是什么？

状态机 = 有限个状态 + 状态之间的转移

**例子**：电梯系统
- 状态：停止、上行、下行、开门
- 转移：按按钮、到达楼层、超时

### 六十四卦就是状态机

每个卦象代表一种"状态"：
- 初九、九二、九三... 代表不同阶段
- 卦变代表状态转移
- 吉凶代表结果评估

### 编程应用：游戏AI

```cpp
// 用状态机设计NPC行为
enum State {
    IDLE,      // 待机
    PATROL,    // 巡逻
    CHASE,     // 追击
    ATTACK,    // 攻击
    FLEE       // 逃跑
};

class NPC {
    State current_state;
    int health;
    int player_distance;
    
public:
    void update() {
        switch (current_state) {
            case IDLE:
                if (player_distance < 10) 
                    current_state = CHASE;  // 发现玩家
                break;
            case CHASE:
                if (player_distance < 2) 
                    current_state = ATTACK;  // 进入攻击范围
                else if (player_distance > 20) 
                    current_state = PATROL;  // 丢失目标
                break;
            case ATTACK:
                if (health < 20) 
                    current_state = FLEE;    // 血量低，逃跑
                else if (player_distance > 3) 
                    current_state = CHASE;   // 玩家逃跑
                break;
            // ...
        }
    }
};
```

---

## 5️⃣ 预测思维与机器学习

### 《易经》的预测

通过当前状态（卦象），推测未来趋势。

不是"算命"，而是：
- 分析现状
- 识别规律
- 推演可能
- 指导决策

### 机器学习的预测

通过历史数据，训练模型，预测未来。

**相似点**：
| 易经 | 机器学习 |
|:---|:---|
| 起卦（获取当前信息） | 收集训练数据 |
| 卦象分析 | 特征工程 |
| 爻辞解读 | 模型训练 |
| 吉凶判断 | 预测输出 |

### 简单示例：线性回归预测

```python
# 用历史数据预测未来趋势
import numpy as np

# 历史数据（天数，成绩）
X = np.array([1, 2, 3, 4, 5, 6, 7])  # 学习天数
y = np.array([60, 65, 70, 72, 75, 78, 80])  # 成绩

# 拟合线性模型
z = np.polyfit(X, y, 1)  # 1表示线性
p = np.poly1d(z)

# 预测第10天的成绩
day_10_score = p(10)
print(f"预测第10天成绩: {day_10_score:.1f}")  # 约89分
```

---

## 🎮 综合项目：易经占卜模拟器

### 功能设计

1. **起卦**：用随机数模拟铜钱占卜
2. **排卦**：生成六爻，确定卦象
3. **解卦**：显示卦辞、爻辞
4. **分析**：给出启示建议

### 核心代码

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

// 模拟铜钱投掷（3枚铜钱）
// 结果：3-6，6和9为变爻
int toss_coins() {
    int sum = 0;
    for (int i = 0; i < 3; i++) {
        // 铜钱正面（字）为3，反面为2
        sum += (rand() % 2 == 0) ? 3 : 2;
    }
    return sum;  // 6-9
}

// 判断阴阳
string get_yin_yang(int value) {
    if (value == 6) return "老阴（变）";
    if (value == 7) return "少阳";
    if (value == 8) return "少阴";
    return "老阳（变）";
}

int main() {
    srand(time(0));
    
    cout << "===== 易经占卜模拟器 =====" << endl;
    cout << "请静心思考你想问的问题..." << endl;
    cout << "按回车开始起卦" << endl;
    cin.get();
    
    int gua[6];
    cout << "\n起卦结果（从下往上）：" << endl;
    
    for (int i = 0; i < 6; i++) {
        gua[i] = toss_coins();
        cout << "第" << i + 1 << "爻: " << gua[i] 
             << " - " << get_yin_yang(gua[i]) << endl;
    }
    
    cout << "\n本卦与变卦分析..." << endl;
    cout << "（完整版可加入六十四卦数据库）" << endl;
    
    return 0;
}
```

---

## 📝 练习题

### 练习1：二进制转换

编写程序，将1-64的数字转换为6位二进制，对应六十四卦。

### 练习2：八卦计算器

实现一个程序，输入两个八卦，输出它们的"和卦"（按位异或）。

### 练习3：状态机设计

设计一个交通灯状态机，用《易经》卦象表示状态。

### 练习4：预测模型

用简单的线性回归，预测自己的学习成绩趋势。

---

## 🏛️ 三经典智慧

### 《易经》· 知几

> "几者，动之微，吉之先见者也。"

编程中的"知几"：
- 从报错信息预见问题
- 从性能瓶颈预见优化方向
- 从用户反馈预见需求变化

**优秀的程序员，能从细微处预见系统的走向。**

---

**默隐·蒙知苑** · 古今智慧，编程传承
