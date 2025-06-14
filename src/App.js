import { Routes,Route } from 'react-router-dom'; //these two components are used to assemble routing at application level.
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () =>
{
  return (
    <div>
      <h1>Shop Page</h1>
      <p>Welcome to the shop! Browse our products here.</p>
    </div>
  );
}


const App = () =>{
  return (
    <Routes> {/*  component is used to define your route configuration — 
    essentially telling your app which components to render based on the URL.*/}
      <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />  {/*React Router doesn't need a path on the index route, because 
          it’s automatically matched when the parent route is matched exactly and no other child route is specified. */}
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
      </Route> {/* defines a single route — mapping a URL path to a React component.*/}
    </Routes>
  ) 
  //these components are able to connect to the URL and therefore render the appropriate alignments is because of 
  // the fact that these are nested inside of the browser router in index.js.
  //<Outlet /> is like a window or placeholder inside a parent component that tells React Router:
  // “Render the matched child route right here.”
}

export default App;
