import { useNavigate } from "react-router-dom";
import fish1 from "../../assets/imgs/fish/fish1.jpeg";
import fish2 from "../../assets/imgs/fish/fish2.jpeg";
import fish3 from "../../assets/imgs/fish/fish3.jpeg";
import fish4 from "../../assets/imgs/fish/fish4.jpeg";
import fish5 from "../../assets/imgs/fish/fish5.jpeg";
import fish6 from "../../assets/imgs/fish/fish6.jpeg";
import fish7 from "../../assets/imgs/fish/fish7.jpeg";
import fish8 from "../../assets/imgs/fish/fish8.jpeg";

function FishPage() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
      >
        ← Back
      </button>
      <br/>
      <br/>
      <br/>
      <h1>Welcome to the Fish Page</h1>
      <br/>
      <br/>
      <br/>
      <strong>Mar 12, 2025</strong>
      <p>Beautiful spotty at Shelter.</p>
      <img src={fish8} className="w-[300px] max-h-[500px] object-cover" />
      <br/>
      <br/>
      <br/>
      <strong>Feb 16, 2025</strong>
      <p>Smelt and Sculpin. Shelter island.</p>
      <div className="flex space-x-4">
        <img src={fish5} className="w-[300px] max-h-[500px] object-cover" />
        <img src={fish7} className="w-[300px] max-h-[500px] object-cover" />
    </div>
      <br/>
      <br/>
      <br/>
      <strong>Feb 9, 2025</strong>
      <p>Tiny Spotty at shelter island.</p>
      <img src={fish6} className="w-[300px] max-h-[500px] object-cover" />
      <br/>
      <br/>
      <br/>
      <strong>Feb 8, 2025</strong>
      <p>Little octopus at Shelter Island. Was super surprised by this one.</p>
      <img src={fish4} className="w-[300px] max-h-[500px] object-cover" />
      <br/>
      <br/>
      <br/>
      <strong>Feb 2, 2025</strong>
      <p>Yellowfin Croaker at Scripps.</p>
      <img src={fish3} className="w-[300px] max-h-[500px] object-cover" />
      <br/>
      <br/>
      <br/>
      <strong>Jan 25, 2025</strong>
      <p>Rainbow Trout at Dixon lake. Delicious little thing.</p>
      <img src={fish2} className="w-[300px] max-h-[500px] object-cover" />
      <br/>
      <br/>
      <br/>
      <strong>Dec 23, 2024</strong>
      <p> My first ever fish. Spanish Mackerel at Redondo Pier. Used Sabiki with squid.</p>
      <img src={fish1} className="w-[300px] max-h-[500px] object-cover" />

    </div>
  );
}


export default FishPage;
