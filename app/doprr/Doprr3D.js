if (!Detector.webgl) Detector.addGetWebGLMessage();
var container;
var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, size;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var containerW
var containerH
function init() {
  container = document.getElementById('dynamicBackground');
  containerW = container.clientWidth
  containerH = container.clientHeight
 // document.body.appendChild(container);
  camera = new THREE.PerspectiveCamera(75, containerW / containerH, 1, 3000);
  camera.position.z = 1000;
  scene = new THREE.Scene();
  //scene.fog = new THREE.FogExp2( 0x000000, 0.0007 );
  geometry = new THREE.Geometry();
  for (i = 0; i < 2000; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.random() * 2000 - 1000;
    vertex.y = Math.random() * 2000 - 1000;
    vertex.z = Math.random() * 2000 - 1000;
    geometry.vertices.push(vertex);
  }
  parameters = [
    [[0xf9f9f9], 5],
    [[0xf7f7f7], 4],
    [[0xf8f8f8], 3],
    [[0xf6f6f6], 2],
    [[0xf5f5f5], 1]
  ];
  for (i = 0; i < parameters.length; i++) {
    color = parameters[1][0];
    size = parameters[i][1];
    materials[i] = new THREE.PointsMaterial({size: size});
    particles = new THREE.Points(geometry, materials[i]);
    particles.rotation.x = Math.random() * 6;
    particles.rotation.y = Math.random() * 6;
    particles.rotation.z = Math.random() * 6;
    scene.add(particles);
  }
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(containerW, containerH);
  renderer.setClearColor(0xeeeeee, 1);
  container.appendChild(renderer.domElement);
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false);
  //
  window.addEventListener('resize', onWindowResize, false);
}
function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = containerW / containerH
  camera.updateProjectionMatrix();
  renderer.setSize(containerW, containerH);
}
function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}
function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}
function onDocumentTouchMove(event) {
  if (event.touches.length === 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}
//
function animate() {
  requestAnimationFrame(animate);
  render();
}
function render() {
  console.log('render')
  var time = Date.now() * 0.00005;
  camera.position.x += ( mouseX - camera.position.x ) * 0.05;
  camera.position.y += ( -mouseY - camera.position.y ) * 0.05;
  camera.lookAt(scene.position);
  for (i = 0; i < scene.children.length; i++) {
    var object = scene.children[i];
    if (object instanceof THREE.Points) {
      object.rotation.z = time * ( i < 4 ? i + 1 : -( i + 1 ) );
    }
  }
  for (i = 0; i < materials.length; i++) {
    color = parameters[i][0];
    materials[i].color.setHex(color);
  }
  renderer.render(scene, camera);
}
var DoprrThree = function () {
  return {
    init: init,
    animate: animate
  }
}