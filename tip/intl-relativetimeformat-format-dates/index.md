
-   [<span class="small">more</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">About</span></span><span class="small">me</span>](https://wesbos.com/about)
-   [<span class="small">the</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Blog</span></span><span class="small">x</span>](https://wesbos.com/blog)
-   <a href="https://wesbos.com/tips" class="current-parent"><span class="small">🔥</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Tips</span></span><span class="small">real spicy</span></a>
-   [<span class="small">Beginner</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">JavaScript</span></span><span class="small">Notes</span>](https://wesbos.com/javascript)



<span class="grit">Hot Tip</span>
=================================

Deets[over 1 year ago](https://wesbos.com/tip/intl-relativetimeformat-format-dates "View Tip Details")

Tweet

🔥 Use Intl.RelativeTimeFormat() to get nicely formatted relative time strings.

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB501l5yDAAf/EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEAAQUCH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABoQAAICAwAAAAAAAAAAAAAAAAABEDERICH/2gAIAQEAAT8hxwcOh3r/AP/aAAwDAQACAAMAAAAQZC/+/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8QY//EABYRAQEBAAAAAAAAAAAAAAAAAAEgIf/aAAgBAgEBPxA1j//EABwQAQADAAIDAAAAAAAAAAAAAAEAETEQoSFRsf/aAAgBAQABPxBpoy8iRS+oq7PhO6PhlvtlvH//2Q==)

<img src="https://wesbos.com/static/f06cba57d11a0ad646b53ca6b3d2aa8b/9a128/EHGWW-xXUAABRGu.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/f06cba57d11a0ad646b53ca6b3d2aa8b/7d800/EHGWW-xXUAABRGu.jpg 175w,
/static/f06cba57d11a0ad646b53ca6b3d2aa8b/89f4f/EHGWW-xXUAABRGu.jpg 350w,
/static/f06cba57d11a0ad646b53ca6b3d2aa8b/9a128/EHGWW-xXUAABRGu.jpg 700w,
/static/f06cba57d11a0ad646b53ca6b3d2aa8b/9a763/EHGWW-xXUAABRGu.jpg 1050w,
/static/f06cba57d11a0ad646b53ca6b3d2aa8b/47498/EHGWW-xXUAABRGu.jpg 1200w" />

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdygEn//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAEFAn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAVEAEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAQABPyEv/9oADAMBAAIAAwAAABD3/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAYEAADAQEAAAAAAAAAAAAAAAAAARExsf/aAAgBAQABPxBeshWsP//Z)

<img src="https://wesbos.com/static/8ffa54a9d586ff9766223bf495841fde/9a128/EHGYWy-WoAAqzuG.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/8ffa54a9d586ff9766223bf495841fde/7d800/EHGYWy-WoAAqzuG.jpg 175w,
/static/8ffa54a9d586ff9766223bf495841fde/89f4f/EHGYWy-WoAAqzuG.jpg 350w,
/static/8ffa54a9d586ff9766223bf495841fde/9a128/EHGYWy-WoAAqzuG.jpg 700w,
/static/8ffa54a9d586ff9766223bf495841fde/9a763/EHGYWy-WoAAqzuG.jpg 1050w,
/static/8ffa54a9d586ff9766223bf495841fde/47498/EHGYWy-WoAAqzuG.jpg 1200w" />

[**← Prev**](https://wesbos.com/tip/intl-datetimeformat-date-formatting/)

🔥 Use Intl.DateTimeFormat() to create nicely formatted date and time strings

[**Next →**](https://wesbos.com/tip/object-fromentries/)

🔥 Object.fromEntries() is a new method for converting Arrays, maps or other iterables into objects

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
