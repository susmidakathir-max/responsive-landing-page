const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for visiting TechNova!");
    });
});