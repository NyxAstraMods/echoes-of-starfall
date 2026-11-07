/* =====================================================================
   EDIT THIS FILE TO CHANGE YOUR WEBSITE.  (You never need to touch index.html.)

   Simple rules:
   1. Text goes inside "quotes".
   2. Every item ends with a comma.
   3. To add something new, copy the sample in the note above each list,
      paste it inside the [ ] brackets, and change the words.
   4. Pictures: put the file in the "images" folder, then write "images/name.jpg".
      Videos:   put the file in the "videos" folder, then write "videos/name.mp4".
      If a picture or video file is missing, the site just hides that spot.
   5. game is always "starsand" or "teredea".
   ===================================================================== */

window.SITE = {

  // ---------- Top of the page ----------
  siteName: "Echoes of Starfall",
  tagline: "Mods for Starsand Island and Echoes of Teredea",
  intro: "Hey, I'm PhoenixAstra on Discord, GeneralTone4770 on Reddit, NyxAstra on Nexus and NyxAstraMods on YouTube. Heads up: I'm not taking requests right now. I'm flooded with more requests than I agreed to do this month. When they reopen, I'll let you all know!",
  banner: "images/banner-main.jpg",     // big picture at the very top (wide, about 1600 x 500)

  // ---------- The two games ----------
  games: {
    starsand: {
      name: "Starsand Island",
      banner: "images/banner-starsand.jpg",   // wide picture above the Starsand mods
      blurb: "BepInEx 6 mods for the cozy island life game."
    },
    teredea: {
      name: "Echoes of Teredea",
      banner: "images/banner-teredea.jpg",    // wide picture above the Teredea mods
      blurb: "Mods, scenes and tools for Teredea."
    }
  },

  // ---------- My projects (my own mods, the main focus) ----------
  // state: "WIP", "Early prototype", "Barely started", "Later" or "Plans"
  // Sample:
  // { game: "starsand", title: "Project name", state: "WIP", note: "A short note." },
  projects: [
    { game: "starsand", title: "Cinematic Studio", state: "WIP",
      note: "Adding a cinematic studio to Starsand. Early-stage prototypes. It can't be downloaded or used yet, it's just something I'm working on." },
    { game: "starsand", title: "Custom Characters", state: "WIP",
      note: "Create custom characters with outfit presets for seasonal pajamas and swimsuits." },
    { game: "starsand", title: "Rhythm Game Editor", state: "WIP",
      note: "An editor for Starsand's songs. Adding custom songs (with written permission) and editing them." },
    { game: "starsand", title: "Windflute Island", state: "WIP",
      note: "" },
    { game: "starsand", title: "Stella & Sylvian Beach Festival", state: "Barely started",
      note: "Beach festival training and an enhanced cinematic performance." },
    { game: "starsand", title: "Story Studio", state: "Later",
      note: "A studio for dialogue, quests and character schedules, plus more for the cinematic studio." },
    { game: "teredea", title: "Keir Intro Cinematic", state: "WIP",
      note: "Made 1 intro cinematic for Keir, a custom NPC." },
    { game: "teredea", title: "Romanceable Content", state: "Barely started",
      note: "Custom hearts, more character content and character arcs for the romanceables. I also need to actually play the game too xD" },
    { game: "teredea", title: "Story & Quest Rewrites", state: "Plans",
      note: "Hopefully large story and quest changes and rewrites." },
  ],

  // ---------- Why I started modding ----------
  // Each "..." in paragraphs is its own paragraph.
  why: {
    title: "Why I started modding in the first place",
    paragraphs: [
      "I love these games a lot, but I wanted a lot more from them, and I see great potential. I love writing, making my own characters, and improving the characters and quests that already exist.",
      "My priority for mods is making my studio for Starsand (which I'm not doing for Teredea, that is a LOT of work xD) â¤ï¸ I hope other people can use it eventually. Starsand has a hefty character creator, so I think it's worth it. I want to overhaul the story, make more cinematics, dialogue and quests, make custom characters and improve the ones that exist.",
      "I plan to make Youfang fully romanceable. In Teredea, I'm making my custom NPCs, Keir and Nox. Keir will be a romanceable who is a core part of the story and fills in a LOT of plot holes. I want to have my own heart events for the characters, make real cutscenes for them and special moments.",
      "I want to make the story more impactful in both games, or write story where some is missing. This alone will likely take a very long time, which is why I had to limit requests: I've had little to no time to actually work on why I'm doing this in the first place. Larger requests I decide to accept might take longer. I may also limit requests, because the stuff I want to work on is my drive and motivation to do this in the first place, and if I haven't worked on it in a while, I lose pace with it.",
      "I appreciate everyone's warm support ^^ and I appreciate you following what I'm doing. If you'd like to donate to help me make more mods, get fixes and support my progress, I have a Ko-fi link. Any donation, no matter how big or how small, means the world to me. I'm forever grateful for your support! â¤ï¸",
    ],
    donateLabel: "Donate on Ko-fi",
    donateLink: "",   // your Ko-fi link, like "https://ko-fi.com/yourname"
  },

  // ---------- Shop (early access and paid mods) ----------
  shopName: "Buy Me a Coffee",
  shopLink: "https://buymeacoffee.com/nyxastramok",
  shopInfo: "Early access and paid mods are on my Buy Me a Coffee. Supporting me there helps me keep making free mods too!",

  // ---------- Your mods ----------
  // access: "free" = shows in Free mods with a Download button
  //         "paid" = shows in Early access & paid with a shop button (no download on the site)
  // state: "Released", "Early access", "Work in progress" or "Planned"
  // link: free mods = the download page (like the Nexus page). Paid mods = that mod's shop page
  //       (leave it "" to use your main shop link above).
  // picture and about are optional.
  // Sample:
  // { game: "starsand", access: "free", name: "Mod name", state: "Released", version: "1.0",
  //   picture: "images/mod-picture.jpg", about: "One line about the mod.", link: "https://..." },
  mods: [
    { game: "starsand", access: "free", name: "Any Clothes As Pajamas Or Swimsuit", state: "Released", link: "" },
    { game: "starsand", access: "free", name: "More Saves 12-50", state: "Released", link: "" },
    { game: "starsand", access: "free", name: "Stellas Beach Performance - Song Choice Selection", state: "Released", link: "" },
    { game: "starsand", access: "free", name: "Stellas Original Early Access Song Fix", state: "Released", link: "" },

    { game: "teredea", access: "free", name: "Storage Plus", state: "Released", picture: "images/mods/teredea-storage-plus.jpg", link: "" },
    { game: "teredea", access: "free", name: "Fridge Plus", state: "Released", picture: "images/mods/teredea-fridge-plus.jpg", link: "" },
    { game: "teredea", access: "free", name: "Hue Color Editor", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Fields Max Happy Infinitely", state: "Released", picture: "images/mods/teredea-fields-happy.jpg", link: "" },
    { game: "teredea", access: "free", name: "Best Quality Items", state: "Released", picture: "images/mods/teredea-best-quality.jpg", link: "" },
    { game: "teredea", access: "free", name: "Free Crafting", state: "Released", picture: "images/mods/teredea-free-crafting.jpg", link: "" },
    { game: "teredea", access: "free", name: "Full Bag Upgrades All Unlocked", state: "Released", picture: "images/mods/teredea-bag-upgrades.jpg", link: "" },
    { game: "teredea", access: "free", name: "Unlock All Recipes", state: "Released", picture: "images/mods/teredea-unlock-recipes.jpg", link: "" },
    { game: "teredea", access: "free", name: "Unlock All Outfits", state: "Released", picture: "images/mods/teredea-unlock-outfits.jpg", link: "" },
  ],

  // ---------- Dev log posts (the site sorts them by date) ----------
  // date is "YEAR-MONTH-DAY". Use \n\n inside text for a new paragraph.
  // pictures, video and youtube are all optional - leave them out if you don't need them.
  // Sample:
  // { date: "2026-11-06", game: "starsand", title: "Post title",
  //   text: "First paragraph.\n\nSecond paragraph.",
  //   pictures: [ { src: "images/wip-1.jpg", caption: "What this shows" } ],
  //   video: "videos/clip.mp4",
  //   youtube: "https://youtu.be/..." },
  posts: [
  ],

  // ---------- WIP picture gallery ----------
  // Sample:
  // { src: "images/gallery-1.jpg", caption: "What this shows", game: "starsand", date: "2026-11-06" },
  gallery: [
  ],

  // ---------- Requests (a side thing) ----------
  // Each month, each game gets up to 2 request slots (small or big).
  // month: "YEAR-MONTH" puts it in that month's slots. Leave it "" if there's no exact month.
  // when:  optional words for the Completed list, like "Oct - Nov 2026".
  // size:  "small", "big" or "" if you don't want to say.
  // state: "Taken" (picked, not started), "Working", "Done" or "Not possible"
  // Sample:
  // { month: "2026-11", game: "starsand", size: "small", idea: "The idea", note: "", by: "", state: "Taken" },
  requestsOpen: false,   // true = taking requests, false = closed (empty slots say "Closed")
  closedInfo: "Requests are closed right now. I have more than I agreed to do this month. When they reopen, I'll let you know!",
  // Extra notes shown under the open/closed message. Each "..." is its own paragraph.
  requestNotes: [
    "Not all requests I'm working on are listed here, for both Starsand and Teredea. Some of them I may be debating taking.",
    "I've done 10+ requests in a single month, and November's is taken up already. I'll do up to 2 requests for Teredea and 2 for Starsand a month, depending on how large they are. QOL takes priority over cheats. Be realistic, as I'm just one person and have had no time to work on my own mods.",
  ],
  requestInfo: "Each month I take up to 2 requests per game, depending on how large they are. Slots open on the 1st. Send yours on Discord or in the mod page comments. First come, first served!",
  requests: [
    // Starsand - working on now
    { month: "2026-11", game: "starsand", size: "big", state: "Working",
      idea: "Windflute planting & field tools",
      note: "Planting on Windflute, plus selecting, moving and removing fields (because of terraforming clipping)." },
    { month: "2026-11", game: "starsand", size: "big", state: "Working",
      idea: "Competition layout fix",
      note: "Moving and fixing a competition layout blueprint's position. Starsand itself couldn't do it right lol, someone's contest broke!" },

    // Starsand - done
    { month: "", game: "starsand", size: "", state: "Done", idea: "Stellas Beach Performance - Song Choice Selection" },
    { month: "", game: "starsand", size: "", state: "Done", idea: "Stellas Original Early Access Song Fix" },

    // Teredea - done in October and November
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Storage Plus" },
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Fridge Plus" },
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Hue Color Editor" },
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Fields Max Happy Infinitely" },
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Best Quality Items" },
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Free Crafting" },
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Full Bag Upgrades All Unlocked" },
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Unlock All Recipes" },
    { month: "", when: "Oct - Nov 2026", game: "teredea", size: "", state: "Done", idea: "Unlock All Outfits" },
  ],

  // ---------- Commissions (paid custom mods) ----------
  // prices: [lowest, highest] in dollars, one pair per complexity level, in the same order as "levels".
  commissions: {
    intro: "Want something made just for you? Use the calculator for a rough price, then message me with your idea.",
    contact: "Preferred contact: Discord",
    discord: "PhoenixAstra",
    payment: "Once we agree on a price, you can pay with PayPal or a Ko-fi tier for that amount.",
    paypal: "",     // your PayPal.me link, like "https://paypal.me/yourname"
    kofi: "",       // your Ko-fi link, like "https://ko-fi.com/yourname"
    levels: [
      "Straightforward - uses what the game already has",
      "Standard - some new logic",
      "Complex - systems working together or extra testing",
    ],
    categories: [
      { name: "Simple cheat",          prices: [[10, 20],   [20, 35],   [35, 60]] },
      { name: "QoL improvement",       prices: [[20, 45],   [35, 90],   [75, 150]] },
      { name: "UI / gameplay feature", prices: [[50, 100],  [90, 180],  [150, 300]] },
      { name: "Advanced system",       prices: [[150, 250], [200, 400], [350, 700]] },
    ],
    priorityExtra: 30,   // percent added for priority scheduling
    note: "Not a guaranteed quote. The final price depends on whether it can be done, testing, compatibility and what we agree on.",
    rules: [
      "No modeling, rigging, texture painting, UV editing or custom art. UI programming is fine.",
      "It has to be possible first. I can turn down anything that needs huge parts of the game rewritten.",
      "One clearly defined feature per commission. More features need another quote.",
      "Bug fixes: I fix bugs caused by my mod for 14 days. New game updates, mod conflicts and extra features are quoted separately.",
      "No set finish date, unless we've agreed on a realistic deadline.",
      "No DLC unlocking or sharing paid content.",
    ],
  },

  // ---------- Links at the bottom (Nexus, Discord, Ko-fi, YouTube...) ----------
  // A link with url: "" shows as "link soon".
  links: [
    { label: "Nexus Mods", url: "" },
    { label: "Discord",    url: "" },
    { label: "Reddit",     url: "" },
    { label: "YouTube",    url: "https://www.youtube.com/@NyxAstraMods" },
    { label: "Buy Me a Coffee", url: "https://buymeacoffee.com/nyxastramok" },
  ],
};
