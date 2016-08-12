//if (!Detector.webgl) Detector.addGetWebGLMessage();
//var container;
//var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, size;
//var mouseX = 0, mouseY = 0;
//var windowHalfX = window.innerWidth / 2;
//var windowHalfY = window.innerHeight / 2;
//var containerW
//var containerH
//function init() {
//  var bitmap = new Image();
//  bitmap.src = 'css/bkg1.jpg'; // Pre-load the bitmap, in conjunction with the Start button, to avoid any potential THREE.ImageUtils.loadTexture async issues.
//  bitmap.onerror = function () {
//    console.error("Error loading: " + bitmap.src);
//  }
//  container = document.getElementById('dynamicBackground');
//  containerW = container.clientWidth
//  containerH = container.clientHeight
//  // document.body.appendChild(container);
//  camera = new THREE.PerspectiveCamera(75, containerW / containerH, 1, 3000);
//  camera.position.z = 1000;
//  scene = new THREE.Scene();
//  var pointLight = new THREE.PointLight(0xFFFFFF); // Set the color of the light source (white).
//  pointLight.position.set(350, 100, 2050); // Position the light source at (x, y, z).
//  scene.add(pointLight);
//  //scene.fog = new THREE.FogExp2( 0x000000, 0.0007 );
//  var geometry = new THREE.SphereGeometry(300, 20, 20);
//  var texture = THREE.ImageUtils.loadTexture(bitmap.src); // Create texture object based on the given bitmap path.
//  var material = new THREE.MeshPhongMaterial({map: texture});
//  var sphere = new THREE.Mesh(geometry, material)
//
//  scene.add(sphere)
//  renderer = new THREE.WebGLRenderer({alpha: true});
//  renderer.setPixelRatio(window.devicePixelRatio);
//  renderer.setSize(containerW, containerH);
//  renderer.setClearColor(0x000000, 0);
//  container.appendChild(renderer.domElement);
//
//  document.addEventListener('mousemove', onDocumentMouseMove, false);
//  document.addEventListener('touchstart', onDocumentTouchStart, false);
//  document.addEventListener('touchmove', onDocumentTouchMove, false);
//  //
//  window.addEventListener('resize', onWindowResize, false);
//}
//function onWindowResize() {
//  containerW = container.clientWidth
//  containerH = container.clientHeight
//  windowHalfX = window.innerWidth / 2;
//  windowHalfY = window.innerHeight / 2;
//  camera.aspect = containerW / containerH
//  camera.updateProjectionMatrix();
//  renderer.setSize(containerW, containerH);
//}
//function onDocumentMouseMove(event) {
//  mouseX = event.clientX - windowHalfX;
//  mouseY = event.clientY - windowHalfY;
//}
//function onDocumentTouchStart(event) {
//  if (event.touches.length === 1) {
//    event.preventDefault();
//    mouseX = event.touches[0].pageX - windowHalfX;
//    mouseY = event.touches[0].pageY - windowHalfY;
//  }
//}
//function onDocumentTouchMove(event) {
//  if (event.touches.length === 1) {
//    event.preventDefault();
//    mouseX = event.touches[0].pageX - windowHalfX;
//    mouseY = event.touches[0].pageY - windowHalfY;
//  }
//}
////
//function animate() {
//  requestAnimationFrame(animate);
//  render();
//}
//function render() {
//  camera.position.x += ( mouseX - camera.position.x ) * 0.05;
//  camera.position.y += ( -mouseY - camera.position.y ) * 0.05;
//  var time = Date.now() * 0.00005;
//  for (i = 0; i < scene.children.length; i++) {
//    var object = scene.children[i];
//    object.rotation.z = time * ( i < 4 ? i + 1 : -( i + 1 ) );
//  }
//  camera.lookAt(scene.position);
//  renderer.render(scene, camera);
//}
//var Doprr3D = function () {
//  return {
//    init: init,
//    animate: animate
//  }
//}