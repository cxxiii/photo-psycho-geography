// GALLERY DATA CONSTANTS

const GALLERIES = {
  dirName: 'Galleries',
  0: {
    dirName: 'Botanical',
    imgs: [
      {
        file: 'b1.jpg',
        title: 'Stations of Life.',
      },
      { file: 'b2.jpg', title: 'Determination.' },
      { file: 'b3.jpg', title: 'The Yearning.' },
      { file: 'b5.jpg', title: 'Grief.' },
      { file: 'b6.jpg', title: 'Sadness.' },
      { file: 'b7.jpg', title: 'Daring to bloom.' },
      { file: 'b8.jpg', title: 'Procrastination.' },
      { file: 'b11.jpg', title: 'Hope.' },
      { file: 'b12.jpg', title: 'The inner light of the fragile.' },
      { file: 'b14.jpg', title: 'Little lanterns of hope.' },
      { file: 'b16.jpg', title: 'Into the light!' },
      { file: 'b17.jpg', title: 'Resilience.' },
      { file: 'b18.jpg', title: 'Tenderness.' },
      {
        file: 'b19.jpg',
        title: '"True strength is delicate" (Louise Nevelson)',
      },
      { file: 'b20.jpg', title: 'Thriving after surviving.' },
      { file: 'b21.jpg', title: 'The power of goodbye.' },
      { file: 'b22.jpg', title: 'Modesty.' },
      { file: 'b23.jpg', title: 'Self-Confidence.' },
      { file: 'b24.jpg', title: 'Realm of the unconscious.' },
      { file: 'b25.jpg', title: 'Narcissistic flattery.' },
      { file: 'b26.jpg', title: 'Delusion.' },
      { file: 'b27.jpg', title: 'Introversion.' },
      { file: 'b28.jpg', title: 'In transition.' },
    ],
  },
  1: {
    dirName: 'Finland',
    imgs: [
      {
        file: 'f1.jpg',
        title: 'Departure',
        location: 'Baltic Sea near Kemiönsaari',
      },
      {
        file: 'f2.jpg',
        title: 'Kiss your memory goodbye',
        location: 'Huskar Island, Baltic Sea, Southern finish archipelago',
      },
      {
        file: 'f4.jpg',
        title: 'Radical Acceptance',
        location: 'Angelniemi, Kemiönsaari',
      },
      { file: 'f6.jpg', title: 'Neglect', location: 'Gräsböle, Kemiönsaari' },
      { file: 'f7.jpg', title: 'Peace of mind', location: 'Kemiönsaari' },
      {
        file: 'f8.jpg',
        title: "Don't run away from pain",
        location: 'Kemiönsaari',
      },
      { file: 'f9.jpg', title: 'Grandiosity', location: 'Kemiönsaari' },
      { file: 'f11.jpg', title: 'Stubbornness', location: 'Kemiönsaari' },
      {
        file: 'f13.jpg',
        title: 'I must stay true to myself and take my own path all the way',
        location: 'Haapalehto Forest, Oulu',
      },
      { file: 'f15.jpg', title: 'Disorientation', location: 'Oulujoki, Oulu' },
      {
        file: 'f17.jpg',
        title:
          '"To know the dark, go dark. Go without sight, and find that the dark, too, blooms and sings"',
        location: 'Kemiönsaari',
      },
      {
        file: 'f18.jpg',
        title: 'Even if stranded, make a home',
        location: 'Huskar Island, Baltic Sea, Southern finnish archipelago',
      },
      { file: 'f19.jpg', title: 'Let it all out', location: 'Toppila, Oulu' },
      {
        file: 'f20.jpg',
        title: 'Exposed',
        location: 'Huskar Island, Baltic Sea, Southern finnish archipelago',
      },
      { file: 'f21.jpg', title: 'Optimism', location: 'Kemiönsaari' },
      { file: 'f22.jpg', title: 'Stagnation', location: 'Oulujoki, Oulu' },
      {
        file: 'f24.jpg',
        title: '"Throw your pain in the river" (P.J. Harvey, The River)',
        location: 'Oulujoki, Oulu',
      },
      { file: 'f25.jpg', title: 'Threat', location: 'Kemiönsaari' },
      {
        file: 'f26.jpg',
        title: 'Depression',
        location: 'Huskar Island, Baltic Sea, Southern finnish archipelago',
      },
    ],
  },
  2: {
    dirName: 'Forest',
    imgs: [
      {
        file: 'fo1.jpg',
        title: 'Confusion.',
      },
      { file: 'fo3.jpg', title: 'Stagnation.' },
      { file: 'fo4.jpg', title: 'My shadow self.' },
      { file: 'fo5.jpg', title: 'Resilience.' },
      { file: 'fo6.jpg', title: 'Power of will.' },
      { file: 'fo7.jpg', title: 'Withdrawal.' },
      { file: 'fo8.jpg', title: 'Focussed.' },
      { file: 'fo10.jpg', title: 'Defeat.' },
      { file: 'fo12.jpg', title: 'Boredom.' },
      { file: 'fo13.jpg', title: 'Doubt.' },
      { file: 'fo14.jpg', title: 'Lament.' },
      { file: 'fo15.jpg', title: '"The trouble I\'ve seen."' },
      { file: 'fo17.jpg', title: 'Resignation.' },
      { file: 'fo18.jpg', title: 'Sometimes the path is hard to find.' },
      {
        file: 'fo19.jpg',
        title:
          '"Now die to yourself. To your idea of yourself. Everything you think you are, you’re not. What’s left, find out."',
      },
      { file: 'fo20.jpg', title: 'Lonership.' },
      { file: 'fo22.jpg', title: 'The certainty of uncertainty.' },
    ],
  },
  3: {
    dirName: 'Ireland',
    imgs: [
      { file: 'irl2.jpg', title: 'Fear', location: 'Dingle Peninsula' },
      { file: 'irl4.jpg', title: 'Restlessness', location: 'Dingle Peninsula' },
      { file: 'irl6.jpg', title: 'Stagnation', location: 'Dingle Peninsula' },
      { file: 'irl7.jpg', title: 'Exhaustion', location: 'Dingle Peninsula' },
      { file: 'irl8.jpg', title: 'Self-control', location: 'Dingle Peninsula' },
      {
        file: 'irl9.jpg',
        title: 'Let go, let go',
        location: 'Dingle Peninsula',
      },
      { file: 'irl10.jpg', title: 'Overwhelmed', location: 'Dingle Peninsula' },
      { file: 'irl11.jpg', title: 'Temptation', location: 'Dingle Peninsula' },
      { file: 'irl12.jpg', title: 'Lust', location: 'Dingle Bay' },
      { file: 'irl13.jpg', title: 'Monotony', location: 'Dingle Peninsula' },
      {
        file: 'irl14.jpg',
        title: 'Determination',
        location: 'Old Conor Pass Road, Dingle ',
      },
      {
        file: 'irl15.jpg',
        title:
          '"Il n\'y a pas d\'amour de vivre sans désespoir de vivre" (Albert Camus)',
        location: 'Dingle Peninsula',
      },
      {
        file: 'irl16.jpg',
        title: 'Weathered',
        location: 'Castlegregory, Dingle Peninsula',
      },
      {
        file: 'irl17.jpg',
        title: 'Melancholia',
        location: 'Conor Pass, Dingle Peninsula',
      },
      {
        file: 'irl19.jpg',
        title: 'Isolation',
        location: 'Skellig Michael, Co. Kerry',
      },
      { file: 'irl21.jpg', title: 'Anger', location: 'Atlantic Ocean' },
      {
        file: 'irl22.jpg',
        title: 'Loss',
        location: 'Great Famine Memorial & Burial Ground, Dingle Peninsula',
      },
      {
        file: 'irl23.jpg',
        title: 'Serenity',
        location: 'St. James Cementry, Dingle',
      },
      { file: 'irl25.jpg', title: 'Coming home', location: 'Brandon bay' },
      { file: 'irl26.jpg', title: 'Healing', location: 'Dingle Peninsula' },
      {
        file: 'irl28.jpg',
        title: '"There\'s a light that never goes out"',
        location: 'Dingle Peninsula',
      },
      { file: 'irl29.jpg', title: 'Tenderness', location: 'Dingle Peninsula' },
      { file: 'irl30.jpg', title: 'Hope', location: 'Dingle Peninsula' },
      {
        file: 'irl31.jpg',
        title: 'Assimilation',
        location: 'Dingle Peninsula',
      },
      { file: 'irl32.jpg', title: 'Blocked', location: 'Dingle Peninsula' },
      { file: 'irl35.jpg', title: 'Trust', location: 'Dingle Harbour Bay' },
      { file: 'irl36.jpg', title: 'Grief', location: 'Dingle Harbour Bay' },
      {
        file: 'irl37.jpg',
        title: 'Introversion',
        location: 'Dingle Peninsula',
      },
      { file: 'irl39.jpg', title: 'Rage', location: 'Dingle Peninsula' },
      { file: 'irl40.jpg', title: 'Regression', location: 'Dingle' },
      { file: 'irl41.jpg', title: 'Thriving', location: 'Dingle Peninsula' },
      { file: 'irl43.jpg', title: 'Sorrow', location: 'Dingle Bay' },
      { file: 'irl44.jpg', title: 'Defiance', location: 'Dingle' },
      {
        file: 'irl46.jpg',
        title: 'The pale empty colour of the past',
        location: 'Dingle Peninsula',
      },
      {
        file: 'irl49.jpg',
        title: 'Synchronicity',
        location: 'Dingle Peninsula',
      },
      { file: 'irl50.jpg', title: 'Taken', location: 'Dingle Peninsula' },
      { file: 'irl52.jpg', title: 'Anger', location: 'Dingle Peninsula' },
      {
        file: 'irl53.jpg',
        title: 'Freedom',
        location: 'Dingle Bay, Co. Kerry',
      },
      {
        file: 'irl54.jpg',
        title: 'A worried mind',
        location: 'Dingle Peninsula',
      },
      {
        file: 'irl55.jpg',
        title: 'Indecision clouds my vision',
        location: 'Dingle Peninsula',
      },
    ],
  },
  4: {
    dirName: 'Psycho',
    imgs: [
      {
        file: 'p1.jpg',
        title: 'There is a ghost.',
      },
      { file: 'p3.jpg', title: 'Self-protection.' },
      { file: 'p4.jpg', title: 'Depression.' },
      {
        file: 'p5.jpg',
        title:
          'William Blake: Am I going to die? – Nobody: The circle of life has no ending. (Tribute to DEAD MAN by Jim Jarmusch)',
      },
      { file: 'p6.jpg', title: 'Sometimes things are not what they seem.' },
      { file: 'p7.jpg', title: 'Thoughts on fire.' },
      { file: 'p8.jpg', title: 'Bout of depression.' },
      { file: 'p10.jpg', title: 'Stuck in the wrong place.' },
      { file: 'p11.jpg', title: 'Alienated.' },
      { file: 'p12.jpg', title: 'In the realm of the subconscious.' },
      { file: 'p13.jpg', title: 'Confusion' },
      {
        file: 'p14.jpg',
        title:
          '"I am terrified of the bleak stretch of time, a cold tundra of time" (Martha Gellhorn)',
      },
      { file: 'p15.jpg', title: 'Stuck' },
      {
        file: 'p16.jpg',
        title:
          'Trust Life. It is like water, it carries you – if you start to swim.',
      },
      { file: 'p17.jpg', title: 'Fear is the only enemy that I still know.' },
      { file: 'p18.jpg', title: 'Change of perspective.' },
      { file: 'p19.jpg', title: 'In transition.' },
      { file: 'p20.jpg', title: 'No matter how, somehow, I will grow.' },
      { file: 'p21.jpg', title: 'Symbiosis.' },
      { file: 'p23.jpg', title: 'Defiance.' },
      { file: 'p24.jpg', title: 'Sorrow.' },
      { file: 'p25.jpg', title: 'Isolation.' },
      {
        file: 'p26.jpg',
        title:
          '"At the innermost core of all loneliness is a deep and powerful yearning for union with one\'s lost self" (Brendan Behan)',
      },
      { file: 'p27.jpg', title: 'Hermitage.' },
      { file: 'p28.jpg', title: 'Exhaustion.' },
      { file: 'p29.jpg', title: 'Gaslighting.' },
      { file: 'p31.jpg', title: 'Growing a backbone.' },
      { file: 'p32.jpg', title: 'Up on melancholy hill.' },
      { file: 'p33.jpg', title: 'Anxiety.' },
      { file: 'p35.jpg', title: 'Solitude.' },
      { file: 'p36.jpg', title: 'Shyness' },
      { file: 'p37.jpg', title: 'Delusional' },
    ],
  },
};
