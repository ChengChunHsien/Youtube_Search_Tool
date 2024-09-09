document.getElementById("search-button").addEventListener("click", searchYouTube);
document.getElementById("search-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchYouTube();
    }
});

function searchYouTube() {
    const query = document.getElementById("search-input").value;
    if (query) {
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        window.open(url, "_blank");
    }
}
