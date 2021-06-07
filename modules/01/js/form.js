
import {addMessage, resetError as resetMessage, renderDiff} from "./common.js";
import {diffDates} from "./calc.js";
let color;
//  'file:///Users/yekoo/Documents/GeekBrains/GIT/JS-Modules/01/task/js/form.js'

const form = document.getElementById("dateForm");

form.addEventListener("submit", (evt)=>{
    console.log("Submit");
    evt.preventDefault();
    resetMessage();

    const formData = new FormData(evt.target);
    let date1 = formData.get('date1');
    let date2 = formData.get('date2');

    if(!date1 || !date2){
        addMessage("Date values Error!");
    }else{
        console.log(date1, date2);
        if(date1 > date2){
            [date1, date2] = [date2, date1];
        }
        const result = diffDates(date1, date2);
        renderDiff(result);
    }
});
