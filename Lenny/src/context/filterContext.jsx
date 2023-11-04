import { createContext, useState } from "react";

export const FilterContext = createContext();


const FilterContextProvider = ({ children }) => {


    // const filter = [
    //     { discount: false },
    //     { location: ["Bandung,Surabaya"] },
    //     { category: ["Electronic", "Gaming"] },
    //     { maxPrice: 120 }, { minPrize: 0 }
    // ];

    const filters = {
        locationFilter: [],
        category: [],
        discount: false,
        maxPrice: 0,
        minPrice: 0,
    };

    return <FilterContext.Provider value={{filters}}>{children}</FilterContext.Provider>
}

export default FilterContextProvider;