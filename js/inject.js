document.addEventListener("DOMContentLoaded", () => {
    const loadComponent = async (id, file) => {
        const el = document.getElementById(id);
        if (el) {
            const res = await fetch(file);
            const html = await res.text();
            el.innerHTML = html;
        }
    };

    loadComponent("header", "components/menu.html");
});
