type Person = {
  name: string;
  role: string;
  img: string;
};

const people: Person[] = [
  { name: "Adharsh", role: "Full-Stack Developer", img: "/people/adharsh.jpg" },
  { name: "Adhyayan", role: "Software Engineer Dev", img: "/people/adhyayan.jpg" },
  { name: "Adil", role: "Designer / Photographer", img: "/people/adil.jpg" },
  { name: "Aman", role: "Full-Stack Developer", img: "/people/aman.jpg" },
  { name: "Anil", role: "Co-founder", img: "/people/anil.jpg" },
  { name: "Bijoy", role: "Designer / Photographer", img: "/people/bijoy.jpg" },
  { name: "Girish", role: "Co-Founder", img: "/people/girish.jpg" },
  { name: "Rishabh", role: "Full-Stack Developer", img: "/people/rishabh.jpg" },
  { name: "Hashim", role: "Full-Stack Developer", img: "/people/hashim.jpg" },
  { name: "Hrithin", role: "Full-Stack Developer", img: "/people/hrithin.jpg" },
  { name: "Orange", role: "Office Cat", img: "/people/orange.jpg" },
  { name: "Rukmani", role: "Cook and Caretaker", img: "/people/rukmani.jpg" },
  { name: "Rishi", role: "Full-Stack Developer", img: "/people/rishi.jpg" },
  { name: "Rohit", role: "Co-Founder", img: "/people/rohit.jpg" },
  { name: "Shabeera", role: "Designer", img: "/people/shabeera.jpg" },
  { name: "Sachin", role: "Co-Founder", img: "/people/sachin.jpg" },
  { name: "Sagar", role: "Operations Manager", img: "/people/sagar.jpg" },
  { name: "Srinidhi", role: "Co-Founder", img: "/people/srinidhi.jpg" },
  { name: "Sharik", role: "Full-Stack Developer", img: "/people/sharik.jpg" },
  { name: "Shashank", role: "Full-Stack Developer", img: "/people/shashank.jpg" },
  { name: "Sumit", role: "Full-Stack Developer", img: "/people/sumit.jpg" },
  { name: "Tasavour", role: "Full-Stack Developer", img: "/people/tasavour.jpg" },
  { name: "Tharun", role: "Android Developer", img: "/people/tharun.jpg" },
  { name: "Vijay", role: "Cook and Caretaker", img: "/people/vijay.jpg" },
  { name: "Yeana", role: "Office Administrator", img: "/people/yeana.jpg" },
];

export default function OurPeople() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our People</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {people.map((p, i) => (
          <div key={i} className="border rounded-lg shadow hover:shadow-lg transition p-4 text-center">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
