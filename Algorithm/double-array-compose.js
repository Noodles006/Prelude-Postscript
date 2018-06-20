function compose(list) {
  var flavors = list.reduce(function (prevList, item) {
    var flavorList = [];

    item.forEach(function (key) {
      prevList.forEach(function (prefix) {
        var flavor = prefix ? prefix + ', ' + key : key;

        flavorList.push(flavor);
      });
    });

    return flavorList;
  }, ['']);

  console.log(flavors.length);
  flavors.forEach(function (flavor) {
    console.log(flavor);
  });
}

var list = [['热', '温', '冰'], ['重辣', '中辣', '微辣'], ['大', '中', '小']];

compose(list);
