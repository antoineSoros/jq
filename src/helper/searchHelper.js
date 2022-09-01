export function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}
export function filterDataList(dataList, searchValue) {
    return dataList.filter(
        (data) =>
            normalizeText(data.title).match(new RegExp(normalizeText(searchValue), 'i')) ||
            normalizeText(data.desc).match(new RegExp(normalizeText(searchValue), 'i')),
    );
}
