import { createContext, useContext, useState } from "react";

const PageContext = createContext({})
const usePage = () => useContext(PageContext)

function PageMangerContext({ children }) {
    const [nextPage, setPage] = useState(0)
    const values = {
        nextPage, setPage
    }
    return (
        <PageContext.Provider value={values}>
            { children }
        </PageContext.Provider>
    )
}
export {PageMangerContext, usePage}