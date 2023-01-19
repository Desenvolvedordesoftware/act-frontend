import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/*Paginas*/
import Sidebar from '../components/Dashboard/Sidebar';

import PaginaIni from '../pages/Home/PaginaIni';
import FUsers from "../pages/users/FUsers";
import FCompany from "../pages/Company/FCompany";
import FProduct from "../pages/product/FProduct";
import PonitOfSale from "../pages/PointOfSale/PonitOfSale.js"
import Signin from "../pages/Signin/index";
//import Signup from "../pages/Signup/index";
import useAuth from "../hooks/useAuth"

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
}; 

const RoutesApp = () => {
    return (
        <Router >
        <Fragment>
            <Routes>
                <Route exact path="%" element={<Private Item={Sidebar}/>}/>
                <Route exact path="/Dashboard" element={<Private Item={PaginaIni}/>}/>
                <Route exact path="/Users" element={<Private Item={FUsers}/>} />
                <Route exact path="/Company" element={<Private Item={FCompany}/>}/>
                <Route exact path="/Product" element={<Private Item={FProduct}/>}/>
                <Route exact path="/PonitOfSale" element={<Private Item={PonitOfSale}/>}/>
                <Route path="/" element={<Signin />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </Fragment>
        </Router>
    );
};

export default RoutesApp;