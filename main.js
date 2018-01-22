var a = function () {
    let tableWrapper = document.getElementsByClassName("sb-content__calendar-rowwrapper")[0];
    console.dir(tableWrapper);
    for (let i = 0; i < 5; i++) {
        let counter = 3;

        let tr = document.createElement("tr").className = "sb-content__calendar-row-color";

        for(let j = 0; j < 7; j++) {

            let td = document.createElement("td");
            td.className = "main-td";
            let div_1 = document.createElement("div");
            div_1.className = "content";
            let div_2 = document.createElement("div");
            div_2.className = "sb-content__calendar-note-1";
            let div_2_inner = document.createElement("div");
            div_2_inner.className = "sb-content__calendar-note-1-colorblock1";
            let a = document.createElement("div");
            a.className = "sb-content__calendar-todo-link tooltip";



            if(counter === 3 && counter === 7 && counter === 10 ) {

            }

            div_1.innerHTML = `${counter}`;
            td.appendChild(div_1);
            tableWrapper.appendChild(td);


            counter++;
        }
    }
};