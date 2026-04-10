const players = [
    { name: '민수', score: 90, profile: { level: 2 } },
    { name: '지연', score: 95, profile: null },
    { name: '도윤', score: 90, profile: { level: 1 } },
    { name: '서윤', score: 95, profile: { level: 3 } }
  ];
  
  players.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
  
    const levelA = a.profile?.level ?? Infinity;
    const levelB = b.profile?.level ?? Infinity;
    if (levelA !== levelB) return levelA - levelB;
  
    return a.name.localeCompare(b.name);
  });

  console.log(players);