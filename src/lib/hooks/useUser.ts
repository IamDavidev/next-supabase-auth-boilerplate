import {headers,cookies} from 'next/headers'
import {createServerComponentSupabaseClient, User} from "@supabase/auth-helpers-nextjs";
import {AuthError} from "@supabase/gotrue-js";

interface  CurrentUserResponse {
    user: User | null,
    error: AuthError | null
}

interface  UseUserResponse {
    getCurrentUser: () => Promise<CurrentUserResponse>
}

export function useUser(): UseUserResponse {
    const client = createServerComponentSupabaseClient({
        cookies,
        headers
    })

    const getCurrentUser = async (): Promise<CurrentUserResponse> => {
        const {data: {
            user
        },error} = await client.auth.getUser()

        console.log({
            user
        })

        return {
            user,
            error
        }
    }

    return {
        getCurrentUser
    }
}