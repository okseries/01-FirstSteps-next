import { NavBar } from "@/Components"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar/>
    <main className="flex flex-col items-center p-24">
      {children}
    </main>
    </>
  )
}