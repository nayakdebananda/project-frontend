"use client"
import {useRouter} from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { useAuthState, useIdToken } from "react-firebase-hooks/auth"
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithPopup,
} from "firebase/auth"

import { auth } from "./utils/firebase"
import useAxiosPrivate from "./hooks/useAxiosPrivate"

function IndexPage() {

  const authProvider = new GoogleAuthProvider()
  const [user, ,] = useAuthState(auth)
  const router =  useRouter()
  if(user) {
    router.push('/projects')
  }
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, authProvider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      console.log(credential!!.idToken)
      console.log(await auth.currentUser!!.getIdToken())
      const user = getAdditionalUserInfo(result)
      console.log(user!!.profile)
    } catch (error) {
      console.log(error)
    }
  }
if(!user)
  return (
    <section className="container grid h-screen content-center gap-1 pb-1 md:grid-cols-2 md:py-10 md:pt-6 ">
      <Card className="flex h-96 flex-col justify-center gap-4 p-10 lg:w-96">
        <Button className="bg-lime-200" onClick={googleLogin}>
          <FaGoogle className="mr-1 h-4 w-4" /> Login with Google
        </Button>
        <Button className="bg-lime-200" onClick={()=>{
        }}>
          <FaGithub className="mr-2 h-4 w-4" /> Login with Github
        </Button>
      </Card>
    </section>
  )
}

export default IndexPage