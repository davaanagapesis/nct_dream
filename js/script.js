function showMember(memberName) {
    const content = document.getElementById("content");
    let profileContent = "";
  
    switch (memberName) {
      case "Mark Lee":
        profileContent = `
          <div class="profile-card">
            <h2>Mark Lee</h2>
            <div class="profile-image">
              <img src="image/A1.jpg" alt="Mark Lee">
            </div>
            <p><strong>Stage Name:</strong> Mark (마크)</p>
            
            <p><strong>Position:</strong> Leader, Main Rapper, Main Dancer, Sub-Vocalist, Face of the Group</p>
          </div>
        `;
        break;
      case "Huang Renjun":
        profileContent = `
          <div class="profile-card">
            <h2>Huang Renjun</h2>
            <div class="profile-image">
              <img src="image/A2.jpg" alt="Huang Renjun">
            </div>
            <p><strong>Stage Name:</strong> Renjun (런쥔)</p>
           
            <p><strong>Position:</strong> Main Vocalist, Lead Dancer</p>
          </div>
        `;
        break;
      case "Lee Jeno":
        profileContent = `
          <div class="profile-card">
            <h2>Lee Jeno</h2>
            <div class="profile-image">
              <img src="image/A3.jpg" alt="Lee Jeno">
            </div>
            <p><strong>Stage Name:</strong> Jeno (제노)</p>
           
            <p><strong>Position:</strong> Lead Dancer, Lead Rapper, Sub-Vocalist, Visual</p>
          </div>
        `;
        break;
      case "Lee Haechan":
        profileContent = `
          <div class="profile-card">
            <h2>Lee Haechan</h2>
            <div class="profile-image">
              <img src="image/A4.jpg" alt="Lee Haechan">
            </div>
            <p><strong>Stage Name:</strong> Haechan (해찬)</p>
           
            <p><strong>Position:</strong> Main Vocalist</p>
          </div>
        `;
        break;
      case "Na Jaemin":
        profileContent = `
          <div class="profile-card">
            <h2>Na Jaemin</h2>
            <div class="profile-image">
              <img src="image/A5.jpg" alt="Na Jaemin">
            </div>
            <p><strong>Stage Name:</strong> Jaemin (재민)</p>
           
            <p><strong>Position:</strong> Lead Dancer, Sub-Rapper, Sub-Vocalist, Visual, Center</p>
          </div>
        `;
        break;
      case "Zhong Chenle":
        profileContent = `
          <div class="profile-card">
            <h2>Zhong Chenle</h2>
            <div class="profile-image">
              <img src="image/A6.jpg" alt="Zhong Chenle">
            </div>
            <p><strong>Stage Name:</strong> Chenle (천러)</p>

            <p><strong>Position:</strong> Main Vocalist</p>
          </div>
        `;
        break;
      case "Park Jisung":
        profileContent = `
          <div class="profile-card">
            <h2>Park Jisung</h2>
            <div class="profile-image">
              <img src="image/A7.jpg" alt="Park Jisung">
            </div>
            <p><strong>Stage Name:</strong> Jisung (지성)</p>

            <p><strong>Position:</strong> Main Dancer, Sub-Vocalist, Sub-Rapper, Maknae</p>
          </div>
        `;
        break;
      default:
        profileContent = `<p>Profile not found.</p>`;
    }
  
    content.innerHTML = profileContent;
  }
  