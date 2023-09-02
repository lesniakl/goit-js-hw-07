import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
renderGallery();

function renderGallery() {
  const galleryContent = [];
  for (let i = 0; i <= galleryItems.length - 1; i++) {
    const newItem = document.createElement("li");

    const newLink = document.createElement("a");
    newLink.classList.add("gallery__item");
    newLink.href = galleryItems[i].original;

    const newImg = document.createElement("img");
    newImg.classList.add("gallery__image");
    newImg.src = galleryItems[i].preview;
    newImg.dataset.source = galleryItems[i].original;
    newImg.alt = galleryItems[i].description;

    newLink.append(newImg);
    newItem.append(newLink);
    galleryContent.push(newItem);
  }
  gallery.append(...galleryContent);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
