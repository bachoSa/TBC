const coursesArray = [
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg",
    title: "iOS Development",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg",
    title: "React",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg",
    title: "Intro to Python",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg",
    title: "Advanced Python",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg",
    title: "Advanced Cybersecurity Course",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg",
    title: "ToT - Training of Trainers",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg",
    title: "Blockchain",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg",
    title: "DevOps",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
  {
    cover:
      "https://static.wixstatic.com/media/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg/v1/fill/w_338,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg",
    title: "Information Security Governance",
    status: "რეგისტრაცია დასრულებულია",
    link: "#",
  },
];

const container = document.querySelector(".cards_list");

coursesArray.forEach((item) => {
  const coursesList = `
    <div class="card" 
    style="  display: flex;
    box-sizing: border-box;
    min-width: 250px;
    height: 420px;
    border-radius: 10px;
    border: 1px solid #454545;
    color: var(--text-main);
    overflow: hidden;
    flex-direction: column;
    gap: 40px;
    text-align: left;
    
@media (max-width: 980px) {
  .card{
    gap: 20px;
    min-width: 280px;
    height: 360px!important;
  }
   
}
@media (max-width: 768px) {
 .card{
  gap: 10px;

 }
 
}
@media (max-width: 468px) {
  .card {
    min-width: 230px!important;
  }
 }


    ">
        <img src="${item.cover}" class="card_pic" alt="course"/>
        <div class="card_info">
        <p class="card_title">${item.title}</p>
        <p class="card_status">${item.status}</p>
        </div>
    
        <div class="card_details">
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__00000000-0000-0000-0000-000000000003 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
        <g>
        <path fill="#42AFF3" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
        </g>
        </svg>
        <a href="${item.link}">კურსის დეტალები</a>
        </div>
    </div>
    `;

  container.innerHTML += coursesList;
});
