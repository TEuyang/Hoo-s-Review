function showDocumentPopup(src, alt, notes) {
  var popup = document.getElementById('documentPopup');
  var img = document.getElementById('popupImage');
  var notesDiv = document.getElementById('popupNotes');

  img.src = src;
  img.alt = alt;
  notesDiv.innerHTML = notes;

  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById('documentPopup');
  popup.style.display = "none";
}

document.getElementById('documentPopup').style.display = 'none'; // This line should be inside a function or properly controlled to ensure it doesn't run unexpectedly.
