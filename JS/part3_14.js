const users = [
    { active: true,  profile: { nickname: 'mango' }, scores: [70, 80, 90] },
    { active: true,  profile: null,                  scores: [100, 20, 90] },
    { active: false, profile: { nickname: 'apple' }, scores: [90, 90, 90] },
    { active: true,  profile: {},                    scores: [60, 61, 99] }
];

const result = users
  .filter(user => user.active)
  .filter(user => user.scores.every(score => score >= 60))
  .map(user => user.profile?.nickname ?? '익명')
  .sort((a, b) => a.localeCompare(b));

console.log(result); // ['mango', '익명']