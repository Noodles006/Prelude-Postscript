# Sticky Footer, Four Ways

A brief history, if you will.
The purpose of a sticky footer is that it "sticks" to the bottom of the browser window. But not always, if there is enough content on the page to push the footer lower, it still does that. But if the content on the page is short, a sticky footer will hang to the bottom of the browser window.

![sticky-footer](http://cdn.css-tricks.com/wp-content/uploads/2016/05/sticky-footer-1.svg)

----------

### There is negative bottom margins on wrappers

There was a wrapping element that held everything except the footer. It had a negative margin equal to the height of the footer. That was the basis of this one.

```HTML
<body>
  <div class="wrapper">

      content

    <div class="push"></div>
  </div>
  <footer class="footer"></footer>
</body>
```

```CSS
html, body {
  height: 100%;
  margin: 0;
}
.wrapper {
  min-height: 100%;

  /* Equal to height of footer */
  /* But also accounting for potential margin-bottom of last child */
  margin-bottom: -50px;
}
.footer,
.push {
  height: 50px;
}
```

This one required an extra element inside the content area (the ".push"), to ensure that the negative margin didn't pull the footer up and cover any content. The push was also clever because it very likely didn't have any bottom margin of it's own. If it did, that would have to be factored into the negative margins, and having those two numbers not in sync doesn't look quite as nice.

-----------

### There is negative top margins on footers

This technique did not require a push element, but instead, required an extra wrapping element around the content in which to apply matching bottom padding to. Again to prevent negative margin from lifting the footer above any content.

```HTML
<body>
  <div class="content">
    <div class="content-inside">
      content
    </div>
  </div>
  <footer class="footer"></footer>
</body>
```

```CSS
html, body {
  height: 100%;
  margin: 0;
}
.content {
  min-height: 100%;
}
.content-inside {
  padding: 20px;
  padding-bottom: 50px;
}
.footer {
  height: 50px;
  margin-top: -50px;
}
```

Kind of a wash between this technique and the previous one, as they both require extra otherwise unnescessary HTML elements.

--------

### There is calc() reduced height wrappers

One way to not need any extra element is to adjust the wrappers height with calc(). Then there is not any overlapping going on, just two elements stacked on top of each other totaling 100% height.

```HTML
<body>
  <div class="content">
    content
  </div>
  <footer class="footer"></footer>
</body>
```

```CSS
.content {
  min-height: calc(100vh - 70px);
}
.footer {
  height: 50px;
}
```

Notice the 70px in the calc() vs. the 50px fixed height of the footer. That's making an assumption. An assumption that the last item in content has a bottom margin of 20px. It's that bottom margin plus the height of the footer that need to be added together to subtract from the viewport height. And yeah, we are using viewport units here as another little trick to avoid having to set 100% body height before you can set 100% wrapper height.

---------

### There is flexbox

The big problem with the above three techniques is that they required fixed height footers. Fixed heights are generally a bummer in web design. Content can change. Things are flexible. Fixed heights are usually red flag territory. Using flexbox for a sticky footer not only doesn't require any extra elements, but allows for a variable height footer.

```HTML
<body>
  <div class="content">
    content
  </div>
  <footer class="footer"></footer>
</body>
```

```CSS
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
}
```

You could even add a header above that or more stuff below. The trick with flexbox is either:
 - ```flex: 1``` on the child you want to grow to fill the space (the content, in our case).
 - or, ```margin-top: auto``` to push the child away as far as it will go from the neighbor (or whichever direction margin is needed).
![]({{site.baseurl}}//2.gif)