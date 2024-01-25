const tr = document.querySelector("tr");

["1", "2", "3"].forEach((name) => {
    const td = document.createElement("td");
    td.textContent = name;
    tr.appendChild(td);

    td.addEventListener("click", (e) => {
        alert("준비 중 입니다.");
        // 또는 다른 동작을 수행
    });
});
