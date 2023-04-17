import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="affiliateWrapper">
        <div className="App-app_9f33f414 global">
          <div className="App-container_d139c4a7">
            <div>
              <Navbar />
              <div className="sacWrapper">
                <section>{children}</section>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
