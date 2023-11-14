

const onThreeItemClick = (e) =>{
    const btn=e.target;
    const buttonText= e.target.innerText;

    // console.log(buttonText)
    if(buttonText==='🗑'){
        btn.parentElement.parentElement.remove();

    }else if(buttonText==='+5'){

    }else if(buttonText==='-5');
    console.log(buttonText)
};



const createCard = (firstName,lastName,countrytName,score) =>{
    const contentCard =`
    <div class="name">
    <p>${firstName} ${lastName} </p>
       <span>${generateDateAndTime()}</span>
    </div>
    <div>${countrytName}</div>
    <div>${score}</div>
    <div id="threeItem">
        <button>🗑</button>
        <button>-5</button>
        <button>+5</button>
    </div>`;
   const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = contentCard;
    card.children[3].addEventListener('click', onThreeItemClick);
    return card;
};
const cardContainer =document.getElementById('cardDetails');
const sortLeaderBoard = () =>{
const cards = document.querySelectorAll('.card');
   const cardsArray = Array.from(cards);
   cardsArray.sort((card1, card2) =>{
    const score1=parseInt(card1.children[2].innerHTML);
    const score2=parseInt(card2.children[2].innerHTML);
   if(score1 > score2){
    return -1; 
   } else if(score2>score1){
        return 1;
     }else{
    return 0;
}
   
   });
   cardsArray.forEach((card) =>{
    cardContainer .append(card);
   });
  
};


const wrongMsg = document.getElementById('errMsg');
const addPlayer = document.getElementById('addPlayer');
addPlayer.addEventListener('submit', (e) =>{
    e.preventDefault();
    wrongMsg.style.display = 'none';
    const firstName = e.target.children[0].value;
    const lastName = e.target.children[1].value;
    const countrytName = e.target.children[2].value;
    const score = e.target.children[3].value;
    if(!firstName || !lastName || !countrytName || !score){
        
        wrongMsg.style.display = 'block';
        return;
    }
   
   const  card= createCard(firstName,lastName,countrytName,score);
//    const cardContainer =document.getElementById('cardDetails');
   cardContainer.appendChild(card)
   e.target.reset();
//    console.log(firstName,lastName,countrytName,score);
sortLeaderBoard();
});  



function generateDateAndTime(){
    let dateObject = new Date();
    // console.log(dateObject);
    let month = dateObject.toLocaleString("default", {month:"long"})
    // console.log(month);
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    time = dateObject.toLocaleTimeString().slice(0,8);
    // console.log(time);

    let generateResult = `${month} ${day}: ${year} ${time}`

    return generateResult;
}