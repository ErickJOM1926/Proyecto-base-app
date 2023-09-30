import React from "react"
import Card from "./Card"
import image1 from "../assets/PlayStation.png"
import image2 from "../assets/PlayStation2.png"
import image3 from "../assets/PlayStation3.png"

const cards = [
    {
        id: 1,
        title: 'PlayStation',
        image: image1,
        consola: "PlayStation 1"
    },
    {
        id: 2,
        title: 'PlayStation2',
        image: image2,
        consola: "PlayStation 2"
    },
    {
        id: 3,
        title: 'PlayStation3',
        image: image3,
        consola: "PlayStation 3"
    }
]

export default function Cards() {
    console.log()
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    cards.map(c => (
                        <div className="col-md-4" key={cards.id}>
                            <Card
                                key={c.id}
                                id={c.id}
                                title={c.title}
                                image={c.image}
                                consola={c.consola}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
