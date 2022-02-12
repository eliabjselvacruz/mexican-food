import {
  onGetMexicanMenu,
  onGetMenuCombo,
  onGetMenuCarte,
  onGetMenuExtra,
  onGetMenuDrink,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
} from "./firebase.js";

const taskForm = document.getElementById("task-form");
const mexicanMenuTable = document.getElementById("mexican-menu-table");
const menuComboTable = document.getElementById("menu-combo-table");
const menuCarteTable = document.getElementById("menu-carte-table");
const menuExtraTable = document.getElementById("menu-extra-table");
const menuDrinkTable = document.getElementById("menu-drink-table");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
  
  onGetMexicanMenu((querySnapshot) => {
    let html = '';
    mexicanMenuTable.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const food = doc.data();
      html += `
          <tr>
            <td>${food.nombreplatillo}</td>
            <td>C$ ${food.precio}</td>
          </tr>`;
      mexicanMenuTable.innerHTML = html;
    });
  });

  onGetMenuCombo((querySnapshot) => {
    let html = '';
    menuComboTable.innerHTML = "";
    querySnapshot.forEach((doc) => {
      let food = doc.data();
      html += `
          <tr>
            <td>${food.nombreplatillo}</td>
            <td>C$ ${food.precio}</td>
          </tr>`;
      menuComboTable.innerHTML = html;
    });
  });

  onGetMenuCarte((querySnapshot) => {
    let html = '';
    menuCarteTable.innerHTML = "";
    querySnapshot.forEach((doc) => {
      let food = doc.data();
      html += `
          <tr>
            <td>${food.nombreplatillo}</td>
            <td>C$ ${food.precio}</td>
          </tr>`;
      menuCarteTable.innerHTML = html;
    });
  });

  onGetMenuExtra((querySnapshot) => {
    let html = '';
    menuExtraTable.innerHTML = "";
    querySnapshot.forEach((doc) => {
      let food = doc.data();
      html += `
          <tr>
            <td>${food.nombreplatillo}</td>
            <td>C$ ${food.precio}</td>
          </tr>`;
      menuExtraTable.innerHTML = html;
    });
  });

  onGetMenuDrink((querySnapshot) => {
    let html = '';
    menuDrinkTable.innerHTML = "";
    querySnapshot.forEach((doc) => {
      let food = doc.data();
      html += `
          <tr>
            <td>${food.nombrebebida}</td>
            <td>C$ ${food.precio}</td>
          </tr>`;
      menuDrinkTable.innerHTML = html;
    });
  });

});