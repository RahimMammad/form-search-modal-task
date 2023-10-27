const body = document.querySelector("body")
const modalButton = document.createElement("button")
const modal = document.querySelector("#modal")
const searchButton = document.getElementById("searchButton")
const table = document.querySelector("table")

modalButton.classList = ("modalButton")
modalButton.textContent = "Add"
modal.classList.add('modal1')

modalButton.addEventListener("click", () => {
    // document.querySelector("#modal").style.display = "block"
    modal.classList.toggle('active')
})
searchButton.addEventListener("click", (e) => {
    e.preventDefault()

    const newRow = document.createElement("tr")
    const movie = document.createElement('img')
    const fname = document.createElement("td")
    const imdb = document.createElement("td")
    const cat = document.createElement("td")
    const rej = document.createElement("td")
    const editButtonTd = document.createElement("td")
    const deleteButtonTd = document.createElement("td")
    const editButton = document.createElement("button")
    const deleteButton = document.createElement("button")


    movie.classList.add("movieimg")

    const movieimg = document.getElementById("filmimg").value
    const filmAdi = document.getElementById("filmadi").value
    // const filmIMDB = document.getElementById("filmimdb").value
    const category = document.querySelector("#category").value
    const rejissor = document.getElementById("rejissor").value

    movie.src = movieimg
    fname.textContent = filmAdi
    // imdb.textContent = filmIMDB
    cat.textContent = category
    rej.textContent = rejissor
    editButton.textContent = "Edit"
    deleteButton.textContent = "X"

    editButton.addEventListener("click", () => {
        document.getElementById("filmimg").value = movie.src
        document.getElementById("filmadi").value = fname.textContent
        if(imdb.textContent === "1" || imdb.textContent === "2" || imdb.textContent === "3" || imdb.textContent === "4" || imdb.textContent === "5" || imdb.textContent === "6" || imdb.textContent === "7" || imdb.textContent === "8" || imdb.textContent === "9" || imdb.textContent === "10") {
            imdb.textContent = document.getElementById("filmimdb").value
        } else {
            imdb.textContent = ""
        }
        // document.getElementById("filmimdb").value = imdb.textContent
        document.querySelector("#category").value = cat.textContent
        document.getElementById("rejissor").value = rej.textContent
        searchButton.textContent = "Edit"
            searchButton.addEventListener("click",function(){
                searchButton.textContent = "Search"
                newRow.remove()
            })

    })
    deleteButton.addEventListener("click", () => {
        const row = deleteButton.closest("tr");
        row.remove()
    })

    table.append(newRow)
    newRow.append(movie)
    newRow.append(fname)
    newRow.append(imdb)
    newRow.append(cat)
    newRow.append(rej)
    newRow.append(editButtonTd)
    newRow.append(deleteButtonTd)
    editButtonTd.append(editButton)
    deleteButtonTd.append(deleteButton)
})



body.append(modalButton)


























// const modal = document.querySelector("#modal");
// const modalInput = document.querySelector("#input-Modal");

// const movie = document.querySelector("#movie");
// const rejisor = document.querySelector("#rejisor");
// const rating = document.querySelector("#movie-imdb");
// const category = document.querySelector("#category-option");

// const text = document.querySelector("#movie-text");
// const rejText = document.querySelector("#rejisor-text");
// const imdbText = document.querySelector("#image-imdb-text");
// const categoryText = document.querySelector("#category-text");

// const btn = document.createElement("button");
// const submitBtn = document.querySelector("#search");

// const movieTr = document.querySelector(".movie-table-tr");
// const removeBtn = document.querySelector("#delete");
// const editBtn = document.querySelector("#edit");

// btn.classList = "addBtn"
// btn.textContent = "Add"
// document.body.append(btn)

// btn.addEventListener("click", () => {
//     modalInput.style.display = "block"
// })

// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     modal.style.display = "block"
//     text.textContent = movie.value
//     if(rating.value === "1" || rating.value === "2" || rating.value === "3" || rating.value === "4" || rating.value === "5" || rating.value === "6" || rating.value === "7" || rating.value === "8" || rating.value === "9" || rating.value === "10") {
//         imdbText.textContent = rating.value
//     }
//     rejText.textContent = rejisor.value
//     if(category.value !== "Select Category") {
//         categoryText.textContent = category.value
//     }
// })

// removeBtn.addEventListener("click", () => {
//     movieTr.textContent = ""
// })

// editBtn.addEventListener("click", () => {})





