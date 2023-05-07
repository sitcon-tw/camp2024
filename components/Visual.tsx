export default function Visual() {
  return <div className="w-full h-[100vh] relative overflow-hidden container">
    <img className="absolute top-[15vh] w-40 md:w-60 left-0 right-0 m-auto" src="/2023/visual/logo.svg" alt="logo" />
    <img className="absolute top-[35vh] w-[180px] md:w-[300px] right-0 m-auto" src="/2023/visual/cat.svg" alt="cat" />
    <img className="absolute top-[35vh] w-[200px] md:w-80 left-0 m-auto" src="/2023/visual/astronaut.svg" alt="astronaut" />
    <img className="absolute top-[60vh] w-80 md:w-[400px] left-0 right-0 m-auto" src="/2023/visual/planet.svg" alt="planet" />
  </div>
}