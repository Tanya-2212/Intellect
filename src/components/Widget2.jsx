import React, { useEffect, useState } from 'react'

export default function Widget2() {
    const [selected, setSelected] = useState([1, 2])
    const [value, setValue] = useState("Low")

    const handleClick = (event) => {
        if(event.target.dataset.value){
            const value = JSON.parse(event.target.dataset.value)
            if (value) {
                setSelected([...value]);
                if (value.length > 3) setValue("High")
                else if (value.length == 3) setValue("Medium")
                else setValue("Low")
            }
        }
    }
    return (
        <React.Fragment>
            <h3 className="value-type">{value}</h3>
            <div className='controller-container' onClick={handleClick}>
                <span className={`controller-span ${selected.includes(5) ? 'active' : ''}`} data-value="[5,4,3,2,1]"></span>
                <span className={`controller-span ${selected.includes(4) ? 'active' : ''}`} data-value="[4,3,2,1]"></span>
                <span className={`controller-span ${selected.includes(3) ? 'active' : ''}`} data-value="[3,2,1]"></span>
                <span className={`controller-span ${selected.includes(2) ? 'active' : ''}`} data-value="[2,1]"></span>
                <span className={`controller-span ${selected.includes(1) ? 'active' : ''}`} data-value="[1]"></span>
            </div>
        </React.Fragment>
    )
}
