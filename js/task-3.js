const inPut = document.querySelector("#name-input");
const outPut= document.querySelector("#name-output");
inPut.addEventListener("input", (event) => {
    outPut.textContent = event.currentTarget.value.trim();
    if(outPut.textContent.length === 0) {
        outPut.textContent = "Anonymous";
    }
})
