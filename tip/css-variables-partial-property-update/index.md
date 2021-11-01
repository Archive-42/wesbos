
-   [<span class="small">more</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">About</span></span><span class="small">me</span>](https://wesbos.com/about)
-   [<span class="small">the</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Blog</span></span><span class="small">x</span>](https://wesbos.com/blog)
-   <a href="https://wesbos.com/tips" class="current-parent"><span class="small">🔥</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Tips</span></span><span class="small">real spicy</span></a>
-   [<span class="small">Beginner</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">JavaScript</span></span><span class="small">Notes</span>](https://wesbos.com/javascript)



<span class="grit">Hot Tip</span>
=================================

Deets[over 1 year ago](https://wesbos.com/tip/css-variables-partial-property-update "View Tip Details")

Tweet

🔥 Use CSS Variables to do partial property overwrites. Handy for CSS properties that only accept multiple values.

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABjLqoi5oDf//EABkQAQEAAwEAAAAAAAAAAAAAAAMCAAEEFP/aAAgBAQABBQJHTSehc5UqjrmjdeQ8IpOf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAgICAwAAAAAAAAAAAAAAAAIBERIhMTNC/9oACAEBAAY/AmjNuTsYtmvZM7PRUWf/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFhkfH/2gAIAQEAAT8hKBAtT6EToXJi4bre52eohwrvLP/aAAwDAQACAAMAAAAQ0P8A/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAwEBPxCMWH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/EKh6f//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQdFxgZH/2gAIAQEAAT8QD00CwFx4fmgaOw21RDO1oDVr4im29eo4ST2G8dT/2Q==)

<img src="https://wesbos.com/static/fcb7fbad50f56512a6b33fcd30db3934/9a128/EF4bgW1XkAM3gAK.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/fcb7fbad50f56512a6b33fcd30db3934/7d800/EF4bgW1XkAM3gAK.jpg 175w,
/static/fcb7fbad50f56512a6b33fcd30db3934/89f4f/EF4bgW1XkAM3gAK.jpg 350w,
/static/fcb7fbad50f56512a6b33fcd30db3934/9a128/EF4bgW1XkAM3gAK.jpg 700w,
/static/fcb7fbad50f56512a6b33fcd30db3934/9a763/EF4bgW1XkAM3gAK.jpg 1050w,
/static/fcb7fbad50f56512a6b33fcd30db3934/47498/EF4bgW1XkAM3gAK.jpg 1200w" />

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwACBf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAES6OEXmjf/xAAbEAACAgMBAAAAAAAAAAAAAAACAwABBBITFP/aAAgBAQABBQJjmUzu2YpkSyxNi8VRKeYf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/AYV//8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8Bh//EAB8QAAEDAwUAAAAAAAAAAAAAAAABAhESITEiMjNhof/aAAgBAQAGPwJyVrk5HGp03FWvPRv8ImT/xAAaEAEAAwADAAAAAAAAAAAAAAABABExEEFh/9oACAEBAAE/IRAYLHil6i7MK2Frj0wTHa8n/9oADAMBAAIAAwAAABDg/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8QEx//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/ELJ1/8QAGxABAQEAAgMAAAAAAAAAAAAAAREA0fEhQXH/2gAIAQEAAT8QOzkHgC7ssIzsErIZq2MQyv3dC5yAKdMejjf/2Q==)

<img src="https://wesbos.com/static/c69d5ebb50bda6167a903e9d4675b485/9a128/EF4cLDQXoAE91f1.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/c69d5ebb50bda6167a903e9d4675b485/7d800/EF4cLDQXoAE91f1.jpg 175w,
/static/c69d5ebb50bda6167a903e9d4675b485/89f4f/EF4cLDQXoAE91f1.jpg 350w,
/static/c69d5ebb50bda6167a903e9d4675b485/9a128/EF4cLDQXoAE91f1.jpg 700w,
/static/c69d5ebb50bda6167a903e9d4675b485/9a763/EF4cLDQXoAE91f1.jpg 1050w,
/static/c69d5ebb50bda6167a903e9d4675b485/47498/EF4cLDQXoAE91f1.jpg 1200w" />

[**← Prev**](https://wesbos.com/tip/object-fromentries/)

🔥 Object.fromEntries() is a new method for converting Arrays, maps or other iterables into objects

[**Next →**](https://wesbos.com/tip/clear-301-redirect/)

🔥 If you have a pesky 301 redirect that won't clear, open dev tools and load the page with the "disable cache"

Log this in your head for later, you'll need it like I just did 😃

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
