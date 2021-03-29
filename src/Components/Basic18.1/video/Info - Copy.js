import React, {useState} from 'react'
import { act } from 'react-dom/test-utils';

const Info = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const onTitleClick = (index) =>{
        // console.log('title click', index)
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) =>{
        const active = index === activeIndex ? 'active' : '';

        return (
        <React.Fragment key={item.text}>
            <div 
                className={`title ${active}`} //"title" + active
                onClick={() => onTitleClick(index)} //need to arrow func - else the func will be invoked the minute the list is rendered
                // onClick={() => console.log('title click', index)}
            >
                <i className="dropdown icon"></i>
                {item.text}
            </div>
            <div className={`content ${active}`}>
                <p>{item.text}</p>
            </div>
        </React.Fragment>)
    })


    return (
        // <div>
        //     {items.length}
            
        // </div>
        <div className="ui styled accordion">
            {renderedItems}
            {/* {activeIndex} */}
        </div>
    )
}

export default Info
