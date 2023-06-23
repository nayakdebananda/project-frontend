"use client"
import { auth } from "../utils/firebase"
import { useAuthState, useIdToken } from "react-firebase-hooks/auth"
import axiosPrivate from "../utils/axios"

import { useEffect, useState } from "react"

const useAxiosPrivate = () => {
  const [user, loading, error] = useIdToken(auth)
  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      async (config) => {
        if (!config.headers.Authorization) {
          auth.onAuthStateChanged(user => {
            user?.getIdTokenResult().then(token => {
              config.headers.Authorization = `Bearer ${token.token}`
            })
          })
        }
        return config
      }, (error) => Promise.reject(error)
    )
    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      async (error) => {
        console.log(error)
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true
          if (user) {
            user?.getIdTokenResult().then(token => {
              prevRequest.headers.Authorization = `Bearer ${token.token}`
            })
            
            return axiosPrivate(prevRequest)
          }
          return Promise.reject(error)
        }
      }
    )
    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept)
      axiosPrivate.interceptors.request.eject(requestInterceptor)
    }
  }, [user])
  return axiosPrivate
}

export default useAxiosPrivate
