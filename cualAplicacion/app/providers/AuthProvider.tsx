import React, { createContext, useState, useEffect } from "react"
import { Session } from "@supabase/supabase-js"
import { supabase } from "../services/api/supabase/supabase-config"
type ContextProps = {
  user: null | boolean
  session: Session | null
}

const AuthContext = createContext<Partial<ContextProps>>({})

interface Props {
  children: React.ReactNode
}

const AuthProvider = (props: Props) => {
  // user null = loading
  const [user, setUser] = useState<null | boolean>(null)
  const [session, setSession] = useState<Session | null>(null)
  console.log("session", session)

  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session)
    setUser(session ? true : false)
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Supabase auth event: ${event}`)
      setSession(session)
      setUser(session ? true : false)
    })
    return () => {
      authListener!.unsubscribe()
    }
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
