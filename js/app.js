const bgImage = document.getElementById("bgImage");
const container = document.querySelector(".container");
const main = document.querySelector("main");
const sb1 = document.querySelectorAll(".sb1");
const sb2 = document.querySelectorAll(".sb2");
const sb3 = document.querySelectorAll(".sb3");
const aboutWrap1 = document.querySelector(".aboutWrap1");
const aboutWrap2 = document.querySelector(".aboutWrap2");
const aboutWrap3 = document.querySelector(".aboutWrap3");
const aboutArray = [];
const firstSection = document.querySelector(".first");
const secondSection = document.querySelector(".second");
const thirdSection = document.querySelector(".third");
const fourthSection = document.querySelector(".fourth");


let scrollUpBtn = document.querySelector(".scrollUpBtn");
let count = 0;
let iterate;


aboutArray.push(aboutWrap1, aboutWrap2, aboutWrap3);


///////this pushes the div down  
sleep = () => {
    secondSection.style.paddingTop = "500px";
    secondSection.style.transition = "all 1s";
}

sleep()

container.addEventListener("scroll", () => {
    ///// parallax scrolling /////////////
    const delay = container.scrollTop / 3.5;
    bgImage.style.top = `calc(-30% + ${delay}px)`;
    ///// end of parallax scrolling /////////////
    
    if (container.scrollTop < 700) {
        scrollUpBtn.setAttribute("hidden","hidden");
    }

    if (container.scrollTop >= 700) {
        scrollUpBtn.removeAttribute("hidden");
    }

    const rect1 = firstSection.getBoundingClientRect();
    console.log(rect1);
    
    if( Math.abs(rect1.top) >= rect1.height / 4) {
        secondSection.style.paddingTop = "max(15vw, 160px)";
        secondSection.style.transition = "all 1s";
    }

    

    // console.log(rect1.top + " and " + (rect1.height / 7))

   
})



//  addId = () => {
//           statusArray.forEach((status) => {
//                   for(i=0; i< status.length; i++) {
//                 status[i].setAttribute("data-id", i);
//             }
//           })
        
//             for(i=0; i< aboutArray.length; i++) {
//                 aboutArray[i].setAttribute("data-id", i);
//             }
//         }
// addId();


// //// iteration 
iterate = setInterval(() => {

    if(count === 0) {
          aboutArray[count].removeAttribute("hidden");
          aboutArray[count + 1].setAttribute("hidden", "hidden");
          aboutArray[count + 2].setAttribute("hidden", "hidden");
    }
    if(count === 1) {
          aboutArray[count].removeAttribute("hidden");
          aboutArray[count - 1].setAttribute("hidden", "hidden");
          aboutArray[count + 1].setAttribute("hidden", "hidden");
    }

    if(count === 2) {
        aboutArray[count].removeAttribute("hidden");
        aboutArray[count - 1].setAttribute("hidden", "hidden");
        aboutArray[count - 2].setAttribute("hidden", "hidden");
        count = -1;
    } 
    count++;
}, 5000);



sb1.forEach((sb) => {
    sb.addEventListener("click", () => {
    aboutWrap1.removeAttribute("hidden");   
    aboutWrap2.setAttribute("hidden", "hidden"); 
    aboutWrap3.setAttribute("hidden","hidden"); 
    count = 0;  
    clearInterval(iterate);
    })
    
})

sb2.forEach((sb) => {
    sb.addEventListener("click", () => {
    aboutWrap2.removeAttribute("hidden");   
    aboutWrap1.setAttribute("hidden", "hidden"); 
    aboutWrap3.setAttribute("hidden","hidden");
    count = 1; 
    clearInterval(iterate);  
    })
})

sb3.forEach((sb) => {
    sb.addEventListener("click", () => {
    aboutWrap3.removeAttribute("hidden");   
    aboutWrap1.setAttribute("hidden", "hidden"); 
    aboutWrap2.setAttribute("hidden","hidden"); 
    count = 2; 
    clearInterval(iterate);
    })
})










scrollUpBtn.addEventListener("click", (e) => {
    e = setInterval(() => {
        container.scrollTop = container.scrollTop - 700;
    }, 50);
    setTimeout(() => {clearInterval(e);}, 1000)  
})



/////test
