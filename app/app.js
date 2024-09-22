import * as MODEL from "../model/model.js";

function listAllNames() {
  //   MODEL.getAllNames();
}

function initListeners() {
  // 	console.log("ready", MODEL.fname);
  //   console.log("name", MODEL.getName());
  //   listAllNames();
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    MODEL.changePage(btnID);
    // console.log(btnID);
  });
}

$(document).ready(function () {
  MODEL.changePage("home");
  initListeners();
});
