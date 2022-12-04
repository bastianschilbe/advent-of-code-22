const file = Bun.file("./input.txt");
const text = await file.text();

const rules = {
    'rr': 0,
    'rp': -1,
    'rs': 1,
    'pp': 0,
    'pr': 1,
    'ps': -1,
    'ss': 0,
    'sr': -1,
    'sp': 1,
}
const map_abc = {
    'A': 'r',
    'B': 'p',
    'C': 's',
}
const map_xyz = {
    'X': 'r',
    'Y': 'p',
    'Z': 's',
}
const score_map = {
    'r': 1,
    'p': 2,
    's': 3,
}
const result_map = new Map([[-1,0],[0,3],[1,6]])
const char_result_map = {'X': 1, 'Y': 0, 'Z': -1}

const games = text.split(/\n/)

let points_per_hand = 0
let points_per_result = 0
for (const game of games) {
    const [hand1, hand2] = game.split(/ /)
    if (hand1 === undefined || hand2 === undefined) {
        continue
    }

    points_per_hand +=
      score_map[map_xyz[hand2]] +
      result_map.get(rules[`${map_xyz[hand2]}${map_abc[hand1]}`]);

    const [hand] = Object.entries(rules).find(
      ([game, result]) =>
        result === char_result_map[hand2] && game[0] === map_abc[hand1]
    );

    points_per_result +=
      score_map[hand[1]] +
      result_map.get(rules[hand] * -1);
}

console.log('Day 2 a)', points_per_hand)
console.log('Day 2 b)', points_per_result)

