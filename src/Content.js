import React, { useMemo } from 'react'
import {useStore, actions} from './store'


const Content = () => {
    const [state, dispatch] = useStore()
    const {item, items} = state

    const handleSubmit = (item)=>{
        dispatch(actions.addItem(item))
    }

    const total = useMemo(()=>{
        return items.length
    }, [items])

    console.log("Render Content");

    return (
        <div>
            <form>
                <input type="text" value={item} onChange={(e)=>{dispatch(actions.setItem(e.target.value))}}></input>
                <button onClick={(e)=>{
                    e.preventDefault();
                    handleSubmit(item);
                }}>Add</button>
                <h3>Total: {total}</h3>
                <ul>
                    {items.map((i,idx) => <li key={idx}>{i}</li>)}
                </ul>
            </form>
        </div>
    )
}

export default Content