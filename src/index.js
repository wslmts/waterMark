export function waterMark({
    width=300,
    height=200,
    rotate = 30,
    color = "#ccc",
    textAlign = 'center',
    textBaseline = 'middle',
    font = "16px microsoft yahei",
    content = "zcc",
    opacity = '0.3',
    zIndex = 999,
    container = document.body,
    onlyURL=false
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
    ctx.translate(0,-rotate)
    if(Array.isArray(content)){
        let num = content.length
        content.forEach((v,i)=>{
            ctx.fillText(content[i], parseFloat(width/2),(i*2+1)*parseFloat(height/num/2))
        })
    } else {
        ctx.fillText(content, parseFloat(width/2),parseFloat(height/2))
    }
    
    let url = cvs.toDataURL()
    if(onlyURL){
        return url;
    }
    let wrap = container.querySelector('#__wm__')
    if(!wrap){
        wrap = document.createElement('div')
        wrap.id='__wm__'
    }
    let style = `
    position:fixed;
    height:${container.scrollHeight}px;
    pointer-events:none;
    top:0;
    bottom:0;
    opacity: ${opacity};
    z-index: ${zIndex};
    background-repeat:repeat;
    background-image:url(${url});
   `;
    let containerWidth = container===document.body ? 'width:100%' :''
    wrap.style = style + containerWidth;
    container.appendChild(wrap)
    if(MutationObserver){
        let args = arguments[0]
        let obj = new MutationObserver(function(list){ 
            for(let m of list) {           
                if (m.removedNodes.length && m.removedNodes[0].id=='__wm__'&&!document.querySelector('#__wm__')) {
                    waterMark(args);               
                }
            }      
        })
        obj.observe(container, {        
            childList: true,
        })
    
        let canvasObj = new MutationObserver(function(v){
            if (document.querySelector('#__wm__')){
                document.querySelector('#__wm__').style = style
            }
        })
        canvasObj.observe(container.querySelector('#__wm__') , {        
            attributes: true
        })
    }
}