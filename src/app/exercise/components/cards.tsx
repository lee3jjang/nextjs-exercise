export default function Cards() {
  const Card = () => (
    <div className="flex flex-col gap-y-2 py-3 px-3 rounded cursor-pointer">
      <img
        className="rounded aspect-video object-cover w-[180px]"
        src="/images/makeup.png"
      />
      <div>
        <span className="font-semibold">화사한 봄 메이크업 추천템</span>
        <div className="flex gap-x-1 items-center">
          <img className="rounded-full w-4 h-4" src="/images/makeup.png" />
          <span className="text-sm">으니쮸</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-[65vh] w-[100%] items-center justify-center">
      <div className="grid grid-cols-4 gap-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
