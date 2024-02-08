let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
    let input = prompt("Enter Your Task");
    let time = prompt("set your time");
    let div1 = document.createElement("div");
    div1.classList.add("data-row");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox")
    list.appendChild(div1);
    div1.appendChild(checkbox);
    let div2 = document.createElement("div");
    div2.classList.add("details");
    div1.appendChild(div2);
    let para = document.createElement("p");
    para.classList.add("comments");
    para.innerHTML = input;
    div2.appendChild(para);
    let timer = document.createElement("p");
    timer.classList.add("time");
    timer.innerHTML = time;
    div2.appendChild(timer);

    delLine();
})
function delLine() {
    let check = document.querySelectorAll('.checkbox');
    let task = document.querySelectorAll('.comments')


    for (let i = 0; i < check.length; i++) {

        check[i].addEventListener('click', () => {
            if (check[i].checked) {
                task[i].classList.add('del');
            } else {
                task[i].classList.remove('del');
            }

        });

    }
}

delLine();

function getCurrentDate() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date();
    let day = days[date.getDay()];
    let dayOfMonth = date.getDate();
    let daySuffix = (dayOfMonth % 10 === 1 && dayOfMonth !== 11) ? 'st' : (dayOfMonth % 10 === 2 && dayOfMonth !== 12) ? 'nd' : (dayOfMonth % 10 === 3 && dayOfMonth !== 13) ? 'rd' : 'th';
    return `${day}, ${dayOfMonth}${daySuffix}`;
}

let currentDate = document.getElementById('current-date');

currentDate.textContent = getCurrentDate();

function getCurrentMonth() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    const month = months[date.getMonth()];
    return month;
}

const currentMonth = document.getElementById('current-month');

currentMonth.textContent = getCurrentMonth();
