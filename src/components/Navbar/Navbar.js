import { CButton } from "@coreui/react";
import { useNavigate } from "react-router-dom";
import SuggestionInputSearch from "suggestion-react-input-search";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark px-2">
      <div className="row text-center align-items-center">
        <div className="col-lg-2 col-sm-12">
          <div className="display-4 text-danger py-1">MBA</div>
        </div>
        <div className="col-lg-8 col-sm-8 py-2"></div>
      </div>
    </div>
  );
};
