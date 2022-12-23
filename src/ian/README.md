# D3Tree
Component that represents a JavaScript object as a tree/graph.
Red nodes represent properties on objects.
Blue nodes are child nodes, representing the value for the parent property.

Basic mouse panning exists, but it selects other elements

# Requirements
Required packages
- d3
- d3-hierarchy

Dev dependencies
- @d3/types
- @d3-hierarchy/types

# Usage
THe component takes in following props
- data: Any JavaScript object. This data will be rendered
- nodeWidth and nodeHeight: Normal spacing between each node. The exact spacing will also be affected by whether two nodes share a parent (default D3.js behavior)
- treeType: The type of tree to draw. Options are TreeType.Denodogram (leaf nodes at the same depth) or TreeType.TidyTree (more compact tree)
- treeOrientation: Whether tree goes from top to bottom or from left to right
- paddingRight: Amount of padding on right side of the graph. Useful for long text/information of final children.

If given data
```typescript
const testData = {
    a: "hello",
    b: {
        c: "Data"
    }
};
```
The data can be visualized
```typescript
<D3Tree data={testData} treeType={TreeType.TidyTree} treeOrientation={TreeOrientation.Horizontal} nodeWidth={25} nodeHeight={25} paddingRight={100} maxSvgViewboxDimensions={500} />
```

Hover transitions are determined by css classes foudn in styles/d3tree.module.css

