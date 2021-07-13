
const message = document.querySelector(".message");

// console.log("common loaded");
export default function renderError(text){
    message.textContent = text;
}
export function addMessage(text){
    message.textContent = text;
}
export function resetError(){
    message.textContent = '';
}
export function renderDiff(diff){
    message.innerHTML = `<span>
        Years: ${diff.years}
        Months: ${diff.months}
        Days: ${diff.days}
    </span>`;
}


export function resetTimer(){
    timerTime.nodeValue;
}
