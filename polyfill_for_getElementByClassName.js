function findByClassName(root, className) {
    const search = (node) => {
      let result = [];
      if(node.classList.contains(className)) {
        result.push(node.id);
      }
      
      for(let child of node.children) {
        result = [...result, search(child)]; // or use result.concat(search(node));
      }
      return result;
    }
      
    return search(root);
  }
  
  const root = document.getElementById('root');
  
  const result = findByClassName(root, 'a')
  console.log(result);

//   DOM
{/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js"></script>
</head>
<body>
    <div class='a' id="root">
        <div class='b' id='b-1'>
          <div class='a' id='a-2'>
            <div class='d' id='d-1'></div>
          </div>
          <div class='c' id='c-1'>
            <div class='a' id='a-3'>
              <div class='d' id='d-2'></div>
            </div>
          </div>
        </div>
      </div>
</body>
</html> */}