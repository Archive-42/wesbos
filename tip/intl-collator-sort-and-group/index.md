
-   [<span class="small">more</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">About</span></span><span class="small">me</span>](https://wesbos.com/about)
-   [<span class="small">the</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Blog</span></span><span class="small">x</span>](https://wesbos.com/blog)
-   <a href="https://wesbos.com/tips" class="current-parent"><span class="small">🔥</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Tips</span></span><span class="small">real spicy</span></a>
-   [<span class="small">Beginner</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">JavaScript</span></span><span class="small">Notes</span>](https://wesbos.com/javascript)



<span class="grit">Hot Tip</span>
=================================

Deets[over 1 year ago](https://wesbos.com/tip/intl-collator-sort-and-group "View Tip Details")

Tweet

🔥 Use Intl.Collator() to easily sort or group strings regardless of their case or accent

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHMheYH/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFRABAQAAAAAAAAAAAAAAAAAAECH/2gAIAQEAAT8hj//aAAwDAQACAAMAAAAQeC//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAYEAADAQEAAAAAAAAAAAAAAAAAARFB8P/aAAgBAQABPxCirkOY2f/Z)

<img src="https://wesbos.com/static/636fdfd21d9bc34e74aa1fe90e76d37c/9a128/EHp8gO4X0AAw2qL.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/636fdfd21d9bc34e74aa1fe90e76d37c/7d800/EHp8gO4X0AAw2qL.jpg 175w,
/static/636fdfd21d9bc34e74aa1fe90e76d37c/89f4f/EHp8gO4X0AAw2qL.jpg 350w,
/static/636fdfd21d9bc34e74aa1fe90e76d37c/9a128/EHp8gO4X0AAw2qL.jpg 700w,
/static/636fdfd21d9bc34e74aa1fe90e76d37c/9a763/EHp8gO4X0AAw2qL.jpg 1050w,
/static/636fdfd21d9bc34e74aa1fe90e76d37c/47498/EHp8gO4X0AAw2qL.jpg 1200w" />

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3QUD/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/9oACAEBAAE/IcZEf//aAAwDAQACAAMAAAAQdA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAYEAEBAAMAAAAAAAAAAAAAAAABABEhUf/aAAgBAQABPxDBXUcoAF//2Q==)

<img src="https://wesbos.com/static/7c783402778a2a4c521c181d303a7a7f/9a128/EHp-aYQX0AArphl.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/7c783402778a2a4c521c181d303a7a7f/7d800/EHp-aYQX0AArphl.jpg 175w,
/static/7c783402778a2a4c521c181d303a7a7f/89f4f/EHp-aYQX0AArphl.jpg 350w,
/static/7c783402778a2a4c521c181d303a7a7f/9a128/EHp-aYQX0AArphl.jpg 700w,
/static/7c783402778a2a4c521c181d303a7a7f/9a763/EHp-aYQX0AArphl.jpg 1050w,
/static/7c783402778a2a4c521c181d303a7a7f/47498/EHp-aYQX0AArphl.jpg 1200w" />

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3QUD/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/9oACAEBAAE/IcZEf//aAAwDAQACAAMAAAAQdA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAYEAEBAAMAAAAAAAAAAAAAAAABABEhUf/aAAgBAQABPxDBXUcoAF//2Q==)

<img src="https://wesbos.com/static/7c783402778a2a4c521c181d303a7a7f/9a128/EHp-K2PWkAAbNpL.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/7c783402778a2a4c521c181d303a7a7f/7d800/EHp-K2PWkAAbNpL.jpg 175w,
/static/7c783402778a2a4c521c181d303a7a7f/89f4f/EHp-K2PWkAAbNpL.jpg 350w,
/static/7c783402778a2a4c521c181d303a7a7f/9a128/EHp-K2PWkAAbNpL.jpg 700w,
/static/7c783402778a2a4c521c181d303a7a7f/9a763/EHp-K2PWkAAbNpL.jpg 1050w,
/static/7c783402778a2a4c521c181d303a7a7f/47498/EHp-K2PWkAAbNpL.jpg 1200w" />

[**← Prev**](https://wesbos.com/tip/destructure-indexes-for-last-array-item/)

🔥 Here is a neat one! Since arrays are objects, we can destructure their indexes to easily grab the first and last items.

[**Next →**](https://wesbos.com/tip/flatmap/)

🔥 New in ES2019, we have a .flat() method to flatten these types of chunked arrays.

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
