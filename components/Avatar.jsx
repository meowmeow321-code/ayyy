import Image from 'next/image'

export default function Avatar() {
    return (
        <Image src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_5.png" alt="Avatar" width={100} height={100} className="rounded-full"/>
    )
}
