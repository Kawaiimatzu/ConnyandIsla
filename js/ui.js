const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        menuItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});

const menuToggle = document.getElementById("menuToggle");

const sidebar = document.querySelector(".sidebar");

menuToggle?.addEventListener("click",()=>{

    sidebar.classList.toggle("active");

});

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(window.innerWidth<=768){

            sidebar.classList.remove("active");

        }

    });

});

const greeting=document.getElementById("greeting");

function updateGreeting(){

    if(!greeting)return;

    const hour=new Date().getHours();

    if(hour<12){

        greeting.innerHTML="☀️ Good Morning";

    }

    else if(hour<18){

        greeting.innerHTML="🌤 Good Afternoon";

    }

    else{

        greeting.innerHTML="🌙 Good Evening";

    }

}

updateGreeting();

const liveDate=document.getElementById("liveDate");

function updateDate(){

    if(!liveDate)return;

    liveDate.innerHTML=new Date().toLocaleDateString(

        "en-US",

        {

            weekday:"long",

            year:"numeric",

            month:"long",

            day:"numeric"

        }

    );

}

updateDate();

const clock=document.createElement("div");

clock.className="live-clock";

document.querySelector(".welcome-text")?.appendChild(clock);

function updateClock(){

    clock.innerHTML=new Date().toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit",

        second:"2-digit"

    });

}

updateClock();

setInterval(updateClock,1000);

document.querySelector(".search input")?.addEventListener("keyup",(e)=>{

    console.log(e.target.value);

});

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=(x-rect.width/2)/18;

        const rotateX=-(y-rect.height/2)/18;

        card.style.transform=

        `perspective(900px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

document.querySelectorAll(".card,.panel,.social-card")

.forEach((card,index)=>{

    card.style.opacity=0;

    card.style.transform="translateY(30px)";

    setTimeout(()=>{

        card.style.transition=".6s";

        card.style.opacity=1;

        card.style.transform="translateY(0)";

    },index*120);

});

document.querySelector(".badge")

?.addEventListener("click",()=>{

    alert("No new notifications.");

});

document.querySelector(".profile")

?.addEventListener("click",()=>{

    alert("Profile menu coming soon.");

});