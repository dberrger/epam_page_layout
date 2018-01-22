let a = function () {
    let tableWrapper = document.getElementsByClassName("main-table-flex main-table")[0];
    console.dir(tableWrapper);
    let counter = 3;

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        tr.className = "sb-content__calendar-row-color";

        for(let j = 0; j < 7; j++) {

            let td = document.createElement("td");
            td.className = "main-td";
            tr.appendChild(td);
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
            if(counter === 32) {
                div_1.innerHTML = `Sept 1`;
                counter = 1;
            }
            td.appendChild(div_1);

            counter++;

        }

        tableWrapper.appendChild(tr);

    }
};

a();