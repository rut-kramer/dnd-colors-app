import React, { useState } from 'react';
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

function List() {
    const [clr, setClr] = useState("white")
    const [, drop] = useDrop({
        accept: 'COLOR',
        drop: (item) => (setClr(item.color)),
        collect: monitor => ({
        })
    })

    return (
        <div>

            <div className="container">
                <div className="colorsList">
                    <MovableItem color="red" index={1} />
                    <MovableItem color="orange" index={2} />
                    <MovableItem color="green" index={3} />
                    <MovableItem color="blue" index={4} />
                    <button onClick={() => setClr("white")}>clear</button>
                </div>
                <div ref={drop} className="colors"
                    style={{ backgroundColor: clr }}></div>
            </div>
        </div>
    );
}

export default List;
