import Header from "./components/Header";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import About from "./components/About.js";
import Main from "./components/Main.js";
import Videos from "./components/Videos.js";

const appRouter = createBrowserRouter(
  [
   {
    path:"/",
    element: <><Header/><Body/></>,
    children:[
     {
       path:"/",
       element: <Videos/>,
     },
     {
       path:"about",
       element: <About/>,
     },
     {
       path : "watch/:videoId",
       element : <WatchPage/>,
     }
    ]
   }
  ]
 )

function App() {
  
  

  return (
    <Provider store={store}>
     <div>
     <RouterProvider router={appRouter}>
          <Header/>
          <Body/>
      </RouterProvider>
          
     </div>
    </Provider>
  );
}

export default App;
