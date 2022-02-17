CSS.registerProperty({
    name: "--boxColor",
    syntax: "<color>",
    initialValue: 'black',
    inherits: false
});
CSS.registerProperty({
    name: "--boxWidth",
    syntax: "<length>",
    initialValue: '5px',
    inherits: false
});
// https://drafts.css-houdini.org/css-properties-values-api/#supported-names

CSS.paintWorklet.addModule('fancybox.js');

