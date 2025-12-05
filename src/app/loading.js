export default function loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div class="flex flex-row gap-2">
        <div class="w-4 h-4 rounded-full bg-lime-500 animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-lime-500 animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-lime-500 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}
