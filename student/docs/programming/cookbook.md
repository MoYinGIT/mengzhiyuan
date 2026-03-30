# 代码食谱（Code Cookbook）

> **常用代码片段，即查即用**

---

## 🎯 什么是代码食谱？

代码食谱收集了编程中常用的代码片段，就像菜谱一样，需要时可以快速查阅使用。

**使用方式**：
1. 找到你需要的功能
2. 复制代码
3. 根据你的需求修改
4. 运行测试

---

## 🐍 Python 代码食谱

### 输入输出

#### 1. 获取用户输入
```python
# 基础输入
name = input("请输入名字：")

# 输入数字
age = int(input("请输入年龄："))
height = float(input("请输入身高："))
```

#### 2. 格式化输出
```python
name = "小明"
age = 10

# 方式一：逗号分隔
print("姓名：", name, "年龄：", age)

# 方式二：f-string（推荐）
print(f"姓名：{name}，年龄：{age}")

# 方式三：format 方法
print("姓名：{}，年龄：{}".format(name, age))
```

### 数学计算

#### 3. 四舍五入
```python
num = 3.14159
print(round(num, 2))  # 3.14
```

#### 4. 绝对值
```python
print(abs(-10))  # 10
```

#### 5. 最大最小值
```python
numbers = [5, 2, 8, 1, 9]
print(max(numbers))  # 9
print(min(numbers))  # 1
print(sum(numbers))  # 25
```

#### 6. 随机数
```python
import random

# 随机整数
num = random.randint(1, 100)  # 1-100

# 随机小数
num = random.random()  # 0-1之间

# 从列表随机选择
fruits = ["苹果", "香蕉", "橙子"]
fruit = random.choice(fruits)
```

### 字符串处理

#### 7. 字符串拼接
```python
first = "Hello"
second = "World"
result = first + " " + second  # Hello World
```

#### 8. 字符串分割
```python
text = "苹果,香蕉,橙子"
fruits = text.split(",")  # ['苹果', '香蕉', '橙子']
```

#### 9. 字符串替换
```python
text = "我喜欢苹果"
new_text = text.replace("苹果", "香蕉")
```

#### 10. 大小写转换
```python
text = "Hello World"
print(text.upper())   # HELLO WORLD
print(text.lower())   # hello world
```

### 列表操作

#### 11. 创建列表
```python
# 空列表
my_list = []

# 有初始值
numbers = [1, 2, 3, 4, 5]
fruits = ["苹果", "香蕉", "橙子"]
```

#### 12. 添加元素
```python
fruits = ["苹果", "香蕉"]

# 末尾添加
fruits.append("橙子")  # ['苹果', '香蕉', '橙子']

# 指定位置插入
fruits.insert(1, "葡萄")  # ['苹果', '葡萄', '香蕉', '橙子']
```

#### 13. 删除元素
```python
fruits = ["苹果", "香蕉", "橙子"]

# 删除指定值
fruits.remove("香蕉")

# 删除指定位置
fruits.pop(0)  # 删除第一个

# 删除最后一个
fruits.pop()
```

#### 14. 列表排序
```python
numbers = [5, 2, 8, 1, 9]

# 升序
numbers.sort()
print(numbers)  # [1, 2, 5, 8, 9]

# 降序
numbers.sort(reverse=True)
print(numbers)  # [9, 8, 5, 2, 1]
```

#### 15. 列表遍历
```python
fruits = ["苹果", "香蕉", "橙子"]

# 方式一
for fruit in fruits:
    print(fruit)

# 方式二（带索引）
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

### 条件判断

#### 16. 判断奇偶
```python
num = 7

if num % 2 == 0:
    print("偶数")
else:
    print("奇数")
```

#### 17. 判断闰年
```python
year = 2024

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} 是闰年")
else:
    print(f"{year} 不是闰年")
```

#### 18. 判断素数
```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# 使用
if is_prime(17):
    print("是素数")
```

### 循环技巧

#### 19. 计算 1+2+3+...+100
```python
total = 0
for i in range(1, 101):
    total += i
print(total)  # 5050

# 或者直接用公式
print(100 * 101 // 2)  # 5050
```

#### 20. 打印乘法表
```python
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j}", end="\t")
    print()
```

#### 21. 遍历字典
```python
student = {"name": "小明", "age": 10, "grade": "A"}

# 遍历键
for key in student:
    print(key)

# 遍历值
for value in student.values():
    print(value)

# 遍历键值对
for key, value in student.items():
    print(f"{key}: {value}")
```

### 文件操作

#### 22. 读取文件
```python
# 读取整个文件
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# 逐行读取
with open("data.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())
```

#### 23. 写入文件
```python
# 写入（覆盖）
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello, World!\n")
    f.write("第二行\n")

# 追加
with open("output.txt", "a", encoding="utf-8") as f:
    f.write("追加的内容\n")
```

### 函数示例

#### 24. 计算阶乘
```python
def factorial(n):
    if n <= 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

print(factorial(5))  # 120
```

#### 25. 计算最大公约数
```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

print(gcd(48, 18))  # 6
```

---

## 🧩 Scratch 代码食谱

### 移动与旋转

#### 1. 八方向移动
```scratch
当按下 [向上 v] 箭头
面向 (0) 方向
移动 (5) 步

当按下 [向下 v] 箭头
面向 (180) 方向
移动 (5) 步

当按下 [向左 v] 箭头
面向 (-90) 方向
移动 (5) 步

当按下 [向右 v] 箭头
面向 (90) 方向
移动 (5) 步
```

#### 2. 平滑跟随鼠标
```scratch
当绿旗被点击
重复执行
    面向鼠标指针
    移动 (3) 步
结束
```

#### 3. 在舞台内随机移动
```scratch
当绿旗被点击
重复执行
    在 (2) 秒内滑行到 x: (随机数 (-220) 到 (220)) y: (随机数 (-160) 到 (160))
    等待 (1) 秒
结束
```

### 克隆技巧

#### 4. 发射子弹
```scratch
当按下 [空格 v] 键
克隆自己

当作为克隆体启动时
显示
重复执行
    移动 (10) 步
    如果 <碰到边缘？> 那么
        删除此克隆体
    结束
结束
```

#### 5. 满屏星星
```scratch
当绿旗被点击
隐藏
重复 (50) 次
    克隆自己
结束

当作为克隆体启动时
移到 x: (随机数 (-240) 到 (240)) y: (随机数 (-180) 到 (180))
将大小设为 (随机数 (10) 到 (50))
显示
重复执行
    将虚像特效增加 (5)
    等待 (0.1) 秒
    如果 <虚像特效 > (90)> 那么
        将虚像特效设为 (0)
    结束
结束
```

### 碰撞检测

#### 6. 精确的矩形碰撞
```scratch
// 判断两个角色是否碰撞（简单版）
如果 <碰到 [敌人 v]？> 那么
    说碰到敌人了！
结束
```

#### 7. 平台跳跃
```scratch
// 在角色中
当绿旗被点击
重复执行
    // 重力
    如果 <不成立 <碰到颜色 [#000000]>> 那么
        y坐标增加 (-5)
    结束
    
    // 跳跃
    如果 <<按下 [空格 v] 键？> 与 <碰到颜色 [#000000]>> 那么
        重复 (10) 次
            y坐标增加 (5)
        结束
    结束
结束
```

### 计分与计时

#### 8. 简单计分器
```scratch
// 变量：得分（适用于所有角色）

当绿旗被点击
将得分设为 (0)
重复执行
    说 (得分)
结束

// 当得分时
当接收到得分
将得分增加 (10)
播放声音 [pop v]
```

#### 9. 倒计时器
```scratch
// 变量：时间（适用于所有角色）

当绿旗被点击
将时间设为 (60)
重复执行直到 <时间 = [0]>
    等待 (1) 秒
    将时间减少 (1)
结束
广播 [游戏结束 v]
```

---

## 🎮 小游戏模板

### 猜数字游戏（Python）
```python
import random

def guess_number():
    secret = random.randint(1, 100)
    count = 0
    
    print("猜数字游戏！我想了一个 1-100 的数字。")
    
    while True:
        try:
            guess = int(input("你的猜测："))
            count += 1
            
            if guess < secret:
                print("太小了！")
            elif guess > secret:
                print("太大了！")
            else:
                print(f"恭喜你猜对了！用了 {count} 次")
                break
        except ValueError:
            print("请输入数字！")

guess_number()
```

### 石头剪刀布（Python）
```python
import random

def rock_paper_scissors():
    choices = ["石头", "剪刀", "布"]
    
    while True:
        computer = random.choice(choices)
        player = input("石头/剪刀/布（输入q退出）：")
        
        if player == "q":
            break
        
        if player not in choices:
            print("无效输入！")
            continue
        
        print(f"电脑：{computer}，你：{player}")
        
        if player == computer:
            print("平局！")
        elif (player == "石头" and computer == "剪刀") or \
             (player == "剪刀" and computer == "布") or \
             (player == "布" and computer == "石头"):
            print("你赢了！")
        else:
            print("你输了！")

rock_paper_scissors()
```

---

## 📝 使用建议

1. **理解后再用**：不要直接复制，先理解代码的作用
2. **适当修改**：根据你的需求调整代码
3. **多做实验**：修改参数看看会发生什么
4. **收藏常用**：把常用的代码保存下来

---

> **默隐·蒙知苑** · 代码片段，随查随用
