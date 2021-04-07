import React, { Component } from 'react';

const HomePageWrapper = () => {
//   const {
//     Loading, AllFieldsMap
//   } = components;
//   const { getFields } = adsCentralStorageApiHandler;

  class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
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
            PESQUISAS
          </div>
    
          <div className="right-sidebar mock-title">
            GRÁFICOS
            {/* { isLoading ? <Loading text="Fetching Data" /> : "HELLO" } */}
          </div>
        </div>
      );
    }
  }

  return HomePage;
};

export default HomePageWrapper;
