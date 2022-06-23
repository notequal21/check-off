import * as functions from "./modules/functions.js";
import './modules/jquery-1.11.0.min.js'
import './modules/jquery.mCustomScrollbar.min.js'
import './modules/mousewheel.js'
// import $ from "jquery";
// import "malihu-custom-scrollbar-plugin"
// import PerfectScrollbar from 'perfect-scrollbar';

// functions.isWebp()
functions.mCustomScrollbar()
functions.langDropDown()
functions.modal()

// (function () {
//   $(window).on("load", function () {
//     $(".custom-scroll").mCustomScrollbar({
//       theme: "dark",
//       mouseWheel: { enable: true },
//       scrollButtons: { enable: true }
//     });
//   });
// })();

// const ps = new
//   PerfectScrollbar('.custom-scroll', {
//     wheelSpeed: 0.7,
//     swipeEasing: true,
//   });

// ps.update();

// document.querySelector('.custom-scroll').addEventListener('ps-scroll-x', () => {
//   console.log(123);
// });