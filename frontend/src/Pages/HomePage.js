import React, { Component } from "react";

const HomePageWrapper = ({ components }) => {
  const { Graph, QueryForm } = components;
  //   const { getFields } = adsCentralStorageApiHandler;

  class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      //   getFields(withShape)
      //     .then((fields) => {
      //       this.setState({ fields, isLoading: false });
      //     })
      //     .catch((error) => {
      //       console.log(error.message);
      //       this.setState({ isLoading: false });
      //     });
    }

    render() {
      // const { isLoading } = this.state;

      return (
        <div className="homepage container">
          <div className="left-sidebar mock-title">
            PESQUISAR
            <QueryForm />
          </div>

          <div className="right-sidebar mock-title">
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
