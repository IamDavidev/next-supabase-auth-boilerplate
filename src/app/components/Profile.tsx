import {FC} from "react";

interface  ProfileProps {
    name: string;
    email: string;
}

export const Profile: FC<ProfileProps> = ({
    email,
    name
}) => {
    return (
        <div
            className={"p-16 border border-gray-300 rounded-lg text-center"}
        >
            <h2
                className={"text-4xl font-bold  text"}
            >
                 {`Welcome to your profile ${name} `}

            </h2>
            <span
                className={"text-2xl font-bold  text-yellow-500 opacity-60"}
            >
                {`Your email is ${email}`}
            </span>

        </div>
    )

}
