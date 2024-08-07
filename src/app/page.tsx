'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
    <main>
      <div onClick={() => router.push('/clicker')}>Clickerpage</div>
      <div onClick={() => router.push('/other')}>otherpage</div>
    </main>
  );
}
