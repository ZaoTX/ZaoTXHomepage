import { Fragment, useState } from "react"; 
interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item:string)=> void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
    
    const [currentID,selectedID] = useState(-1); 
    const message = items.length === 0 ? <p>There are no items in the list</p> : null;
    //const message = items.length === 0 && <p>There are no items in the list</p>;
    return (
    <Fragment>
        <h1>{heading}</h1>
        {message}
        <ul className="list-group">
         {items.map((item,index)=> 
         <li className = {currentID === index ? "list-group-item active" : "list-group-item"}
         key={items.indexOf(item)}
         onClick = {()=> {
            selectedID(index);
            onSelectItem(item)
         }}
         >{item} 
         </li>)}
        </ul>
    </Fragment>
    )}
export default ListGroup;