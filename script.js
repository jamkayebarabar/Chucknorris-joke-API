const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");
const categorySelect = document.getElementById("categorySelect");


async function loadCategories() {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const categories = await response.json();

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });
}


async function getJoke() {
    const category = categorySelect.value;
    let url = "https://api.chucknorris.io/jokes/random";

    if (category) {
        url += `?category=${category}`;
    }

    jokeText.textContent = "Loading joke... 🤔";

    const response = await fetch(url);
    const data = await response.json();

    jokeText.textContent = data.value;
}

jokeBtn.addEventListener("click", getJoke);

loadCategories();
