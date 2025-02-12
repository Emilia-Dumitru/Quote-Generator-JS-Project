async function getRandomQuote() {
    try {
        const response = await fetch("http://api.quotable.io/random"); 

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        document.querySelector(".initial-p").innerHTML = `<span>"</span>${data.content}<span>"</span>`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.querySelector(".initial-p").textContent = "Failed to load quote. Try again!";
    }
}
