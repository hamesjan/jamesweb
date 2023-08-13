import classes from "./Overview.module.css";
import mugshot from "../../assets/imgs/mugshot.png";
import plots from "../../assets/imgs/plots.png";
import surfen from "../../assets/imgs/surfen.png";
import shopedia from "../../assets/imgs/shopedia.png";

const Overview = () => {
  const technologies = [
    { name: "React/React Native", color: "bg-indigo-500", category: 0 },
    { name: "Flutter", color: "bg-blue-600", category: 0 },
    { name: "GraphQL", color: "bg-purple-600", category: 0 },
    { name: "Firebase", color: "bg-red-500", category: 0 },
    { name: "Python", color: "bg-green-400", category: 0 },
    { name: "Amplify", color: "bg-yellow-500", category: 0 },
    { name: "MongoDB", color: "bg-green-500", category: 0 },
    { name: "PostgreSQL", color: "bg-blue-400", category: 0 },
    { name: "GCP", color: "bg-orange-300", category: 0 },
    { name: "HTML/JS/CSS", color: "bg-green-900", category: 0 },
    { name: "TypeScript", color: "bg-violet-400", category: 0 },
    { name: "Astro", color: "bg-blue-800", category: 0 },
    { name: "Next.js", color: "bg-indigo-800", category: 0 },
    { name: "Streamlit", color: "bg-orange-300", category: 0 },
    { name: "Flask", color: "bg-green-600", category: 0 },
    { name: "Django", color: "bg-green-400", category: 0 },
    { name: "Tailwind", color: "bg-red-900", category: 0 },

    { name: "Pytorch", color: "bg-red-500", category: 1 },
    { name: "OpenCV", color: "bg-cyan-500", category: 1 },
    { name: "TensorFlow", color: "bg-yellow-800", category: 1 },
    { name: "Pandas", color: "bg-gray-900", category: 1 },
    { name: "Numpy", color: "bg-blue-400", category: 1 },

    { name: "C", color: "bg-purple-300", category: 8 },
    { name: "C++", color: "bg-purple-400", category: 8 },
    { name: "Java", color: "bg-green-300", category: 8 },
  ];

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
    <div className="display block">
      <div className={classes.visit_counter}>
        <a href="http://stuff.mit.edu/doc/counter-howto.html">
          <img
            src="http://stuff.mit.edu/cgi/counter/jameshanweb1023417"
            alt="several"
            style={{ marginRight: "5px" }}
          />
        </a>
        page visits
      </div>
      <div className={classes.outer_dv}>
        This is a <b>personal portfolio</b> for <b>James Han.</b>
        <br />
        <img src={mugshot} className="h-64 w-90" alt="img" />
        <br />
        <p>Below is an overview of my personal experience and interests.</p>
        <div className="min-h-screen">
          <div className="max-w-3xl">
            <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">WebDev</h2>
              <ul className="flex flex-wrap gap-2">
                {technologies.map((tech, index) =>
                  tech.category === 0 ? (
                    <li key={index}>
                      <div
                        className={`rounded-full p-2 ${tech.color} text-white`}
                      >
                        {tech.name}
                      </div>
                    </li>
                  ) : null
                )}
              </ul>
              <h2 className="text-xl font-semibold mb-4 mt-4">ML/CV</h2>
              <ul className="flex flex-wrap gap-2">
                {technologies.map((tech, index) =>
                  tech.category === 1 ? (
                    <li key={index}>
                      <div
                        className={`rounded-full p-2 ${tech.color} text-white`}
                      >
                        {tech.name}
                      </div>
                    </li>
                  ) : null
                )}
              </ul>
              <h2 className="text-xl font-semibold mb-4 mt-4">Other</h2>
              <ul className="flex flex-wrap gap-2">
                {technologies.map((tech, index) =>
                  tech.category === 8 ? (
                    <li key={index}>
                      <div
                        className={`rounded-full p-2 ${tech.color} text-white`}
                      >
                        {tech.name}
                      </div>
                    </li>
                  ) : null
                )}
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-6 text-cente">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recent Projects</h2>
                <a
                  className="text-blue-500 hover:underline text-bold-800"
                  href="/projects/"
                >
                  See All Projects
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="border rounded-lg block">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-24 object-cover"
                    />
                    <div className="flex flex-col w-full p-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <a
                        className="text-sm text-blue-600 font-semibold"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.link.length > 50
                          ? project.title
                          : project.link}
                      </a>
                      <p className="text-gray-500 mb-2">{project.date}</p>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
