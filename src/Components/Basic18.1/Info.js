import React, {useState} from 'react'
// import { act } from 'react-dom/test-utils';

const Info = ({items, length}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const onTitleClick = () =>{
        setActiveIndex(!activeIndex)
    }

    const renderedItems = items.map((item, index) =>{
        const active = index === activeIndex ? 'active' : '';

        return (
        <React.Fragment key={item.text1}>

            <div className={`title ${active}`} onClick={() => onTitleClick(index)} >
                {item.text}
                {/* <i className="dropdown icon"></i> */}
                <p>show more</p>
                
            </div>

            <div className={`content ${active}`}>
                <p>{item.text} </p>

                <div className={`${active}`} onClick={() => onTitleClick(index)}>
                    <p>show less</p>

                </div>
                
            </div>
        </React.Fragment>)
    })


    return (
       
        <div className="ui styled accordion">
            {renderedItems}
            {/* {activeIndex} */}
        </div>

           )
}

export default Info
