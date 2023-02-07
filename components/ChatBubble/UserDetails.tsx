import useTimeFormat from '@/utils/useTimeFormat'
import Image from 'next/image'

interface UserDetailsProps {
  sent: boolean
  time: string
}

const UserDetails = ({ sent, time }: UserDetailsProps) => {
  return (
    <div
      className={`flex gap-3 items-center ${sent ? 'flex-row-reverse' : ''}`}>
      <Image
        alt='Krishna'
        height={58}
        width={58}
        className='flex-1 rounded-full'
        src={sent ? '/Avatars/arjuna.png' : '/Avatars/krishna.png'}
      />
      <div
        className={`flex flex-col gap-2 ${
          sent ? 'justify-end items-end' : ''
        }`}>
        <p className='text-sm font-bold tracking-wider leading-none text-gray-800 uppercase whitespace-nowrap'>
          {sent ? 'Arjuna' : 'Shri Krishna'}
        </p>
        <p className='text-xs tracking-wide leading-none text-gray-500'>
          {useTimeFormat(time)}
        </p>
      </div>
    </div>
  )
}

export default UserDetails