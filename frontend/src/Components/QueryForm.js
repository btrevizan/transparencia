import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import queries from "../Constants/queries";

const QueryFormWrapper = ({ sqlApiHandler }) => {
  const { getQueryResult } = sqlApiHandler;
  class QueryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        query: null,
      };
    }

    handleInfoSubmit = () => {
      const { query } = this.state;
      console.log("REQUEST: ", query);
      this.setState({ isLoading: true });
      getQueryResult(query)
        .then(() => {
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ isLoading: false });
        });
    };

    displayElementIf(condition) {
      return condition ? {} : { display: "none" };
    }

    render() {
      const { isLoading } = this.state;

      return (
        <div className="query-form">
          <Form noValidate className="form">
            <Form.Group controlId="query-select" className="query-select">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Form.Label>Consultas</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  type="text"
                  name="query-input"
                  defaultValue="Escolha..."
                  onChange={(e) => this.setState({ query: e.target.value })}
                  readOnly={false}
                  required
                >
                  <option> Escolha... </option>
                  {queries.map(({ query, id }) => (
                    <option value={id} key={id}>
                      {query}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
            <div className="query-buttons">
              <Button
                className="saveInfoBtn"
                size="sm"
                type="button"
                onClick={this.handleInfoSubmit}
              >
                <span
                  className="saveBtn-span"
                  style={this.displayElementIf(!isLoading)}
                >
                  Pesquisar
                </span>
                <Spinner
                  as="span"
                  name="info-spinner"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  style={this.displayElementIf(isLoading)}
                />
              </Button>
            </div>
          </Form>
        </div>
      );
    }
  }

  return QueryForm;
};

export default QueryFormWrapper;
