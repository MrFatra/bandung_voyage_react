import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./config"
import { useState } from "react"

const useAuth = () => {
    const [errMessage, setErrMessage] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const login = async (credentials) => {
        setIsLoading(true)
        try {
            const docRef = collection(db, 'users')
            const q = query(docRef, where('username', '==', credentials.username))
            const querySnapshot = await getDocs(q)

            if (querySnapshot.empty) {
                console.log('Username/password salah.')
                throw new Error('Username/password salah.')
            }
            const user = querySnapshot.docs.map(doc => doc.data())
            console.log('User: ', user)
        } catch (error) {
            console.error('Error getting document:', error)
            setErrMessage(error.message)
        } finally {
            setIsLoading(false)
        }

    }

    const register = async (credentials) => {
        setIsLoading(true)
        try {
            const docRef = collection(db, 'users')
            const q = query(docRef, where('username', '==', credentials.username))
            const querySnapshot = await getDocs(q)
            if (!querySnapshot.empty) {
                console.log('Username sudah terdaftar.')
                throw new Error('Username sudah terdaftar.')
            }

            const registerUser = await addDoc(docRef, {
                email: credentials.email,
                username: credentials.username,
                password: credentials.password,
            })

            console.log('Document added: ', registerUser.id)
        } catch (error) {
            console.error('Error register: ', error.message)
            setErrMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return { login, register, errMessage, isLoading }
}
export default useAuth