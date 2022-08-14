import top from './Airbnb/Star 1.png'
export function Footer(props){
  console.log(props)
  let text;
   if (props.current === 'Sold out'){
    text = "Sold out"
   }
   else if(props.current === 'Online'){
    text = 'Online'
   }

  
    return(
      <section>
         {text && <div className="sold">{text}</div>}
         <img src={props.img} alt='cattie'/>
          <div>
             <img src={top} alt='t'/>  
             <span>{props.rating}</span>
             <span className = 'grey'>{props.reviewcount}. </span>
             <span className = 'grey'>{props.country}</span>
          </div> 
          <p>{props.Title}<br /><b>From ${props.price}</b>/ person</p>
          
        </section>
    )
  }

  //<p><b>From ${props.price}</b>/ person</p>