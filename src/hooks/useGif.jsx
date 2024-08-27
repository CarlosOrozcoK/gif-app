import {useState} from 'react'

export const useGif = () => {
    
    const [gif, setGif] = useState('')
    
    const reqGif = async() => {
        await fetch('https://api.giphy.com/v1/gifs/random?api_key=6ivlUVmtu1XyMRNbycFakq1i70JwwI41').then(async(resp) => {
            await resp.json().then(({data}) => {
                setGif(data.images.original.url)
            })
        }).catch(console.err)
    }

    const handleGetGif = () =>{
        reqGif()
    }

    // return hook
    return{
        gif,
        handleGetGif
    }
}