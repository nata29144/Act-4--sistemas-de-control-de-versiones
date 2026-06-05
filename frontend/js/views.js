export async function loadView(name) {
    const response = await fetch(`../views/${name}.html`);
    if (!response.ok) {
        throw new Error(`No se pudo cargar la vista ${name}`);
    }
    return response.text();
}
