import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useSession } from 'next-auth/react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/backend/firebase'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

function Register() {
  const [category, setCategory] = useState<String>("");
  const {data:session} = useSession()

    const addNewUser = async (e: any) => {
      e.preventDefault();
      if (!session?.user?.email) return;
        var newUser = {
          name: e.target[0].value.trim(),
          email: e.target[1]?.value.trim(),
          mobile: e.target[2]?.value.trim(),
          category: category,
          organization: e.target[4]?.value.trim(),
        };
        

        const docRef = doc(db, "users", session?.user?.email)
        await setDoc(docRef, {...newUser, registered: true})
        alert("Registered Successfully")
      };
  return (
    <div className="mx-auto w-full h-full">
    <h1 className='text-4xl font-bold text-center my-10'>Register</h1>
    <div className="flex flex-col  overflow-hidden w-full h-full">
      <form 
        className='p-4 md:px-16 lg:max-w-3xl lg:mx-auto  lg:w-full '
        onSubmit={(e) => addNewUser(e)}
      >
        <div className="flex flex-col gap-2 my-4">
            <Label htmlFor="name" className="text-left font-semibold">
              Name
            </Label>
            <Input id="name" placeholder="Full Name" />
        </div>
        <div className="flex flex-col gap-2 my-4">
            <Label htmlFor="email" className="text-left font-semibold">
              Email
            </Label>
            <Input id="email" placeholder="Email" />
        </div>
        <div className="flex flex-col gap-2 my-4">
            <Label htmlFor="phone" className="text-left font-semibold">
              Mobile No
            </Label>
            <Input type="tel" id="phone"  placeholder="+91-XXXXXXXXXX" pattern="+[0-9]{2}[0-9]{10}"  />
        </div>
        <div className="flex flex-col gap-2 my-4">
            <Label htmlFor="username" className="text-left font-semibold">
              Category
            </Label>
            <Select onValueChange={(e) => setCategory(e)}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                    <SelectItem value="Research Scholars">Research Scholars</SelectItem>
                    <SelectItem value="Academicians-Professionals">Academicians/Professionals</SelectItem>
                    <SelectItem value="Foreign Author">Foreign Authors</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div className="flex flex-col gap-2 my-4">
            <Label htmlFor="orgnanization" className="text-left font-semibold">
              Name of Orgnanization/School/College
            </Label>
            <Input id="orgnanization" placeholder="Name of Orgnanization/School/College" />
        </div>
        <div className="mt-8 ">
            <Button type='submit' variant={"default"} className='w-full'>Register</Button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register



export function getServerSideProps(context:any) {
    const session = getServerSession(context.req, context.res, authOptions);
    console.log("session")
    // if (session?.user?.name) {
    //   return {
    //     redirect: {
    //       destination: "/",
    //       permanent: false,
    //     },
    //   };
    // }
  
    return {
      props: {
        session,
      },
    };
}