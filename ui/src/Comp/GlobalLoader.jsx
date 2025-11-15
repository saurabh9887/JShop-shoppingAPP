// components/GlobalLoader.jsx

import { useLoaderStore } from "@/Store/LoaderStore";

export default function GlobalLoader() {
  const loader = useLoaderStore((state) => state.loader);

  if (!loader) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[9999]">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
    </div>
  );
}
