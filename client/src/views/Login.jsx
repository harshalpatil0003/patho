
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import img from '../../Assets/login/Travelers.png'
export function Login() {
    return (
        <div className=" flex justify-around border border-green-300 ">
            <img src={img} alt="img" className=" h-[50%]" />



            <form className=" flex max-w-md flex-col gap-4 ">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>

        </div>
    );
}
