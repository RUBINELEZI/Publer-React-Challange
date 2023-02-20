import React from "react";

const ActionButtons = ({ actions, data }) => {
  return (
    <div>
      <ul>
        {actions.map((action, index) => (
          <div key={index}>
            {action.render ? (
              action.render(action, data)
            ) : (
              <li
                className={`actionSelection ${action.class}`}
                onClick={() => action.callback(data)}
              >
                {action.actionName}
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ActionButtons;
