class FancyBox{
    static get inputProperties(){
        return ['--boxColor', '--boxWidth']
    }

    paint(ctx, size, props){
        const color = props.get( '--boxColor' );
        const lineWidth = props.get( '--boxWidth' ).value;
        
        const width = size.width - lineWidth;
        const height = size.height - lineWidth;
        const xlen = width*10/100;
        const ylen = height*20/100;
        const x = lineWidth/2;
        const y = lineWidth/2;

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(width, y);
        ctx.lineTo(width, height);
        ctx.lineTo(xlen, height);
        ctx.lineTo(x, height-ylen);
        ctx.closePath();
        ctx.stroke();
    }
}

registerPaint('fancybox', FancyBox);