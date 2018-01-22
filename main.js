
window.onload = function () {
    let tableWrapper = document.getElementsByClassName("main-table-flex main-table")[0];
    console.dir(tableWrapper);
    let counter = 3;

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        tr.className = "sb-content__calendar-row-color";
        let flag = true;
        for(let j = 0; j < 7; j++) {

            let td = document.createElement("td");
            td.className = "main-td";
            tr.appendChild(td);
            let div_1 = document.createElement("div");
            div_1.className = "content";

            if(counter === 3 && flag === true ) {
                let div_2 = document.createElement("div");
                div_2.className = "sb-content__calendar-note-1";
                let div_2_inner = document.createElement("div");
                div_2_inner.className = "sb-content__calendar-note-1-colorblock1";
                let a = document.createElement("a");
                a.className = `sb-content__calendar-todo-link has-tooltip`;
                let span = document.createElement("span");
                span.className = "tooltip-wrapper";
                let span_inner = document.createElement("span");
                span_inner.className = "tooltip";

                span_inner.innerHTML = `TootipTootipTootipTootipTootipTootipTootipTootipTootipTootip`;
                a.innerHTML = `Letter #01-01 \"Whatever\" from Organization 1 to EPAM `;


                td.appendChild(div_2);
                div_2.appendChild(div_2_inner);
                div_2.appendChild(a);
                span.appendChild(span_inner);
                a.appendChild(span);
            }

             for(let k = 1; k < 3; k++) {
                 if ((counter === 7) && flag === true) {
                     let div_2 = document.createElement("div");
                     div_2.className = `sb-content__calendar-note-yellow-${k}`;
                     let div_2_inner = document.createElement("div");
                     div_2_inner.className = `sb-content__calendar-note-1-colorblock3`;
                     let a = document.createElement("a");
                     a.className = `sb-content__calendar-todo-link has-tooltip`;
                     let span = document.createElement("span");
                     span.className = "tooltip-wrapper";
                     let span_inner = document.createElement("span");
                     span_inner.className = "tooltip";

                     span_inner.innerHTML = `TootipTootipTootipTootipTootipTootipTootipTootipTootipTootip`;
                     a.innerHTML = `Letter #01-01 \"Whatever\" from Organization 1 to EPAM`;


                     td.appendChild(div_2);
                     div_2.appendChild(div_2_inner);
                     div_2.appendChild(a);
                     span.appendChild(span_inner);
                     a.appendChild(span);
                 }
             }

            for(let k = 3; k < 7; k++) {
                if((counter === 10) && flag === true ) {
                    let div_2 = document.createElement("div");
                    div_2.className = `sb-content__calendar-note-${k}`;
                    let div_2_inner = document.createElement("div");
                    div_2_inner.className = `sb-content__calendar-note-1-colorblock${k}`;
                    let a = document.createElement("a");
                    a.className = `sb-content__calendar-todo-link has-tooltip`;
                    let span = document.createElement("span");
                    span.className = "tooltip-wrapper";
                    let span_inner = document.createElement("span");
                    span_inner.className = "tooltip";

                    span_inner.innerHTML = `TootipTootipTootipTootipTootipTootipTootipTootipTootipTootip`;
                    a.innerHTML = `Letter #01-01 \"Whatever\" from Organization 1 to EPAM`;


                    td.appendChild(div_2);
                    div_2.appendChild(div_2_inner);
                    div_2.appendChild(a);
                    span.appendChild(span_inner);
                    a.appendChild(span);
                }

            }


            div_1.innerHTML = `${counter}`;
            if(counter === 32) {
                div_1.innerHTML = `Sept 1`;
                counter = 1;
                flag = false;
            }
            td.appendChild(div_1);
            counter++;

        }
        tableWrapper.appendChild(tr);

    }
};


// window.onload = function(){
//     var some = document.getElementsByClassName('tooltip')[0];
//     some.style.color = '#fff';
//     some.onmouseover = function() {
//
//         some.style.color = '#00ff3e';
//         this.style.textDecoration='underline';
//     };
//     some.onmouseout = function(){
//         some.style.color = '#f00';
//         this.style.textDecoration='none';
//     }
//
// }
