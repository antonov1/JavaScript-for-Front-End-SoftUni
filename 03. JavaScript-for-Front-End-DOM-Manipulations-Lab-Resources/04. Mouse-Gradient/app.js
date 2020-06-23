function attachGradientEvents() {
    let el = document.getElementById("gradient");
    let resultEl = document.getElementById("result");
    el.addEventListener("mousemove", location);
    el.addEventListener("mouseleave", reset);

    function location(e) {
        let locX=0;
        locX=Number(e.offsetX)/(e.target.clientWidth - 1);
        let temp=Number(Math.trunc(locX*100))+'%';
        resultEl.textContent=temp;
    }
    function reset() {
        resultEl.textContent="";
    }
}