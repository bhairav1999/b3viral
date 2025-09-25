const products = [
  {
    imageSrc: "assets/images/shop/shooes1.jpg",
    altText: "A pair of shoes",
    link: "https://amzn.to/4nGQ6BC",
    linkText: "Amazon.in",
  },
  {
    imageSrc: "assets/images/shop/buds1.webp",
    altText: "A pair of buds",
    link: "https://amzn.to/3VAIXH1",
    linkText: "Amazon.in",
  },
    {
    imageSrc: "assets/images/shop/watch1.jpg",
    altText: "A pair of watch",
    link: "https://amzn.to/3IedxmY",
    linkText: "Amazon.in",
  },
    {
    imageSrc: "assets/images/shop/mic1.jpg",
    altText: "A pair of watch",
    link: "https://amzn.to/4myjUPO",
    linkText: "Amazon.in",
  },

];

const container = document.querySelector(".shop-data"); 

products.forEach(product => {
  const productHTML = `
    <div class="col-lg-3 col-md-2">
      <div class="team-member-item wow fadeInUp">
        <div class="team-image">
          <figure class="image-anime">
            <img src="${product.imageSrc}" alt="${product.altText}">
          </figure>
          <div class="team-social-icon"></div>
        </div>
        <div class="team-content">
          <a href="${product.link}" class="btn-default" target="_blank">${product.linkText}</a>
        </div>
      </div>
    </div>
  `;
  container.innerHTML += productHTML;
});
