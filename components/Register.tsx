import React from 'react'
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

function Register() {


    const addNewUser = async (e: any) => {
        e.preventDefault();
        var newUser = {
          name: e.target[0].value.trim(),
          email: e.target[1]?.value.trim(),
          mobile: e.target[2]?.value.trim(),
          category: e.target[3]?.value.trim(),
          organization: e.target[4]?.value.trim(),
        };
    
        console.log(newUser);
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
            <Select>
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
            <Button variant={"default"} className='w-full'>Register</Button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register