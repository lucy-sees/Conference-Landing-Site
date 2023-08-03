/** Menu bar */
const hambarButton = document.querySelector('.hambar');
const closeButton = document.querySelector('.cross-btn');
const hambarSection = document.querySelector('.ham-popup');

function showMenu() {
  hambarSection.style.display = 'block';
}

function hideMenu() {
  hambarSection.style.display = 'none';
}

hambarButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);

/** Featured speakers section */
const speakerContainer = document.getElementById('speaker-container');
const speakers = [
  {
    image: './images/lucy-cooper.png',
    name: 'Dr. Lucy Cooper',
    status: 'Aviator and Sustainability Advocate: An experienced airline captain passionately advocating for eco-friendly aviation solutions to mitigate environmental impact.',
    experience: 'Spearheaded the development of a supersonic passenger aircraft concept that aims to cut travel time in half across continents.',
  },

  {
    image: './images/alexander-reed.png',
    name: 'Captain Alexander Reed',
    status: 'Aviator and Sustainability Advocate: An experienced airline captain passionately advocating for eco-friendly aviation solutions to mitigate environmental impact.',
    experience: 'Successfully led a fleet-wide initiative to implement fuel-efficient flying techniques, reducing carbon emissions by 20%.',
  },

  {
    image: './images/emily-chen.png',
    name: 'Professor Emily Chen',
    status: 'AI in Aviation Expert: A distinguished professor and AI enthusiast pioneering the integration of artificial intelligence into aviation systems for enhanced safety and efficiency.',
    experience: ' Co-authored groundbreaking research on AI-assisted air traffic control algorithms, recognized by international aviation authorities.',
  },

  {
    image: './images/victor-ramirez.png',
    name: 'Dr. Victor Ramirez',
    status: ' Aerospace Medicine Specialist: A renowned aerospace medicine specialist working on enhancing astronaut health and space travel safety.',
    experience: 'Conducted extensive studies on the effects of microgravity on the human body during long-duration space missions.',
  },

  {
    image: './images/michelle-harris.png',
    name: 'Captain Michelle Harris',
    status: 'Drone Technology Innovator: An accomplished drone pilot and entrepreneur developing cutting-edge drone applications for various industries.',
    experience: 'Received accolades for designing a drone delivery system that improved disaster relief efforts in remote regions.',
  },

  {
    image: './images/samuel-patel.png',
    name: 'Professor Samuel Patel',
    status: 'Futurist and Space Exploration Visionary: A visionary professor exploring possibilities of interstellar travel and human colonization of other planets.',
    experience: 'Published a widely acclaimed paper on the potential utilization of solar sails for long-distance space exploration missions.',
  },

];

function createSpeaker() {
  speakers.forEach((speaker) => {
    const data = `
        <div class="col speaker-card" >
        <div class="row">
            <figure class="col-5 d-flex justify-content-end">
                <img src="./images/orange-tech-image.png" class="chess-square-image position-relative" alt="">
                <img src=${speaker.image} class="rounded-2 speaker-image" alt="">
            </figure>
            <div class="col-7">
                <div class="speaker-about-container">
                    <h2 class="speaker-name">${speaker.name}</h2>
                    <span class="speaker-status">${speaker.status}</span>
                    <div class="small-line"></div>
                    <p class="mt-3 speaker-experience">
                    ${speaker.experience}
                    </p>
                </div>
            </div>
        </div>
    </div>
        `;
    speakerContainer.innerHTML += data;
  });
}

createSpeaker();

// Get the elements for the "More" button, sponsors, and credit sections
const moreButtonSection = document.getElementById('more-button-section');
const sponsorSection = document.getElementById('sponsor-section');
const footerSection = document.getElementById('footer-section');

// Add event listener to the "More" button
moreButtonSection.addEventListener('click', () => {
  // Toggle the visibility of the sponsors section
  sponsorSection.classList.toggle('d-none');
  // Toggle the visibility of the credit section
  footerSection.classList.toggle('d-none');
});
