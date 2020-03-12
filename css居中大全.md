# CSS 居中大全

## 水平居中

### 内联元素、块级内联元素 (inline、inline-*)

- 设置父元素为块级元素 (block)
- 设置父元素 text-align: center

```html
<div class="parent">
  Hello World!
</div>

<div class="parent">
  <a href="/home">Home</a>
  <a href="/abort">Abort</a>
</div>
```

```css
.parent {
  text-align: center;
}
```

### 单个块级元素

- 设置固定宽度
- 设置水平 margin 为 auto
 
```html
<div class="container">
  Hello World!
</div>
```

```css
.container {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}
```

### 多个块级元素

```html
<div class="parent">
  <div class="child">Item 1</div>
  <div class="child">Item 2</div>
  <div class="child">Item 3</div>
</div>
```

#### 单行排列

##### 改变子元素 display

```css
.child {
  display: inline-block;
}

.parent {
  text-align: center;
}
```

##### flex

```css
.parent {
  display: flex;
  justify-content: center;
}
```

#### 多行排列

- 子元素定宽
- 子元素水平 margin 为 auto

```css
.child {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
```

## 垂直居中

