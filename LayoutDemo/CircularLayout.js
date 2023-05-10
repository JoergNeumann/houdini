registerLayout('circular', class {

  static get inputProperties() {
      return [ '--diameter' ];
  }

  async intrinsicSizes() { /* TODO implement :) */ }

  async layout(children, edges, constraints, styleMap) {

    // get diameter
    const diameter = parseInt(styleMap.get('--diameter').toString());
    var offsetX = diameter-16;
    var offsetY = diameter-10;
    
    // calc angle distance between fragments
    var count = children.length;
    var angle = 360/count;
    let maxChildBlockSize = 0;

    // calc available sizes
    const availableInlineSize = constraints.fixedInlineSize - edges.inline;
    const availableBlockSize = constraints.fixedBlockSize ?
        constraints.fixedBlockSize - edges.block :
        null;
    
    // layout fragments
    const childFragments = [];
    var i=0;
    for (let child of children) {
      const fragment = await child.layoutNextFragment({
          availableInlineSize,
          availableBlockSize,
      });
      
      // determine  max fragment size
      maxChildBlockSize = Math.max(maxChildBlockSize, fragment.blockSize);
      
      // calc current fragment position
      i++;
      var newPoint = {
        x: Math.round(Math.cos((angle * i) * Math.PI / 180) * diameter + offsetX),
        y: Math.round(Math.sin((angle * i) * Math.PI / 180) * diameter + offsetY)
      };

      // position the fragment
      fragment.inlineOffset = edges.inlineStart + newPoint.x;
      fragment.blockOffset = edges.blockStart + newPoint.y;

      childFragments.push(fragment);
    }

    // determine block size
    const autoBlockSize = maxChildBlockSize + edges.block;

    // return fragments
    return {
      autoBlockSize,
      childFragments,
    }
  }
});
