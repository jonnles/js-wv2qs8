// Import stylesheets
import './style.css';

// Write Javascript code!
import * as THREE from 'three';
let camera, scene, renderer;
const originalBoxSize = 3;

function init(){
 const scene = new THREE.Scene();

 addLayer(0,0, originalBoxSize, )




 const geometry = new THREE.BoxGeometry(3, 1, 3);
 const material = new THREE.MeshLambertMaterial({color: 0xfb8e00});
 const mesh = new THREE.Mesh(geometry, material);
 mesh.position.set(0,0,0);
 scene.add(mesh);

 const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
 scene.add(ambientLight)

 const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
 directionalLight.position.set(10,20,0);
 scene.add(directionalLight);

 const width = 10;
 const height = width = (window.innerHeight / window.innerWidth);
 const camera = new THREE.OrthographicCamera(
   width / -2,
   width / 2,
   height / 2,
   height / -2,
   1,
   100
  );

 camera.position.set(4, 4, 4);
 camera.lookAt(0,0,0);

 const renderer = new THREE.webGLRenderer({antialias: true});
 renderer.setSize(window.innerWidth, window.innerHeight);
 renderer.render(scene, camera);

 document.body.appendChild(renderer.domElement);



}