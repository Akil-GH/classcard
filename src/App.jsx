import Topdivider from "./components/Topdivider";
import FormFieldsCheckboxInputs from "./components/FormFieldsCheckboxInputs";
import FrameComponent from "./components/FrameComponent";

import "./Index.css";

const App = () => {
  return (
    <div className="Mainpage">
    <div className="bookings">
      <Topdivider />
      <section className="bookings-inner">
        <div className="form-fields-checkbox-inputs-parent">
          <FormFieldsCheckboxInputs />
          <FrameComponent />
         
        </div>
      </section>
    </div>
    </div>
  );
};

export default App;