
document.addEventListener("DOMContentLoaded", () => {
  const recommendations = [
    {
      title: "Beach Paradise",
      description: "Relax on pristine beaches with crystal-clear waters and golden sands.",
      images: ["images/beach1.jpg", "images/beach2.jpg"]
    },
    {
      title: "Temple Retreat",
      description: "Explore ancient temples and discover spiritual heritage with rich architecture.",
      images: ["images/temple1.jpg", "images/temple2.jpg"]
    },
    {
      title: "Country Adventure: Japan",
      description: "Experience cherry blossoms, unique culture, and mouthwatering cuisine.",
      images: ["images/country1.jpg", "images/country2.jpg"]
    }
  ];

  const container = document.getElementById("recommendations");

  if (container) {
    recommendations.forEach((rec) => {
      const section = document.createElement("div");
      section.className = "recommendation";
      section.innerHTML = `
        <h2>${rec.title}</h2>
        <p>${rec.description}</p>
        <div class="recommendation-images">
          <img src="${rec.images[0]}" alt="${rec.title}">
          <img src="${rec.images[1]}" alt="${rec.title}">
        </div>
      `;
      container.appendChild(section);
    });
  }
});
