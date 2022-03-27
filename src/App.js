import React from 'react';
import Directory from './components/directory/directory';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/homepage/homepage';
// import ShopPage from './components/shop/shop';
// import Header from './components/header/header';
// import SigninAndSignupPage from './pages/signin-and-signup/signin-and-signup';
// import ErrorPage from './components/error-page/error-page';
import './App.css';

// function App() {
//   return (
//     <div>
//       {/* <Header />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/shop' element={<ShopPage />} />
//         <Route path='/signin' element={<SigninAndSignupPage />} />
//         <Route path='*' element={<ErrorPage />} />
//       </Routes> */}
//     </div>
//   );
// }

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  return (
    <Directory categories={categories} />
  )
}

export default App;
