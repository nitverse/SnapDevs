"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'
import { useFormStatus } from 'react-dom';

function LoginButton() {
	const { pending } = useFormStatus();
	return (
		<Button className='w-full flex gap-3 ' disabled={pending} aria-disabled={pending} >
			<Image src={"/github.svg"} width={20} height={20} alt='Github logo' /> Log in with Github
		</Button>
	);
}


const LoginCard= () => {
  return (
    <>
        <form className='space-y-4 '>
 				<LoginButton />
 			</form>
 			<div className='mt-4 text-center flex justify-center gap-2 text-[14px] font-medium'>
 				<span>New To SnapDevs? </span>
 				<Link className='text-blue-500 hover:underline text-[14px] mr-1' href='/signup'>
 					Sign Up
 				</Link>
		</div>
    </>
)
}

export default LoginCard