import Head from 'next/head';
// import LoginForm from '@/components/LoginForm';
import { useRouter } from 'next/router';


export default function Dashboard() {
    const router = useRouter();
    const user = JSON.parse(router.query.user);
  
    // Now you can use the user object
    console.log(user);
  
    return (
        <>
            <h1>Dashboard</h1>
        </>
    );
}