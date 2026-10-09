const galeriaModal = document.querySelector(".galeria_modal");
const imagenAmpliada = document.querySelector(".galeria_ampliada");

document.querySelectorAll(".whatsapp_boton").forEach((boton) => {
    boton.addEventListener("click", () => {
        window.open(boton.dataset.whatsappUrl, "_blank", "noopener,noreferrer");
    });
});

document.querySelectorAll(".galeria_item").forEach((boton) => {
    boton.addEventListener("click", () => {
        const imagen = boton.querySelector("img");
        imagenAmpliada.src = imagen.src;
        imagenAmpliada.alt = imagen.alt;
        galeriaModal.showModal();
    });
});

document.querySelector(".galeria_cerrar").addEventListener("click", () => {
    galeriaModal.close();
});

galeriaModal.addEventListener("click", (evento) => {
    if (evento.target === galeriaModal) {
        galeriaModal.close();
    }
});