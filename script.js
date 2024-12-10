document.addEventListener("DOMContentLoaded", () => {
    // Add current date and day
    const dateElement = document.getElementById("date");
    const updateDate = () => {
      const now = new Date();
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const formattedDate = now.toLocaleString();
      const day = dayNames[now.getDay()]; // Get the current day name
      dateElement.textContent = `${formattedDate} | ${day}`;
    };
    setInterval(updateDate, 1000);
  
    // Separate arrays for each folder's images
    const allProjects = [
      "Pictures/1.png", "Pictures/2.png", "Pictures/3.png", "Pictures/4.png", "Pictures/5.png", "Pictures/6.png", "Pictures/7.png", "Pictures/8.png", "Pictures/9.png", "Pictures/10.png", "Pictures/11.png", "Pictures/12.png", "Pictures/13.png", "Pictures/14.png", "Pictures/15.png",
      "graphic/1.png",  "graphic/2.png",  "graphic/3.png",  "graphic/4.png",  "graphic/5.png",  "graphic/6.png",  "graphic/7.png",  "graphic/8.png",  "graphic/9.png",  "graphic/10.png",  "graphic/11.png",  "graphic/12.png",  "graphic/13.png",  "graphic/14.png",  "graphic/15.png", 
      "Flyers/1.jpg", "Flyers/2.jpg", "Flyers/3.jpg", "Flyers/4.jpg", "Flyers/5.jpg", "Flyers/6.jpg", "Flyers/7.jpg", "Flyers/8.jpg", "Flyers/9.jpg", "Flyers/10.jpg", "Flyers/11.jpg", "Flyers/12.jpg", "Flyers/13.jpg", "Flyers/14.jpg", "Flyers/15.jpg",
      "Smps/1.png", "Smps/2.png", "Smps/3.png", "Smps/4.png", "Smps/5.png", "Smps/6.png", "Smps/7.png", "Smps/8.png", "Smps/9.png", "Smps/10.png", "Smps/11.png", "Smps/12.png", "Smps/13.png", "Smps/14.png", "Smps/15.png",
      "Company/1.png",  "Company/2.png", "Company/3.png", "Company/4.png", "Company/5.png", "Company/6.png", "Company/7.png", "Company/8.png", "Company/9.png", "Company/10.png", "Company/11.png", "Company/12.png", "Company/13.png", "Company/14.png", "Company/15.png", 
      "Icons/0.png", "Icons/1.png", "Icons/2.png", "Icons/3.png", "Icons/4.png", "Icons/5.png", "Icons/6.png", "Icons/7.png", "Icons/8.png", "Icons/9.png", "Icons/10.png", "Icons/11.png", "Icons/12.png", "Icons/13.png", "Icons/14.png", "Icons/15.png",
    ];
  
    const logoDesigns = [
      "Pictures/1.png", "Pictures/2.png", "Pictures/3.png", "Pictures/4.png", "Pictures/5.png", "Pictures/6.png", "Pictures/7.png", "Pictures/8.png", "Pictures/9.png", "Pictures/10.png", "Pictures/11.png", "Pictures/12.png", "Pictures/13.png", "Pictures/14.png", "Pictures/15.png", "Pictures/16.png", "Pictures/17.png", "Pictures/18.png", "Pictures/19.png", "Pictures/20.png", "Pictures/21.png", "Pictures/22.png", "Pictures/23.png", "Pictures/24.png", "Pictures/25.png", "Pictures/25.png", "Pictures/26.png", "Pictures/27.png", "Pictures/28.png", "Pictures/29.png", "Pictures/30.png", "Pictures/31.png", "Pictures/32.png", "Pictures/33.png", "Pictures/34.png", "Pictures/35.png", "Pictures/36.png", "Pictures/37.png", "Pictures/38.png", "Pictures/39.png", "Pictures/40.png", "Pictures/41.png", "Pictures/42.png", "Pictures/43.png", "Pictures/44.png", "Pictures/45.png", "Pictures/46.png", "Pictures/47.png", "Pictures/48.png", "Pictures/49.png", 
      // Add more paths here
    ];
  
    const graphicsDesigns = [
      "graphic/1.png",  "graphic/2.png",  "graphic/3.png",  "graphic/4.png",  "graphic/5.png",  "graphic/6.png",  "graphic/7.png",  "graphic/8.png",  "graphic/9.png",  "graphic/10.png",  "graphic/11.png",  "graphic/12.png",  "graphic/13.png",  "graphic/14.png",  "graphic/15.png",  "graphic/16.png",  "graphic/17.png",  "graphic/18.png",  "graphic/19.png",  "graphic/20.png",  "graphic/21.png",  "graphic/22.png",  "graphic/23.png",  "graphic/24.png",  "graphic/25.png",  "graphic/26.png",  "graphic/27.png",  "graphic/28.png",  "graphic/29.png",  "graphic/30.png", 
      
      // Add more paths here
    ];
  
    const flyerDesigns = [
      "Flyers/1.jpg", "Flyers/2.jpg", "Flyers/3.jpg", "Flyers/4.jpg", "Flyers/5.jpg", "Flyers/6.jpg", "Flyers/7.jpg", "Flyers/8.jpg", "Flyers/9.jpg", "Flyers/10.jpg", "Flyers/11.jpg", "Flyers/12.jpg", "Flyers/13.jpg", "Flyers/14.jpg", "Flyers/15.jpg", "Flyers/16.jpg", "Flyers/17.jpg", "Flyers/18.jpg", "Flyers/19.jpg", "Flyers/20.jpg", "Flyers/21.jpg", "Flyers/22.jpg", "Flyers/23.jpg", "Flyers/24.jpg", "Flyers/25.jpg", "Flyers/26.jpg", "Flyers/27.jpg", "Flyers/28.jpg", "Flyers/29.jpg", "Flyers/30.jpg", "Flyers/31.jpg", "Flyers/32.jpg", "Flyers/33.jpg", "Flyers/34.jpg", 
      
      // Add more paths here
    ];
  
    const socialMediaPosts = [
      "Smps/1.png", "Smps/2.png", "Smps/3.png", "Smps/4.png", "Smps/5.png", "Smps/6.png", "Smps/7.png", "Smps/8.png", "Smps/9.png", "Smps/10.png", "Smps/11.png", "Smps/12.png", "Smps/13.png", "Smps/14.png", "Smps/15.png", "Smps/16.png", "Smps/17.png", "Smps/18.png","Smps/19.png", "Smps/20.png", "Smps/21.png", "Smps/22.png", "Smps/23.png", "Smps/24.png", "Smps/25.png", "Smps/26.png", "Smps/27.png", "Smps/28.png", "Smps/29.png", "Smps/30.png", "Smps/31.png", "Smps/32.png", "Smps/33.png", "Smps/34.png", "Smps/35.png", "Smps/36.png", "Smps/37.png", "Smps/38.png", "Smps/39.png", "Smps/40.png", "Smps/41.png", "Smps/42.png", "Smps/43.png", "Smps/44.png",
      
      // Add more paths here
    ];

    const businessBrandingAssets = [
      "Company/1.png",  "Company/2.png", "Company/3.png", "Company/4.png", "Company/5.png", "Company/6.png", "Company/7.png", "Company/8.png", "Company/9.png", "Company/10.png", "Company/11.png", "Company/12.png", "Company/13.png", "Company/14.png", "Company/15.png", "Company/16.png", "Company/17.png", "Company/18.png", "Company/19.png", "Company/20.png", "Company/21.png", "Company/22.png", "Company/23.png", "Company/24.png", "Company/25.png", "Company/26.png",
      // Add more paths here
    ];
    
    //const websiteShowcase = [
    //  "Websites/W1.png", "Websites/W2.png", "Websites/W3.png", "Websites/W4.png", "Websites/W1.png", "Websites/W5.png", "Websites/W6.png", "Websites/W7.png", "Websites/W8.png", "Websites/W9.png", "Websites/W10.png", "pdfweb.pdf"//"Websites/W11.png", "Websites/W12.png", "Websites/W13.png", "Websites/W14.png", "Websites/W15.png", "Websites/W16.png",
      // Add more paths here
    //];
    
    const brandingIconsLibrary = [
       "Icons/0.png", "Icons/1.png", "Icons/2.png", "Icons/3.png", "Icons/4.png", "Icons/5.png", "Icons/6.png", "Icons/7.png", "Icons/8.png", "Icons/9.png", "Icons/10.png", "Icons/11.png", "Icons/12.png", "Icons/13.png", "Icons/14.png", "Icons/15.png", "Icons/16.png", "Icons/17.png", "Icons/18.png", "Icons/19.png", "Icons/20.png", "Icons/21.png", "Icons/22.png", "Icons/23.png", "Icons/24.png", "Icons/25.png", "Icons/26.png", "Icons/27.png", "Icons/28.png", "Icons/29.png", "Icons/30.png", "Icons/31.png", "Icons/32.png", "Icons/33.png",
      // Add more paths here
    ];
    
    

  
    // Folder to images mapping
    const folderImages = {
      all: allProjects,
      logo: logoDesigns,
      graphics: graphicsDesigns,
      flyers: flyerDesigns,
      social: socialMediaPosts,
      Business: businessBrandingAssets,
      //website: websiteShowcase,
      BrandingIcons: brandingIconsLibrary
    };
  
    // Modal elements
    const folders = document.querySelectorAll(".folder");
    const modal = document.getElementById("modal");
    const gallery = modal.querySelector(".gallery");
    const closeModal = document.getElementById("closeModal");
    const imageModal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");

  
    // Open folder and show gallery
    folders.forEach(folder => {
      folder.addEventListener("click", () => {
        const folderName = folder.dataset.folder;
        const images = folderImages[folderName] || []; // Get images for the folder
  
        // Open modal and populate gallery
        modal.style.display = "block";
        gallery.innerHTML = "";
  
        images.forEach(imageSrc => {
          const img = document.createElement("img");
          img.src = imageSrc;
          img.alt = `${folderName} image`;
          img.addEventListener("click", () => openImageModal(imageSrc));
          gallery.appendChild(img);
        });
      });
    });
  
    // Close gallery modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Open full-size image modal
    const openImageModal = (src) => {
      fullImage.src = src;
      imageModal.style.display = "flex";
    };
  
    // Close full-size image modal on clicking outside
    imageModal.addEventListener("click", (e) => {
      if (e.target === imageModal) {
        imageModal.style.display = "none";
      }
    });
  });
  