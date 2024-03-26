const questions = document.querySelectorAll(".accordion-title");

questions.forEach((question) => {
    question.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(question.classList)

        questions.forEach((item) => {
            // console.log(item);
            if(item !== question) {
                item.classList.remove("active");
                item.nextElementSibling.style.maxHeight = 0;
            }
        });

        question.classList.toggle("active");
        const accordionBody = question.nextElementSibling;

        if(question.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }else {
            accordionBody.style.maxHeight = 0;
        }
    })
})