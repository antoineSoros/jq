import './styles.css';
import $ from 'jquery';
import makeCard from './src/composant/card';
import dataList from './src/data/cardData';
import { filterDataList } from './src/helper/searchHelper';
import makeHeader from './src/composant/header';

const cardContainer = $('#listData');
const searchInput = $('#searchInput');
const header = $('#header');
$(function () {
    header.append(makeHeader());
    dataList.forEach((data) => cardContainer.append(makeCard(data)));

    searchInput.on('keyup', function () {
        cardContainer.empty();
        filterDataList(dataList, $(this).val()).forEach((data) => {
            cardContainer.append(makeCard(data));
        });
    });
});
