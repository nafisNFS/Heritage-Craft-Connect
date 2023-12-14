const notificationBox = document.querySelector(".notification-box");
const notificationContent = document.querySelector(".notification-content");

notificationBox.addEventListener("click", () => {
    if (notificationContent.style.display === "none" || notificationContent.style.display === "") {
      notificationContent.style.display = "block";
    } else {
      notificationContent.style.display = "none";
    }
});
