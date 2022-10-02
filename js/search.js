const article_search = document.getElementById("article-search");

if (article_search !== null) {
	article_search.addEventListener("input", () => {
		const articles_list = document.getElementById("article-list");
		
		if (articles_list === null) {
			return;
		}
		
		const articles = articles_list.getElementsByTagName("li");
		const search_query = article_search.value.toUpperCase();
		
		for (a of articles) {
			const links = a.getElementsByTagName("a");
			
			if (links === null) {
				return;
			}
			
			const article_name = links[0].innerText;
			
			if (article_name.toUpperCase().indexOf(search_query) !== -1) {
				a.style.display = "";
			} else {
				a.style.display = "none";
			}
		}
	});
}

