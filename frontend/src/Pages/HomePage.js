import React, { Component } from "react";

const HomePageWrapper = ({ components }) => {
  const { Graph, QueryForm } = components;

  class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    render() {
      // const { isLoading } = this.state;

      return (
        <div className="homepage container">
          <div className="left-sidebar mock-title">
            <span className="title">PESQUISAR</span>
            <QueryForm />
          </div>

          <div className="right-sidebar mock-title">
            <span className="title">VISUALIZAR</span>
            {/* GRÁFICOS */}
            <Graph />
            {/* { isLoading ? <Loading text="Fetching Data" /> : "HELLO" } */}
          </div>
        </div>
      );
    }
  }

  return HomePage;
};

export default HomePageWrapper;
