import React from "react";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TwoColumnCard = () => {
  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5>Height</h5>
              <span>30</span>
              <h5 className="mt-3">Weight</h5>
              <span>50</span>
            </div>
            <div className="col">
              <h5>Abilities</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Chlorophyll{" "}
                  <span className="float-right">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                </li>
                <li className="list-group-item">
                  Overgrow{" "}
                  <span
                    className="float-right"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Tooltip on left"
                  >
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColumnCard;
