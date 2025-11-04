const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function saveToLocalStorage() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function renderBookmarks() {
  list.innerHTML = ""; 

  bookmarks.forEach((url, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = url;

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = () => {
      const newUrl = prompt("Введіть нову адресу:", url);
      if (newUrl) {
        bookmarks[index] = newUrl;
        saveToLocalStorage();
        renderBookmarks();
      }
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.classList.add("delete");
    delBtn.onclick = () => {
      bookmarks.splice(index, 1);
      saveToLocalStorage();
      renderBookmarks();
    };

    const buttonsDiv = document.createElement("div");
    buttonsDiv.append(editBtn, delBtn);
    li.append(link, buttonsDiv);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const url = input.value.trim();

  if (!url) {
    alert("Будь ласка, введіть URL!");
    return;
  }

  bookmarks.push(url);
  saveToLocalStorage();
  renderBookmarks();
  input.value = ""; 
});

renderBookmarks();
