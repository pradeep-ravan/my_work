//action creators
//return an action(object)
const BUY_BALL = 'BUY_BALL';
//if i need to make a change i can do it here and it will get reflected everywhere
export const buyBall = ()=>{
    return {
        type:BUY_BALL
    }
}