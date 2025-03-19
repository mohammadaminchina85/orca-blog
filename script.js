function filterArticles() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const articles = document.querySelectorAll('.article-item');
    articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        article.style.display = text.includes(searchInput) ? 'block' : 'none';
    });
}
