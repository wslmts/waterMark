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
    let wrap = container.querySelector('.__wm__')
    if(!wrap){
        wrap = document.createElement('div')
        wrap.classList.add('__wm__')
        wrap.style="position:relative"
    }
    let style = `
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
   `;
   let div = document.createElement('div')
   div.style = style;
   wrap.appendChild(div)
   container.appendChild(wrap)
   if(MutationObserver){
        let args = arguments[0]
        let obj = new MutationObserver(function(){
        let wm = container.querySelector('.__wm__')
        if (!wm||wm&&wm.getAttribute('style')!=style) {
            // 避免一直触发
            obj.disconnect();
            obj = null;
            waterMark(args);
          }
        })
       obj.observe(container, {
        attributes: true,
        subtree: true,
        childList: true
      })
   }
}