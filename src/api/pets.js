import instance from "./index";

const getPets = async () => {
  const res = await instance.get("/pets");
  // return res.data;
  return res;
};

const getPetById = async (petId) => {
  const res = await instance.get(`/pets/${petId}`);
  return res.data;
};

const addPet = async (name, image, type, adopted) => {
  const res = await instance.post("/pets", {
    name: name,
    adopted: adopted,
    image: image,
    type: type,
  }); //you can just type what's after the colon
  return res;
};

const updatePet = async (petId, name, image, type) => {
  const res = await instance.put(`/pets/${petId}`, {
    name,
    image,
    type,
    adopted: 1,
  });
  return res.data;
};

const deletePet = async (petId) => {
  const res = await instance.delete(`/pets/${petId}`);
  return res.data;
};

export { getPets, getPetById, addPet, deletePet, updatePet };
