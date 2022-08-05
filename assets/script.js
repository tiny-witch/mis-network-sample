import { UnrealBloomPass } from '//cdn.skypack.dev/three@0.136/examples/jsm/postprocessing/UnrealBloomPass.js';
// import { GUI }  from "https://cdn.skypack.dev/dat.gui";

// const gui = new GUI()
// const myFolder = gui.addFolder('links')


window.onload = () => {
    console.log('The page has fully loaded');

    // graph:
    const Graph = ForceGraph3D()
(document.getElementById('3d-graph'))
  .jsonUrl('mis.json')
  .nodeLabel('id')
  .nodeAutoColorBy('group')
  .linkWidth(1)
  .onNodeClick(node => {
    // Aim at node from outside it
    const distance = 100;

    // math:
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

    const newPos = node.x || node.y || node.z
      ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
      : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)
// set camera position:
    Graph.cameraPosition(
      newPos, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
  });


  const bloomPass = new UnrealBloomPass();
  bloomPass.strength = 2;
  bloomPass.radius = 1;
  bloomPass.threshold = 0.1;



  Graph.postProcessingComposer().addPass(bloomPass);

  elementResizeDetectorMaker().listenTo(
    document.getElementById('3d-graph'),
    el => Graph.width(el.offsetWidth)
  );

};
