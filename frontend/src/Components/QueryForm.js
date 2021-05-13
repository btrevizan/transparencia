import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import queries from "../Constants/queries";
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';

const QueryFormWrapper = ({ sqlApiHandler }) => {
  // const { getQueryResult } = sqlApiHandler;
  class QueryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        query: null,
      };
    }

    componentDidUpdate() {
      // const apiFieldName = this.props.fieldInfo.name;
      // To ensure the field name input renders always with the api data
      // if (this.isEmptyString(fieldName)
      //   && !isInfoEditMode
      //   && !this.isEmptyString(apiFieldName)) {
      //   // eslint-disable-next-line react/no-did-update-set-state
      //   this.setState({ fieldName: apiFieldName });
      // }
    }

    handleInfoSubmit = () => {
      // const { query } = this.state;
      // console.log("SUBMIT", query);
      // this.setState({ isLoading: true });
      //   this.setState({ isFieldNameInvalid: false });
      //   getQueryResult(query)
      //     .then(() => {
      //       this.setState({ isLoading: false });
      //       // toast.success('Success');
      //     })
      //     .catch((err) => {
      //       console.log(err.message);
      //       // toast.error('Unable to get result');
      //       this.setState({ isLoading: false });
      //     });
    };

    isEmptyString(string) {
      return !string.replace(/\s/g, "").length;
    }

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
                  size="lg"
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
              {/* <Button
                variant="primary-dark"
                className="editInfoBtn"
                size="sm"
                type="button"
                onClick={() => this.setState({ isInfoEditMode: true })}
                style={this.displayElementIf(!isInfoEditMode)}
              >
                Edit Information
              </Button> */}
              <Button
                // variant="secondary-light"
                className="saveInfoBtn"
                size="sm"
                type="button"
                onClick={this.handleInfoSubmit}
                // style={this.displayElementIf(isInfoEditMode)}
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

  // QueryForm.propTypes = {
  //   fieldShape: PropTypes.shape({
  //     polygons: PropTypes.array
  //   }).isRequired,
  //   fieldInfo: PropTypes.shape({
  //     fieldId: PropTypes.string,
  //     name: PropTypes.string
  //   }).isRequired
  // };

  return QueryForm;
};

export default QueryFormWrapper;
