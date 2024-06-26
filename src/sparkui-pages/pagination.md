---
path: "/docs/pagination"
date: "2017-04-10"
title: "Pagination"
---
## Pagination
Pagination is an Angular sparkui component

There are two types of pagination:

### Pagination without text
<div>
  <ul class="c-pagination ng-scope" ng-if="!paginationTitle" role="navigation" aria-label="Pagination">
      <li class="c-pagination__page c-pagination__page-arrow" ng-class="{ 'is-disabled': currentPage === 1 }" ng-click="selectFirstPage()" style=""><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Icons-/-Sort-/-Collapses-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M8.4215686,11.6376687 L11.7486608,8.42267869 C12.0837797,8.09685215 12.0837797,7.57019645 11.7486608,7.24436991 C11.4135419,6.91854336 10.8718663,6.91854336 10.5367474,7.24436991 L6.25133919,11.4109498 C5.91622027,11.7367763 5.91622027,12.263432 6.25133919,12.5892586 L10.5367474,16.7558384 C10.7038783,16.918335 10.9232912,17 11.1427041,17 C11.362117,17 11.5815299,16.918335 11.7486608,16.7558384 C12.0837797,16.4300119 12.0837797,15.9033562 11.7486608,15.5775296 L8.4215686,12.3625396 C8.22140104,12.1691164 8.21593363,11.8500481 8.4093568,11.6498805 C8.41335735,11.6457405 8.41742855,11.6416693 8.4215686,11.6376687 Z M14.4215686,11.6376687 L17.7486608,8.42267869 C18.0837797,8.09685215 18.0837797,7.57019645 17.7486608,7.24436991 C17.4135419,6.91854336 16.8718663,6.91854336 16.5367474,7.24436991 L12.2513392,11.4109498 C11.9162203,11.7367763 11.9162203,12.263432 12.2513392,12.5892586 L16.5367474,16.7558384 C16.7038783,16.918335 16.9232912,17 17.1427041,17 C17.362117,17 17.5815299,16.918335 17.7486608,16.7558384 C18.0837797,16.4300119 18.0837797,15.9033562 17.7486608,15.5775296 L14.4215686,12.3625396 C14.221401,12.1691164 14.2159336,11.8500481 14.4093568,11.6498805 C14.4133574,11.6457405 14.4174286,11.6416693 14.4215686,11.6376687 Z" id="Combined-Shape" fill="currentColor"> </path>
          </g>
        </svg>
      </li>
      <li class="c-pagination__page c-pagination__page-arrow" ng-class="{ 'is-disabled': currentPage === 1 }" ng-click="selectPage(currentPage - 1)">
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Icons-/-Sort-/-left-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M11.4349641,11.6247246 L14.7486608,8.42267869 C15.0837797,8.09685215 15.0837797,7.57019645 14.7486608,7.24436991 C14.4135419,6.91854336 13.8718663,6.91854336 13.5367474,7.24436991 L9.25133919,11.4109498 C8.91622027,11.7367763 8.91622027,12.263432 9.25133919,12.5892586 L13.5367474,16.7558384 C13.7038783,16.918335 13.9232912,17 14.1427041,17 C14.362117,17 14.5815299,16.918335 14.7486608,16.7558384 C15.0837797,16.4300119 15.0837797,15.9033562 14.7486608,15.5775296 L11.4349641,12.3754837 C11.2276477,12.1751526 11.221985,11.844689 11.4223161,11.6373726 C11.4264595,11.6330847 11.4306761,11.6288681 11.4349641,11.6247246 Z" id="Mask" fill="currentColor"></path>
          </g>
        </svg>
      </li>
      <li class="c-pagination__page c-pagination__page-number ng-scope" ng-class="{
          'is-current': page.active,
          'is-disabled': page.disabled
        }" ng-repeat="page in pages" style="">
        <a class="c-pagination__link ng-binding" ng-click="selectPage(page.number)" ng-bind="page.text">1</a>
      </li><!-- end ngRepeat: page in pages --><li class="c-pagination__page c-pagination__page-number ng-scope" ng-class="{
          'is-current': page.active,
          'is-disabled': page.disabled
        }" ng-repeat="page in pages">
        <a class="c-pagination__link ng-binding" ng-click="selectPage(page.number)" ng-bind="page.text">2</a>
      </li><!-- end ngRepeat: page in pages --><li class="c-pagination__page c-pagination__page-number ng-scope is-current" ng-class="{
          'is-current': page.active,
          'is-disabled': page.disabled
        }" ng-repeat="page in pages" style="">
        <a class="c-pagination__link ng-binding" ng-click="selectPage(page.number)" ng-bind="page.text">3</a>
      </li><!-- end ngRepeat: page in pages --><li class="c-pagination__page c-pagination__page-number ng-scope" ng-class="{
          'is-current': page.active,
          'is-disabled': page.disabled
        }" ng-repeat="page in pages">
        <a class="c-pagination__link ng-binding" ng-click="selectPage(page.number)" ng-bind="page.text">4</a>
      </li><!-- end ngRepeat: page in pages --><li class="c-pagination__page c-pagination__page-number ng-scope" ng-class="{
          'is-current': page.active,
          'is-disabled': page.disabled
        }" ng-repeat="page in pages">
        <a class="c-pagination__link ng-binding" ng-click="selectPage(page.number)" ng-bind="page.text">5</a>
      </li><!-- end ngRepeat: page in pages -->
      <li class="c-pagination__page c-pagination__page-arrow" ng-class="{'is-disabled': currentPage === totalPages}" ng-click="selectPage(currentPage + 1)" style="">
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Icons-/-Sort-/-Right-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M11.4349641,11.6247246 L14.7486608,8.42267869 C15.0837797,8.09685215 15.0837797,7.57019645 14.7486608,7.24436991 C14.4135419,6.91854336 13.8718663,6.91854336 13.5367474,7.24436991 L9.25133919,11.4109498 C8.91622027,11.7367763 8.91622027,12.263432 9.25133919,12.5892586 L13.5367474,16.7558384 C13.7038783,16.918335 13.9232912,17 14.1427041,17 C14.362117,17 14.5815299,16.918335 14.7486608,16.7558384 C15.0837797,16.4300119 15.0837797,15.9033562 14.7486608,15.5775296 L11.4349641,12.3754837 C11.2276477,12.1751526 11.221985,11.844689 11.4223161,11.6373726 C11.4264595,11.6330847 11.4306761,11.6288681 11.4349641,11.6247246 Z" id="Mask" fill="currentColor" transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000)"></path>
          </g>
        </svg>
      </li>
      <li class="c-pagination__page c-pagination__page-arrow" ng-class="{'is-disabled': currentPage === totalPages}" ng-click="selectLastPage()">
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Icons-/-Sort-/-Expands-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M8.4304989,11.6290393 L11.7486608,8.42267869 C12.0837797,8.09685215 12.0837797,7.57019645 11.7486608,7.24436991 C11.4135419,6.91854336 10.8718663,6.91854336 10.5367474,7.24436991 L6.25133919,11.4109498 C5.91622027,11.7367763 5.91622027,12.263432 6.25133919,12.5892586 L10.5367474,16.7558384 C10.7038783,16.918335 10.9232912,17 11.1427041,17 C11.362117,17 11.5815299,16.918335 11.7486608,16.7558384 C12.0837797,16.4300119 12.0837797,15.9033562 11.7486608,15.5775296 L8.4304989,12.371169 C8.22556546,12.1731405 8.21996787,11.8464753 8.41799634,11.6415419 C8.42209215,11.6373033 8.42626028,11.6331351 8.4304989,11.6290393 Z M14.4304989,11.6290393 L17.7486608,8.42267869 C18.0837797,8.09685215 18.0837797,7.57019645 17.7486608,7.24436991 C17.4135419,6.91854336 16.8718663,6.91854336 16.5367474,7.24436991 L12.2513392,11.4109498 C11.9162203,11.7367763 11.9162203,12.263432 12.2513392,12.5892586 L16.5367474,16.7558384 C16.7038783,16.918335 16.9232912,17 17.1427041,17 C17.362117,17 17.5815299,16.918335 17.7486608,16.7558384 C18.0837797,16.4300119 18.0837797,15.9033562 17.7486608,15.5775296 L14.4304989,12.371169 C14.2255655,12.1731405 14.2199679,11.8464753 14.4179963,11.6415419 C14.4220921,11.6373033 14.4262603,11.6331351 14.4304989,11.6290393 Z" id="Combined-Shape" fill="currentColor" transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000)"></path>
          </g>
        </svg>
      </li>
    </ul>
  </div>

### Pagination with text
<div items-per-page="1" pagination-title="paginationTitle" total-items="totalItems" current-page="currentPage" max-size="maxSize" class="pagination-sm ng-isolate-scope" boundary-links="true">
  <!-- ngIf: !paginationTitle -->
  <!-- ngIf: paginationTitle --><ul class="c-pagination ng-scope" ng-if="paginationTitle" role="navigation" aria-label="Pagination">
    <li class="c-pagination__page c-pagination__page-arrow is-disabled" ng-class="{'is-disabled': currentPage === 1}" ng-click="selectFirstPage()" style="">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path id="a" d="M13.667 14.506V9.494l2.365-2.307a.57.57 0 0 1 .968.408v8.81a.57.57 0 0 1-.968.408l-2.365-2.307zm-2.08-7.319a.57.57 0 0 1 .969.408v8.81a.57.57 0 0 1-.968.408l-4.355-4.248a.803.803 0 0 1 0-1.13l4.355-4.248z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="b" fill="#fff">
            <use xlink:href="#a"></use>
          </mask>
          <use fill="currentColor" xlink:href="#a"></use>
          <g fill="currentColor" mask="url(#b)">
            <path d="M-2.4-2.4h29v29h-29z"></path>
          </g>
        </g>
      </svg>
    </li>
    <li class="c-pagination__page c-pagination__page-arrow c-pagination__page--previous is-disabled" ng-class="{'is-disabled': currentPage === 1}" ng-click="selectPage(currentPage - 1)" style="">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path id="ad" d="M13.691 7.761L9.709 11.51a.68.68 0 0 0 0 .982l3.982 3.748a.48.48 0 0 0 .809-.35V8.111a.48.48 0 0 0-.809-.35z"></path>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="bc" fill="#fff">
            <use xlink:href="#ad"></use>
          </mask>
          <use fill="currentColor" xlink:href="#ad"></use>
          <g fill="currentColor" mask="url(#bc)">
            <path d="M-2.4-2.4h29v29h-29z"></path>
          </g>
        </g>
      </svg>
    </li>
    <li class="c-pagination__title ng-binding" ng-bind-template="Occurences 1/64">Occurences 1/64</li>
    <li class="c-pagination__page c-pagination__page-arrow c-pagination__page--next" ng-class="{'is-disabled': currentPage === totalItems}" ng-click="selectPage(currentPage + 1)" style="">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path d="M13.6910106,7.7614645 L9.70944933,11.5091248 C9.43018356,11.7806469 9.43018356,12.2195267 9.70944933,12.4910488 L13.6910173,16.2385711 C13.8840567,16.4202633 14.1878367,16.4110645 14.3695288,16.218025 C14.4533346,16.1289853 14.5,16.0113186 14.5,15.8890423 L14.5,8.11098697 C14.5,7.84589029 14.2850967,7.63098697 14.02,7.63098697 C13.8977206,7.63098697 13.780051,7.67765483 13.6910106,7.7614645 Z" id="path-1"></path>
        </defs>
        <g id="Icons-/-Dropdown-/-Right" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <mask id="mask-2" fill="white">
            <use xlink:href="#path-1"></use>
          </mask>
          <use id="Mask" fill="currentColor" transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000)" xlink:href="#path-1"></use>
        </g>
      </svg>
    </li>
    <li class="c-pagination__page c-pagination__page-arrow" ng-class="{'is-disabled': currentPage === totalItems}" ng-click="selectLastPage()" style="">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path d="M13.6666667,14.5057129 L13.6666667,9.49437549 L16.032012,7.18736132 C16.1384697,7.0835289 16.2812908,7.02541219 16.43,7.02541219 C16.7448023,7.02541219 17,7.28060988 17,7.59541218 L17,16.4045874 C17,16.5532927 16.9418862,16.6961105 16.8380585,16.8025675 C16.6182601,17.027932 16.2573843,17.0324443 16.0320198,16.8126459 L13.6666667,14.5057129 Z M11.5875675,7.18736132 C11.6940253,7.0835289 11.8368464,7.02541219 11.9855556,7.02541219 C12.3003579,7.02541219 12.5555556,7.28060988 12.5555556,7.59541218 L12.5555556,16.4045874 C12.5555556,16.5532927 12.4974418,16.6961105 12.3936141,16.8025675 C12.1738157,17.027932 11.8129399,17.0324443 11.5875754,16.8126459 L7.23272147,12.5653494 C6.92242618,12.2527331 6.92242618,11.74743 7.23272147,11.4348137 L11.5875675,7.18736132 Z" id="path-2"></path>
        </defs>
        <g id="Icons-/-Dropdown-/-2-Right" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <mask id="mask-3" fill="white">
            <use xlink:href="#path-2"></use>
          </mask>
          <use id="Mask" fill="currentColor" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000)" xlink:href="#path-2"></use>
        </g>
      </svg>
    </li>
  </ul><!-- end ngIf: paginationTitle -->
</div>

### Pagination button
<button class="c-button c-button--outline-default c-button--large" style="width: 185px;">
  Load More
</button>

## Usage
* pagination component cosistes of `c-pagination`
* no Utilites are added in this component

* Padding inside pagination arrow block 4px from top , left, bottom and right.

* Padding inside pagination number block 8px from top and bottom and centered aligned.

* Hover effect is defualt sky lighter color `#F9FAFC`.
* Selected pagination page color is Blue-Dark `#0089e5`.

* Disabled effect color is Grey Lightest `#F2F2F2`.
