import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { collection, getCountFromServer, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/backend/firebase';

interface CountProps {
  userCount: number,
  paperCount: number,
  reviewerCount: number,
  acceptedPaperCount: number,
};

const DashCards = () => {

  const [count, setCount] = useState({
    userCount: 0,
    paperCount: 0,
    reviewerCount: 0,
  } as CountProps);

  
  useEffect(() => {
    const userCol = collection(db, "users");
    const unsubscribe = onSnapshot(userCol, (querySnapshot) => {
        querySnapshot.docs.length;
        setCount((count) => ({
            ...count,
            userCount: querySnapshot.docs.length,
        }));
    });
    return () => unsubscribe();
  },[]);

  useEffect(() => {
    const paperCol = collection(db, "papers");
    const unsubscribe = onSnapshot(paperCol, (querySnapshot) => {
        querySnapshot.docs.length;
        setCount((count) => ({
            ...count,
            paperCount: querySnapshot.docs.length,
        }));
    });
    return () => unsubscribe();
  },[]);

  useEffect(() => {
    const colRef = collection(db, "reviewers");
    const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
        querySnapshot.docs.length;
        setCount((count) => ({
            ...count,
            reviewerCount: querySnapshot.docs.length,
        }));
    });
    return () => unsubscribe();
  },[])

  useEffect(() => {
    const colRef = query(
      collection(db, "papers"),
      where("status", "==", "accepted")
    );
    const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
        querySnapshot.docs.length;
        setCount((count) => ({
            ...count,
            acceptedPaperCount: querySnapshot.docs.length,
        }));
    });
    return () => unsubscribe();
  },[])


  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Users</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{count?.userCount}</div>
          <p className="text-xs text-muted-foreground">Total No of Users</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Papers</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-muted-foreground"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{count?.paperCount}</div>
          <p className="text-xs text-muted-foreground">
            Total No of Papers Uploaded
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Reveiwers</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-muted-foreground"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{count?.reviewerCount}</div>
          <p className="text-xs text-muted-foreground">Total No of Reveiwers</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Accepted Papers</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-muted-foreground"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{count?.acceptedPaperCount}</div>
          <p className="text-xs text-muted-foreground">
            Total No of Accepted Papers
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-muted-foreground"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹ 9999.99</div>
          <p className="text-xs text-muted-foreground">
            Total Collected Revenue
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashCards