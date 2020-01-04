//ELEMENT RENDERING 
let scene, camera, renderer;

function init(){
    scene = new THREE.Scene;
    camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000)

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', renderer);
    controls.minDistance = 500;
    controls.maxDistance = 1500;

    let materialArray = [];
    let texture_bk = new THREE.TextureLoader().load('./images/arid_bk.jpg');
    let texture_dn = new THREE.TextureLoader().load('./images/arid_dn.jpg');
    let texture_ft = new THREE.TextureLoader().load('./images/arid_ft.jpg');
    let texture_lf = new THREE.TextureLoader().load('./images/arid_lf.jpg');
    let texture_rt = new THREE.TextureLoader().load('./images/arid_rt.jpg');
    let texture_up = new THREE.TextureLoader().load('./images/arid_up.jpg');

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));

    for(let i = 0; i < 6; i++){
        materialArray[i].side = THREE.BackSide;
    }

    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);

    animate();
}

function animate(){
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

//Main Call Control
init();
