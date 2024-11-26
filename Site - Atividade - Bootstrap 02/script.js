
// 0.0 - Script para direcionar a tela de rolamento automaticamente até o Modal
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um event listener para capturar cliques no iframe
    const iframe = document.querySelector("iframe#Catalogo");

    iframe.addEventListener("load", () => {
        const iframeDoc = iframe.contentWindow.document;

        iframeDoc.querySelectorAll("[data-bs-toggle='modal']").forEach((modalTrigger) => {
            modalTrigger.addEventListener("click", () => {
                iframe.scrollIntoView({ behavior: "smooth", block: "center" });
            });
        });
    });
});
