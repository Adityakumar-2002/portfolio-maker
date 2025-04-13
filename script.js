function generatePortfolio() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill);
    const projects = [
      document.getElementById('project1').value,
      document.getElementById('project2').value,
      document.getElementById('project3').value
    ].filter(p => p.trim() !== "");
  
    let portfolioHTML = `<h2>${name}</h2><p>${bio}</p>`;
    if (experience) {
      portfolioHTML += `<h3>Experience</h3><p>${experience}</p>`;
    }
    if (skills.length) {
      portfolioHTML += `<h3>Skills</h3><ul>`;
      skills.forEach(skill => {
        portfolioHTML += `<li>${skill}</li>`;
      });
      portfolioHTML += `</ul>`;
    }
    if (projects.length) {
      portfolioHTML += `<h3>Projects</h3><ul>`;
      projects.forEach(project => {
        portfolioHTML += `<li>${project}</li>`;
      });
      portfolioHTML += `</ul>`;
    }
  
    document.getElementById('portfolio').innerHTML = portfolioHTML;
  }
  