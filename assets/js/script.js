function setNewGalleryImage(imgs) {
  // Get the expanded image
  const expandImg = document.getElementById("expandedImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  expandImg.alt = imgs.alt;
}
