import React, {Component} from "react";

import MenuUtama from "./page/MenuUtaman";
import MenuProduct from "./page/MenuProduct";
import MenuKontak from "./page/MenuKontak";
import MenuTentangKami from "./page/MenuTentangKami";

class Header extends Component {
  render() {
    return (
      <h1>Ini Halaman untuk Header</h1>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <h1>Ini Halaman untuk footer</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />

        <Footer />
      </div>
    );
  }
}

export default App;
