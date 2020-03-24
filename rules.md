# 表面层次的改进

## 把信息装到名字里

### 选择专业的词

#### Case 1

**Purpose:** *从网上获取一个页面*

**Bad**

```javascript
function getPage(url) {}
```

**Good**

```javascript
function fetchPage(url) {}
```

#### Case 2

**Purpose:** *暂停线程*

**Bad**

```javascript
class Thread {
    stop () {}
}
```

**Good**

```javascript
class Thread {
    pause () {}

    resume () {}
}
```
