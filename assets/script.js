window.onload = () => {
    console.log('The page has fully loaded');
    const Graph = ForceGraph3D()
(document.getElementById('3d-graph'))
  .jsonUrl('mis.json')
  .nodeLabel('id')
  .nodeAutoColorBy('group');
};
