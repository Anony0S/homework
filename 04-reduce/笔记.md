# reduce  
## 语法：
```JavaScript
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```
## 参数：
- `accumulator` —— 是上一个函数调用的结果，第一次等于 `initial`（如果提供了 `initial` 的话）。   
- `item` —— 当前的数组元素。  
- `index` —— 当前索引。
- `arr` —— 数组本身。

## 注意：
如果没有初始值，那么 `reduce` 会将数组的第一个元素作为初始值，并从第二个元素开始迭代。  
但是这种使用需要非常小心。如果数组为空，那么在没有初始值的情况下调用 `reduce` 会导致错误。

## 其他  
相同的还有 `arr.reduceRight` ,只是遍历为从右到左。



