
const gallery = document.querySelector(".galeria")

window.onmousedown = e => {   
    gallery.dataset.mouseDownAt = e.clientX;  
}

window.onmouseup = () => {
    gallery.dataset.mouseDownAt = "0";
    gallery.dataset.prevPercentage =
     gallery.dataset.percentage;
}

window.onmousemove = e => {
    if (gallery.dataset.mouseDownAt === "0") 
    return;

    const mouseCurrent = parseFloat(gallery.dataset.mouseDownAt) - e.clientX,
    mouseMax = window.innerWidth / 2;

const percentage = (mouseCurrent / mouseMax) * -100, 
nextPercentageUntan = parseFloat(gallery.dataset.prevPercentage) + percentage,
nextPercentage = Math.max(Math.min(nextPercentageUntan, 0), -70);
gallery.dataset.percentage = nextPercentage

    gallery.animate 
    ({transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill:'forwards'});
for (const image of gallery.getElementsByClassName("img")) { 
    image.animate 
    ({objectPosition: `${100+nextPercentage}% center`
    }, {duration: 1200, fill:'forwards'});
}
}
document.getElementById("div-legend").onmousemove = l => {
    for(const card of document.getElementsByClassName("legend")) {
      const rect = card.getBoundingClientRect(),
            x = l.clientX - rect.left,
            y = l.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

const menu = document.querySelector(".menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) =>{
    item.onmouseover = () =>{
        menu.dataset.activeIndex = index;
    }
  });

const boton = document.querySelector(".cont-sect");
const slideDown = document.querySelector(".inac");
const icono = document.querySelector(".ico");
boton.addEventListener("click", ()=> {
    slideDown.classList.toggle("futext");
    icono.classList.toggle("banana"); 
});
const hero = document.querySelector(".cont-sect1");
const texted = document.querySelector(".spanner");
const icon2 = document.querySelector(".proyected");
const contact = document.getElementById("contract")
hero.addEventListener("click",()=> {
    texted.classList.toggle("texto");
    icon2.classList.toggle("proyect2");
});

const contacted = document.querySelector(".cont-sect2");
const anchor = document.querySelector(".anchor");

contacted.addEventListener("click",()=>{
    anchor.classList.toggle(".whatsapp");
})



