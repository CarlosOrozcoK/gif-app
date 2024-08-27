import React from "react"
import ReactDom from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { GifApp } from "./components/GifApp"

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifApp/>
    </React.StrictMode>
)