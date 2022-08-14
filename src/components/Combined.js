import { Footer } from "./Footer";
import Data from './doc.js';
export function Combined(){
    const infosec = Data.map(info =>{
       return <Footer 
       key= {info.id}
       {...info}
        />
    })
    return(
        <div className='k'>
          {infosec}
        </div>
    )
}