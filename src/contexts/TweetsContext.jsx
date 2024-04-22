import { useState } from "react";
import { createContext } from "react";
import  Data from "./../tools/data.jsx"


export const TweetContext = createContext()




export const Tweetsprovider = ({ Children }) => {

    const [ tweets, setTweets ] = useState(Data)
    // const [ user, setUser]=useState()

    // const  contextData={
    //     tweets,
    //     setTweets,
    //     user,
    // }


     return( 
        <TweetContext.Provider value={{tweets, setTweets}}>
            {Children}
        </TweetContext.Provider>
    )
}
