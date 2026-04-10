const products = [
    {
      name: '셔츠',
      options: ['S', 'M', 'L']
    },
    {
      name: '바지',
      options: ['M', 'L', 'XL']
    },
    {
      name: '모자',
      options: ['FREE']
    }
  ];

  const result = [...new Set(products.flatMap(product => product.options))]
  .sort((a, b) => a.localeCompare(b));
  
  console.log(result); // ['FREE', 'L', 'M', 'S', 'XL']