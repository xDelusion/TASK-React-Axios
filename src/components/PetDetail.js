import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deletePet, getPetById, updatePet } from "../api/pets";
import { useQuery, useMutation } from "@tanstack/react-query";

const PetDetail = () => {
  const { petId } = useParams();
  // const pet = petsData[0];

  // const pet = petDetail.find((petDat) => petDat.id == petId)

  /* * * * * * */
  
  // This START
  const [pet, setPet] = useState({});
  /*                                   This is a the longer code.    */
  
  const query = useQuery({            // const callAPI = async () => {
    queryKey: ["pet"],                //   const res = await getPetById(petId);
    queryFn: () => getPetById(petId), //   setPet(res);
  });                                 // };

  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ  // useEffect(() => {
/*                                    //   callAPI();
/*                                    // }, []);                    */

/* const callAPI = async () => {
   const res = await getPetById(petId);
  setPet(res);

   useEffect(() => {
   callAPI();
   }, []);                  */

  // useQuery here
  // END

  const handleUpdate = () => {
    // THIS START
    updatePet(petId, pet.name, pet.image, pet.type);
    // Here use mutation.mutate()
    mutation.mutate();
    // END
  };
  const handleDelete = () => {
    // This start
    deletePet(petId);
    // Here use mutation.mutate()
    // END
  };
  if (!pet) {
    return <h1>There is no pet with the id: {petId}</h1>;
  }
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            onClick={handleUpdate}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adobt
          </button>

          <button
            onClick={handleDelete}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
