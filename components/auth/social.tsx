"use client";

import { FC } from 'react'
import { Button } from '@/components/ui/button';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface SocialProps {
  
}

export const Social: FC<SocialProps> = ({}:SocialProps) => {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        size={"lg"}
        className='w-full'
        variant={"outline"}
        onClick={() => {}}
      >
        <FcGoogle/>
      </Button>
      <Button
        size={"lg"}
        className='w-full'
        variant={"outline"}
        onClick={() => {}}
      >
        <FaGithub/>
      </Button>
    </div>
  )
};