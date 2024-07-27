document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#ferbForm");
    const input = document.querySelector("#text");
    const result = document.querySelector("#result");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        let inp = input.value;
        input.value = "";
        let res = toFerbLatin(inp);
        output(res);
    });

    function toFerbLatin(inp) {
        let arr = inp.split(" ");
        let newArr = arr.map(element => {
            if (element.length <= 2) return element;
            element = element.toLowerCase();
            let el = element.slice(1);
            el += element[0];
            el += "erb";
            if(element[0].toUpperCase()===element[0])
                el = el.charAt(0).toUpperCase() + el.slice(1);
            return el;
        });
        let res = newArr.join(" ");
        return res;
    }

    function output(s) {
        result.textContent = s;
    }
});
