
# n-start4 总结


## node相关
- route delete

```
route.delete('/del/:id', function(req, res, next){
   // 读取id值
   var delId = req.params.id;
})
```