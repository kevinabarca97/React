export const GuardarStorage = pelicula => {
    let items = JSON.parse(localStorage.getItem('pelis'));

    if (Array.isArray(items)) {
        items.push(pelicula);
    } else {
        items = [pelicula];
    }
    localStorage.setItem('pelis', JSON.stringify(items));
    return items;
}