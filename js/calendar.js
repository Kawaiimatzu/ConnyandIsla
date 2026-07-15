// =======================================
// CONTENT CALENDAR
// =======================================

const calendarGrid = document.getElementById("calendarGrid");

const weekTitle = document.getElementById("weekTitle");

const prevWeek = document.getElementById("prevWeek");

const nextWeek = document.getElementById("nextWeek");

const dayNames = [

    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue"

];

let currentStartDate = new Date(2026,6,15);

const monthNames=[

"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"

];

function updateWeekTitle(){

    const endDate=new Date(currentStartDate);

    endDate.setDate(endDate.getDate()+13);

    weekTitle.innerHTML=

    `${monthNames[currentStartDate.getMonth()]}

    ${currentStartDate.getDate()}

    -

    ${monthNames[endDate.getMonth()]}

    ${endDate.getDate()},

    ${endDate.getFullYear()}`;

}

function renderHeader(){

    dayNames.forEach(day=>{

        calendarGrid.innerHTML+=`

        <div class="calendar-day">

            ${day}

        </div>

        `;

    });

}

function renderDays(){

    for(let i=0;i<14;i++){

        let date=new Date(currentStartDate);

        date.setDate(currentStartDate.getDate()+i);

        calendarGrid.innerHTML+=`

        <div class="calendar-cell">

            <div class="cell-date">

                ${date.getDate()}

            </div>

            <div class="empty-text">

                Nothing Scheduled

            </div>

            <div class="add-content-cell">

                + Add Content

            </div>

        </div>

        `;

    }

}

function renderCalendar(){

    calendarGrid.innerHTML="";

    renderHeader();

    renderDays();

    updateWeekTitle();

}

prevWeek.onclick=function(){

    currentStartDate.setDate(

        currentStartDate.getDate()-14

    );

    renderCalendar();

}

nextWeek.onclick=function(){

    currentStartDate.setDate(

        currentStartDate.getDate()+14

    );

    renderCalendar();

}

renderCalendar();


// =======================================
// MODAL
// =======================================

const modal=document.getElementById("contentModal");

const openButtons=document.querySelectorAll(".primary-btn,.add-content-cell");

const closeModal=document.getElementById("closeModal");

openButtons.forEach(button=>{

    button.onclick=function(){

        modal.classList.add("show");

    }

});

closeModal.onclick=function(){

    modal.classList.remove("show");

}

modal.onclick=function(e){

    if(e.target===modal){

        modal.classList.remove("show");

    }

}

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        modal.classList.remove("show");

    }

});