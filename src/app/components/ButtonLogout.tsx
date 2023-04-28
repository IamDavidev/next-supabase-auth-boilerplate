'use client'

import {useAuth} from "@/lib/hooks/useAuth";
import {useRouter} from "next/navigation";

export const ButtonLogout = () : JSX.Element => {
    const { signOut } = useAuth()
    const router = useRouter()
    return (
        <button
            className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}
            onClick={()=>{
                signOut()
                    .then(() => router.refresh())
                    .catch(e => console.log(e))
                }
            }
        >
            Logout
        </button>
    )

}

