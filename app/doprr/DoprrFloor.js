/**
 * Created by beeuser on 05/08/2016.
 */

Logger();
Utils();
(function () {
  var floorContainer = document.getElementById("moveFloor");
  var divLines = [];
  Utils.addResizeListen(floorContainer)
  function addListeners() {
    floorContainer.addEventListener("mousemove", mouseMoveListener, false);
    floorContainer.addEventListener("load", resizeFloor, false);
    floorContainer.addEventListener("resize", resizeFloor, false);
  }

  function mouseMoveListener(evt) {
    updateLines(evt.clientX)
  }

  function resizeFloor() {
    Logger.log("DoprrFlor.resizeFloor()")
    floorContainer.style.height = (Utils.getActualHeight() * 0.5) + "px";
    updateLines(Utils.getActualWidth())
  }

  function init() {
    createLines()
    addListeners()
  }

  function createLines() {
    floorContainer.innerHTML = "";
    for (var line = 0; line < 2000; line++) {
      var new_div = document.createElement("div");
      new_div.setAttribute('id', line)
      setStyleLine(new_div, line);
      divLines.push(new_div)
      floorContainer.appendChild(new_div)
      new_div.addEventListener("mouseover", updateSingleLine)
    }
  }

  function updateLines(sceneWidth) {
    var start = (sceneWidth > 0) ? (0) : (-3);
    for (var line = start; line < sceneWidth + 3; line++) {
      // updateSingleLine(line, sceneWidth)
    }
  }

  function updateSingleLine(evt) {
    var d = evt.target
    TweenMax.to(d, 2, {height: getRandomHeight(), onComplete: lineAnimationEnd, onCompleteParams: [d]});
    /*  if (line < sceneWidth  ) {

     TweenMax.to(divLines[line], 2, {height:getRandomHeight(),onComplete:lineAnimationEnd,onCompleteParams :[divLines[line]]});
     } else {
     TweenMax.to(divLines[line], 2, {height:"5px",onComplete:lineAnimationEnd,onCompleteParams :[divLines[line]]});
     }*/
  }

  function lineAnimationEnd(line) {
    TweenMax.to(line, 5, {height: getRandomHeight()});
  }

  function setStyleLine(lineDivElement, left) {
    // lineDivElement.style.display = "block"
    // lineDivElement.style.width = "1px"
    lineDivElement.style.height = getRandomHeight()
    //  lineDivElement.style.overflow = "hidden"
    lineDivElement.style.left = (left) + "px"
    // lineDivElement.style.backgroundColor = "#c1c1c1"
    ///lineDivElement.style.position = "absolute"
    //.style.bottom = 0
  }

  function getRandomHeight() {
    return ((Math.random() * Utils.getActualHeight()) + 10) + "px"
  }

  init()
})()
