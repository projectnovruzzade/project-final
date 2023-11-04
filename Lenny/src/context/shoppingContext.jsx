import React, { createContext, useState } from "react";

export const ShoppingContext = createContext();

const ShoppingContextProvider = ({ children }) => {

    const shoppingCart = {
        // uniqio: []
    };

    return (
        <ShoppingContext.Provider value={{ shoppingCart }}>
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingContextProvider;