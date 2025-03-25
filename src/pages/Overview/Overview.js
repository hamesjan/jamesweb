import mugshot from "../../assets/imgs/mugshot.png";
import plots from "../../assets/imgs/plots.png";
import processorpaper from "../../assets/imgs/processorpaper.png";
import surfvision from "../../assets/imgs/surfvision.png";
import resume from "../../assets/JamesHanResume.pdf";
import bio from "../../assets/bio.txt";
import surfengif from "../../assets/out.gif";
import dronegif from "../../assets/drone.gif";
import tritondemo from "../../assets/tritondemo.gif";
import pokefy from "../../assets/pokefy.gif";
import "./Overview.css";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <table className="w-full mb-5">
        <tbody>
          <tr>
            <td className="w-2/3 p-2.5 align-middle">
              <p className="text-center font-bold text-3xl">James Han</p>
              <br />
              <p>
                I'm a senior at{" "}
                <a href="https://ucsd.edu/" className="text-blue-500 underline">
                  UC San Diego
                </a>{" "}
                where I study computer science with a specialization in embedded
                systems. I am doing my masters in Computer Engineering at UCSD starting Fall 2025.
              </p>
              <br />
              <p>
                I grew up in the sunny streets of Torrance, Calfornia. I love
                the ocean, my dog, and eating yummy foods. For work, I have
                interned at{" "}
                <a
                  href="https://www.mobis.com/en/index.do"
                  className="text-blue-500 underline"
                >
                  Hyundai Mobis
                </a>{" "}
                in Seoul, South Korea and I help with the{" "}
                <a
                  href="https://www.raytechx.com/"
                  className="text-blue-500 underline"
                >
                  family business
                </a>{" "}
                from time to time. Currently, I am the lead embedded software engineer for{" "}
                <a
                  href="https://www.goltech.co"
                  className="text-blue-500 underline"
                >
                  Goltech
                </a>,
                 a medical technology startup based in San Diego.
              </p>
              <br />
              <p className="text-center">
                <a href="mailto:jjhan@ucsd.com">Email</a> &nbsp;/&nbsp;
                <a href={resume}>Resume</a> &nbsp;/&nbsp;
                <a href={bio}>Bio</a> &nbsp;/&nbsp;
                <a href="https://github.com/hamesjan/">Github</a>&nbsp;/&nbsp;
                <Link to="/fish">Fish</Link>
                </p>
            </td>
            <td className="w-1/3 p-2.5">
              <a href={mugshot}>
                <img
                  src={mugshot}
                  alt="profile"
                  className="w-full rounded-full object-cover"
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full mb-5">
        <tbody>
          <tr>
            <td className="p-5 align-middle">
              <h2 className="text-xl font-bold">Projects</h2>
              <p>
                I'm passionate about computer architecture, embedded systems for global applications, and system design. 
                I enjoy developing for local businesses and collaborating with small teams to bring ideas to market.
                I also bring significant experience as a full-stack web and mobile
                developer. My goal is to be able to think of any idea, physical or digital, and have the technical and organizational ability to create it from start to finish. <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/4 p-5 align-middle">
              <img src={surfvision} className="w-full" />
            </td>
            <td className="w-3/4 p-5 align-middle">
              <a>
                <span className="font-semibold text-lg">Surfvision</span>
              </a>
              <br />
              C, C++, OpenCV, RaspberryPi 5
              <br />
              <em>Jan 2025 - Present</em>
              <br />
              <p>
                Currenlty building a physical version of Surfen. Surfline I am coming for you. 
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/4 p-5 align-middle">
              <img src={processorpaper} className="w-full" />
            </td>
            <td className="w-3/4 p-5 align-middle">
              <a>
                <span className="font-semibold text-lg">Optimized MIPS Processor</span>
              </a>
              <br />
              System Verilog, C++, Verilator, gtkWave, Docker
              <br />
              <em>Jan 2025 - Mar 2025</em>
              <br />
              <a href="https://docs.google.com/document/d/1jT_bwGmo-XIpRoUJqOx4tKO1KzYpKX8RqkCzjB_8o48/edit?usp=sharing" target="_blank">Academic Paper</a>{" "}
              <p>
                Implemented four optimizations to the classical Hennesey & Patterson 5-Stage Processor. Reduced CPI for all benchmarks.
                Implemented instruction cache next-line prefetching, data cache stride prefetching with stream buffers, branch prediction with global pattern tracking and fetch-stage branch target buffer, and two-way superscalar processing.
                <br />
                Compared baseline performance against nqueens, coin, esift2, and quickSort benchmarks.  
              </p>
            </td>
          </tr>
        </tbody>
      </table>


      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/4 p-5 align-middle">
              <img src={dronegif} className="w-full h-3/5" />
            </td>
            <td className="w-3/4 p-5 align-middle">
              <a>
                <span className="font-semibold text-lg">Drone</span>
              </a>
              <br />
              ATMega128rfa, Autodesk Fusion, Arduino
              <br />
              <em>Sept 2024 - Dec 2024</em>
              <br />
              <p>
                Created a drone from scratch, from PCB design to the air. Implemented PID tuning for motor actuation.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/4 p-5 align-middle">
              <img src={tritondemo} className="w-full" />
            </td>
            <td className="w-3/4 p-5 align-middle">
              <a href="https://hamesjan.github.io/tritone_website/">
                <span className="font-semibold text-lg">Tri-tone</span>
              </a>
              <br />
              ESP32-S3, Teensy3.6, Adafruit RGB Matrix, OnShape, C++, Python
              <br />
              <em>Apr 2024 - June 2024</em>
              <br />
              <a href="https://www.youtube.com/embed/3uRzH58n3Qw">
                Demo video
              </a>{" "}
              <p>
                Processes audio into 1024 bin FFT data and then sends to a
                pre-trained ML model for RGB inferencing and real-time color
                prediction based on current dominant frequency and musical
                context (10 previous dominant frequencies)
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/4 p-5 align-middle">
              <img src={pokefy} className="w-full h-1/2" />
            </td>
            <td className="w-3/4 p-5 align-middle">
              <a href="https://pokefy.web.app">
                <span className="font-semibold text-lg">Pokefy</span>
              </a>
              <br />
              React.js, Firebase, ChatGPT API, Spotify API
              <br />
              <em>Apr 2024 - June 2024</em>
              <br />
              {/* <a href="https://pokefy.web.app">Demo video</a>{" "} */}
              <p>
                Uses LLM to generate 6 Pokémon based on Spotify Music taste.
                Pending approval to use Spotify API.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/4 p-5 align-middle">
              <img src={surfengif} className="w-full" />
            </td>
            <td className="w-3/4 p-5 align-middle">
              <a href="https://surfen.web.app">
                <span className="font-semibold text-lg">Surfen</span>
              </a>
              <br />
              React.js, OpenCV, Numpy, Firebase, Flask, Tailwind, PythonAnywhere
              <br />
              <em>May 2023 - August 2023</em>
              <br />
              <a href="https://surfen.web.app">surfen.web.app</a>{" "}
              <p>
                Web application that acts as a video enhancer/converter that
                takes a far-away video input stream of surfers at a local beach
                and zooms in and enhances the surfer as they rip the wave.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/4 p-5 align-middle">
              <img src={plots} className="w-full" alt="NeRF-Casting" />
            </td>
            <td className="w-3/4 p-5 align-middle">
              <a href="https://apps.apple.com/us/app/plots-party-with-your-homies/id1579989678">
                <span className="font-semibold text-lg">
                  plots - party with your homies (iOS)
                </span>
              </a>
              <br />
              Flutter, Firebase, Dart, Node.js, GCP
              <br />
              <em>August 2021 - February 2022</em>
              <br />
              <p>
                <strong>Acquired by Cruuz LLC for $10,000</strong>
              </p>
              <p>
                App features: event discovery, guest monitoring, dynamic
                ticketing system, host-guest messaging, party group chats,
                security management, locational notification system, and
                announcements.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
