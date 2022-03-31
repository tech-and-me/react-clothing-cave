// import Categories from './components/categoriesFolder/Categories';
import Categories from '../../components/categoriesFolder/Categories'

const Home = () => {
  
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
    imageUrl: 'https://media.istockphoto.com/photos/young-woman-out-shopping-in-the-city-picture-id1291100364?b=1&k=20&m=1291100364&s=170667a&w=0&h=yn9UyQHBj-fgrjcEmK1iyRsyw6XLv5fbBl5aPUDl7i0=',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347__340.jpg',
  },
];

  return (
    <Categories categories={categories}/>
  );
}

export default Home;


