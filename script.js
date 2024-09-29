// const homeContent = document.querySelector("#home");

// const openHome = () => {
//     console.log("Success");
//     homeContent.classList.add("active");
// };

var typeData= new Typed(".role",{
    strings:[
        "Frontend developer",
        "Ui/Ux developer",
    ],
    loop:true,
    typeSpeed:80,
    backSpeed:80,
    backDelay:100,
});


let modeBtn = document.querySelector("#mode");
let cuuMode = "dark";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if(cuuMode === "light"){
        cuuMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        body.classList.remove("box-1");
        document.querySelector("#mode").innerHTML = "Light Mode"
        // document.querySelector("body").style.backgroundColor = "black";
        // document.querySelector("body").style.color = "white";
    }
    else{
        cuuMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        document.querySelector("#mode").innerHTML = "Dark Mode"
        // document.querySelector("#mode").style.backgroundImage = "images/night.png";
        // document.querySelector("body").style.color = "black";
    }
    console.log(cuuMode)
});

