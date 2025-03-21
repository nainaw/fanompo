let postsNum;
let currentPost = postsNum;
let app = document.querySelector(".app");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let loading = document.querySelector(".loading");
let isLoading = true;
function render(id) {
    if (isLoading === false) {
        prev.classList.add("disabled");
        next.classList.add("disabled");
        isLoading=true;
    } 
    app.children[1].innerHTML = "";
    app.children[2].innerHTML = "";
    app.children[3].innerHTML = "";
    loading.classList.remove("hidden")
    fetch('https://script.google.com/macros/s/AKfycbzTb3fvxFDIJZ4gPo27peZkO1nXsI6HvEf3S5cnqYemdfzs5XL_91m_pxneRNL301Pu/exec')
        .then(response => response.json())
        .then(data => {
            let selectedData = data.find(obj => obj.id === id);
            console.log(selectedData);
            loading.classList.add("hidden")
            app.children[1].innerHTML = selectedData.Title;
            app.children[2].innerHTML = ` By: ` + selectedData.By;
            app.children[3].innerHTML = selectedData.Content;
            currentPost = id;
            isLoading = false;
            checkStatus(id);
        })
        .catch(error => console.error(error));

}

function checkStatus(id) {
    if (id === 1) {
        prev.classList.add("disabled");
        console.log("No previous!")
    } else if (id !== 1 && prev.classList.contains("disabled")) {
        prev.classList.remove("disabled");
    }

    if (id === postsNum) {
        next.classList.add("disabled");
        console.log("No next!")
    } else if (id < postsNum && next.classList.contains("disabled")) {
        next.classList.remove("disabled");
    }
}

function numberOfPosts(LENGTH_API) {
    fetch(LENGTH_API)
        .then(response => response.json())
        .then(data => {
            postsNum = data - 1
            console.log(postsNum);
            render(postsNum);
        })
}
function goToPrevious() {

    if (currentPost !== 1) {
        checkStatus(currentPost - 1);
        render(currentPost - 1);
    }
}

function goToNext() {
    if (currentPost !== postsNum) {
        checkStatus(currentPost + 1);
        render(currentPost + 1);
    }
}
numberOfPosts("https://script.google.com/macros/s/AKfycbzTb3fvxFDIJZ4gPo27peZkO1nXsI6HvEf3S5cnqYemdfzs5XL_91m_pxneRNL301Pu/exec");
// console.log(postsNum)
