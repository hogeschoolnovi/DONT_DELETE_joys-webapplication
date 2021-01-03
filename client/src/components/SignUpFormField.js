import React from "react";

function FormField({ name, label, ...rest }) {
    return (
        <div>
            <input id={name} name={name} {...rest} />
        </div>
    );
}

export default FormField;

