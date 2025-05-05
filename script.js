function sortTable(n) {
  const table = document.getElementById("pointsTable");
  let rows = Array.from(table.rows).slice(1);
  let switching = true;
  let dir = "asc";

  while (switching) {
    switching = false;
    let shouldSwitch;

    for (let i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;

      let x = rows[i].getElementsByTagName("TD")[n];
      let y = rows[i + 1].getElementsByTagName("TD")[n];

      let xContent = isNaN(x.innerHTML) ? x.innerHTML.toLowerCase() : parseFloat(x.innerHTML);
      let yContent = isNaN(y.innerHTML) ? y.innerHTML.toLowerCase() : parseFloat(y.innerHTML);

      if ((dir === "asc" && xContent > yContent) || (dir === "desc" && xContent < yContent)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    } else if (dir === "asc") {
      dir = "desc";
      switching = true;
    }
  }
}

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

