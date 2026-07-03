export interface CuriosityEntry {
  id: string
  text: string
  link?: string
}

/** A short book premise, mixed into the same finite rotation as trivia facts. */
export const BOOK_PREMISE_ENTRIES: CuriosityEntry[] = [
  {
    id: 'b01',
    text: 'Nineteen Eighty-Four: a man living under a totalitarian state that rewrites history starts to think for himself — and gets noticed.',
    link: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four',
  },
  {
    id: 'b02',
    text: 'Frankenstein: a scientist builds a living creature from dead parts, then abandons it — and the abandonment is the real horror.',
    link: 'https://en.wikipedia.org/wiki/Frankenstein',
  },
  {
    id: 'b03',
    text: 'Pride and Prejudice: two people talk themselves out of liking each other, then have to talk themselves back in.',
    link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice',
  },
  {
    id: 'b04',
    text: 'Dune: a desert planet holds the one resource the whole galaxy depends on, and a teenager inherits the fight over it.',
    link: 'https://en.wikipedia.org/wiki/Dune_(novel)',
  },
  {
    id: 'b05',
    text: 'The Hobbit: a homebody gets talked into a journey he never wanted, and turns out to be good at it anyway.',
    link: 'https://en.wikipedia.org/wiki/The_Hobbit',
  },
  {
    id: 'b06',
    text: 'To Kill a Mockingbird: a child watches her father defend an innocent man in a town that has already decided the verdict.',
    link: 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird',
  },
  {
    id: 'b07',
    text: 'Brave New World: a society engineers happiness so completely that wanting anything else looks like a disease.',
    link: 'https://en.wikipedia.org/wiki/Brave_New_World',
  },
  {
    id: 'b08',
    text: 'Crime and Punishment: a man commits the perfect crime and then can\'t survive what it does to his own mind.',
    link: 'https://en.wikipedia.org/wiki/Crime_and_Punishment',
  },
  {
    id: 'b09',
    text: 'The Great Gatsby: a man builds an entire life as a lure for one person, who isn\'t looking.',
    link: 'https://en.wikipedia.org/wiki/The_Great_Gatsby',
  },
  {
    id: 'b10',
    text: 'One Hundred Years of Solitude: a family keeps repeating the same mistakes across generations, as if the town itself won\'t let them learn.',
    link: 'https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude',
  },
]

/** Facts about attention, algorithms, and the attention economy. */
export const DEINFLUENCING_ENTRIES: CuriosityEntry[] = [
  {
    id: 'd01',
    text: 'The average person touches their phone over 2,600 times a day — and most of those touches weren\'t planned.',
    link: 'https://en.wikipedia.org/wiki/Problematic_smartphone_use',
  },
  {
    id: 'd02',
    text: 'Social media feeds are designed to never end. The infinite scroll was invented in 2006 — its creator later said he regretted it.',
    link: 'https://en.wikipedia.org/wiki/Infinite_scrolling',
  },
  {
    id: 'd03',
    text: 'Every recommendation algorithm optimises for engagement, not wellbeing. Outrage and anxiety are more engaging than calm.',
    link: 'https://en.wikipedia.org/wiki/Social_media_and_mental_health',
  },
  {
    id: 'd04',
    text: '"Deinfluencing" started as a TikTok trend encouraging people not to buy things — on the same platform selling them things.',
  },
  {
    id: 'd05',
    text: 'Variable reward schedules — the same mechanism behind slot machines — are why pull-to-refresh feels satisfying even when nothing new is there.',
    link: 'https://en.wikipedia.org/wiki/Reinforcement#Schedules',
  },
  {
    id: 'd06',
    text: 'The term "attention economy" was coined by Herbert Simon in 1971. He argued that a wealth of information creates a poverty of attention.',
    link: 'https://en.wikipedia.org/wiki/Attention_economy',
  },
  {
    id: 'd07',
    text: 'Notification badges are red for a reason. Red signals urgency in almost every culture — it was a deliberate design choice.',
  },
  {
    id: 'd08',
    text: 'Most social media "likes" don\'t mean much — studies consistently show they correlate poorly with what people actually found valuable.',
  },
  {
    id: 'd09',
    text: 'Your phone\'s screen is calibrated to look more appealing than daylight. The warm yellows and deep blacks are tuned to hold your gaze.',
  },
  {
    id: 'd10',
    text: 'FOMO (fear of missing out) as a concept was defined by a marketing researcher in 1996 — originally to describe a product pitch strategy.',
    link: 'https://en.wikipedia.org/wiki/Fear_of_missing_out',
  },
  {
    id: 'd11',
    text: 'The average attention span hasn\'t shrunk — the "goldfish" study was a marketing deck, not peer-reviewed science.',
    link: 'https://en.wikipedia.org/wiki/Attention_span',
  },
  {
    id: 'd12',
    text: 'Deep boredom — with nothing to fill it — is when the brain consolidates memory and generates ideas. It\'s become rare.',
  },
]

/** Finite — not a feed. Cycles by day, with a couple extra "turn the page" reveals at most. */
export const CURIOSITY_ENTRIES: CuriosityEntry[] = [
  { id: 'c01', text: 'Octopuses have three hearts, and two of them stop beating when they swim.' },
  { id: 'c02', text: 'A day on Venus is longer than its year — it rotates slower than it orbits the sun.' },
  { id: 'c03', text: "Honey found in ancient Egyptian tombs is still edible, thousands of years later." },
  { id: 'c04', text: 'Bananas are berries. Strawberries, technically, are not.' },
  { id: 'c05', text: 'The word "set" has more dictionary meanings than any other English word.' },
  { id: 'c06', text: 'A cloud can weigh over a million pounds and still float.' },
  { id: 'c07', text: 'Wombat droppings are cube-shaped, which keeps them from rolling off logs.' },
  { id: 'c08', text: 'There are more possible chess games than atoms in the observable universe.' },
  { id: 'c09', text: 'Your sense of smell can recall memories faster than any other sense.' },
  { id: 'c10', text: 'Sharks have been around longer than trees.' },
  { id: 'c11', text: 'The Eiffel Tower grows about 6 inches taller in summer from heat expansion.' },
  { id: 'c12', text: "A single bolt of lightning is roughly five times hotter than the sun's surface." },
  { id: 'c13', text: 'Sea otters hold hands while sleeping so they don’t drift apart.' },
  { id: 'c14', text: 'There is a species of jellyfish that can reset its biological clock and return to a juvenile stage.' },
  { id: 'c15', text: 'The Great Wall of China is not, in fact, visible from space with the naked eye.' },
  { id: 'c16', text: 'Some turtles can breathe through their butts when hibernating underwater.' },
  { id: 'c17', text: 'Hot water can sometimes freeze faster than cold water — it’s called the Mpemba effect.' },
  { id: 'c18', text: 'A group of flamingos is called a "flamboyance."' },
  { id: 'c19', text: 'The shortest war in recorded history lasted about 38 minutes.' },
  { id: 'c20', text: 'Your bones are about five times stronger than steel of the same weight.' },
  { id: 'c21', text: 'Antarctica is the largest desert on Earth — deserts are defined by dryness, not heat.' },
  { id: 'c22', text: 'Butterflies can taste with their feet.' },
  { id: 'c23', text: 'There’s enough gold in Earth’s core to coat the whole planet in a layer about knee-deep.' },
  { id: 'c24', text: 'A bolt of lightning strikes the Earth about 8 million times a day.' },
  { id: 'c25', text: 'Some stars you see at night may no longer exist — you’re seeing light from long ago.' },
  { id: 'c26', text: 'The inventor of the Pringles can is buried in one.' },
  { id: 'c27', text: 'Cows have best friends and get stressed when separated from them.' },
  { id: 'c28', text: 'A "jiffy" is an actual unit of time: 1/100th of a second.' },
  { id: 'c29', text: 'Venus is the only planet that spins clockwise — every other planet spins the opposite way.' },
  { id: 'c30', text: 'Humans share about 60% of their DNA with bananas.' },
  { id: 'c31', text: 'It rains diamonds on Jupiter and Saturn, according to atmospheric models.' },
  { id: 'c32', text: 'The Mona Lisa has no eyebrows — they were a fashion trend to shave them off at the time.' },
  { id: 'c33', text: 'Crows can recognize human faces and hold what looks like a grudge for years.' },
  { id: 'c34', text: 'There are more stars in the universe than grains of sand on every beach on Earth.' },
  { id: 'c35', text: 'A single strand of spaghetti is called a "spaghetto."' },
  { id: 'c36', text: 'Polar bears have black skin underneath their fur, which is actually transparent, not white.' },
  { id: 'c37', text: 'The human heart creates enough pressure to squirt blood about 30 feet.' },
  { id: 'c38', text: 'Some species of bamboo can grow nearly a meter in a single day.' },
  { id: 'c39', text: 'Saturn’s moon Enceladus shoots geysers of water into space from its south pole.' },
  { id: 'c40', text: 'Onions can make you cry because of a gas that reacts with the water in your eyes.' },
  ...BOOK_PREMISE_ENTRIES,
  ...DEINFLUENCING_ENTRIES,
]

export function curiosityForIndex(index: number): CuriosityEntry {
  return CURIOSITY_ENTRIES[((index % CURIOSITY_ENTRIES.length) + CURIOSITY_ENTRIES.length) % CURIOSITY_ENTRIES.length]
}

export function curiosityById(id: string | null): CuriosityEntry | null {
  return CURIOSITY_ENTRIES.find((c) => c.id === id) ?? null
}

export const MAX_CURIOSITY_TURNS = 2
