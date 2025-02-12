const apiKey = "xnDtAGLr3oJbQN6/fwj0mA==huORsh7XqS7Iq1Md";
const url = "https://www.api-ninjas.com/api/quotes";

async function getRandomQuote() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { "X-Api-Key": apiKey }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        const quoteText = data[0].quote;

        document.querySelector(".initial-p").innerHTML = `<span>"</span>${quoteText}<span>"</span>`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.querySelector(".initial-p").textContent = "Failed to load quote. Try again!";
    }
}