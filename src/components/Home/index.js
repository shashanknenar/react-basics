import React, { useContext, useEffect, useState } from 'react'

const MyContext = React.createContext()

function MyComponent(){
    const state = useContext(MyContext)
    

    return <h1>Hello {state.name}<MyComponent2/>
    </h1>
}

function MyComponent2(){
    const state = useContext(MyContext)
    
    return <h1>Your age is {state.age}</h1>
}

export default function Home(props){

    const [obj, setObj] = useState({
        name: 'Shashank',
        age:20,
        prop: 'random'
    })

    return <MyContext.Provider value={obj}>
    <div>
        <div>
            <div>
                <MyComponent/>
            </div>
        </div>
    </div>

    </MyContext.Provider>
}
