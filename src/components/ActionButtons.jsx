import React from "react";

const ActionButtons = ({ actions, data }) => {
  return (
    <div>
      <ul>
        {actions.map((action) => (
          <>
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
          </>
        ))}
      </ul>
    </div>
  );
};

export default ActionButtons;
