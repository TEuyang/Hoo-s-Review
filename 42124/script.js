// Function to create and append media items to the DOM
function createMediaItems(items) {
    items.forEach(item => {
      const container = document.createElement('div');
      container.className = `${item.type}-item`;
      container.onclick = () => showDocumentPopup(item.src, item.alt, item.notes);
  
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
  
      const caption = document.createElement('p');
      caption.textContent = item.alt; // Display the alternative text as caption
  
      container.appendChild(img);
      container.appendChild(caption);
  
      document.querySelector(`.${item.type}s .grid-container`).appendChild(container);
    });
  }
  
  // Function to handle the click and show the popup with image and notes
  function showDocumentPopup(src, alt, notes) {
    const popup = document.getElementById('documentPopup');
    const popupImage = document.getElementById('popupImage');
    const popupNotes = document.getElementById('popupNotes');
  
    popupImage.src = src;
    popupImage.alt = alt;
    popupNotes.textContent = notes;
  
    popup.style.display = 'flex'; // Ensure popup is visible
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('documentPopup').style.display = 'none';
  }
  
  // Prevent popup from displaying on page load
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('documentPopup').style.display = 'none';
    // Load media items when the page is fully loaded
    createMediaItems(mediaItems);
  });
  
  // Define media items array (This data could be external or dynamically fetched)
  const mediaItems = [
    {
      type: 'documents',
      src: '/images/Limbic_Page1.jpg',
      alt: 'Limbic Patent',
      notes: 'Some notes here'
    },
    {
      type: 'images',
      src: '/images/wine1.jpeg',
      alt: 'Wine 1',
      notes: 'Full body flavor'
    },
    {
      type: 'images',
      src: '/images/wine2.jpeg',
      alt: 'Wine 2',
      notes: 'Just delicious'
    },
    {
      type: 'videos',
      src: '/images/wine3.jpeg',
      alt: 'Video 1',
      notes: 'Video notes here'
    }
    // More items can be added here
  ];
  