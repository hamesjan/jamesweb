import MainResume from "../../assets/MainResume.pdf";
import resume from "../../assets/resume.png";

const CV = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = MainResume;
    link.download = "james-resume.pdf";
    link.click();
  };

  return (
    <div className="block mt-4">
      <div className="">
        <div className="max-w-3xl">
          <section className="">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={downloadResume}
            >
              Download My Resume
            </button>
            <div className="mt-4">
              <img src={resume} alt="Resume" className="w-full max-w-md" />
            </div>
          </section>
        </div>
      </div>{" "}
    </div>
  );
};

export default CV;
