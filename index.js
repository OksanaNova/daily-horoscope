// MODAL WINDOW

const modalWindow = document.querySelector("#modalWindow");
const btn = document.querySelectorAll(".btn");
const closeBtn = document.querySelector(".close");

// GET DATE

let modalHeading = document.querySelector(".modalHeading");
const myDate = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDays[myDate.getDay()];

let date = myDate.getDate();

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = allMonths[myDate.getMonth()];

let year = myDate.getFullYear();

// GET PREDICT

let modalText = document.querySelector(".modalText");
const predict = [
  "The moon forms a trine with Venus today, encouraging you to embrace your creativity and emotional connections. Let love and beauty guide your actions. As Jupiter aligns with Neptune, you may experience a surge of inspiration and dreams. This evening, the moon's transition into Aquarius brings a fresh perspective and innovative ideas.",
  "Mercury enters a harmonious aspect with Saturn, bringing clarity and structure to your thoughts. Use this time to plan and organize. The sun's alignment with Pluto later today encourages deep self-reflection and transformation. As the moon moves into Pisces, indulge in some introspection and spiritual practice.",
  "Mars squares off with Uranus, sparking unexpected changes and a need for adaptability. Stay flexible and open to new opportunities. Venus's sextile with Neptune later enhances your romantic and artistic pursuits. Tonight, the moon in Aries fuels your ambition and drive.",
  "The sun conjuncts Mercury, highlighting communication and intellectual pursuits. It's a great day for learning and sharing ideas. As Venus trines Jupiter, expect positive developments in your relationships and finances. The moon in Taurus this evening encourages you to seek stability and comfort.",
  "Saturn forms a sextile with Neptune, blending discipline with imagination. Focus on practical steps to achieve your dreams. Mars's conjunction with the moon later brings a boost of energy and determination. This evening, the moon's entry into Gemini sparks curiosity and social interactions.",
  "Jupiter squares Neptune, challenging you to find balance between reality and dreams. Avoid overindulgence and stay grounded. As the moon aligns with Venus, take time for self-care and nurturing your relationships. The moon in Cancer tonight emphasizes home and family connections.",
  "Mercury trines Uranus, bringing innovative ideas and surprising insights. Stay open to new perspectives and embrace change. The sun's sextile with Mars later enhances your confidence and assertiveness. This evening, the moon in Leo encourages you to express your creativity and shine.",
  "The moon conjuncts Neptune, heightening your intuition and sensitivity. Trust your instincts and delve into creative or spiritual pursuits. As Venus opposes Pluto, be mindful of power dynamics in your relationships. The moon's transition into Virgo tonight helps you focus on details and organization.",
  "Mars sextiles Saturn, providing the discipline and drive needed to achieve your goals. Focus on long-term projects and stay committed. The sun's trine with Neptune later enhances your compassion and empathy. The moon in Libra tonight brings a desire for balance and harmony in your interactions.",
  "Mercury squares Pluto, prompting deep and transformative conversations. Be open to exploring hidden truths. As Venus trines Saturn, stability and commitment in relationships are highlighted. The moon in Scorpio tonight intensifies your emotions and intuition.",
  "Jupiter forms a trine with Mercury, expanding your knowledge and communication skills. It's a great day for learning and sharing wisdom. The sun's sextile with Pluto later encourages personal growth and transformation. The moon in Sagittarius tonight sparks a sense of adventure and optimism.",
  "Mars squares Saturn, presenting challenges that require patience and perseverance. Stay focused and disciplined. As Venus aligns with Uranus, embrace spontaneity and excitement in your relationships. The moon in Capricorn tonight brings a focus on ambition and long-term goals.",
  "The sun trines Mars, boosting your confidence and energy. Take action on your goals and pursue your passions. As Mercury aligns with Neptune, allow your imagination to flow and trust your intuition. The moon in Aquarius tonight encourages you to think outside the box.",
  "Saturn opposes Uranus, creating tension between stability and change. Find a balance and be open to new possibilities. As Venus sextiles Neptune, indulge in creative and romantic pursuits. The moon in Pisces tonight enhances your sensitivity and empathy.",
  "Mercury forms a conjunction with Jupiter, expanding your mind and enhancing communication. Share your ideas and seek out new knowledge. The sun's sextile with Saturn later provides a sense of stability and focus. The moon in Aries tonight fuels your drive and determination.",
  "Mars trines Neptune, blending energy with imagination. Pursue your dreams with passion and creativity. As Venus aligns with Pluto, deep and transformative experiences in relationships are highlighted. The moon in Taurus tonight encourages you to seek comfort and stability.",
  "The moon forms a sextile with Saturn, bringing emotional stability and focus. Use this time to connect with your inner self and set intentions. As Mercury squares Mars, be mindful of impulsive communication and conflicts. The moon in Gemini tonight sparks curiosity and social interactions.",
  "Jupiter aligns with Pluto, encouraging profound transformation and growth. Embrace changes and trust the process. As Venus trines Mars, passion and harmony in relationships are highlighted. The moon in Cancer tonight emphasizes emotional connections and nurturing.",
  "Mercury conjuncts Neptune, enhancing intuition and creativity. Allow your imagination to guide you and trust your instincts. As the sun aligns with Uranus, be open to unexpected opportunities and changes. The moon in Leo tonight encourages you to express yourself and have fun.",
  "Mars sextiles Jupiter, boosting your energy and confidence. Take bold actions towards your goals and embrace new opportunities. As Venus opposes Saturn, reflect on relationship boundaries and commitments. The moon in Virgo tonight brings a focus on details and organization.",
  "The sun squares Neptune, challenging you to find clarity and avoid illusions. Stay grounded and trust your intuition. As Mercury trines Saturn, focus on practical communication and planning. The moon in Libra tonight encourages balance and harmony in your interactions.",
  "Jupiter conjuncts Uranus, bringing unexpected opportunities for growth and expansion. Stay open to new possibilities and embrace change. As Venus sextiles Pluto, deep emotional connections are highlighted. The moon in Scorpio tonight intensifies your emotions and intuition.",
  "Mercury forms a sextile with Venus, enhancing your communication skills and bringing harmony to relationships. Share your thoughts and feelings openly. As the sun aligns with Jupiter, embrace optimism and growth. The moon in Sagittarius tonight sparks a sense of adventure and exploration.",
  "Mars squares Pluto, presenting challenges that require determination and resilience. Stay focused and avoid power struggles. As Venus trines Uranus, embrace spontaneity and excitement in your relationships. The moon in Capricorn tonight emphasizes ambition and long-term planning.",
  "The sun forms a conjunction with Saturn, bringing focus and discipline to your goals. It's a great day for planning and organizing. As Mercury aligns with Neptune, trust your intuition and embrace creativity. The moon in Aquarius tonight encourages innovative thinking and social connections.",
  "Jupiter trines Neptune, blending optimism with imagination. Pursue your dreams with confidence and faith. As Venus opposes Mars, balance passion with harmony in your relationships. The moon in Pisces tonight enhances your sensitivity and empathy.",
  "Mars forms a sextile with Saturn, providing the discipline and drive needed to achieve your goals. Focus on long-term projects and stay committed. The sun's trine with Neptune later enhances your compassion and empathy. The moon in Libra tonight brings a desire for balance and harmony in your interactions.",
  "Mercury squares Pluto, prompting deep and transformative conversations. Be open to exploring hidden truths. As Venus trines Saturn, stability and commitment in relationships are highlighted. The moon in Scorpio tonight intensifies your emotions and intuition.",
  "Jupiter forms a trine with Mercury, expanding your knowledge and communication skills. It's a great day for learning and sharing wisdom. The sun's sextile with Pluto later encourages personal growth and transformation. The moon in Sagittarius tonight sparks a sense of adventure and optimism.",
  "Mars squares Saturn, presenting challenges that require patience and perseverance. Stay focused and disciplined. As Venus aligns with Uranus, embrace spontaneity and excitement in your relationships. The moon in Capricorn tonight brings a focus on ambition and long-term goals.",
  "The sun trines Mars, boosting your confidence and energy. Take action on your goals and pursue your passions. As Mercury aligns with Neptune, allow your imagination to flow and trust your intuition. The moon in Aquarius tonight encourages you to think outside the box.",
  "Saturn opposes Uranus, creating tension between stability and change. Find a balance and be open to new possibilities. As Venus sextiles Neptune, indulge in creative and romantic pursuits. The moon in Pisces tonight enhances your sensitivity and empathy.",
  "Mercury forms a conjunction with Jupiter, expanding your mind and enhancing communication. Share your ideas and seek out new knowledge. The sun's sextile with Saturn later provides a sense of stability and focus. The moon in Aries tonight fuels your drive and determination.",
  "Mars trines Neptune, blending energy with imagination. Pursue your dreams with passion and creativity. As Venus aligns with Pluto, deep and transformative experiences in relationships are highlighted. The moon in Taurus tonight encourages you to seek comfort and stability.",
  "The moon forms a sextile with Saturn, bringing emotional stability and focus. Use this time to connect with your inner self and set intentions. As Mercury squares Mars, be mindful of impulsive communication and conflicts. The moon in Gemini tonight sparks curiosity and social interactions.",
  "Jupiter aligns with Pluto, encouraging profound transformation and growth. Embrace changes and trust the process. As Venus trines Mars, passion and harmony in relationships are highlighted. The moon in Cancer tonight emphasizes emotional connections and nurturing.",
  "Mercury conjuncts Neptune, enhancing intuition and creativity. Allow your imagination to guide you and trust your instincts. As the sun aligns with Uranus, be open to unexpected opportunities and changes. The moon in Leo tonight encourages you to express yourself and have fun.",
  "Mars sextiles Jupiter, boosting your energy and confidence. Take bold actions towards your goals and embrace new opportunities. As Venus opposes Saturn, reflect on relationship boundaries and commitments. The moon in Virgo tonight brings a focus on details and organization.",
  "The sun squares Neptune, challenging you to find clarity and avoid illusions. Stay grounded and trust your intuition. As Mercury trines Saturn, focus on practical communication and planning. The moon in Libra tonight encourages balance and harmony in your interactions.",
  "Jupiter conjuncts Uranus, bringing unexpected opportunities for growth and expansion. Stay open to new possibilities and embrace change. As Venus sextiles Pluto, deep emotional connections are highlighted. The moon in Scorpio tonight intensifies your emotions and intuition.",
  "Mercury forms a sextile with Venus, enhancing your communication skills and bringing harmony to relationships. Share your thoughts and feelings openly. As the sun aligns with Jupiter, embrace optimism and growth. The moon in Sagittarius tonight sparks a sense of adventure and exploration.",
  "Mars squares Pluto, presenting challenges that require determination and resilience. Stay focused and avoid power struggles. As Venus trines Uranus, embrace spontaneity and excitement in your relationships. The moon in Capricorn tonight emphasizes ambition and long-term planning.",
  "The sun forms a conjunction with Saturn, bringing focus and discipline to your goals. It's a great day for planning and organizing. As Mercury aligns with Neptune, trust your intuition and embrace creativity. The moon in Aquarius tonight encourages innovative thinking and social connections.",
  "Jupiter trines Neptune, blending optimism with imagination. Pursue your dreams with confidence and faith. As Venus opposes Mars, balance passion with harmony in your relationships. The moon in Pisces tonight enhances your sensitivity and empathy.",
  "Mars forms a sextile with Saturn, providing the discipline and drive needed to achieve your goals. Focus on long-term projects and stay committed. The sun's trine with Neptune later enhances your compassion and empathy. The moon in Libra tonight brings a desire for balance and harmony in your interactions."
]

btn.forEach(function(item) {
  item.addEventListener('click', show);
})

function show() {
    modalWindow.style.display = "block";
    modalHeading.textContent = `${day}` + " " + `${date}` + " " +  `${month}` + " " + `${year}`;
    let randomPredict = predict[Math.floor(Math.random() * predict.length)];
    modalText.textContent = randomPredict;
}

closeBtn.addEventListener('click', function() {
    modalWindow.style.display = "none";
})

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 15
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 170,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });