const buttonAllSpells = document.querySelector(".allSpells") as HTMLButtonElement;
const div = document.querySelector("div") as HTMLElement;
const loader = document.querySelector("img") as HTMLImageElement;

const url = "https://hp-api.onrender.com/api/spells";

// function getBread (){
//     const getBread = new Promise((resolve)=>{
//         setTimeout(() =>{
//             resolve("");
//         }, 3000);
//     });
//     return getBread;
// };

async function getSpellData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(await getBread());
    return data;
};

buttonAllSpells.addEventListener("click", (event) => {
    event.preventDefault();
    loader.classList.remove("loader");
    getSpellData().then((data)=>{
        loader.classList.add("loader");
        for(let i=0; i<data.length; i++){
            let newDiv = document.createElement("div");
            newDiv.className = "info";
            div.append(newDiv);
            newDiv.innerHTML = `Name of the spell: ${data[i].name} <br>Description: ${data[i].description}`;
        }
    });
})