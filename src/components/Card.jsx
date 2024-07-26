import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "./Cards";

export default function Card() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["person"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/data");
      return response.data;
    },
    retry: 0,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-2 p-4 overflow-y-scroll custom-scrollbar h-[550px] w-[720px]  bg-slate-100">
        Loading
      </div>
    );
  }

  if (isError) {
    toast.error(error.message);
    return (
      <div className="grid grid-cols-4 gap-2 p-4 overflow-y-scroll custom-scrollbar h-[550px] w-[720px] bg-slate-100"></div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2 p-4 overflow-y-scroll custom-scrollbar h-[550px] w-[720px] bg-slate-100 rounded-lg my-2 cursor-default">
      {data?.map((item) => (
        <Cards
          height={item.height}
          weight={item.weight}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
}
