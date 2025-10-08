export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Our Programs</h1>
        <p className="text-lg text-gray-700">Discover a wide range of educational programs.</p>
        <Link href="/programs/short-term" className="text-blue-500 hover:underline mt-4 block">
          View Short-Term Programs
        </Link>
        {/* Add program list */}
      </div>
    </div>
  );
}