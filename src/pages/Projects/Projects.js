import plots from "../../assets/imgs/plots.png";
import surfen from "../../assets/imgs/surfen.png";
import shopedia from "../../assets/imgs/shopedia.png";

const Projects = () => {
  const projects = [
    {
      title: "Shopedia",
      imageSrc: shopedia,
      date: "April 2023",
      link: "https://main.dyi9pc3zyrqj8.amplifyapp.com/view-product/?id=3200043828",
      description:
        "Shopedia is a LLM4REC model website that takes in a user query and uses LLMs to generate tailored shopping items for a given situation. ",
    },
    {
      title: "Surfen",
      imageSrc: surfen,
      date: "Aug 2022",
      link: "https://surfen.web.app/",
      description:
        "Surfen is a surf clip enhancer that uses Lucas-Kanade optical flow in order to detect and follow surfers in a surfline replay.",
    },
    {
      title: "Plots - party with your homies",
      imageSrc: plots,
      date: "June 2021",
      link: "https://apps.apple.com/us/app/plots-party-with-your-homies/id1579989678",
      description:
        "A party organization iOS app designed to facilitate the organization and marketing of LA-style parties Software acquired by Cruuz Inc. after negotiating with Mamoun Debbagh for $10,000 on February 24, 2022",
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg block">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="flex flex-col w-full p-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <a
                className="text-sm text-blue-600 font-semibold"
                href={project.link}
                target="_blank"
              >
                {project.link.length > 50 ? project.title : project.link}
              </a>
              <p className="text-gray-500 mb-2">{project.date}</p>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
