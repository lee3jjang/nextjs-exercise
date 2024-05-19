export default function Scroll() {
  const Card = () => (
    <div className="flex flex-col items-center gap-4 bg-slate-800 py-3 px-12 rounded-md shrink-0">
      <img className="rounded-full w-20 h-20" src="images/user.jpeg"></img>
      <div className="flex flex-col gap-y-0 items-center">
        <span className="text-sm font-semibold text-white">영화</span>
        <span className="text-slate-500 text-xs">스타트업 ・ UX 디자이너</span>
      </div>
      <button className="font-bold text-lime-400">팔로우</button>
    </div>
  );

  return (
    <div className="flex h-[65vh] w-[100%] items-center justify-center">
      <div className="flex gap-x-3 overflow-x-scroll w-full">
        <Card />
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
