import { Nav } from "@/components";

export default function History() {
  return (
    <div className="self-stretch">
      <div className='flex'>
        <Nav />
        <button className='self-start text-xs font-medium text-slate-600 ml-auto mt-auto'>
          Clear all Tasks
        </button>
      </div>
    </div>
  )
}
