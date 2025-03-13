import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-row gap-4 py-4 sm:px-4">
      <button type="button" className="text-white border font-medium rounded-lg text-sm h-8 px-1 ml-4 sm:ml-0 text-center">
        <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
        </svg>
      </button>
      <TailwindAdvancedEditor />
    </div>
  );
}
