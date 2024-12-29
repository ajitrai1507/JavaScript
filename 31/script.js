//Generate a basic insight based on DOB
//Based on Month
const zodiacSigns = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
];

// Compliments array Based on Date size 31
const compliments = [
  "You have an amazing sense of humor!",
  "Your kindness is a balm to all who encounter it.",
  "You are brave and fearless.",
  "Your creativity knows no bounds.",
  "You light up the room wherever you go.",
  "Your positivity is infectious.",
  "You are an incredible friend.",
  "Your determination is inspiring.",
  "You have a great sense of style.",
  "You bring out the best in other people.",
  "You are a fantastic listener.",
  "Your ideas are brilliant.",
  "You are incredibly thoughtful.",
  "You are one of a kind.",
  "You make a difference in the world.",
  "You are so talented.",
  "Your smile brightens everyone’s day.",
  "You are genuinely a good person.",
  "You are a ray of sunshine.",
  "Your laughter is contagious.",
  "You have an amazing outlook on life.",
  "You are so dependable and trustworthy.",
  "You are a wonderful storyteller.",
  "Your presence is a gift to those around you.",
  "You are incredibly hardworking.",
  "You have the best laugh.",
  "You are so full of wisdom.",
  "Your energy is so uplifting.",
  "You are an inspiration to many.",
  "You are so courageous and strong.",
];

//Victim card compliments of size 20

const victimCardCompliments = [
  "You always put others first, but rarely get the same in return.",
  "You give so much, yet people don’t appreciate your efforts.",
  "Your kindness is often taken for granted.",
  "You do so much for others, yet no one notices your struggles.",
  "You always have a shoulder for others, but who’s there for you?",
  "You give without expecting, but it’s time someone gave back to you.",
  "You carry others’ burdens, but no one sees yours.",
  "You’re always there for people, but they don’t seem to be there for you.",
  "You forgive so easily, even when people don’t deserve it.",
  "You work hard behind the scenes, but no one acknowledges it.",
  "You’re a silent hero, unappreciated but irreplaceable.",
  "You endure so much, yet no one knows your pain.",
  "You are so strong, even when others fail to support you.",
  "You are the glue that holds things together, yet you’re overlooked.",
  "You sacrifice your happiness, and people don’t even realize it.",
  "You’re so selfless, but it’s time for someone to put you first.",
  "You help everyone, but who helps you?",
  "You always smile, even when you’re hurting inside.",
  "You give and give, yet you receive so little in return.",
  "You’ve faced so much, but you keep going like a true warrior.",
];

//Recommedations of size 30

const recommendations = [
  "Don't forget to feed the dog.",
  "Take the dog for a walk.",
  "Check if the dog has enough water.",
  "Play fetch with the dog for some exercise.",
  "Clean the dog's feeding bowl.",
  "Ensure the dog’s bed is clean and cozy.",
  "Brush the dog's fur to keep it neat.",
  "Give the dog a bath if needed.",
  "Reward the dog with a treat for good behavior.",
  "Teach the dog a new trick.",
  "Check the dog for ticks or fleas.",
  "Take the dog to the vet for a checkup.",
  "Ensure the dog is up to date on vaccinations.",
  "Spend quality time cuddling with the dog.",
  "Keep the dog's favorite toys within reach.",
  "Trim the dog's nails carefully.",
  "Replace old or damaged dog toys.",
  "Monitor the dog's diet for proper nutrition.",
  "Ensure the dog gets enough outdoor time.",
  "Train the dog with basic commands like sit and stay.",
  "Keep the dog's leash and collar clean.",
  "Rotate the dog's toys to keep them interested.",
  "Plan a fun day at the park with the dog.",
  "Introduce the dog to other friendly pets.",
  "Check the dog’s ears for cleanliness.",
  "Read about the dog's breed-specific care tips.",
  "Keep the dog away from harmful foods.",
  "Set a regular schedule for feeding the dog.",
  "Teach the dog socialization skills.",
  "Reward the dog with love and attention.",
];
//Predictions size of 20
const predictions = [
  "You will become a millionaire like Honey Singh.",
  "A bright and prosperous career awaits you.",
  "You will travel the world and experience new cultures.",
  "Love is just around the corner for you.",
  "Unexpected wealth will come your way soon.",
  "Your hard work will finally pay off in the coming months.",
  "A big opportunity is heading your way—seize it!",
  "Fame and fortune are written in your destiny.",
  "You will inspire millions with your creativity.",
  "Your dream house will become a reality sooner than you think.",
  "You will become a mentor and guide to many.",
  "A surprise encounter will change your life forever.",
  "You are destined to start a successful business.",
  "Great health and happiness are in your future.",
  "You will reconnect with an old friend and create something amazing.",
  "You will achieve a long-standing goal very soon.",
  "An unexpected trip will bring you immense joy.",
  "You are destined to bring positive change to the world.",
  "Financial independence is closer than you think.",
  "You will find your true calling and excel at it.",
];

const form = document.getElementById('astroForm');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const Name = document.getElementById("name").value;
    const surName = document.getElementById('surname').value;

    const day = Number(document.getElementById('day').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    const result = document.getElementById('result');

    const firstMsg = `Hello ${Name} ${surName}.`;
    const secondMsg = `Your zodiac sign is ${zodiacSigns[month-1]}`;
    const thirdMsg = compliments[day-1];
    let index = Math.floor(Math.random()*20);
    const fourthMsg = victimCardCompliments[index];

    index = (Name.length * surName.length * year)%30;
    const fifthMsg = recommendations[index];

    index = (day*month*year)%20;
    const sixthMsg = predictions[index];
    result.innerText= `${firstMsg} ${secondMsg} ${thirdMsg} ${fourthMsg} Our Recommendation for you: ${fifthMsg} Your future prediction is: ${sixthMsg}`;
})
