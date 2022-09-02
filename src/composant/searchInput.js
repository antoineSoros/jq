import $ from 'jquery';

export function makeSearchInput(searchId, placeHolder) {
    const searchPlaceHolder = placeHolder ?? 'Search';
    return `  <input id="${searchId}" placeholder="${searchPlaceHolder}" type="search" />`;
}
export function addSearchEvent(searchId, onChange) {
    return $(`#${searchId}`).on('keyup', function () {
        onChange($(this).val());
    });
}
