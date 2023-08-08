import * as THREE from 'three';


window.addEventListener('DOMContentLoaded', (event) => {
  console.log(THREE);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  renderer.domElement.id = 'threejs-canvas';
  renderer.domElement.classList.add('absolute', 'top-0', 'right-0', 'z-20'); // set 3d obj position
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
});