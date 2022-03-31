import Categories from './components/categoriesFolder/Categories';

const App = () => {
  
  const categories = [{
    id: 1,
    title: 'hats',
    imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708__340.jpg',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxtZW4lMjBzaG9wcGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

  return (
    <Categories categories={categories}/>
  );
}

export default App;


