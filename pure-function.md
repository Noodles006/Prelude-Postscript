# Pure Function

纯函数是满足如下条件的函数:

* 相同输入总是会返回相同的输出
* 不产生副作用
* 不依赖于外部状态

### 共享状态的麻烦

```
非确定性 = 并行处理 + 可变状态
```
* 如果输出取决于不可控制的事件顺序（比如网络、设备延迟、用户输入、随机性等），那么竞态条件就会发生。

### 给出相同输入，总是返回相同的输出
* Math.random()是非纯函数
* 多个输入值映射到相同的输出值，也是纯函数。例如：
```
const highpass = (cutoff, value) => value >= cutoff;
```

### 纯函数不产生副作用
* 不可变性 - 如果一个函数修改一个对象参数或者数组参数上的属性，那么它就会修改在函数外部可以访问的状态。纯函数不能修改外部状态。

考虑如下 addToCart() 函数，该函数是一个非纯函数，会修改状态：
```
// 非纯的 addToCart 修改已有的购物车
const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity
  });
  return cart;
};
 
test('addToCart()', assert => {
  const msg = 'addToCart() should add a new item to the cart.';
  const originalCart =     {
    items: []
  };
  const cart = addToCart(
    originalCart,
    {
      name: "Digital SLR Camera",
      price: '1495'
    },
    1
  );
 
  const expected = 1; // num items in cart
  const actual = cart.items.length;
 
  assert.equal(actual, expected, msg);
 
  assert.deepEqual(originalCart, cart, 'mutates original cart.');
  assert.end();
});
```

现在考虑如下版本：
```
// 纯函数 addToCart() 返回一个新购物车，不会修改原始购物车
const addToCart = (cart, item, quantity) => {
  const newCart = lodash.cloneDeep(cart);
 
  newCart.items.push({
    item,
    quantity
  });
  return newCart;
};
 
 
test('addToCart()', assert => {
  const msg = 'addToCart() should add a new item to the cart.';
  const originalCart = {
    items: []
  };
 
  // deep-freeze on npm
  // throws an error if original is mutated
  deepFreeze(originalCart);
 
  const cart = addToCart(
    originalCart,
    {
      name: "Digital SLR Camera",
      price: '1495'
    },
    1
  );
 
 
  const expected = 1; // num items in cart
  const actual = cart.items.length;
 
  assert.equal(actual, expected, msg);
 
  assert.notDeepEqual(originalCart, cart,
    'should not mutate original cart.');
  assert.end();
});
```
