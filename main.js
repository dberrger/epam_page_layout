var a = function () {
    let wr = document.getElementsByClassName("wrapper-wrapper")[0];
    let div = document.createElement("div");
    div.innerHTML = "nu ti i daun";
    console.dir(wr);
    for (let i = 0; i < 35; i++) {
        div = document.createElement("div");
        div.className = "test";
        div.innerHTML = `${i+1} elem`;
        wr.appendChild(div);
    }
};

a();