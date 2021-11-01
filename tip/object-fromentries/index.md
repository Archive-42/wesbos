
-   [<span class="small">more</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">About</span></span><span class="small">me</span>](https://wesbos.com/about)
-   [<span class="small">the</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Blog</span></span><span class="small">x</span>](https://wesbos.com/blog)
-   <a href="https://wesbos.com/tips" class="current-parent"><span class="small">🔥</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">Tips</span></span><span class="small">real spicy</span></a>
-   [<span class="small">Beginner</span><span class="Headings__HStyles-aur4qp-0 crWyxE"><span class="grit">JavaScript</span></span><span class="small">Notes</span>](https://wesbos.com/javascript)



<span class="grit">Hot Tip</span>
=================================

Deets[over 1 year ago](https://wesbos.com/tip/object-fromentries "View Tip Details")

Tweet

🔥 Object.fromEntries() is a new method for converting Arrays, maps or other iterables into objects

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe3tQo//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAACAwAAAAAAAAAAAAAAAAAQQQABgf/aAAgBAQABPyFytDP/2gAMAwEAAgADAAAAEJQP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QZ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEAAgMBAAAAAAAAAAAAAAERAFEQIUGR/9oACAEBAAE/EErj7rIAmKafmQlnd5//2Q==)

<img src="https://wesbos.com/static/12e02f029d6d734c95691a5de1cc52f8/9a128/EGXUaxUXoAIyoOD.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/12e02f029d6d734c95691a5de1cc52f8/7d800/EGXUaxUXoAIyoOD.jpg 175w,
/static/12e02f029d6d734c95691a5de1cc52f8/89f4f/EGXUaxUXoAIyoOD.jpg 350w,
/static/12e02f029d6d734c95691a5de1cc52f8/9a128/EGXUaxUXoAIyoOD.jpg 700w,
/static/12e02f029d6d734c95691a5de1cc52f8/9a763/EGXUaxUXoAIyoOD.jpg 1050w,
/static/12e02f029d6d734c95691a5de1cc52f8/47498/EGXUaxUXoAIyoOD.jpg 1200w" />

![](data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe3c6UD/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAbEAACAQUAAAAAAAAAAAAAAAAAARARIUFhcf/aAAgBAQABPyHIuQ7MS2UP/9oADAMBAAIAAwAAABCUD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEBAQEAAwAAAAAAAAAAAAERACFRQWGR/9oACAEBAAE/EC3Cz63NGO/BqeP5gol73WBKHvTR5v/Z)

<img src="https://wesbos.com/static/1dad0fdbda9c903c311e2d1920cf0c1d/9a128/EGXUaw-WsAAREqV.jpg" sizes="(max-width: 700px) 100vw, 700px" srcset="/static/1dad0fdbda9c903c311e2d1920cf0c1d/7d800/EGXUaw-WsAAREqV.jpg 175w,
/static/1dad0fdbda9c903c311e2d1920cf0c1d/89f4f/EGXUaw-WsAAREqV.jpg 350w,
/static/1dad0fdbda9c903c311e2d1920cf0c1d/9a128/EGXUaw-WsAAREqV.jpg 700w,
/static/1dad0fdbda9c903c311e2d1920cf0c1d/9a763/EGXUaw-WsAAREqV.jpg 1050w,
/static/1dad0fdbda9c903c311e2d1920cf0c1d/47498/EGXUaw-WsAAREqV.jpg 1200w" />

[**← Prev**](https://wesbos.com/tip/intl-relativetimeformat-format-dates/)

🔥 Use Intl.RelativeTimeFormat() to get nicely formatted relative time strings.

[**Next →**](https://wesbos.com/tip/css-variables-partial-property-update/)

🔥 Use CSS Variables to do partial property overwrites. Handy for CSS properties that only accept multiple values.

### <span class="highlight">Syntax Podcast</span>

Hold on — I'm grabbin' the last one.
