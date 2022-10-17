document.addEventListener("DOMContentLoaded",()=>{
    const textp = document.querySelector("#text-welcome")
    
    setTimeout(() => {
        window.location.href = "welcome.html"
    }, 4500);
    
    
    setTimeout(() => {
    
        textp.innerHTML="ao"
    
    }, 1500)
    
    setTimeout(() => {
    
        textp.classList.add("text-green-welcome")
        textp.innerHTML="Diet"
    
    }, 2500)
})


