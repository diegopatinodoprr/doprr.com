/**
 * Created by beeuser on 05/08/2016.
 */


//var socket = io.connect("http://10.11.1.28:3000");
var Logger = function () {
}
Logger.clear = function () {
 // socket.emit('clear')
}
Logger.log = function (str) {
 // socket.emit('logger', str);
}
var Utils = function () {
  Utils.resizer = []
}
Utils.getActualWidth = function () {
  var actual = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    document.body.offsetWidth;
  Logger.log("Doprr.utils.getActualWidth : "+actual)
  return actual;
}
Utils.getActualHeight = function () {
  var actual = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    document.body.offsetHeight;
 // Logger.log("Doprr.utils.getActualHeight : "+actual)
  return actual
}
Utils.addResizeListen = function (elementHtml) {
  Logger.log("Doprr.utils.addResizeListen : "+elementHtml.id)
  Utils.resizer.push(elementHtml)
}
Utils.updateResizeListeners = function (elementHtml) {
  Logger.log("Doprr.utils.updateResizeListeners Start")
  Utils.resizer.forEach(function (ele) {
    Logger.log('element dispatchEvent resize  : ' + ele.id)
    var evt = new Event("resize")
    evt.type = "resize"
    ele.dispatchEvent(evt)
  })
  Logger.log("Doprr.utils.updateResizeListeners End")
}

Utils.updateLoadListeners = function (elementHtml) {
  Logger.log("Doprr.utils.updateLoadListeners Start")
  Utils.resizer.forEach(function (ele) {
    Logger.log('element dispatchEvent resize  : ' + ele.id)
    var evt = new Event("resize")
    evt.type = "load"
    ele.dispatchEvent(evt)
  })
  Logger.log("Doprr.utils.updateLoadListeners End")
}