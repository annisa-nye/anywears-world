export type ReviewImage = {
  username: string;
  src: string;
};

const reviewFolder = "/images/aftercare/reviews/kind-words";

export const kindWords: ReviewImage[] = [
  ["natbro94", "01-natbro94.jpeg"],
  ["ddowi", "02-ddowi-toff.jpeg"],
  ["jnnae_632", "03-jnnae632.jpeg"],
  ["allie_p123", "04-allie-p123.jpeg"],
  ["mikkialba", "05-mikkialba.jpeg"],
  ["gina2025_", "06-gina2025-toff.jpeg"],
  ["b0nnieee", "07-b0nnieee.jpeg"],
  ["laurajanebelll", "08-laurajanebelll.jpeg"],
  ["ninaaina", "09-ninaaina.jpeg"],
  ["m1ascha3f3r", "10-m1ascha3f3r.jpeg"],
  ["mina000111", "11-mina000111.jpeg"],
  ["915emi", "12-915emi-toff.jpeg"],
  ["kaylakagaras", "13-kaylakagaras.jpeg"],
  ["vintagebybelle", "14-vintagebybelle-toff.jpeg"],
  ["bryannaarnold8", "15-bryannaarnold8.jpeg"],
  ["goldenkiwiz", "16-goldenkiwiz.jpeg"],
  ["oaticedlatte", "17-oaticedlatte.jpeg"],
  ["sydneyarchive", "18-sydneyarchive.jpeg"],
  ["katesteph87", "19-katesteph87.jpeg"],
  ["thisbutvelveteen", "20-thisbutvelveteen.jpeg"],
  ["pips379", "21-pips379.jpeg"],
  ["alana1988", "22-alana1988.jpeg"],
  ["soph228", "23-soph228.jpeg"],
  ["becwallace", "24-becwallace.jpeg"],
  ["elizaaboydd", "25-elizaaboydd-toff.jpeg"],
].map(([username, filename]) => ({
  username,
  src: `${reviewFolder}/${filename}`,
}));

export const featuredReviews = [
  {
    id: "fur-jacket",
    item: "vintage fur jacket",
    image: "/images/aftercare/featured/fur-jacket.jpeg",
    username: "jnnae_632",
    review:
      "Such a beautiful statement piece. Came exactly as described in the cutest packaging. Communication is fab and delivery was quick. Will be buying again real soon! 🧡",
  },
  {
    id: "toff-loadstone",
    item: "toff & loadstone",
    image: "/images/aftercare/featured/toff-loadstone.jpeg",
    username: "gina2025_",
    review:
      "Bag came so beautifully packed and exactly as described 💗",
  },
];
