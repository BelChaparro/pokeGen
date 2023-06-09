// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  export function setLocalStorage(key, data) {
    let jsonData;
    try {
      jsonData = JSON.stringify(data);
    } catch (e) {
      console.error(`Error parsing data to JSON: ${e}`);
      return;
    }
    localStorage.setItem(key, jsonData);
  }
  
  
  // set a listener for both touchend and click
  export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
      event.preventDefault();
      callback();
    });
    qs(selector).addEventListener("click", callback);
  }
//create new function getParam that will get the parameter from the URL

export function getParam(param){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pokemon = urlParams.get(param);
  
    return pokemon;
  }
  
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    const htmlStrings = list.map(templateFn);
  
    // if clear is true we need to clear out the contents of the parent.
    if (clear == true) {
      parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
  }
  
  export function renderWithTemplate(template, parentElement, data, callback) {
  
    parentElement.insertAdjacentHTML("afterbegin", template); 
    
    //if there is a callback...call it and pass data
    if(callback) {
      callback(data);
    }
  }