document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");
  const previewImage = document.getElementById("previewImage");
  const previewTitle = document.getElementById("previewTitle");
  const previewDescription = document.getElementById("previewDescription");

  serviceItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all
      serviceItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      // Update preview content
      const title = item.getAttribute("data-title");
      const desc = item.getAttribute("data-description");
      const img = item.getAttribute("data-image");

      previewTitle.textContent = title;
      previewDescription.textContent = desc;
      previewImage.setAttribute("src", img);
      previewImage.setAttribute("alt", title);
    });
  });
});
