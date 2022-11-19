import { Route } from "react-router-dom"
import HeadeHome from "../components/HeaderHome/HeadeHome"


export const HomeTemplate = (props) => {
    
    return <Route exact path={props.path} render={
        (propsRoute) =>{
            return <>
                <HeadeHome/>
                <props.component {...propsRoute}/>
            </>
        }}/>
}