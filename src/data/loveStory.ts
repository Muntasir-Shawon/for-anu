/**
 * LOVE STORY CONFIGURATION
 * -------------------------------------------------------------
 * Central configuration file for Anu's Birthday Surprise Website.
 * Edit this file to customize any names, dates, text, image paths,
 * memories, or audio settings without touching React components.
 * -------------------------------------------------------------
 */

export interface MemoryItem {
  id: string;
  number: string;
  title: string;
  text: string[];
  image: string;
  caption?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  span?: "tall" | "wide" | "normal";
}

export interface LittleThingItem {
  id: string;
  title: string;
  description: string;
}

export interface LoveStoryConfig {
  meta: {
    recipient: string;
    sender: string;
    relationshipStartDate: string; // YYYY-MM-DD
    birthdayDate: string; // ISO 8601 string
    timezone: string;
    siteTitle: string;
    siteDescription: string;
  };

  music: {
    enabled: boolean;
    title: string;
    artist: string;
    src: string;
  };

  opening: {
    teaser: string;
    name: string;
    prompt: string;
    buttonText: string;
  };

  envelope: {
    forText: string;
    subText: string;
    instructionText: string;
  };

  hero: {
    title: string;
    name: string;
    date: string;
    lead: string;
    sublead: string;
    signature: string;
    image: string;
  };

  birthdayMessage: {
    headline: string;
    paragraphs: string[];
    closing: string;
  };

  beginning: {
    headline: string;
    introLines: string[];
    milestoneDate: string;
    milestoneTitle: string;
    milestoneReflection: string[];
    images: string[];
  };

  memories: {
    headlinePrefix: string;
    headlineHighlight: string;
    items: MemoryItem[];
  };

  gallery: {
    headline: string;
    subheadline: string[];
    items: GalleryItem[];
  };

  littleThings: {
    headline: string;
    items: LittleThingItem[];
  };

  loveLetter: {
    teaser: string;
    openButtonText: string;
    recipientSalutation: string;
    closingSalutation: string;
    paragraphs: string[];
  };

  countdown: {
    headline: string;
    targetIso: string; // Target in UTC/Dhaka
    labels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };

  reveal: {
    banner: string;
    date: string;
    tagline: string;
    message1: string;
    message2: string;
    image: string;
  };

  reminder: {
    headline: string;
    lines: string[];
    conclusion: string[];
  };

  ending: {
    image: string;
    linesPart1: string[];
    linesPart2: string[];
    finalWish: string;
    thankYou: string;
    toast: string;
    signature: string;
  };

  finalPhoto: {
    image: string;
    dateRange: string;
    wish: string;
    love: string;
  };
}

export const loveStory: LoveStoryConfig = {
  meta: {
    recipient: "Anu",
    sender: "Shawon",
    relationshipStartDate: "2023-04-01",
    birthdayDate: "2026-09-26T00:00:00+06:00",
    timezone: "Asia/Dhaka",
    siteTitle: "Happy Birthday, Anu 🤍",
    siteDescription: "A little birthday surprise made with love by Shawon.",
  },

  music: {
    enabled: true,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    src: "/music/until-i-found-you.mp3",
  },

  opening: {
    teaser: "I made something for you...",
    name: "ANU",
    prompt: "Open it.",
    buttonText: "Open your gift",
  },

  envelope: {
    forText: "For Anu",
    subText: "A little something from Shawon.",
    instructionText: "Tap to open",
  },

  hero: {
    title: "HAPPY BIRTHDAY",
    name: "ANU",
    date: "26.09.2026",
    lead: "Today is your day.",
    sublead: "And I wanted to make you something a little different.",
    signature: "— Shawon",
    image: "/images/hero.jpg",
  },

  birthdayMessage: {
    headline: "Today isn't just another day.",
    paragraphs: [
      "Today is the day someone very special came into this world.",
      "I don't know if I can ever properly explain how happy I am that you exist.",
      "But I'm really glad you do.",
    ],
    closing: "Happy Birthday to my favorite person. 🤍",
  },

  beginning: {
    headline: "Before you...",
    introLines: [
      "There was a time when I didn't know you.",
      "I didn't know your smile.",
      "I didn't know your little habits.",
      "I didn't know how much I would enjoy talking to you.",
      "And I definitely didn't know that one day you would become such an important part of my life.",
    ],
    milestoneDate: "01.04.2023",
    milestoneTitle: "The beginning of us.",
    milestoneReflection: [
      "I didn't know how important this date would become.",
      "But now...",
      "I can't imagine my story without it.",
    ],
    images: [
      "/images/beginning-01.jpg",
      "/images/beginning-02.jpg",
      "/images/beginning-03.jpg",
    ],
  },

  memories: {
    headlinePrefix: "Some of my favorite memories have one thing in common.",
    headlineHighlight: "You.",
    items: [
      {
        id: "mem-01",
        number: "MEMORY 01",
        title: "By The River",
        text: [
          "It started so simply.",
          "Standing by the water in your favorite black dress, with the breeze in your hair...",
          "That was the moment I realized ordinary afternoons would never feel ordinary again.",
        ],
        image: "/images/memory-01.jpg",
        caption: "Your quiet grace by the water, effortless and unforgettable.",
      },
      {
        id: "mem-02",
        number: "MEMORY 02",
        title: "Endless Conversations",
        text: [
          "Some moments don't look special to anyone else.",
          "Just you resting your chin in your hands across from me, listening to whatever silly thing I said...",
          "Those were the quiet moments I wanted to keep forever.",
        ],
        image: "/images/memory-02.jpg",
        caption: "Chin in your hands, the warmth in your eyes that resets my world.",
      },
      {
        id: "mem-03",
        number: "MEMORY 03",
        title: "Rain on the Mirror",
        text: [
          "You made ordinary days feel like a movie scene.",
          "Raindrops gathered on the motorcycle mirror while we laughed through the roads of Dhaka.",
          "A simple ride became one of my all-time favorite memories.",
        ],
        image: "/images/memory-03.jpg",
        caption: "Raindrops on the mirror, riding through the city together.",
      },
      {
        id: "mem-04",
        number: "MEMORY 04",
        title: "Hands Intertwined",
        text: [
          "We are not perfect.",
          "We have our busy days, our little misunderstandings, our own quirks.",
          "But whenever my hand finds yours across the table...",
          "Everything else fades away.",
        ],
        image: "/images/memory-04.jpg",
        caption: "Holding hands across the table, peaceful and steady through everything.",
      },
      {
        id: "mem-05",
        number: "MEMORY 05",
        title: "The Look in Your Eyes",
        text: [
          "If someone asked me what my favorite view in this whole world is...",
          "It's when you look at me just like this.",
          "With gentle affection, knowing every part of me, and choosing to stay.",
          "Just you and me under the open sky.",
        ],
        image: "/images/memory-05.jpg",
        caption: "The way you look at me makes every dream feel within reach.",
      },
    ],
  },

  gallery: {
    headline: "A few pieces of us.",
    subheadline: [
      "These aren't just photographs.",
      "They're real pieces of our journey together.",
      "Every picture holds a feeling.",
      "And every feeling leads back to you.",
    ],
    items: [
      {
        id: "gal-01",
        title: "Gryffindor Magic",
        caption: "In robes and ties—even in Hogwarts, you'd be my favorite spell.",
        image: "/images/gallery-01.jpg",
        span: "tall",
      },
      {
        id: "gal-02",
        title: "Cafe Afternoons",
        caption: "Round glasses, endless talks, and that comfortable warmth between us.",
        image: "/images/gallery-02.jpg",
        span: "normal",
      },
      {
        id: "gal-03",
        title: "Woven Memories",
        caption: "Finding beauty in handcrafted macramé mirrors together at the fair.",
        image: "/images/gallery-03.jpg",
        span: "normal",
      },
      {
        id: "gal-04",
        title: "Date Nights",
        caption: "Good food, silly expressions, and the best company in the world.",
        image: "/images/gallery-04.jpg",
        span: "wide",
      },
      {
        id: "gal-05",
        title: "A Single White Rose",
        caption: "Gentle, timeless, and pure—just like what I feel for you.",
        image: "/images/gallery-05.jpg",
        span: "normal",
      },
      {
        id: "gal-06",
        title: "Frozen In Time",
        caption: "Two little polaroid snapshots holding a million quiet emotions.",
        image: "/images/gallery-06.jpg",
        span: "tall",
      },
      {
        id: "gal-07",
        title: "Playful & Adorable",
        caption: "You and your silly little plushies—always making me smile.",
        image: "/images/gallery-07.jpg",
        span: "normal",
      },
      {
        id: "gal-08",
        title: "Safe In My Arms",
        caption: "Peeking over my shoulder, keeping me grounded and loved.",
        image: "/images/gallery-08.jpg",
        span: "wide",
      },
      {
        id: "gal-09",
        title: "Sun Hat Shenanigans",
        caption: "Trying on silly straw hats and pretending we're on vacation.",
        image: "/images/gallery-09.jpg",
        span: "normal",
      },
      {
        id: "gal-10",
        title: "The Red Bouquet & Infinity",
        caption: "Red roses, your infinity necklace, and love that knows no end.",
        image: "/images/gallery-10.jpg",
        span: "normal",
      },
    ],
  },

  littleThings: {
    headline: "The little things I love about you.",
    items: [
      {
        id: "lt-01",
        title: "Your smile.",
        description:
          "I don't think you realize how much I love seeing you smile.",
      },
      {
        id: "lt-02",
        title: "Your voice.",
        description:
          "Even when you're talking about something completely random, I still want to listen.",
      },
      {
        id: "lt-03",
        title: "Your little habits.",
        description:
          "Some make me laugh. Some annoy me. And some... I secretly hope never change.",
      },
      {
        id: "lt-04",
        title: "The way you care.",
        description:
          "You probably don't realize how much your little actions mean to me.",
      },
      {
        id: "lt-05",
        title: "The way you make ordinary days better.",
        description:
          "You don't have to do anything special. Sometimes just having you around is enough.",
      },
      {
        id: "lt-06",
        title: "The way you are.",
        description: "I don't need another version of you. I just want you.",
      },
    ],
  },

  loveLetter: {
    teaser: "A letter I probably don't say enough...",
    openButtonText: "Open letter",
    recipientSalutation: "Dear Anu,",
    closingSalutation: "— Shawon",
    paragraphs: [
      "Happy Birthday, my love. ❤️",
      "I honestly don't know where to start.",
      "There are so many things I want to say to you, but sometimes words don't feel enough.",
      "Today is your birthday, and while everyone is wishing you happiness, success and all the beautiful things in life...",
      "I just want to wish you something a little different.",
      "I hope you always have reasons to smile.",
      "I hope you achieve everything you dream about.",
      "I hope life is kind to you.",
      "And whenever life isn't kind...",
      "I hope you remember that you don't have to face everything alone.",
      "Because I'll be here.",
      "Maybe I won't always know the perfect thing to say.",
      "Maybe I'll annoy you sometimes.",
      "Maybe we'll argue over stupid things.",
      "But one thing I know for sure...",
      "I care about you more than I can explain.",
      "Since 01.04.2023, you've given me so many memories.",
      "Some beautiful.",
      "Some funny.",
      "Some completely stupid.",
      "But I wouldn't trade any of them.",
      "Because they're ours.",
      "And if I could ask for one thing today...",
      "I wouldn't ask for anything for myself.",
      "I'd just ask for many more birthdays where I get to say:",
      "Happy Birthday, Anu.",
      "More memories.",
      "More photographs.",
      "More random conversations.",
      "More places.",
      "More laughter.",
      "More stupid fights that we'll eventually laugh about.",
      "More ordinary days that somehow become special because you're there.",
      "I don't know exactly what the future has planned for us.",
      "But I know that I want to see more of it with you.",
      "So today...",
      "forget everything else for a moment.",
      "Smile.",
      "Enjoy your day.",
      "And remember that somewhere, there's a boy who is genuinely very happy that you were born.",
      "Happy Birthday, Anu.",
      "I love you.",
      "More than these words can explain.",
    ],
  },

  countdown: {
    headline: "Until your day...",
    targetIso: "2026-09-26T00:00:00+06:00",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
  },

  reveal: {
    banner: "IT'S YOUR DAY, ANU.",
    date: "26.09.2026",
    tagline: "HAPPY BIRTHDAY! 🎂🤍",
    message1: "Today, the world gets to celebrate you.",
    message2: "And I get to celebrate the person who means so much to me.",
    image: "/images/reveal.jpg",
  },

  reminder: {
    headline: "If you ever forget...",
    lines: [
      "You are loved.",
      "You are special.",
      "You are important.",
      "You are someone I choose.",
      "Not just on the good days.",
      "Not just when everything is perfect.",
      "I choose you in all the little moments too.",
    ],
    conclusion: [
      "And if you ever doubt how much you mean to me...",
      "Come back here.",
      "I'll remind you again.",
    ],
  },

  ending: {
    image: "/images/final.jpg",
    linesPart1: [
      "After everything...",
      "After all the memories we've made...",
      "All the laughs.",
      "All the little fights.",
      "All the random conversations.",
      "All the good days.",
      "All the difficult ones.",
    ],
    linesPart2: [
      "If life gave me the chance to go back and choose again...",
      "I'd still choose you.",
      "Every single time.",
    ],
    finalWish: "Happy Birthday, Anu. 🤍",
    thankYou: "Thank you for being one of my favorite parts of life.",
    toast: "Here's to us.",
    signature: "— Shawon",
  },

  finalPhoto: {
    image: "/images/final.jpg",
    dateRange: "01.04.2023 → ∞",
    wish: "Happy Birthday, Anu.",
    love: "I love you.",
  },
};
