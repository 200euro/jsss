// const catalog = [
//    {
//       img: 'https://cdn1.ozone.ru/s3/multimedia-j/c600/6659127739.jpg' ,
//       name: 'Женская сумка' ,
//       oldPrice: 298000,
//       newPrice: 170000
//    },
//    {
//       img: 'https://cdn1.ozone.ru/s3/multimedia-v/c600/6378832927.jpg' ,
//       name: 'Сумка для девочек',
//       oldPrice: 120000,
//       newPrice: 90000
//    },
//    {
//       img: 'https://a-cdn.lakestone.ru/image/cache/catalog/Apsley%20Red/NES_7138-600x600.jpg',
//       name:'Красная сумка',
//       oldPrice:20000,
//       newPrice:10000
//    }
// ]



import './papkajs.js    '

const wrapper = document.querySelector('.wrapper')

const cards = ProductsData.map(card => {
return`
   <div class="card">
        <img src=${card.imageUrl} alt="forest">
        <h3>${card.name}</h3>
        <p>${card.category.name}</p>
        <b>${card.brand}</b>
        <h2>${card.price} ${card.currency}</h2>
    </div>
  `
}).join('')

wrapper.innerHTML = cards