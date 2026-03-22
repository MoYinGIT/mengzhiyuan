# Python 代码编程

> **简洁优雅的入门语言** · 适合 10-12 岁

---

## 🎯 为什么选择 Python？

### Python 的优势

| 特点 | 说明 |
|:---|:---|
| **简洁优雅** | 代码像英语一样好读 |
| **功能强大** | 网站、游戏、数据分析都能做 |
| **应用广泛** | AI、大数据、自动化都用 Python |
| **社区活跃** | 资料多，遇到问题容易解决 |

### Python 适合谁？

- ✅ 10岁以上，有一定逻辑思维基础
- ✅ 学过 Scratch，想进阶代码编程
- ✅ 零基础但理解力强的学生
- ✅ 对人工智能、数据分析感兴趣

---

## 📚 二级进阶体系

| 级别 | 适合年龄 | 核心内容 | 状态 |
|:---:|:---:|:---|:---:|
| **L1 一级** | 10-11岁 | Python基础、Turtle绘图、基本语法 | 即将上线 |
| **L2 二级** | 11-12岁 | 数据结构、文件操作、模块化编程 | 即将上线 |

---

## 🚀 快速开始

### 第一个 Python 程序

```python
print("你好，世界！")
```

**运行结果**：
```
你好，世界！
```

### Python 安装

1. 访问 [python.org](https://www.python.org/downloads/)
2. 下载 Python 3.x 版本
3. 安装时勾选「Add Python to PATH」
4. 打开 IDLE 或命令行，输入 `python`

### 在线运行（无需安装）

- [Python Tutor](https://pythontutor.com/) - 可视化执行
- [Replit](https://replit.com/) - 在线编程环境

---

## 💡 Python vs Scratch 对比

| 功能 | Scratch | Python |
|:---|:---|:---|
| 打印文字 | `说"你好"2秒` | `print("你好")` |
| 变量 | 创建变量积木 | `x = 10` |
| 循环10次 | `重复执行10次` | `for i in range(10):` |
| 条件判断 | `如果...那么...` | `if x > 0:` |

---

## 📝 基础语法预览

### 变量

```python
# 变量就像盒子，用来装数据
name = "小明"      # 字符串
age = 10           # 整数
height = 1.45      # 小数
is_student = True  # 布尔值（真/假）

print(name, age)
```

### 条件语句

```python
score = 85

if score >= 90:
    print("优秀！")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("继续努力")
```

### 循环

```python
# for 循环
for i in range(5):
    print(f"第{i+1}次")

# while 循环
count = 0
while count < 5:
    print(count)
    count = count + 1
```

### 函数

```python
def greet(name):
    """打招呼函数"""
    return f"你好，{name}！"

# 调用函数
message = greet("小明")
print(message)  # 输出：你好，小明！
```

---

## 🎨 Turtle 绘图

Python 内置的绘图库，像 Scratch 一样画画！

```python
import turtle

# 创建一个画笔
pen = turtle.Turtle()

# 画一个正方形
for i in range(4):
    pen.forward(100)  # 前进100步
    pen.right(90)     # 右转90度

# 保持窗口显示
turtle.done()
```

---

## 🏛️ 三经典与 Python

### 《道德经》· 大道至简

Python 的设计理念：
- **简洁** - 一行代码能做的事，不用十行
- **优雅** - 代码不仅是给机器看的，也是给人看的
- **可读性** - 好的代码应该像散文一样易读

Python 之禅（输入 `import this` 可见）：
> 「优美胜于丑陋，明了胜于隐晦，简洁胜于复杂」

### 《论语》· 温故而知新

学 Python 要多练习：
- 每天写一点代码
- 复习旧知识时会有新领悟
- 做过的项目回头优化

---

## 📊 考级信息

### GESP Python 认证

| 级别 | 时长 | 合格线 |
|:---:|:---:|:---:|
| L1 一级 | 120分钟 | 60分 |
| L2 二级 | 120分钟 | 60分 |

---

## 📚 学习资源

- [Python 官方文档](https://docs.python.org/zh-cn/3/)
- [Python Tutor 可视化](https://pythontutor.com/)
- [廖雪峰 Python 教程](https://www.liaoxuefeng.com/wiki/1016959663602400)

---

> **默隐·蒙知苑** · 让所有孩子有处可学  
> 课程正在制作中，敬请期待...
