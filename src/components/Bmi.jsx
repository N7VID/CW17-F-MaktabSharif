import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export default function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const queryClient = useQueryClient();
  const { isError, error, mutate } = useMutation(
    async () => {
      const res = await axios.post("http://localhost:3000/data", {
        height,
        weight,
      });
      return res.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("person");
        toast.success("New values ​​added successfully.");
      },
    }
  );
  if (isError) {
    toast.error(error.message);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      mutate({
        height,
        weight,
      });
      setWeight("");
      setHeight("");
    } else {
      toast.warn("The requested values are required");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col w-64 justify-center items-center gap-4 border-[3px] border-[#A37e2c] pt-8 pb-4 rounded-b-md border-t-transparent"
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <label htmlFor="Height" className="text-lg font-serif">
            HEIGHT
          </label>
          <input
            type="number"
            name="Height"
            id="Height"
            className="border-[3px] border-[#A37e2c] rounded-lg px-2 py-1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <label htmlFor="Weight" className="text-lg font-serif">
            WEIGHT
          </label>
          <input
            type="number"
            id="Weight"
            name="Weight"
            className="border-[3px] border-[#A37e2c] rounded-lg px-2 py-1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="font-serif bg-[#006039] text-white py-2 my-4 px-4 rounded-md hover:bg-[#134430] transition"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
}
