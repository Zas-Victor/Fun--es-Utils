exports.removeAccentsAndSpecialCharacters = (text) => {
    if(!text) return "";
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}