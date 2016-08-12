if (!Detector.webgl) Detector.addGetWebGLMessage();
var container;
var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, size,
  info,
  light,
  mesh,
  projector,
  controls;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var containerW
var containerH
var objects = [];
var stats
function helper(_scene, _container) {
  // SCENE
  // STATS
  stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.bottom = '0px';
  stats.domElement.style.zIndex = 100;
  _container.appendChild(stats.domElement);
  // LIGHT
  ////////////
  // CUSTOM //
  ////////////
  var axes = new THREE.AxisHelper(50);
  axes.position = mesh.position;
  _scene.add(axes);
  var gridXZ = new THREE.GridHelper(155, 15, 0x666600, 0x006600);
  gridXZ.position.set(155, 0, 155);
  _scene.add(gridXZ);
  var gridXY = new THREE.GridHelper(155, 15, 0x000066, 0x660066);
  gridXY.position.set(155, 155, 0);
  gridXY.rotation.x = Math.PI / 2;
  _scene.add(gridXY);
  var gridYZ = new THREE.GridHelper(155, 15, 0x660000, 0x666600)
  gridYZ.position.set(0, 155, 155);
  gridYZ.rotation.z = Math.PI / 2;
  _scene.add(gridYZ);
  var axes = new THREE.AxisHelper(400);
  axes.position = mesh.position;
  scene.add(axes);
// direction (normalized), origin, length, color(hex)
  /* var origin = new THREE.Vector3(50, 100, 50);
   var terminus = new THREE.Vector3(75, 75, 75);
   var direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
   var arrow = new THREE.ArrowHelper(direction, origin, 50, 0x884400);
   _scene.add(arrow);*/
}
function init(callbackfor3d) {
// Picking with Callback
// dom
  container = document.getElementById('dynamicBackground');
  containerW = container.clientWidth
  containerH = container.clientHeight
  // document.body.appendChild(container);
// info
  info = document.createElement('div');
  info.style.position = 'absolute';
  info.style.top = '10px';
  info.style.width = '100%';
  info.style.textAlign = 'center';
  info.innerHTML = "drag to rotate camera; click to select";
  container.appendChild(info);
// renderer
  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(containerW, containerH);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

// scene
  scene = new THREE.Scene();
  // helper(scene, container)
// camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1550);
  camera.position.set(0, 155, 500);
  scene.add(camera);
// controls
  controls = new THREE.OrbitControls(camera);
  controls.addEventListener('change', render);
// light
  scene.add(new THREE.AmbientLight(0x222222));
// light
  light = new THREE.PointLight(0xaaaaaa);
  camera.add(light);
// geometry
  geometry = new THREE.BoxGeometry(100, 100, 100);
// material
  material = new THREE.MeshLambertMaterial({color: 0xff0000, ambient: 0xff0000, overdraw: true});
// mesh
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(-100, 0, 0);
  mesh.name = "Red Object";
  mesh.callback =callbackfor3d
  scene.add(mesh);
  objects.push(mesh);
// geometry
  var geometry = new THREE.BoxGeometry(100, 100, 100);
// material
  material = new THREE.MeshLambertMaterial({color: 0x00ff00, ambient: 0x00ff00, overdraw: true});
// mesh
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(100, 0, 0);
  mesh.name = "Green Object";
  mesh.callback = callbackfor3d
  scene.add(mesh);
  objects.push(mesh);
// projector
  projector = new THREE.Projector();
// listeners
  container.addEventListener('mousedown', onDocumentMouseDown, false)
  window.addEventListener('resize', onWindowResize, false);
  helper(scene, container)
}
mouseVector = new THREE.Vector3();
// keyboard handler
function onDocumentMouseDown(e) {

  mouseVector.x = 2 * (e.layerX / containerW) - 1;
  mouseVector.y = 1 - 2 * ( e.layerY / containerH );
  var raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouseVector.clone(), camera);
  intersects = raycaster.intersectObjects(objects);
  for (var i = 0; i < intersects.length; i++) {
    var intersection = intersects[i],
      obj = intersection.object;
      obj.callback(obj)
  }
}
function onWindowResize() {
  containerW = container.clientWidth
  containerH = container.clientHeight
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = containerW / containerH
  camera.updateProjectionMatrix();
  renderer.setSize(containerW, containerH);
}
function animate() {
  requestAnimationFrame(animate);
  render();
}
// render
function render() {
  stats.begin();
  renderer.render(scene, camera);
  stats.end()
}
var DoprrThree = function () {
  return {
    init: init,
    animate: animate
  }
}