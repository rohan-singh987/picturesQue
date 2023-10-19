import axios from "axios"
import { useEffect, useState } from "react"

const useAxios = (param) => {
    const [res, setRes] = useState([])
    const [isLoading, setIsLoading ] = useState(false)
    const [error, setError] = useState("")

    axios.defaults.baseURL = 'https://api.unsplash.com/'

    const fetchData = async(url) => {
        try{
            setIsLoading(true)
            const result = await axios.get(url)
            setRes(result.data.results)
        }
        catch(err){
            setError(err)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param)
    }, [param])

    return {
        res,
        isLoading,
        error,
        fetchData: url => fetchData(url)
    }
}

export default useAxios