/* =====================================================================
   EDIT THIS FILE TO CHANGE YOUR WEBSITE.  (You never need to touch index.html.)

   Simple rules:
   1. Text goes inside "quotes".
   2. Every item ends with a comma.
   3. To add something new, copy the sample in the note above each list,
      paste it inside the [ ] brackets, and change the words.
   4. Pictures: put the file in the "images" folder, then write "images/name.jpg".
      Videos:   put the file in the "videos" folder, then write "videos/name.mp4".
      If a picture is missing, the site shows a soft "Picture spot" box instead.
   5. game is always "starsand" or "teredea".
   ===================================================================== */

window.SITE = {

  // ---------- Top of the page ----------
  siteName: "Echoes of Starfall",
  tagline: "Mods for Starsand Island and Echoes of Teredea",
  intro: "Hey, I'm PhoenixAstra on Discord, GeneralTone4770 on Reddit and NyxAstra on Nexus. Heads up: I'm not taking requests right now. I'm flooded with more requests than I agreed to do this month. When they reopen, I'll let you all know!",
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
    { game: "starsand", title: "Cinematic Studio", state: "Early prototype",
      note: "Adding a cinematic studio to Starsand. Early-stage prototypes." },
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

    { game: "teredea", access: "free", name: "Storage Plus", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Fridge Plus", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Hue Color Editor", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Fields Max Happy Infinitely", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Best Quality Items", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Free Crafting", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Full Bag Upgrades All Unlocked", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Unlock All Recipes", state: "Released", link: "" },
    { game: "teredea", access: "free", name: "Unlock All Outfits", state: "Released", link: "" },
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
  // Each month, each game gets 2 small and 2 big requests.
  // month: "YEAR-MONTH" puts it in that month's slots. Leave it "" if there's no exact month.
  // when:  optional words for the Completed list, like "Oct - Nov 2026".
  // size:  "small", "big" or "" if you don't want to say.
  // state: "Taken" (picked, not started), "Working", "Done" or "Not possible"
  // Sample:
  // { month: "2026-11", game: "starsand", size: "small", idea: "The idea", note: "", by: "", state: "Taken" },
  requestsOpen: false,   // true = taking requests, false = closed (empty slots say "Closed")
  closedInfo: "Requests are closed right now. I have more than I agreed to do this month. When they reopen, I'll let you know!",
  requestInfo: "Each month I take 4 requests per game: 2 small and 2 big. Slots open on the 1st. Send yours on Discord or in the mod page comments. First come, first served!",
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

  // ---------- Links at the bottom (Nexus, Discord, Ko-fi, YouTube...) ----------
  // A link with url: "" shows as "link soon".
  links: [
    { label: "Nexus Mods", url: "" },
    { label: "Discord",    url: "" },
    { label: "Reddit",     url: "" },
    { label: "Buy Me a Coffee", url: "https://buymeacoffee.com/nyxastramok" },
  ],
};
