import { JoditForm } from "@/components/jodit-form"

export default function Home() {
  return (
    <div className="border-2 border-gray-200 p-10 max-w-[1000px] w-full mx-4 flex flex-col gap-8">
    
    <div className="flex flex-col gap-4">
      <p>Jodit WYSIWYG</p>
      <JoditForm />
    </div>

    <div className="flex flex-col gap-4">
      <p>EditorJs WYSIWYG</p>
    </div>
  </div>
  )
}
