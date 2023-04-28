'use client'

import {useAuth} from "@/lib/hooks/useAuth";

export const ButttonLogin = () =>{
    const {signInGithub} = useAuth()
    return (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>{
                        signInGithub()
                            .then(r => console.log(r))
                            .catch(e => console.log(e))
                    }}
            >
                Login
            </button>
    )
}
