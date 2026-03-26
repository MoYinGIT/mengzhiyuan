---
layout: doc
---

# 快速开始指南

> 从零开始，5分钟上手编程

---

## 第一步：安装开发环境

### 选择IDE

| IDE | 适用 | 平台 | 特点 |
|:---|:---:|:---:|:---|
| **Dev-C++** | 初学者 | Windows | 轻量简洁，一键安装 |
| **VS Code** | 进阶 | 全平台 | 功能强大，插件丰富 |

**推荐**：新手从 Dev-C++ 开始，熟悉后再迁移到 VS Code。

---

### 安装 Dev-C++（Windows）

#### 步骤1：下载

1. 访问：[https://sourceforge.net/projects/orwelldevcpp/](https://sourceforge.net/projects/orwelldevcpp/)
2. 点击 **Download**
3. 等待下载完成

#### 步骤2：安装

1. 双击下载的安装包
2. 选择语言：**简体中文**
3. 点击 **我接受** 许可协议
4. 选择安装组件（保持默认即可）
5. 选择安装路径（建议默认）
6. 点击 **安装**，等待完成

#### 步骤3：配置

1. 首次启动选择语言：**简体中文**
2. 选择配色方案（推荐：经典）
3. 点击 **确定**

---

### 安装 VS Code（全平台）

#### 步骤1：下载

1. 访问：[https://code.visualstudio.com/](https://code.visualstudio.com/)
2. 点击 **Download**
3. 自动识别系统，或手动选择

#### 步骤2：安装

**Windows**：
1. 运行安装程序
2. 接受协议，下一步
3. 勾选 **添加到PATH**（重要！）
4. 完成安装

**Mac**：
1. 下载 zip 文件
2. 解压，将 VS Code 拖入应用程序

#### 步骤3：安装C++插件

1. 打开 VS Code
2. 点击左侧扩展图标（四个方块）
3. 搜索 **C/C++**
4. 安装 Microsoft 官方的 C/C++ 插件

#### 步骤4：配置编译器

**Windows（MinGW）**：
1. 下载 MinGW：[https://www.mingw-w64.org/](https://www.mingw-w64.org/)
2. 安装时选择 **x86_64-posix-seh**
3. 添加 bin 目录到系统 PATH
4. 重启 VS Code

**Mac（Xcode）**：
1. 打开终端
2. 运行：`xcode-select --install`
3. 按提示安装

---

## 第二步：写下第一行代码

### 创建Hello World程序

#### 使用 Dev-C++

1. 打开 Dev-C++
2. 点击 **文件** → **新建** → **源代码**
3. 输入以下代码：

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "你好，世界！" << endl;
    return 0;
}
```

4. 点击 **文件** → **保存**，命名为 `hello.cpp`
5. 点击 **运行** → **编译运行**（或按 F11）
6. 看到输出即为成功！

#### 使用 VS Code

1. 打开 VS Code
2. 点击 **文件** → **新建文件**
3. 输入上述代码
4. 按 **Ctrl+S** 保存为 `hello.cpp`
5. 点击右上角 **▶ 运行**（或按 F5）
6. 在终端看到输出即为成功！

---

## 第三步：理解你的程序

### 代码解析

```cpp
#include <iostream>     // 包含输入输出库
using namespace std;      // 使用标准命名空间

int main() {              // 主函数，程序从这里开始
    cout << "Hello, World!" << endl;  // 输出文字
    return 0;             // 程序正常结束
}
```

### 关键概念

| 部分 | 作用 | 记忆技巧 |
|:---|:---|:---|
| `#include` | 引入工具库 | 像"import工具包" |
| `iostream` | 输入输出流 | input + output + stream |
| `main()` | 程序入口 | "主要的"函数 |
| `cout` | 输出 | c-out，像箭头指向外面 |
| `return 0` | 结束程序 | "返回0表示成功" |

---

## 第四步：尝试修改

### 练习1：修改输出内容

```cpp
cout << "你好，默隐·蒙知苑！" << endl;
```

### 练习2：输出多行

```cpp
cout << "第一行" << endl;
cout << "第二行" << endl;
cout << "第三行" << endl;
```

### 练习3：输出图案

```cpp
cout << "  *  " << endl;
cout << " *** " << endl;
cout << "*****" << endl;
```

---

## 第五步：提交作业

### 使用 Hydro OJ

1. 访问 [Hydro OJ](https://hydro.ac)（或学校指定平台）
2. 注册/登录账号
3. 找到对应题目
4. 粘贴你的代码
5. 点击 **提交**
6. 查看评测结果

### 评测结果说明

| 结果 | 含义 | 下一步 |
|:---:|:---|:---|
| 🟢 **Accepted** | 通过！ | 庆祝，下一题 |
| 🔴 **Wrong Answer** | 答案错误 | 检查逻辑 |
| ⏱️ **Time Limit** | 超时 | 优化算法 |
| 💥 **Runtime Error** | 运行错误 | 检查数组越界 |
| ❌ **Compile Error** | 编译错误 | 检查语法 |

详细说明：[常见错误排查手册](/programming/error-troubleshooting.md)

---

## 学习路径概览

```
📍 你现在在这里：Hello World
    ↓
🔤 L1：变量与输入输出
    ↓
🔀 L2：分支与循环
    ↓
📊 L3：数组与字符串
    ↓
🔧 L4：函数与结构体
    ↓
🎯 L5：指针与基础算法
    ↓
🧩 L6：动态规划
    ↓
🌲 L7：数据结构
    ↓
🏆 L8：高级算法与竞赛
```

---

## 下一步

**恭喜你完成第一步！**

继续学习：
1. [L1 变量与输入输出](/programming/cpp/l1.html)
2. [GESP L1能力图谱](/programming/gesp/ability-chart.md)
3. [常见错误排查](/programming/error-troubleshooting.md)

遇到问题？
- 查看 [调试技巧](#)
- 在 [讨论区](https://github.com/MoYinGIT/mengzhiyuan/discussions) 提问

---

**整理者**：明夷  
**日期**：2026-03-27

[← 返回首页](/)

