import './styles.css';
import $ from 'jquery';
import makeCard from './src/composant/card';
import dataList from './src/data/cardData';
import { filterDataList } from './src/helper/searchHelper';

const cardContainer = $('#listData');
const searchInput = $('#searchInput');

$(function () {
    dataList.forEach((data) => cardContainer.append(makeCard(data)));

    searchInput.on('keyup', function () {
        cardContainer.empty();
        filterDataList(dataList, $(this).val()).forEach((data) => {
            cardContainer.append(makeCard(data));
        });
    });
});
