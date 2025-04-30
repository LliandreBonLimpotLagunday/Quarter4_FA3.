const contacts = [];

function addContact() {
  const input = document.getElementById("contact-input");
  const name = input.value.trim();

  if (name === "") return;

  if (contacts.length === 7) {
    contacts.shift();
  }

  contacts.push(name);
  input.value = "";
  displayContacts();
}

function removeContact() {
  contacts.pop(); 
  displayContacts();
}

function displayContacts() {
  const list = document.getElementById("contact-list");
  list.innerHTML = ""; 

  contacts.forEach(contact => {
    const li = document.createElement("li");
    li.textContent = contact;
    list.appendChild(li);
  });
}
