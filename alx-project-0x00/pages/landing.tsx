import Card from "@/components/Card";
import Button from "@/components/Button";

export default function LandingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Landing Page</h1>

      <Card />
      <Card />
      <Card />

      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button title="Small SM" styles="text-sm py-1 px-3 bg-blue-500 rounded-sm" />
          <Button title="Medium MD" styles="text-base py-2 px-4 bg-green-500 rounded-md" />
          <Button title="Large FULL" styles="text-lg py-3 px-6 bg-purple-500 rounded-full" />
          <Button title="Small FULL" styles="text-sm py-1 px-3 bg-red-500 rounded-full" />
          <Button title="Medium SM" styles="text-base py-2 px-4 bg-yellow-500 rounded-sm" />
          <Button title="Large MD" styles="text-lg py-3 px-6 bg-pink-500 rounded-md" />
        </div>
      </div>
    </div>
  );
}
