import plots from "../../assets/imgs/plots.png";
import surfen from "../../assets/imgs/surfen.png";
import shopedia from "../../assets/imgs/shopedia.png";
import q2day from "../../assets/imgs/q2day.png";

const Projects = () => {
  const technologies = [
    { name: "React", color: "bg-indigo-500" },
    { name: "Material UI", color: "bg-indigo-400" },
    { name: "Flutter", color: "bg-blue-600" },
    { name: "GraphQL", color: "bg-purple-600" },
    { name: "Firebase", color: "bg-red-500" },
    { name: "Python", color: "bg-green-400" },
    { name: "Amplify", color: "bg-yellow-500" },
    { name: "GCP", color: "bg-orange-300" },
    { name: "HTML/JS/CSS", color: "bg-green-900", category: 0 },
    { name: "TypeScript", color: "bg-violet-400", category: 0 },
    { name: "OpenCV", color: "bg-cyan-500", category: 1 },
    { name: "Numpy", color: "bg-blue-400", category: 1 },
    { name: "Flask", color: "bg-green-600", category: 0 },
  ];

  const projects = [
    {
      title: "Shopedia",
      imageSrc: shopedia,
      date: "April 2023",
      link: "https://main.dyi9pc3zyrqj8.amplifyapp.com/view-product/?id=3200043828",
      description:
        "Shopedia is a LLM4REC model website that takes in a user query and uses LLMs to generate tailored shopping items for a given situation. ",
      technologies: [
        technologies[0],
        technologies[1],
        technologies[3],
        technologies[5],
        technologies[6],
        technologies[9],
      ],
    },
    {
      title: "Surfen",
      imageSrc: surfen,
      date: "June 2023",
      link: "https://surfen.web.app/",
      description:
        "Surfen is a surf clip enhancer that uses Lucas-Kanade optical flow in order to detect and follow surfers in a surfline replay.",
      technologies: [
        technologies[0],
        technologies[4],
        technologies[5],
        technologies[10],
        technologies[11],
        technologies[12],
      ],
    },
    {
      title: "q2day",
      imageSrc: q2day,
      date: "March 2022",
      link: "https://q2day-e7dcf.web.app/",
      description:
        "q2day is a web application dedicated to generating curiosity and community engagement around unique questions. I scrapped this website and will return to it later. ",
      technologies: [technologies[0], technologies[4]],
    },
    {
      title: "Plots - party with your homies",
      imageSrc: plots,
      date: "June 2021",
      link: "https://apps.apple.com/us/app/plots-party-with-your-homies/id1579989678",
      description:
        "A party organization iOS app designed to facilitate the organization and marketing of LA-style parties Software acquired by Cruuz Inc. after negotiating with Mamoun Debbagh for $10,000 on February 24, 2022",
      technologies: [technologies[2], technologies[4], technologies[7]],
    },
  ];

  https: return (
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
                rel="noreferrer"
              >
                {project.link.length > 50 ? project.title : project.link}
              </a>
              <p className="text-gray-500 mb-2">{project.date}</p>
              <p className="text-sm">{project.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2 p-2">
              {project.technologies.map((tech, index) => (
                <li key={index}>
                  <div className={`rounded-full p-2 ${tech.color} text-white`}>
                    {tech.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
