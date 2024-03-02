import clearStatusClass from "./clearStatusClass.js";

function setStatusClass(el, status) {
    clearStatusClass(el);
    if (status) {
        el.classList.add("correct");
    } else {
        el.classList.add("wrong")
    }
}

export default setStatusClass;