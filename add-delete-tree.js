// recursive solution to add and delete a node in a obj tree
// used in folder structure/ comments problem

const root = [
  {
    id: 2,
    isFolder: true,
    name: "src",
    children: [
      {
        id: 3,
        isFolder: false,
        children: [],
        name: "index.html",
      },
      {
        id: 4,
        isFolder: false,
        children: [],
        name: "app.js",
      },
    ],
  },
  {
    id: 5,
    isFolder: true,
    name: "public",
    children: [
      {
        id: 6,
        isFolder: false,
        children: [],
        name: "favicon.png",
      },
    ],
  },
];

console.log(root);

const addToList = (root, parentId, name, isFolder = false) => {
  return root.map((node) => {
    if (node.id === parentId) {
      return {
        ...node,
        children: [
          ...addToList(node.children, parentId, name, isFolder),
          {
            id: Date.now(),
            name,
            isFolder,
            children: [],
          },
        ],
      };
    }
    if (node.children.length) {
      return {
        ...node,
        children: addToList(node.children, parentId, name, isFolder),
      };
    }

    return node;
  });
};

console.log("addedToList:", addToList(root, 3, "newFolder", true));

const deleteNodeFromList = (list, id) => {
  return list
    .filter((node) => {
      return node.id !== id;
    })
    .map((node) => {
      if (node.children.length) {
        return { ...node, children: deleteNodeFromList(node.children, id) };
      } else { 
        return node;
      }
    });
};

console.log("deletedFromNode:", deleteNodeFromList(root, 4));
