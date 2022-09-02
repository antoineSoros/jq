import './styles.css';
import $ from 'jquery';
import makeCard from './src/composant/card';
import dataList from './src/data/cardData';
import { filterDataList } from './src/helper/searchHelper';
import makeHeader from './src/composant/header';
import { addSearchEvent, makeSearchInput } from './src/composant/searchInput';

const cardContainer = $('#listData');
const searchContainer = $('#searchContainer');
const header = $('#header');
function onChange(val) {
    cardContainer.empty();
    return filterDataList(dataList, val).forEach((data) => {
        cardContainer.append(makeCard(data));
    });
}
$(function () {
    header.append(makeHeader());

    searchContainer.append(makeSearchInput('searchInput', 'Rechercher'));

    addSearchEvent('searchInput', (val) => {
        return onChange(val);
    });

    dataList.forEach((data) => cardContainer.append(makeCard(data)));
});
