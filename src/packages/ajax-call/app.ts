const button = document.createElement("button");
button.innerText = "Click me";
button.addEventListener("click", () => {
  fetch(
    // "https://dev-webservices.1stcontact.com/crmproxy/api/v5/optionset/lead/new_businessunit"
    //"http://localhost:1180/api/v5/optionset/lead/new_businessunit"
    "https://local-webservices.1stcontact.com/CrmProxy/api/v5/optionset/lead/new_businessunit"
  );
});

document.body.appendChild(button);
