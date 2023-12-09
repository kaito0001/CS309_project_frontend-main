import NavBar from "../NavBar";
import ProductList from "./ProductList";
import Footer from "../Footer/Footer";
import Copyright from "../CopyRight";
import React from "react";
function Products() {
    return (
        <>
            <NavBar></NavBar>
            <ProductList></ProductList>
            <Footer></Footer>
            <Copyright></Copyright>
        </>
    );
}

export default Products;