import { collection, getDocs } from "firebase/firestore"
import { db } from "./config"
import { useEffect, useState } from "react"

const useDestinations = (init = false) => {
    const [isLoading, setIsLoading] = useState(false)
    const [errMessage, setErrMessage] = useState()
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        getDestinations()
    }, [init])

    const getDestinations = async () => {
        if (!init) {
            return
        }
        setIsLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, 'destinations'))
            const destinationData = querySnapshot.docs.map(doc => doc.data())
            setDestinations(destinationData)
        } catch (error) {
            console.error(error)
            setErrMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const getDestinationById = async (id) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'destinations'))
            const destinationData = querySnapshot.docs.map(doc => doc.data())
            const destination = destinationData.find(destination => destination.id === id)
            return destination
        } catch (error) {
            console.error(error)
            return null
        }
    }

    return { isLoading, errMessage, destinations, getDestinationById }
}

export default useDestinations
