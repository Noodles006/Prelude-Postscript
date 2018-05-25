# CSS图片自适应正方形

```html
<div class="contaienr">
  <div class="wrapper">
    <div class="box">
    </div>
  </div>
  <div class="wrapper">
    <div class="box">
    </div>
  </div>
  <div class="wrapper">
    <div class="box">
    </div>
  </div>
</div>

```

```css
.wrapper {
  float: left;
  width: 30%;
  padding-left: 15px;
  padding-right: 15px;
}

.box {
  background-image: url('*.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.box:after {
  content: '';
  padding-top: 100%;
  display: block;
}
```

