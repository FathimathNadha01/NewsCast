import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const Newscontext = createContext();

export const Newsprovider = ({children})=>{
    const [newsdata,setnewsdata] = useState([])
    const [entertainment,setentertainment] = useState([])


    const fetchnews=async()=>{
        try {
            const response = await axios.get("https://ok.surf/api/v1/cors/news-feed")
            console.log(response);
            setnewsdata(response.data.Business)
            setentertainment(response.data.Entertainment)
            
            
            
        } catch (error) {
            console.log(error);
            
            
        }
    }
    useEffect(()=>{
        fetchnews()
    }, [])

return(
    <Newscontext.Provider value={{newsdata,entertainment}}>{children}</Newscontext.Provider>

)
}