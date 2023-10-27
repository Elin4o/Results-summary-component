const scores = document.querySelector('.scores');
const averageText = document.querySelector('.average');
const betterThanText = document.getElementById('better-than');
let averageScore = 0;

fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            averageScore+=element.score;
            
            const individualScore = document.createElement('div');
            individualScore.className = `score ${element.category.toLowerCase()}`;
            
            individualScore.innerHTML = `
            <div class="score-img">
            <img src="${element.icon}" alt="icon-${element.category.toLowerCase()}">
            <p>${element.category}</p>
            </div>
            <div class="individual-score">
            <p><span>${element.score}</span> / 100</p>
            </div>
            `;
            
            scores.appendChild(individualScore);
        });
        const averageResult = Math.floor(averageScore/data.length);
        averageText.textContent = averageResult;
        
        if( averageResult > 50 && averageResult < 74){
            betterThanText.innerText = "50";          
        } else if( averageResult > 75 && averageResult < 84) {    
            betterThanText.innerText = "65";
        } else if( averageResult > 85 && averageResult < 100) {    
            betterThanText.innerText = "79";
        } else betterThanText.innerText = "90";
    });

