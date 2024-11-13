import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <div className="font-Poppins">
      <header>
        <Header></Header>

        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-3">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
            <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">Main Content</section>
        <aside className="col-span-3">
            <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
