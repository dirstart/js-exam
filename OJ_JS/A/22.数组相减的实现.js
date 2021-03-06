const all = [123, 23, 93, 78];
const sub = [123, 93];

Array.prototype.show = function (str) {
  console.log(str + this);
};

// 兼容IE8的实现 - 对象map法
function methodOne(all, sub) {
  const o = {};
  const result = [];
  for (var i = 0; i < all.length; i++) {
    o[all[i]] = true;
  }
  for (var i = 0; i < sub.length; i++) {
    delete o[sub[i]];
  }
  for (var i in o) {
    result.push(i);
  }
  return result;
}

// 兼容IE8的实现 - 最蠢的双层for循环
function methodTwo(all, sub) {
  let temp;
  for (let i = all.length - 1; i >= 0; i--) {
    for (let j = sub.length - 1; j >= 0; j--) {
      if (all[i] === sub[j]) {
        all.splice(i, 1);
        sub.splice(j, 1);
        break;
      }
    }
  }
  return all;
}
methodTwo(all, sub).show('two');

// ES6 方法
const methodThree = (all, sub) => {
  const result = [];
  all.forEach((item) => {
    const index = sub.findIndex(innerItem => innerItem === item);
    if (index > -1) {
      delete all[c];
    } else {
      result.push(item);
    }
  });
  return result;
};

methodThree(all, sub).show('three');

// ES6 方法
const methodFour = (all, sub) => all.filter(item => !sub.includes(item));
methodFour(all, sub).show('four');
