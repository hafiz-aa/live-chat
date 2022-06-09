import { projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const useCollection = () => {
  const error = ref(null)

  const addDoc = async (doc) => {
    error.value = null

    try {
      await projectFirestore.collection('messages').add(doc)

    } catch(err)  {
      console.log(err.message)
      error.value = 'could not send the message' 
    }
  }
  return { error, addDoc }
}

export default useCollection