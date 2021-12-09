let cont = document.querySelector(".products");

// IIFE

(async () => {
    const res = await fetch("/api/vegetables");
    const data = await res.json();
    console.log(data)
    cont.innerText = JSON.stringify(data.data);
})();