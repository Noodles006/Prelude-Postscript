# MACOS 上搭建 Flutter 开发环境

## 一、获取 Flutter SDK

```shell
cd PATH_TO_FLUTTER_GIT_DIRECTORY
git clone -b stable https://github.com/flutter/flutter.git
```

> `PATH_TO_FLUTTER_GIT_DIRECTORY` 可以随意指定。如 `~/development`

## 二、配置环境变量

```
export PUB_HOSTED_URL=https://pub.flutter-io.cn // 国内用户需要设置
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn // 国内用户需要设置
export PATH=PATH_TO_FLUTTER_GIT_DIRECTORY/flutter/bin:$PATH
```

## 三、运行 `flutter doctor`

```
flutter doctor
```

该命令检查您的环境并在终端窗口中显示报告。

第一次运行一个flutter命令（如flutter doctor）时，它会下载它自己的依赖项并自行编译。

> 根据终端显示的错误信息，进行对应处理；再次运行 `flutter doctor` 验证。

## 四、配置 IDE

### 安装插件

- 启动 VS Code
- 调用 `View > Command Palette…`
- 输入 `install`, 然后选择 `Extensions: Install Extension action`
- 在搜索框输入 `flutter`, 在搜索结果列表中选择 `Flutter`, 然后点击 `Install`
- 选择 `OK` 重新启动 VS Code。

### 验证配置

- 调用 `View > Command Palette…`
- 输入 `doctor`, 然后选择 `Flutter: Run Flutter Doctor`
- 查看 **OUTPUT** 窗口中的输出是否有问题

## 五、创建 Flutter 应用

- 启动 `VS Code`
- 调用 `View > Command Palette…`
- 输入 `flutter`, 然后选择 `Flutter: New Project`
- 输入 Project 名称 (如 hello_world_flutter), 然后按回车键
- 指定放置项目的位置，然后按蓝色的确定按钮
- 等待项目创建继续，并显示 main.dart 文件

### 连接 iOS 模拟器

- 打开 Simulator
- 检查模拟器 Hardware > Device 菜单中的设置，确保模拟器正在使用64位设备（iPhone 5s或更高版本）
- 选择 **VS Code** `Debug > Start Debugging`
