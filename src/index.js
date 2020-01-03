export function waterMark({
    width=300,
    height=200,
    rotate = 30,
    color = "#ccc",
    textAlign = 'center',
    textBaseline = 'middle',
    font = "20px microsoft yahei",
    content = "zcc",
    opacity = '0.6',
    zIndex = 999,
    container = document.body
} = {}){
    let cvs =document.createElement('canvas');
    let ctx = cvs.getContext('2d');
    cvs.width = width;
    cvs.height = height;
    ctx.rotate(Math.PI / 180 * rotate);
    ctx.fillStyle = color
    ctx.font = font
    ctx.textAlign = textAlign
    ctx.textBaseline = textBaseline
    ctx.fillText(content, parseFloat(width/2),parseFloat(height/2))
    let url = cvs.toDataURL()
    let div = document.createElement('div')
    div.style = `
    position:absolute;
    width:100%;
    height:${container.scrollHeight}px;
    pointer-events:none;
    top:0;
    bottom:0;
    opacity: ${opacity};
    z-index: ${zIndex};
    background-repeat:repeat;
    background-image:url(${url});
   `
   container.appendChild(div)
}