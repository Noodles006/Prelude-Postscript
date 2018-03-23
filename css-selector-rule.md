 ## 选择器特殊性

选择器的特殊性由选择器本身的组件确定。特殊性值表述为4个部分，如0.0.0.0。一个选择器的具体特殊性如下确定:

* 对于选择器中给定的各个ID属性值，加0.1.0.0
* 对于选择器中给定的各个类属性值、属性选择或伪类，加0.0.1.0
* 对于选择器中给定的各个元素和伪元素，加0.0.0.1
* 结合符和通配选择器对特殊性没有任何贡献

> 例子:

```css
h1 {color: red;}  /* specificity = 0.0.0.1 */

p em {color: purple;} /* specificity = 0.0.0.2 */

.grape {color: purple;} /* specificity = 0.0.1.0 */

*.bright {color: yellow;} /* specificity = 0.0.1.0 */

p.bright em.dark {color: maroon;} /* specificity = 0.0.2.2 */

#id216 {color: blue;} /* specificity = 0.1.0.0 */

div#sidebar [href] {color: silver;} / specificity = 0.1.1.1 */
```
