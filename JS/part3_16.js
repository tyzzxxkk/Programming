const orders = [
    {
      id: 1,
      status: 'done',
      items: [
        { name: 'A', price: 3000 },
        { name: 'B', price: 2000 }
      ]
    },
    {
      id: 2,
      status: 'cancelled',
      items: [
        { name: 'C', price: 10000 }
      ]
    },
    {
      id: 3,
      status: 'done',
      items: [
        { name: 'D' },
        { name: 'E', price: 4000 }
      ]
    }
  ];
  
  const result = orders
  .filter(order => order.status !== 'cancelled')
  .map(order => ({
    id: order.id,
    total: order.items.reduce((sum, item) => sum + (item.price ?? 0), 0)
  }))
  .sort((a, b) => b.total - a.total);
  
  console.log(result);