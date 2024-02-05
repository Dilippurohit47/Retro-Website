
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
var tl=gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.8,
    duration:0,  
}
)

tl.to("#page1",{
    y:"10vh",
  
    duration:1,
    delay:0.1,
}
)
tl.to("#page1",{
    y:"0vh",
  
   rotate:360,
   scale:1,
}
)

