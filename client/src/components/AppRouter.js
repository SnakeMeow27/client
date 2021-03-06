import React, {useContext} from 'react';
import {Routes, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../pages/Shop";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
  const {user} = useContext(Context)
    console.log(user)
    return (
     <Routes>

            { user.isAuth && authRoutes.map (({path, Component}) =>
                <Route key={path} path={path} element={<Component></Component>} exact/>
            )}
          { publicRoutes.map (({path, Component}) =>
              <Route key={path} path={path} element={<Component></Component>} exact/>
          )}
         <Route path="*" element={<Shop></Shop>}/>
     </Routes>
    );
};

export default AppRouter;