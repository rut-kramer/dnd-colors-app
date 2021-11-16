import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from "react-dnd";

function MovableItem({ color, index }) {
    const [, drag] = useDrag({
        type: "COLOR",
        item: { id: index, color: color },
        collect: (monitor) => ({}),
    });
    return (
        <div ref={drag} className="color" style={{ backgroundColor: color }}></div>
    )
}

function Dropable({ color }) {
    const [clr, setClr] = useState(color)
    const [, drop] = useDrop({
        accept: 'COLOR',
        drop: (item) => (setClr(item.color)),
        collect: monitor => ({
        })
    })
    useEffect(() => {
        setClr(color);
    },[color])
    return <div ref={drop} className="colorD"
        style={{ backgroundColor:  clr }}>
    </div>
}

function List() {
    const [cl, setCl] = useState("white")
    return (
        <div>
            <div className="container">
                <div className="colorsList">
                    <MovableItem color="red" index={1} />
                    <MovableItem color="orange" index={2} />
                    <MovableItem color="green" index={3} />
                    <MovableItem color="blue" index={4} />
                    <button onClick={() => setCl(cl==="white"?"#ffffff":"white")}>clear</button>
                </div>
                <div className="colors">
                    <Dropable color={cl}/>
                    <Dropable color={cl}/>
                    <Dropable color={cl}/>
                    <Dropable color={cl}/>
                    <Dropable color={cl}/>
                </div>
            </div>
        </div>
    );
}

export default List;
