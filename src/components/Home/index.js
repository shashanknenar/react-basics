import React, { useContext, useEffect, useState } from 'react'

const MyContext = React.createContext()

function MyComponent(){
    const {state, setState} = useContext(MyContext)
    
    useEffect(()=>{
        setTimeout(()=>{
            setState(state=>({
                ...state,
                name: 'Something cool'
            }))
        },1000)
    }, [])

    return <h1>Hello {state.name}</h1>
}

export default function Home(props){

    const [obj, setObj] = useState({
        name: 'Shashank',
        age:20,
        prop: 'random'
    })

    return <MyContext.Provider value={{state:obj,
         setState:setObj}}>
    <div>
        <div>
            <div>
                <MyComponent/>
            </div>
        </div>
    </div>

    </MyContext.Provider>
}
