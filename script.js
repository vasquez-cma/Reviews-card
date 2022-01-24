let array = [
    {
        id: 0,
        img: "assets/Jeff_Bezzos.jpg",
        name: "Jeff Bezzos",
        job: "Web developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum deserunt tempora nulla consectetur quae!"
    },
    {
        id:1,
        img: "assets/Susan_Smith.jpg",
        name: "Susan Smith",
        job: "Data Analysist",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem recusandae accusamus eveniet nisi. Ullam recusandae minima officia?"
    },
    {
        id:2,
        img: "assets/Thomas_Ruff.jpg",
        name: "Thomas Ruff",
        job: "Backend developer",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, eligendi voluptatibus, facere est temporibus reprehenderit magnam, explicabo facilis dolore libero illum odit!"
    },
    {
        id: 3,
        img: "assets/portrait.jpg",
        name: "Sarah Jones",
        job: "Ux designer",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, esse. In voluptas voluptatibus, ipsum aliquid corporis saepe quae necessitatibus harum expedita ab?"
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".randomBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){

})

function showPerson(person){
    const item = array[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.description;
}

// Show next person

nextBtn.addEventListener("click",function(){
    currentItem++;

    if(currentItem > array.length-1){
        currentItem = 0;
    }

    showPerson(currentItem);
})

prevBtn.addEventListener("click",function(){
    currentItem--;

    if(currentItem < 0){
        currentItem = array.length -1;
    }

    showPerson(currentItem);
})

randomBtn.addEventListener("click",function(){
    let randomNumber = Math.floor(Math.random()*array.length);

    currentItem = randomNumber;

    showPerson(currentItem);
})