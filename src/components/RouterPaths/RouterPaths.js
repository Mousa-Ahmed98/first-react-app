import {Routes, Route} from "react-router-dom"
import {Movies} from "../Movies/Movies"
import {Details} from "../Details/Details"
import {WatchList} from "../WatchList/WatchList"
import {NotFound} from "../NotFound/NotFound"
export function RouterPaths(){
    return(
        <>
            <Routes>
                <Route path="" element={<Movies/>}/>
                <Route path="details/:id" element={<Details/>}/>
                { <Route path="WatchList" element={<WatchList/>}/>}
                <Route path="*" element={<NotFound/>}/>    
            </Routes>
        </>
    );
}