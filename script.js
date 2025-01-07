// script.js

// عناصر HTML
const modeStatus = document.getElementById("mode-status");
const activateBtn = document.getElementById("activate-btn");
const deactivateBtn = document.getElementById("deactivate-btn");

// تفعيل مود الكبراته
function activateMode() {
    modeStatus.textContent = "مفعل";
    modeStatus.style.color = "green";
    alert("تم تفعيل مود الكبراته!");
}

// إلغاء تفعيل مود الكبراته
function deactivateMode() {
    modeStatus.textContent = "ملغى";
    modeStatus.style.color = "red";
    alert("تم إلغاء تفعيل مود الكبراته!");
}
