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
    document.getElementById('saveBtn').addEventListener('click', () => {
  const student = {
    name: document.getElementById('name').value,
    matricule: document.getElementById('matricule').value,
    school: document.getElementById('school').value,
    department: document.getElementById('department').value,
    date: document.getElementById('date').value,
    email: document.getElementById('email').value,
    image: image.src
  };

  let students = JSON.parse(localStorage.getItem('students')) || [];
  students.push(student);
  localStorage.setItem('students', JSON.stringify(students));

  const toast = document.getElementById('toast');
  toast.className = 'show';

  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
    window.location.href = 'list.html';
  }, 2000);
});
const students = JSON.parse(localStorage.getItem('students')) || [];
    const listDiv = document.getElementById('studentList');

    students.forEach((s, i) => {
        const imgHtml = s.image && s.image.length > 10
        ? `<img src="${s.image}" alt="Profile" class="student-img">`
        : '';
        
      const studentCard = document.createElement('div');
      studentCard.className = 'student-card';
      studentCard.innerHTML = `
        <img src="${s.image}" alt="Profile" class="student-img">
        <div class="student-info">
          <h3>${s.name}</h3>
          <p><strong>Matricule:</strong> ${s.matricule}</p>
          <div class="more-info">
            <p><strong>School:</strong> ${s.school}</p>
            <p><strong>Department:</strong> ${s.department}</p>
            <p><strong>DOB:</strong> ${s.date}</p>
            <p><strong>Email:</strong> ${s.email}</p>
          </div>
           <button class="more-btn">More</button>
        </div>
      `;
      listDiv.appendChild(studentCard);
    });

    document.querySelectorAll('.more-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const moreInfo = btn.previousElementSibling;
        moreInfo.classList.toggle('show');
        btn.textContent = isVisible ? 'Less' : 'More';
      });
    });
