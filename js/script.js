function openModal(img, title, description){

    const modal = document.getElementById("modal");

    document.getElementById("modalImage").src = img;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
}

function closeModal(){

    const modal = document.getElementById("modal");

    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}
