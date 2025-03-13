import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-row gap-4 py-4 sm:px-4">
      <button type="button" className="text-white border font-medium rounded-lg text-sm h-8 px-2 ml-4 sm:ml-0 text-center">
        <svg className="w-5 h-5 text-[#94a2b7]/85" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
        </svg>
      </button>
      <TailwindAdvancedEditor />
    </div>
  );
}
