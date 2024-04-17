const skill = [
  {
    title: "Android Development",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7zIfGQYIK3VI5P-UMZv0i0Tdn2g3LWiFqB4RhwJ9Lw&s",
    description:
      "I am passionate about android development and enjoy building apps. My aim is to create an apps which are functional and can increase accessibility",
    skills: [
      { name: "Android Studio", logo: "https://pbs.twimg.com/media/FwMqYA-WIA0E6Rw.jpg:large" },
    ],
  },
  {
    title: "Mechanical Engineering",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlRNkBjPFrRrdmsaEjOhwQMRECPekVbZsdQ_LskEk-Q&s",
    description:
      "I began my journey in mechanical engineering, mastering fundamental principles before delving into advanced concepts. My passion ignited through the application of engineering principles to solve complex problems, particularly in areas like mechanics and thermodynamics. As I honed my skills, I found joy in designing innovative solutions and exploring the intricate world of mechanical systems.",
    skills: [
      { name: "Robotics", logo: "https://www.georgebrown.ca/sites/default/files/header-image-16-9/54241/T948-iStock-1364862031.jpg" },
    ],
  },
  {
    title: "Free Time",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhv4KnM1vAzvB2qLAEaYOC83aiVaNbGbZdsg&s",
    description:
      "When I am not indulging myself in the above activities, I usually play football",
    skills: [
      { name: "football", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UIVJY8JSlYNpaPk3MgJjuN4V0fXZIB3b8w&s" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const skill_cont = document.querySelector(".skill_cont");

  skill.forEach(function (skill) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    
    card.setAttribute("data-aos","fade-up");
    card.setAttribute("data-aos-delay","150");
    card.setAttribute("data-aos-duration","1500");

    const logo_cont = document.createElement("div");
    logo_cont.setAttribute("class", "logo_cont");
    const image = document.createElement("img");
    image.setAttribute("src", skill.img);
    image.setAttribute("alt", "logo");
    logo_cont.appendChild(image);

    const card_cont = document.createElement("div");
    card_cont.setAttribute("class", "card_cont");
    const head = document.createElement("h2");
    const text = document.createTextNode(skill.title);
    head.appendChild(text);

    const para = document.createElement("p");
    const text2 = document.createTextNode(skill.description);
    para.appendChild(text2);

    card_cont.appendChild(head);
    card_cont.appendChild(para);

    let skill_div = document.createElement("div");
    skill_div.setAttribute("class", "skill_div");
    skill.skills.forEach((icon)=>{
      let addDiv = document.createElement("div");
      let logo_img_cont = document.createElement("div");
      logo_img_cont.setAttribute("class","logo_img_cont");
      let newImg= document.createElement("img");
      newImg.setAttribute("src",icon.logo);
      newImg.setAttribute("alt","logo");
      let logoDef=document.createElement("p");
      logoDef.setAttribute("class","logoDef");
      let textNde=document.createTextNode(icon.name);
      logoDef.appendChild(textNde);
      logo_img_cont.appendChild(newImg);
      addDiv.appendChild(logo_img_cont);
      addDiv.appendChild(logoDef);
      
      skill_div.appendChild(addDiv);
    });

    card.appendChild(logo_cont);
    card.appendChild(card_cont);
    card_cont.appendChild(skill_div);
    skill_cont.appendChild(card);
  });

  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (checkValidForm()) {
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://httpbin.org/post");
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.error("Error:", xhr.statusText);
        }
      };
      xhr.send(formData);
    }
  });

  function checkValidForm() {
    const isValidName = validName();
    const isValidEmail = validEmail();
    const isValidPostalCode = validPostalCode();
    let isOk = true;

    if(!isValidName){
      form.name.style.border='2px solid red';
      isOk=false;
    }
    if(!isValidEmail){
      form.email.style.border='2px solid red';
      isOk=false;
    }
    if(!isValidPostalCode){
      form.postalCode.style.border='2px solid red';
      isOk=false;
    }
    return isOk;
  }

  function validName(){
    const name=form.name.value;
    const regex=/^[A-Za-z]+((\s)?([A-Za-z])+)*$/;
    return regex.test(name);
  }

  function validEmail(){
    const email=form.email.value;
    const regex=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regex.test(email);
  }

  function validPostalCode(){
    const postalCode= form.postalCode.value;
    let regex = /^[^DFIOQWUZ\d][\d][^DFIOQU\d]\s?[\d][^DFIOQU\d][\d]$/;
    return regex.test(postalCode);
  }
  
  const hiringRadio = document.getElementById("hiring");
  const hourlyRateGroup = document.getElementById("hourlyRateGroup");

  hiringRadio.addEventListener("change", function() {
    if (this.checked) {
      hourlyRateGroup.style.display = "block";
    } else {
      hourlyRateGroup.style.display = "none";
    }
  });

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    if (!this.checkValidity()) {
      event.preventDefault();
    }
  });

  let otherRadio=document.getElementById("other");
  let jobOfferRadio=document.getElementById("jobOffer");
  let SchoolRadio=document.getElementById("School");
  let otherBox=document.querySelector("#otherBox");

  otherRadio.addEventListener('click', () => {
    otherBox.style.visibility = "visible";
  });
  
  jobOfferRadio.addEventListener('click', () => {
    otherBox.style.visibility = "hidden";
  });
  
  SchoolRadio.addEventListener('click', () => {
    otherBox.style.visibility = "hidden"; 
  });
  
});
