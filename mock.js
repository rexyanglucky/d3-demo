const data = {
  nodes: [
  ],
  links: [
  ]
}
function mockData(l, pre) {
  for (let k = 0; k < l; k++) {
    data.nodes.push({ name: '知识点' + pre })
    // data.nodes=[{ name: '知识点' + pre }]
  }
  for (let k = 0; k < l - 1; k++) {
    data.links.push({ source: k, target: k + 1 })
    // data.links=[{ source: k, target: k + 1 }]
  }
}
mockData(300, 'p');