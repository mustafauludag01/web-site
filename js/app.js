const parallax_el = document.querySelectorAll(".parallax");
const ust_puller = document.querySelectorAll(".ust-puller");
const alt_puller = document.querySelectorAll(".alt-puller");
const main = document.querySelector("main");
const bg_img = document.querySelector(".bg-img");

let ust_puller_speedx=0;
let ust_puller_speedy= 0;
let bg_speedx=0;
let bg_speedy=0;
let alt_puller_speedx=0;
let alt_puller_speedy=0;
let xValue=0, yValue=0;
update(0);
window.addEventListener("mousemove",(e)=>{
    xValue=e.clientX - window.innerWidth/2;
    yValue=e.clientY - window.innerHeight/2;

    //update(e.clientX);
    
});

window.addEventListener('scroll',() =>{
    let scrollY = window.scrollY;
    handleScroll(scrollY);
});

if(window.innerWidth>=725){
    main.style.maxHeight = `${window.innerWidth * 0.6}px`;
}
else{
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

function handleScroll(scrollval){
    parallax_el.forEach((el) => {
        if(el.alt == "ust-puller"){
            ust_puller_speedx = el.dataset.speedx*2;
            ust_puller_speedy = el.dataset.speedy*2;
            el.style.transform = `translateX(calc(-50% + ${-scrollval * ust_puller_speedx}px)) translateY(calc(-50% + ${-scrollval * ust_puller_speedy}px`;
            //el.style.transform = `translateX(calc(-50% + ${-xValue * ust_puller_speedx}px)) translateY(calc(-50% + ${-xValue * ust_puller_speedy}px`;
        }
        else if(el.alt == "alt-puller"){
            alt_puller_speedx = el.dataset.speedx*2;
            alt_puller_speedy = el.dataset.speedy*2; 
            el.style.transform =`translateX(calc(-50% + ${-scrollval * alt_puller_speedx}px)) translateY(calc(-50% + ${scrollval * alt_puller_speedy}px`;
            //el.style.transform = `translateX(calc(-50% + ${-xValue * alt_puller_speedx}px)) translateY(calc(-50% + ${xValue * alt_puller_speedy}px`;
        }
        else{
            let bg_speedx = el.dataset.speedx*2;
            let bg_speedy = el.dataset.speedy*2; 
            //el.style.transform = `translateX(calc(-50% + ${-scrollval * bg_speedx}px)) translateY(calc(-50% + ${-scrollval * bg_speedy}px`;
            //el.style.transform = `translateX(calc(-50% + ${-xValue * bg_speedx}px)) translateY(calc(-50% + ${-yValue * bg_speedy}px`;
        }
    });
}

function update(cursorPosition){
    parallax_el.forEach((el) => {
        if(el.alt == "ust-puller"){
            ust_puller_speedx = el.dataset.speedx;
            ust_puller_speedy = el.dataset.speedy;
            el.style.transform = `translateX(calc(-50% + ${-xValue * ust_puller_speedx}px)) translateY(calc(-50% + ${-xValue * ust_puller_speedy}px`;
        }
        else if(el.alt == "alt-puller"){
            alt_puller_speedx = el.dataset.speedx;
            alt_puller_speedy = el.dataset.speedy; 
            el.style.transform = `translateX(calc(-50% + ${-xValue * alt_puller_speedx}px)) translateY(calc(-50% + ${xValue * alt_puller_speedy}px`;
        }
        else{
            let bg_speedx = el.dataset.speedx;
            let bg_speedy = el.dataset.speedy; 
            el.style.transform = `translateX(calc(-50% + ${-xValue * bg_speedx}px)) translateY(calc(-50% + ${-yValue * bg_speedy}px`;
        }
        
    });
}


//GSAP

/*let timeline = gsap.timeline();

parallax_el.forEach((el)=>{
    timeline.from(el,{
        top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
        duration:1,
    });
});*/