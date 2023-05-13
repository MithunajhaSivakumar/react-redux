import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeContainer() {
    // Similar to mapStateToProps
    const numOfCakes = useSelector(state => state.numOfCakes)

    //similar to mapDispatchToProps
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of Cakes - {numOfCakes} </h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  )
}

export default HooksCakeContainer