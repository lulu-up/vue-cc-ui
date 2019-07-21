// 数据节流函数
// id: 唯一标识
// obj: 要执行的函数
// time: 多久之内节流
// model: 哪种模式
// 需要节流的对象
let preventList = {}
const prevent = function(id, obj, time, model = 1) {
  switch (model) {
    case 1:
      model1(id, obj, time)
      break;
    case 2:
      model2(id, obj, time)
      break;
    case 3:
      model3(id, obj, time)
      break;
    default:
  }
}

// 模式1 不管点多少下每隔time秒,触发一次
function model1(id, obj, time) {
  if (preventList['can' + id]) return
  obj()
  preventList['can' + id] = true
  preventList['time' + id] = setTimeout(() => {
    preventList['can' + id] = false
  }, time)
}

// 模式2 每次动作都有time的延时再执行,也就是所有连续点击完事的时候执行一个
function model2(id, obj, time) {
  clearTimeout(preventList['time' + id])
  preventList['time' + id] = setTimeout(() => {
    obj()
  }, time)
}

// 默认的模式, 模式3, 第一下点击触发, 之后时间内不触发
function model3(id, obj, time) {
  if (preventList['can' + id]) {
    clearTimeout(preventList['time' + id])
  } else {
    obj()
    preventList['can' + id] = true
  }
  preventList['time' + id] = setTimeout(() => {
    preventList['can' + id] = false
  }, time)

}

export default prevent
