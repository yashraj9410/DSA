// Define the Node class to represent each node in the tree
class Node {
  constructor(data) {
    this.data = data; // Data contained within the node
    this.left = null; // Left child node
    this.right = null; // Right child node
  }
}

// Define the Tree class to represent the entire tree structure
class Tree {
  constructor() {
    this.root = null; // Initialize the root node
  }

  // Method to perform pre-order traversal
  preOrderTraversal(node) {
    if (node !== null) {
      console.log(node.data); // Process the current node ->  root 
      this.preOrderTraversal(node.left); // Recursively traverse left subtree -> left 
      this.preOrderTraversal(node.right); // Recursively traverse right subtree -> right
    }
  }

  // Method to perform in-order traversal
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left); // Recursively traverse left subtree -> left
      console.log(node.data); // Process the current node -> root
      this.inOrderTraversal(node.right); // Recursively traverse right subtree -> right
    }
  }

  // Method to perform post-order traversal
  postOrderTraversal(node) {
    if (node !== null) {
      this.postOrderTraversal(node.left); // Recursively traverse left subtree -> left
      this.postOrderTraversal(node.right); // Recursively traverse right subtree -> right
      console.log(node.data); // Process the current node -> root
    }
  }
}

// Example usage:
const tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log('Pre-order traversal:');
tree.preOrderTraversal(tree.root);

console.log('\nIn-order traversal:');
tree.inOrderTraversal(tree.root);

console.log('\nPost-order traversal:');
tree.postOrderTraversal(tree.root);
