import React, { useState } from "react";
import axios from "axios"

let i = 0;

export default function MyTest(props) {
    const [ value, setValue ] = useState(0)

    const myEvent = (event) => {
        console.log("VALUE UPDATED ON BUTTON")
        setValue((value) => value + 1)
    }

    const axiosCall = (event) => {
        axios({
            url: 'http://localhost:8080/messages' + '?page_number=' + 0 + '&page_size=' + 100,
            method: 'get',
        }).then((response) => {
            console.log("CALL ACTIVATED")
            setValue(value + 1)
        })

    }

    console.log("HAS BEEN RENDERED: " + (i++) + ". The value state is: " + value)

    return(
        <div className="" id="test-area">
            <div className="container--fluid">
                <div className="container">{value}</div>
                <button type="button" className="btn btn-primary" onClick={myEvent}>Press me</button>
                <button type="button" className="btn btn-primary mx-2" onClick={axiosCall}>Make async call</button>
            </div>
        </div>
    )
}