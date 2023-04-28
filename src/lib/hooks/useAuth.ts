import { useState } from 'react'
import {createBrowserSupabaseClient} from '@supabase/auth-helpers-nextjs'

interface  UseAuthResponse {
    signInGithub: () => Promise<void>
    signOut: () => Promise<void>
}

export const PROVIDERS = {
    GITHUB: 'github',
    GOOGLE: 'google'
}

export function useAuth(): UseAuthResponse{

    const [client] = useState(() => createBrowserSupabaseClient())

    const signInGithub = async (): Promise<void> => {
        await client.auth.signInWithOAuth({
            provider : "github"
        })
    }

    const signOut = async  () : Promise<void>=>{
        await client.auth.signOut()
    }


    return {
      signInGithub,
      signOut
    }
}



