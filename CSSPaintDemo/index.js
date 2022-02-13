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
CSS.paintWorklet.addModule('fancybox.js');