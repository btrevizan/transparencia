import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';

const QueryFormWrapper = () => {
  // const { patchFieldName, putFieldShape } = SQLApiHandler;

  class QueryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        isFieldInvalid: false,
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
      console.log("SUBMIT");
      // const { fieldName } = this.state;
      // const { fieldId } = this.props.fieldInfo;

      // this.setState({ isLoading: true });

      // if (this.isEmptyString(fieldName)) {
      //   this.setState({ isFieldNameInvalid: true, isLoading: false });
      // } else {
      //   this.setState({ isFieldNameInvalid: false });
      //   patchFieldName(fieldId, fieldName)
      //     .then(() => {
      //       this.setState({ isLoading: false, isInfoEditMode: false });
      //       // toast.success('Saved Field Information Successfully');
      //     })
      //     .catch((err) => {
      //       console.log(err.message);
      //       // toast.error('Unable to Save Field Information');
      //       this.setState({ isLoading: false });
      //     });
      // }
    };

    isEmptyString(string) {
      return !string.replace(/\s/g, "").length;
    }

    displayElementIf(condition) {
      return condition ? {} : { display: "none" };
    }

    render() {
      const { isLoading } = this.state;
      const data = ["item1", "item2", "item3", "item4", "item5"];
      return (
        <div className="query-form">
          <Form noValidate className="form">
            <Form.Group controlId="fields-select" className="fields-select">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Form.Label>Field 1</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  type="text"
                  name="fieldName-input"
                  onChange={(e) => this.setState({ field1: e.target.value })}
                  readOnly={false}
                  isInvalid={false}
                  required
                >
                  {data.map((field, index) => (
                    <option key={index}> {field} </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback name="field1Feedback" type="invalid">
                  Please provide an item.
                </Form.Control.Feedback>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Form.Label>Field 2</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  type="text"
                  name="fieldName-input"
                  onChange={(e) => this.setState({ field2: e.target.value })}
                  readOnly={false}
                  isInvalid={false}
                  required
                >
                  {data.map((field, index) => (
                    <option key={index}> {field} </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback name="field2Feedback" type="invalid">
                  Please provide an item.
                </Form.Control.Feedback>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Form.Label>Field 3</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  type="text"
                  name="fieldName-input"
                  onChange={(e) => this.setState({ field3: e.target.value })}
                  readOnly={false}
                  isInvalid={false}
                  required
                >
                  {data.map((field, index) => (
                    <option key={index}> {field} </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback name="field3Feedback" type="invalid">
                  Please provide an item.
                </Form.Control.Feedback>
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
