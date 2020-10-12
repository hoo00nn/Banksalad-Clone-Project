export const $ = (selector, base = document) => base.querySelector(selector);
export const $$ = (selector, base = document) => base.querySelectorAll(selector);
export const getPath = (e) => e.view.location.pathname;
