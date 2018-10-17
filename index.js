var camera, light, scene, renderer, rectangle, scene2, renderer2, div, controls;
        var scene2, renderer2;




        init();
        animate();


        function init() {
            //camera
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.set(0, 0, -1000);

            controls
            controls = new THREE.OrbitControls(camera);
            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 1.2;
            controls.panSpeed = 0.8;

            //Scene
            scene = new THREE.Scene();

            //CubeGeometry
            rectangle = new THREE.Mesh(new THREE.CubeGeometry(600, 350, 100), new THREE.MeshPhongMaterial());
            scene.add(rectangle);

            //TorusGeometry
            var torus = new THREE.Mesh(new THREE.TorusGeometry(60, 30, 20, 20),
                                       new THREE.MeshNormalMaterial());
            torus.position.set(10, 0, -200);
            scene.add(torus);

            //HemisphereLight
            hemiLight = new THREE.HemisphereLight(0xffbf67, 0x15c6ff);
            scene.add(hemiLight);

            //WebGL Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setClearColor(0xffffff, 1)
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.domElement.style.zIndex = 5;
            document.body.appendChild(renderer.domElement);

            //CSS3D Scene
            scene2 = new THREE.Scene();

            //HTML
            element = document.createElement('div');
            element.innerHTML = '<h1>HELLO</h1>';
            element.className = 'animated bounceInDown' ; 
            element.style.background = "#0094ff";
            element.style.fontSize = "2em";
            element.style.color = "white";
            element.style.padding = "2em";

            //CSS Object
            div = new THREE.CSS3DObject(element);
            div.position.x = 8;
            div.position.y = 9;
            div.position.z = 185;
            scene2.add(div);

            //CSS3D Renderer
            renderer2 = new THREE.CSS3DRenderer();
            //renderer2.setSize(window.innerWidth, window.innerHeight);
            renderer2.domElement.style.position = 'absolute';
            renderer2.domElement.style.top = 0;
            //document.body.appendChild(renderer2.domElement);
        }

        function animate() {
            requestAnimationFrame(animate);
            renderer2.render(scene2, camera);
            renderer.render(scene, camera);
            controls.update();
        }

