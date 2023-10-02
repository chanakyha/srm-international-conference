import React from 'react'

interface ImpDatesProps {
    title: string,
    date: string,
  }[];
  
  const IMPDATES: ImpDatesProps[] = [
    {
      title: "Paper Submission",
      date: "20 October 2023",
    },
    {
      title: "Notification of Acceptance",
      date: "27 October 2023",
    },
    {
      title: "Camera Ready Copy Submission",
      date: "04 November 2023",
    },
    {
      title: "Paper Registration",
      date: "07 November 2023",
    },
    {
      title: "Pre-conference Tutorial",
      date: "07 December 2023",
    },
    {
      title: "Conference",
      date: "08 December 2023",
    },
    
    
    
  ] 
const ImpDates = () => {
    return (
        <section className="p-4 md:px-16 lg:p-0 lg:max-w-6xl lg:mx-auto mb-10">
            <div className="flex flex-col lg:items-center lg:w-full gap-4 my-10">
                <h1 className="text-lg md:text-xl lg:text-2xl border-b-2 pb-1 lg:pb-2 border-gray-800 w-fit font-bold tracking-wider">
                    Important Dates
                </h1>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    IMPDATES.map((card,idx) => (

                        <div key={idx} className="w-full lg:h-full">
                            <div className="w-full h-full flex flex-col gap-4 bg-[url('/assets/CardWave.svg')] bg-opacity-5 bg-cover bg-bottom bg-no-repeat shadow-md rounded-md p-4 lg:p-12">
                                <div className="text-center lg:text-left flex flex-col gap-2">
                                    <p className="text-base lg:text-xl font-medium lg:w-44">
                                        {card.title}
                                    </p>
                                    <h1 className="text-xl lg:text-2xl font-bold">
                                        {card.date}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
            
            </div>
           
        </section>
    )
}

export default ImpDates