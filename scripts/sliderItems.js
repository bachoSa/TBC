const sliderData = [
  {
    url: "https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_492,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png",
    cfg: `    "width: 246px;
height: 74px;
object-fit: cover;
object-position: 50% 50%"`,
  },
  {
    url: "https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_482,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png",
    cfg: `    "width: 241px;
    height: 80px;
    object-fit: cover;
    object-position: 50% 50%"`,
  },
  {
    url: "https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_500,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png",
    cfg: `"width: 250px; height: 45px; object-fit: cover; object-position: 50% 50%"`,
  },
  {
    url: "https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_500,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png",
    cfg: `"width: 250px; height: 45px; object-fit: cover; object-position: 50% 50%"`,
  },
  {
    url: "https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_310,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png",
    cfg: `    "width: 248px;
    height: 71px;
    object-fit: cover;
    object-position: 50% 50%"`,
  },
  {
    url: "https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_234,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png",
    cfg: `    "width: 187px;
    height: 64px;
    object-fit: cover;
    object-position: 50% 50%"`,
  },
  {
    url: "https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_390,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png",
    cfg: `"width: 312px;
    height: 95px;
    object-fit: cover;
    object-position: 50% 50%"`,
  },
  {
    url: "https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_284,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png",
    cfg: `
    "
        width: 227px;
        height: 64px;
        object-fit: cover;
        object-position: 50% 50%"`,
  },
];

const sliders = document.querySelectorAll(".slide");

const populateSlider = (slider, index) => {
  for (let i = 0; i < 3; i++) {
    if (sliderData[index]) {
      const item = sliderData[index];
      const slider_img = `
            <img  src="${item.url}" alt="partners" style=${item.cfg}/>
              `;
      slider.innerHTML += slider_img;
    }
    index++;
  }
};

populateSlider(sliders[0], 0);
populateSlider(sliders[1], 4);
populateSlider(sliders[2], 7);

// Make last slide's content centered
sliders[2].style.justifyContent = "center";
