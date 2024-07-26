export default function Cards({ height, weight, id }) {
  let Bmi = weight / (height * height);
  return (
    <div className="border border-black bg-white rounded flex flex-col justify-center items-center gap-3 w-40 h-40">
      <div className="text-xl font-serif">BMI RESULT</div>
      <div className="whitespace-nowrap overflow-hidden text-ellipsis text-lg">
        {Bmi.toFixed(2)}
      </div>
      <div className="flex justify-center items-center gap-3 pt-2">
        <img src="/public/bin.svg" alt="" className="w-5 cursor-pointer" />
        <img src="/public/edit.svg" alt="" className="w-5 cursor-pointer" />
      </div>
    </div>
  );
}
