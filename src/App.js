import Nav from './components/Nav'
import Sidenav from './components/Sidenav'
import Footer from './components/Footer'
import Hotels from './components/Hotels'

function App() {

    return (
        <div>
            <Nav />
            <div id="layoutSidenav">
                <Sidenav />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4 mt-4">
                            <Hotels />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
