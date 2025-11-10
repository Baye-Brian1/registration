    const file = document.getElementById("file");
    const image = document.getElementById("profile");
    const icon = document.getElementById("icon");

    file.addEventListener('change', (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        image.src = URL.createObjectURL(selectedFile);
        image.style.display = "block"; 
        icon.style.display = "none";     
      }
    });
