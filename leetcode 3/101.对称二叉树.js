var isSymmetric = function(root) {
  if(!root) return true
  const isMirror = (l, r) => {
      if(!l && !r) return true; // 两个空子树为镜像
      if(
          l && r && l.val === r.val &&
          isMirror(l.left, r.right) && 
          isMirror(l.right, r.left)
      ) {
          return true;
      }
      return false;
  }
  return isMirror(root.left, root.right)
};