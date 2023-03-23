import HomeHero from "./components/HomeHero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Office from "./components/Office";
import Teams from "./components/Teams";
import Impact from "./components/Impact";

function App() {
  return (
    <div className="App">
      <HomeHero
        subheading="We enable young minds to work on the technologies of tommorrow like AR, VR, AI, Blockchain and a lot more to make them ready for the upcoming tech revolution and help them to make innovative projects."
        heading=" Create Enabling young minds to learn next-gen technologies to build a better tomorrow"
      />
      <AboutUs
        subheading="Protohubs is a EdTech platform, we provide hands on experience to many hi-tech services. Our primary goal is to provide the best experiment on AR/VR products. We are a group of dedicated professional with ambitions to change the way we interact and learn new technologies in this changing environment. "
        heading="Why Choose Protohubs?"
      />
      <Services cardContent="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content." />
      <Teams vision="ProtoHubs in is a startup focused on building innovative and cutting edge learning platforms for young minds that deliver remarkable earning experience. Our aim is to help great minds get their creative ideas to ife by educating them with next generation technologies like Augmented and Virtual Reality A Robotics Bockchain,etc. We help young talents to explore the world of modern technology and are in a mission to bule the future leaders in technology" />
      <Clients />
      <Impact/>
      <Office
        phone="+91 XXXXXXXXX"
        mail="hello@protohub.io"
        address="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, minus"
      />
    </div>
  );
}

export default App;
