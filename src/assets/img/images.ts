export interface ImageConfig {
  name: string;
  sizes: Array<number>;
}

const branding = {
  logo: {
    name: "logo",
    sizes: [50, 120],
  },
  wordLogo: {
    name: "word-logo",
    sizes: [50, 537, 843, 1080],
  },
};

const screenshots = {
  mainMenu: {
    name: "main-menu",
    sizes: [200, 431, 615, 769, 905, 1027, 1080],
  },
  level1: {
    name: "level-1",
    sizes: [200, 485, 686, 875, 1029, 1080],
  },
  levelSelect: {
    name: "level-select",
    sizes: [200, 459, 676, 823, 955, 1080],
  },
  level4: {
    name: "level-4",
    sizes: [200, 415, 594, 735, 884, 986, 1080],
  },
  levelComplete: {
    name: "level-complete",
    sizes: [200, 437, 617, 776, 895, 1012, 1080],
  },

  dailyChallenge: {
    name: "daily-challenge",
    sizes: [200, 379, 538, 605, 724, 822, 908, 1018, 1080],
  },
  leaderboard: {
    name: "leaderboard",
    sizes: [200, 538, 795, 1009, 1080],
  },
  level3: {
    name: "level-3",
    sizes: [200, 429, 607, 768, 905, 1080],
  },
};

const misc = {
  androidFrame: {
    name: "android-frame",
    sizes: [200, 445, 611, 720, 944, 1043, 1112],
  },
  googlePlayDownload: {
    name: "google-play-download",
    sizes: [200, 646],
  },
};

export default { ...branding, ...screenshots, ...misc };
