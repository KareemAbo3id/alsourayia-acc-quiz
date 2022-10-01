'use strict';

const local_date_placeholder = document.querySelector('.local-date-placeholder');

// get local machine date time
const date = new Date();
const getDayName = (date = new Date(), locale) => date.toLocaleDateString(locale, { weekday: 'long' });
const stringDate = `${getDayName().toLocaleString()} ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
local_date_placeholder.textContent = stringDate;
