import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AddPaperDialog = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button variant={"outline"}>Upload Paper</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Paper</DialogTitle>
                        <DialogDescription>
                            <section className="mt-8 flex flex-col gap-4">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="email">Title</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="grid w-full gap-1.5">
                                    <Label htmlFor="message">Abstract</Label>
                                    <Textarea
                                        placeholder="Type your message here."
                                        id="message"
                                    />
                                </div>
                                <div className="grid w-full gap-1.5">
                                    <Label htmlFor="message">Keywords</Label>
                                    <Textarea
                                        placeholder="Seperate by comma."
                                        id="message"
                                    />
                                </div>
                                <div>
                                    <div className="flex flex-col justify-center w-full">
                                        <Label htmlFor="message">Upload File</Label>
                                        <label
                                            htmlFor="dropzone-file"
                                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg
                                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                    />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <span className="font-semibold">
                                                        Click to upload
                                                    </span>{" "}
                                                    or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    SVG, PNG, JPG or GIF (MAX.
                                                    800x400px)
                                                </p>
                                            </div>
                                            <input
                                                id="dropzone-file"
                                                type="file"
                                                className="hidden"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <Button className='w-full'>
                                        Submit
                                    </Button>
                                </div>
                            </section>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddPaperDialog