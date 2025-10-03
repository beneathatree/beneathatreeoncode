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
    <div className="bg-[#F4FAF9] min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our People</h1>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {people.map((p, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-md"
              style={{ width: 328, height: 411 }}
            >
              {/* Image Section */}
              <div style={{ height: 265 }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div
                className="flex flex-col justify-between items-start px-6 pt-4 pb-2 bg-white rounded-b-lg"
                style={{ height: 146 }}
              >
                <div>
                  <h2 className="font-figtree font-semibold text-[40px] text-black leading-none tracking-tight">
                    {p.name}
                  </h2>
                  <p className="font-figtree font-medium text-[17px] text-[#888888] mt-2 tracking-tight">
                    {p.role}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-4">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
