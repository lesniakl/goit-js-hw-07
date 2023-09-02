import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
renderGallery();

function renderGallery() {
  const galleryContent = [];
  for (let i = 0; i <= galleryItems.length - 1; i++) {
    const newItem = document.createElement("div");
    newItem.classList.add("gallery__item");

    const newLink = document.createElement("a");
    newLink.classList.add("gallery__link");
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

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) return;
  const closeHandler = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: (instance) => gallery.addEventListener("keydown", closeHandler),
      onClose: (instance) =>
        gallery.removeEventListener("keydown", closeHandler),
    }
  );
  instance.show();
});
