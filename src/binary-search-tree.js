const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;

  }

}

class BinarySearchTree {

  constructor() {
    this.rootN = null;
  }

  root() {
    return this.rootN
  }

  add(data) {

    this.rootN = addIn(this.rootN, data);

    function addIn(node, data) {

      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addIn(node.left, data);
      } else {
        node.right = addIn(node.right, data);
      }

      return node;

    }

  }

  has(data) {

    return searchIn(this.rootN, data);

    function searchIn(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchIn(node.left, data);
      } else {
        return searchIn(node.right, data);
      }

    }

  }

  find(data) {
    return findNode(this.rootN, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return findNode(node.left, data);
      }

      return findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootN = removeNode(this.rootN, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minR = node.right;

        while (minR.left) {
          minR = minR.left;
        }

        node.data = minR.data;

        node.right = removeNode(node.right, minR.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootN) {
      return;
    }
    let node = this.rootN;
    while (node.left) {
      node = node.left;
    }
    return node.data
  }

  max() {
    if (!this.rootN) {
      return;
    }

    let node = this.rootN;
    while (node.right) {
      node = node.right;
    }

    return node.data;

  }
}

module.exports = {
  BinarySearchTree
};
