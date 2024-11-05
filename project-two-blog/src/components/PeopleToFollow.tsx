import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Dimple Pandey", following: true },
  { name: "Darling", following: true },
  { name: "Kalua", following: false },
  { name: "Mota", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People To Follow</h3>
      <div className="space-y-4">
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};
export default PeopleToFollow;
